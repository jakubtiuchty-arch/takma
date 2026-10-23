package pl.takma.magazyn;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.media.AudioManager;
import android.media.ToneGenerator;
import android.os.Build;
import android.os.Bundle;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.text.InputType;
import android.text.TextWatcher;
import android.text.Editable;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONObject;
import java.net.URI;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/** Native terminal UI. Scans are saved before sending and replayed using the same operation ID. */
public class MainActivity extends Activity {
    private static final int NAVY=Color.rgb(16,39,64), BLUE=Color.rgb(23,101,225), INK=Color.rgb(26,45,67), MUTED=Color.rgb(98,118,140), BG=Color.rgb(242,245,250), GREEN=Color.rgb(16,125,84), RED=Color.rgb(184,51,58);
    private static final String SCAN_ACTION=BuildConfig.APPLICATION_ID+".BARCODE";
    private final ExecutorService network=Executors.newSingleThreadExecutor();
    private final Object queueLock=new Object();
    private Vault vault;
    private AppUpdater updater;
    private String base,deviceToken,sessionToken,company,worker,mode,taskId="",screen="",pendingUndo="",lastScan="";
    private JSONArray pending=new JSONArray();
    private JSONObject task,packing;
    private JSONObject stockData=null,issueProduct=null;
    private String issuePending="",issueLogin="",issueCode="",issueLastError="";
    private JSONObject inventoryData=null,inventoryProduct=null;
    private String inventoryCode="",inventoryPending="",inventoryLogin="";
    private boolean inventoryAlias=false;
    private String packingId="",packingPending="",packingLogin="";
    private LinearLayout root,content,activationForm;
    private TextView status;
    private ActivationConfig scannedActivation;
    private Button activationButton;
    private EditText activationCode,activationAddress,activationName,scanField;
    private boolean busy=false,flushing=false,scannerRegistered=false,pendingHandoff=false;
    private ToneGenerator tone;
    private final StringBuilder wedge=new StringBuilder();
    private long wedgeTime=0;
    private final BroadcastReceiver receiver=new BroadcastReceiver() {
        @Override public void onReceive(Context context,Intent intent) {
            String code=intent.getStringExtra("data");
            if(code==null)code=intent.getStringExtra("com.honeywell.scantointent.intent.extra.DATA");
            android.util.Log.i("TakmaScanner","Received barcode broadcast; data present="+(code!=null));
            if (code!=null) receiveScan(code);
        }
    };
    @Override public void onCreate(Bundle saved) {
        super.onCreate(saved);
        updater=new AppUpdater(this);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        if(!BuildConfig.DEBUG)getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
        try {
            vault=new Vault(this);
            base=vault.get("base","http://127.0.0.1:8787"); deviceToken=vault.get("device",""); sessionToken=vault.get("session","");
            company=vault.get("company",""); worker=vault.get("worker","");mode=vault.get("mode","demo");
            taskId=vault.get("taskId","");pending=new JSONArray(vault.get("pending","[]"));
            pendingUndo=vault.get("undo","");pendingHandoff=vault.get("handoff","").equals("yes");
            issuePending=vault.get("issuePending","");issueLogin=vault.get("issueLogin","");
            inventoryPending=vault.get("inventoryPending","");inventoryLogin=vault.get("inventoryLogin","");
            packingId=vault.get("packingId","");packingPending=vault.get("packingPending","");packingLogin=vault.get("packingLogin","");String savedPacking=vault.get("packing","");if(!savedPacking.isEmpty())packing=new JSONObject(savedPacking);
            String cached=vault.get("task",""); if(!cached.isEmpty())task=new JSONObject(cached);
            tone=new ToneGenerator(AudioManager.STREAM_NOTIFICATION,65);
            if(deviceToken.isEmpty())activationScreen();else if(sessionToken.isEmpty())loginScreen();else if(!issuePending.isEmpty()){issueWaiting();retryIssue();}else if(!inventoryPending.isEmpty()){inventoryWaiting();retryInventory();}else if(!packingId.isEmpty()&&packing!=null){packingScreen();recoverPacking();}else if(!taskId.isEmpty()&&task!=null){taskScreen();flush();refreshTask();}else loadOrders();
        } catch(Exception error) { new AlertDialog.Builder(this).setTitle("Nie można otworzyć aplikacji").setMessage("Nie udało się odczytać danych terminala. Skontaktuj się z pomocą TAKMA.").setPositiveButton("Zamknij",(d,w)->finish()).setCancelable(false).show(); }
    }
    @android.annotation.SuppressLint("UnspecifiedRegisterReceiverFlag") // Before API 33: permission-protected legacy overload.
    @Override protected void onResume(){super.onResume();
        if(updater!=null){updater.resume();updater.check(false);}
        IntentFilter filter=new IntentFilter(SCAN_ACTION);filter.addCategory(Intent.CATEGORY_DEFAULT);
        if(Build.VERSION.SDK_INT>=33)registerReceiver(receiver,filter,"com.honeywell.decode.permission.DECODE",null,Context.RECEIVER_EXPORTED);
        else registerReceiver(receiver,filter,"com.honeywell.decode.permission.DECODE",null);
        scannerRegistered=true;
        Bundle properties=new Bundle();properties.putBoolean("DPR_DATA_INTENT",true);properties.putString("DPR_DATA_INTENT_ACTION",SCAN_ACTION);
        properties.putString("DPR_DATA_INTENT_CATEGORY",Intent.CATEGORY_DEFAULT);
        // CT37 DCS creates ComponentName whenever package is set, even with an empty class.
        // Our permission-protected runtime receiver requires action-based delivery instead.
        properties.putString("DPR_DATA_INTENT_PACKAGE_NAME","");
        properties.putString("DPR_DATA_INTENT_CLASS_NAME","");
        properties.putBoolean("DEC_CODE128_ENABLED",true);properties.putBoolean("DEC_QR_ENABLED",true);
        properties.putBoolean("DEC_EAN13_ENABLED",true);
        properties.putBoolean("DPR_WEDGE",false);
        sendBroadcast(new Intent("com.honeywell.aidc.action.ACTION_CLAIM_SCANNER").setPackage("com.intermec.datacollectionservice")
            .putExtra("com.honeywell.aidc.extra.EXTRA_SCANNER","dcs.scanner.imager")
            .putExtra("com.honeywell.aidc.extra.EXTRA_PROFILE","TAKMA_MAGAZYN")
            .putExtra("com.honeywell.aidc.extra.EXTRA_PROPERTIES",properties));
    }
    @Override protected void onPause(){
        if(scannerRegistered){unregisterReceiver(receiver);scannerRegistered=false;}
        sendBroadcast(new Intent("com.honeywell.aidc.action.ACTION_RELEASE_SCANNER").setPackage("com.intermec.datacollectionservice"));super.onPause();
    }
    @Override protected void onDestroy(){network.shutdown();if(tone!=null)tone.release();super.onDestroy();}
    private int dp(int value){return Math.round(value*getResources().getDisplayMetrics().density);}
    private String count(int n,String one,String few,String many){return n+" "+(n==1?one:n%10>=2&&n%10<=4&&(n%100<12||n%100>14)?few:many);}
    private GradientDrawable shape(int color,int radius){GradientDrawable d=new GradientDrawable();d.setColor(color);d.setCornerRadius(dp(radius));return d;}
    private TextView text(String value,int size,int color,boolean bold){
        TextView view=new TextView(this);view.setText(value);view.setTextSize(size);view.setTextColor(color);
        view.setLineSpacing(dp(3),1);if(bold)view.setTypeface(Typeface.DEFAULT,Typeface.BOLD);return view;
    }
    private void add(TextView view,int bottom){LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,-2);p.bottomMargin=dp(bottom);content.addView(view,p);}
    private void layout(String title,String subtitle){
        scanField=null;activationCode=null;activationAddress=null;activationName=null;activationForm=null;
        root=new LinearLayout(this);root.setOrientation(LinearLayout.VERTICAL);root.setBackgroundColor(BG);
        LinearLayout header=new LinearLayout(this);header.setOrientation(LinearLayout.VERTICAL);header.setPadding(dp(22),dp(20),dp(22),dp(20));header.setBackgroundColor(NAVY);
        header.addView(text("TAKMA  /  MAGAZYN",13,Color.rgb(164,192,225),true));
        TextView heading=text(title,27,Color.WHITE,true);LinearLayout.LayoutParams hp=new LinearLayout.LayoutParams(-1,-2);hp.topMargin=dp(8);header.addView(heading,hp);
        if(!subtitle.isEmpty()) {TextView sub=text(subtitle,13,Color.rgb(194,210,230),false);header.addView(sub);}
        root.addView(header);
        status=text(mode.equals("demo")?"DANE DEMONSTRACYJNE":"Połączono z BaseLinkerem",12,MUTED,true);status.setPadding(dp(22),dp(10),dp(22),dp(10));root.addView(status);
        ScrollView scroll=new ScrollView(this);scroll.setFillViewport(true);root.addView(scroll,new LinearLayout.LayoutParams(-1,0,1));
        content=new LinearLayout(this);content.setOrientation(LinearLayout.VERTICAL);content.setPadding(dp(20),dp(10),dp(20),dp(24));scroll.addView(content);
        setContentView(root);
    }
    private EditText field(String label,String hint,boolean password){
        add(text(label,14,INK,true),6);EditText input=new EditText(this);input.setSingleLine(true);input.setTextSize(17);input.setPadding(dp(14),dp(10),dp(14),dp(10));
        GradientDrawable border=shape(Color.WHITE,10);border.setStroke(dp(1),Color.rgb(189,202,218));input.setBackground(border);input.setHint(hint);
        if(password)input.setInputType(InputType.TYPE_CLASS_NUMBER|InputType.TYPE_NUMBER_VARIATION_PASSWORD);
        LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,dp(54));p.bottomMargin=dp(18);content.addView(input,p);return input;
    }
    private Button button(String label,boolean primary,Runnable action){
        Button button=new Button(this);button.setText(label);button.setAllCaps(false);button.setTextSize(16);button.setTypeface(Typeface.DEFAULT,Typeface.BOLD);
        button.setTextColor(primary?Color.WHITE:INK);button.setBackground(shape(primary?BLUE:Color.rgb(224,233,245),10));
        LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,dp(54));p.bottomMargin=dp(12);content.addView(button,p);
        button.setOnClickListener(v->{if(!busy)action.run();});return button;
    }
    private void banner(String message,boolean error){if(status!=null){status.setText(message);status.setTextColor(error?RED:GREEN);}}
    private void feedback(boolean ok){if(tone!=null)tone.startTone(ok?ToneGenerator.TONE_PROP_ACK:ToneGenerator.TONE_PROP_NACK,ok?90:180);
        if(!ok){Vibrator v=(Vibrator)getSystemService(VIBRATOR_SERVICE);if(v!=null)v.vibrate(VibrationEffect.createOneShot(180,VibrationEffect.DEFAULT_AMPLITUDE));}}
    private void error(Exception error){
        if(!issuePending.isEmpty()&&error instanceof Api.Failure){int c=((Api.Failure)error).status;if(c>=400&&c<500&&c!=401&&c!=429){issueLastError=error.getMessage();issuePending="";issueLogin="";vault.putAll(Map.of("issuePending","","issueLogin",""));loadStock();}}
        if(!inventoryPending.isEmpty()&&error instanceof Api.Failure){int c=((Api.Failure)error).status;if(c>=400&&c<500&&c!=401){inventoryPending="";inventoryLogin="";vault.putAll(Map.of("inventoryPending","","inventoryLogin",""));loadInventory();}}
        if(!packingPending.isEmpty()&&error instanceof Api.Failure){int statusCode=((Api.Failure)error).status;if(statusCode>=400&&statusCode<500&&statusCode!=401){packingPending="";savePacking();if(packing!=null&&screen.equals("packing"))packingScreen();}}

        if(pendingHandoff&&error instanceof Api.Failure&&((Api.Failure)error).status==404){clearTask();loadOrders();return;}
        if(pendingHandoff&&screen.equals("task"))taskScreen();
        String message=error instanceof Api.Failure?error.getMessage():"Brak połączenia. Dane pozostają na terminalu.";
        if(queued()>0)message+=" · oczekuje "+queued()+" skanów";
        banner(message,true);Toast.makeText(this,message,Toast.LENGTH_LONG).show();
        if(error instanceof Api.Failure&&((Api.Failure)error).status==401){
            sessionToken="";vault.put("session","");
            if(((Api.Failure)error).code.equals("DEVICE_AUTH")){deviceToken="";vault.put("device","");activationScreen();}
            else loginScreen();
            banner(message,true);
        }
    }
    interface Result {void accept(JSONObject data)throws Exception;}
    private JSONObject request(String path,String method,JSONObject body)throws Exception{return Api.request(base,path,method,body,deviceToken,sessionToken);}
    private void requestAsync(String path,String method,JSONObject body,Result result){
        if(busy)return;busy=true;banner("Łączenie z serwerem…",false);
        network.execute(()->{try{JSONObject data=request(path,method,body);runOnUiThread(()->{busy=false;try{result.accept(data);}catch(Exception e){error(e);}});}
            catch(Exception e){runOnUiThread(()->{busy=false;error(e);});}});
    }
    private JSONObject json(String... pairs){JSONObject object=new JSONObject();try{for(int i=0;i<pairs.length;i+=2)object.put(pairs[i],pairs[i+1]);}catch(Exception e){throw new IllegalStateException(e);}return object;}
    private void activationScreen(){
        scannedActivation=null;screen="activation";layout("Zeskanuj kod QR","Aktywacja terminala");
        add(text("Otwórz kod QR w panelu TAKMA. Skieruj terminal na kod i naciśnij przycisk skanera.",20,INK,true),22);
        add(text("QR z danymi pracownika aktywuje terminal i loguje Cię automatycznie.",16,MUTED,false),22);
        LinearLayout page=content;
        activationForm=new LinearLayout(this);activationForm.setOrientation(LinearLayout.VERTICAL);
        page.addView(activationForm,new LinearLayout.LayoutParams(-1,-2));content=activationForm;
        EditText address=field("Adres serwera","https://magazyn.twojafirma.pl",false);address.setInputType(InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_URI);address.setText(base);activationAddress=address;
        activationCode=field("Kod aktywacji","12 znaków z panelu",false);activationCode.setInputType(InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_FLAG_CAP_CHARACTERS);
        EditText name=field("Nazwa terminala","Magazyn — terminal 1",false);name.setText(Build.MODEL);activationName=name;
        activationButton=button("Aktywuj terminal",true,()->{
            String url;
            try{url=ActivationConfig.server(address.getText().toString());}catch(Exception e){banner(e.getMessage(),true);return;}
            if(!activationCode.getText().toString().trim().matches("[A-Fa-f0-9]{12}")){banner("Wpisz 12 znaków kodu lub zeskanuj QR z panelu.",true);return;}
            if(name.getText().toString().trim().isEmpty()||name.getText().length()>80){banner("Wpisz nazwę terminala do 80 znaków.",true);return;}
            ActivationConfig credentials=scannedActivation;scannedActivation=null;
            base=url;requestAsync("/v1/activate","POST",json("code",activationCode.getText().toString(),"name",name.getText().toString()),data->{
                deviceToken=data.getString("deviceToken");company=data.getString("company");mode=data.getString("mode");sessionToken="";
                vault.put("base",base);vault.put("device",deviceToken);vault.put("company",company);vault.put("mode",mode);vault.put("session","");loginScreen();
                if(credentials!=null&&!credentials.login.isEmpty())requestAsync("/v1/login","POST",json("login",credentials.login,"pin",credentials.pin),session->{sessionToken=session.getString("sessionToken");worker=session.getString("worker");vault.put("session",sessionToken);vault.put("worker",worker);vault.put("lastLogin",credentials.login);loadOrders();});});
        });
        activationCode.setImeOptions(EditorInfo.IME_ACTION_DONE);activationCode.setOnEditorActionListener((v,a,event)->{if(a==EditorInfo.IME_ACTION_DONE||(event!=null&&event.getAction()==KeyEvent.ACTION_UP&&event.getKeyCode()==KeyEvent.KEYCODE_ENTER)){receiveScan(activationCode.getText().toString());return true;}return false;});
        content=page;activationForm.setVisibility(View.GONE);
        button("Wpisz kod ręcznie",false,()->activationForm.setVisibility(View.VISIBLE));
        add(text("Kod jest jednorazowy. Wygasa po 15 minutach.",13,MUTED,false),0);
    }
    private void loginScreen(){
        screen="login";layout("Zaloguj się",company);
        add(text("Użyj identyfikatora i PIN-u pracownika.",16,MUTED,false),22);
        EditText login=field("Identyfikator","np. magazyn",false);login.setText(vault.get("lastLogin",""));
        EditText pin=field("PIN","6–12 cyfr",true);
        button("Zaloguj się",true,()->{
            String entered=login.getText().toString().trim();
            if(!issuePending.isEmpty()&&!entered.equals(issueLogin)){banner("Potwierdź wydanie na koncie poprzedniego pracownika.",true);return;}
            if(!inventoryPending.isEmpty()&&!entered.equals(inventoryLogin)){banner("Potwierdź zapis na koncie poprzedniego pracownika.",true);return;}
            if(!packingId.isEmpty()&&!entered.equals(packingLogin)){banner("Wznów kontrolę na koncie poprzedniego pracownika.",true);return;}
            if(!taskId.isEmpty()&&!entered.equals(vault.get("taskLogin",""))){banner("Dokończ zadanie na koncie poprzedniego pracownika.",true);return;}
            requestAsync("/v1/login","POST",json("login",entered,"pin",pin.getText().toString()),data->{
                sessionToken=data.getString("sessionToken");worker=data.getString("worker");vault.put("session",sessionToken);vault.put("worker",worker);vault.put("lastLogin",entered);
                if(!issuePending.isEmpty()){issueWaiting();retryIssue();}else if(!inventoryPending.isEmpty()){inventoryWaiting();retryInventory();}else if(!packingId.isEmpty()&&packing!=null){packingScreen();recoverPacking();}else if(!taskId.isEmpty()&&task!=null){taskScreen();flush();refreshTask();}else loadOrders();});
        });
        if(mode.equals("demo"))add(text("Konto testowe: magazyn\nPIN: 123456",14,MUTED,false),18);
        add(text("Terminal: "+Build.MODEL+" · wersja "+BuildConfig.VERSION_NAME,12,MUTED,false),0);
    }
    private void loadOrders(){
        screen="orders";layout("Zamówienia",company+" · "+worker);
        add(text("Pobieranie zamówień…",17,MUTED,false),20);
        button("Spróbuj ponownie",false,this::loadOrders);
        requestAsync("/v1/orders","GET",null,this::ordersScreen);
    }
    private void ordersScreen(JSONObject data)throws Exception{
        screen="orders";layout("Zamówienia",company+" · "+worker);
        JSONArray orders=data.getJSONArray("orders");
        add(text(count(orders.length(),"zamówienie","zamówienia","zamówień")+" do kompletacji",17,INK,true),18);
        button("Wydaj z magazynu",false,this::loadStock);
            button("Etykiety na magazynie",true,this::loadInventory);
        button("Odśwież listę",false,this::loadOrders);
        if(mode.equals("demo"))button("Kontrola pakowania",true,this::loadPacking);
        EditText search=field("Szukaj zamówienia","Numer, SKU lub nazwa produktu",false);
        LinearLayout list=new LinearLayout(this);list.setOrientation(LinearLayout.VERTICAL);content.addView(list);
        renderOrders(orders,list,"");
        search.addTextChangedListener(new TextWatcher(){public void beforeTextChanged(CharSequence t,int a,int c,int f){}public void onTextChanged(CharSequence t,int a,int b,int c){try{renderOrders(orders,list,t.toString().trim().toLowerCase(java.util.Locale.ROOT));}catch(Exception e){error(e);}}public void afterTextChanged(Editable e){}});
        if(orders.length()==0)add(text("Brak zamówień do kompletacji.",18,MUTED,false),25);
        button("Ustawienia terminala",false,this::settingsScreen);
        button("Wyloguj się",false,()->requestAsync("/v1/logout","POST",new JSONObject(),data2->{sessionToken="";vault.put("session","");loginScreen();}));
    }
    private void settingsScreen(){
        screen="settings";layout("Ustawienia terminala",company);
        button("Sprawdź aktualizację",false,()->updater.check(true));
        add(text("Model: "+Build.MODEL+"\nSerwer: "+base+"\nWersja: "+BuildConfig.VERSION_NAME,16,INK,false),20);
        button("Aktywuj ponownie przez QR",false,()->new AlertDialog.Builder(this).setTitle("Aktywować terminal ponownie?").setMessage("Bieżąca aktywacja zostanie wyłączona. Zeskanuj nowy QR z panelu. Potem zaloguj się ponownie.").setPositiveButton("Przygotuj terminal",(d,w)->requestAsync("/v1/device/reset","POST",new JSONObject(),data->{deviceToken="";sessionToken="";company="";worker="";clearTask();clearPacking();vault.putAll(Map.of("device","","session","","company","","worker","","lastLogin",""));activationScreen();})).setNegativeButton("Anuluj",null).show());
        button("Wróć do zamówień",true,this::loadOrders);
    }
    private void renderOrders(JSONArray orders,LinearLayout list,String query)throws Exception{
        list.removeAllViews();int visible=0;
        for(int i=0;i<orders.length();i++){
            JSONObject order=orders.getJSONObject(i);
            String searchable=order.toString().toLowerCase(java.util.Locale.ROOT);
            if(!query.isEmpty()&&!searchable.contains(query))continue;
            visible++;
            LinearLayout card=new LinearLayout(this);card.setOrientation(LinearLayout.VERTICAL);card.setPadding(dp(18),dp(16),dp(18),dp(16));card.setBackground(shape(Color.WHITE,12));
            card.addView(text("#"+order.getString("number"),23,INK,true));
            card.addView(text(order.optString("source")+" · "+count(order.getJSONArray("items").length(),"pozycja","pozycje","pozycji")+" · "+order.optInt("units")+" szt.",14,MUTED,false));
            JSONArray items=order.getJSONArray("items");if(items.length()>0)card.addView(text(items.getJSONObject(0).optString("name"),14,INK,false));
            boolean locked=order.optBoolean("busy");Button start=new Button(this);start.setAllCaps(false);start.setText(locked?"Pracuje: "+order.optString("assignedTo"):order.optBoolean("waiting")?"Przejmij zebrane sztuki":order.isNull("taskId")?"Rozpocznij kompletację":"Wznów kompletację");
            start.setTextColor(locked?MUTED:BLUE);start.setEnabled(!locked);
            start.setTextColor(locked?MUTED:Color.WHITE);start.setBackground(shape(locked?Color.rgb(224,233,245):BLUE,10));
            start.setOnClickListener(v->{if(!busy&&screen.equals("orders"))requestAsync("/v1/orders/"+order.optString("id")+"/claim","POST",new JSONObject(),result->{
                taskId=result.getString("id");task=result;vault.put("taskLogin",vault.get("lastLogin",""));saveTask();taskScreen();});});
            LinearLayout.LayoutParams bp=new LinearLayout.LayoutParams(-1,dp(50));bp.topMargin=dp(12);card.addView(start,bp);
            LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,-2);p.bottomMargin=dp(14);list.addView(card,p);
        }
        if(visible==0)list.addView(text("Brak zamówień pasujących do wyszukiwania.",16,MUTED,false));
    }
    private int queued(){synchronized(queueLock){return pending.length();}}
    private JSONObject displayedTask()throws Exception{
        JSONObject view=new JSONObject(task.toString());JSONArray items=view.getJSONArray("items");int totalPicked=0;
        synchronized(queueLock){for(int i=0;i<pending.length();i++){
            JSONObject scan=pending.getJSONObject(i);for(int j=0;j<items.length();j++){JSONObject item=items.getJSONObject(j);if(item.getString("id").equals(scan.optString("itemId")))item.put("picked",item.optInt("picked")+1);}
        }}
        for(int j=0;j<items.length();j++)totalPicked+=items.getJSONObject(j).optInt("picked");view.put("picked",totalPicked);return view;
    }
    private void taskScreen(){
        if(task==null)return;screen="task";
        try{
            JSONObject view=displayedTask();layout("Kompletacja #"+view.getString("number"),company+" · "+worker);
            if(queued()>0)banner("Zapisano na terminalu · oczekuje "+queued()+" skanów",false);
            else banner(mode.equals("demo")?"Potwierdzono w serwerze demonstracyjnym":"Skany zapisane w TAKMA",false);
            add(text(view.optInt("picked")+" / "+view.optInt("total")+" szt.",34,INK,true),10);
            ProgressBar progress=new ProgressBar(this,null,android.R.attr.progressBarStyleHorizontal);progress.setMax(view.optInt("total"));progress.setProgress(view.optInt("picked"));
            LinearLayout.LayoutParams pp=new LinearLayout.LayoutParams(-1,dp(8));pp.bottomMargin=dp(20);content.addView(progress,pp);
            String state=view.optString("state");
            if(state.equals("completed")){add(text("Kompletacja zakończona",23,GREEN,true),18);if(!view.optString("containerCode").isEmpty()){add(text("Pojemnik "+view.optString("containerCode")+" czeka na kontrolę pakowania.",17,INK,false),18);button("Przejdź do pakowania",true,()->{clearTask();loadPacking();});}button("Wróć do zamówień",true,()->{clearTask();loadOrders();});return;}
            if(state.equals("waiting")){add(text("Zadanie przekazano do kolejki. Zebrane sztuki są zapisane.",18,GREEN,true),18);button("Wróć do zamówień",true,()->{clearTask();loadOrders();});return;}
            if(pendingHandoff){add(text("Sprawdź przekazanie zadania przed kolejnym skanem.",17,RED,true),18);button("Sprawdź przekazanie",true,this::handoff);return;}
            JSONArray shortages=view.optJSONArray("shortages");if(shortages==null)shortages=new JSONArray();
            if(shortages.length()>0)add(text("Zgłoszone braki: "+shortages.length()+". Potwierdź uzupełnienie przed zakończeniem.",15,RED,true),12);
            JSONArray nextItems=view.getJSONArray("items");
            for(int i=0;i<nextItems.length();i++){JSONObject next=nextItems.getJSONObject(i);if(next.optInt("picked")<next.optInt("quantity")){add(text("Następna pozycja: "+next.optString("location")+" · "+next.optString("sku")+" · pozostało "+(next.optInt("quantity")-next.optInt("picked"))+" szt.",16,BLUE,true),12);break;}}
            if(!state.equals("picking"))add(text("Zadanie oczekuje na potwierdzenie zapisu.",16,RED,true),16);
            if(!pendingUndo.isEmpty())add(text("Cofnięcie sztuki oczekuje na potwierdzenie. Użyj „Sprawdź cofnięcie”.",16,RED,true),16);
            add(text("Skanuj przyciskiem terminala. Każdy skan dodaje jedną sztukę.",15,MUTED,false),18);
            if(!lastScan.isEmpty())add(text("Ostatni skan: "+lastScan,14,GREEN,true),12);
            scanField=field("Kod produktu","Skanuj EAN lub SKU",false);scanField.setShowSoftInputOnFocus(false);
            scanField.setImeOptions(EditorInfo.IME_ACTION_DONE);scanField.setOnEditorActionListener((v,a,event)->{
                if(a==EditorInfo.IME_ACTION_DONE||(event!=null&&event.getAction()==KeyEvent.ACTION_UP&&event.getKeyCode()==KeyEvent.KEYCODE_ENTER)){
                    String code=scanField.getText().toString();scanField.setText("");receiveScan(code);return true;}return false;});
            button("Wpisz kod ręcznie",false,()->{
                EditText input=new EditText(this);input.setSingleLine(true);input.setHint("EAN lub SKU");
                new AlertDialog.Builder(this).setTitle("Kod produktu").setView(input).setPositiveButton("Dodaj sztukę",(d,w)->receiveScan(input.getText().toString())).setNegativeButton("Anuluj",null).show();});
            JSONArray items=view.getJSONArray("items");
            for(int i=0;i<items.length();i++){
                JSONObject item=items.getJSONObject(i);boolean done=item.optInt("picked")==item.optInt("quantity");
                LinearLayout card=new LinearLayout(this);card.setOrientation(LinearLayout.VERTICAL);card.setPadding(dp(16),dp(14),dp(16),dp(14));card.setBackground(shape(done?Color.rgb(227,244,235):Color.WHITE,12));
                card.addView(text(item.optString("location").isEmpty()?"Brak lokalizacji":"Półka "+item.optString("location"),15,done?GREEN:BLUE,true));
                card.addView(text(item.getString("name"),18,INK,true));card.addView(text(item.optString("sku"),12,MUTED,false));
                card.addView(text("Zebrano "+item.optInt("picked")+" z "+item.optInt("quantity")+" szt."+(done?"  ✓":""),20,done?GREEN:INK,true));
                JSONObject shortage=null;for(int j=0;j<shortages.length();j++)if(item.getString("id").equals(shortages.getJSONObject(j).optString("itemId")))shortage=shortages.getJSONObject(j);
                if(shortage!=null)card.addView(text("Brak: "+shortage.optString("note"),14,RED,false));
                if(!done||shortage!=null){Button report=new Button(this);report.setAllCaps(false);report.setText(shortage==null?"Zgłoś brak":"Potwierdź uzupełnienie");report.setEnabled(queued()==0&&pendingUndo.isEmpty()&&state.equals("picking"));boolean resolved=shortage!=null;String itemId=item.getString("id");report.setOnClickListener(v->shortage(itemId,resolved));card.addView(report);}
                LinearLayout.LayoutParams cp=new LinearLayout.LayoutParams(-1,-2);cp.bottomMargin=dp(12);content.addView(card,cp);
            }
            if(mode.equals("demo")){add(text(view.optString("containerCode").isEmpty()?"Przypisz pojemnik przed zakończeniem.":"Pojemnik: "+view.optString("containerCode"),17,INK,true),14);Button bind=button("Zeskanuj pojemnik",false,this::containerScreen);bind.setEnabled(queued()==0&&pendingUndo.isEmpty()&&state.equals("picking"));}
            Button complete=button(state.equals("picking")?"Zakończ kompletację":"Sprawdź zapis",true,()->{
                if(queued()>0){banner("Najpierw wyślij oczekujące skany.",true);return;}
                new AlertDialog.Builder(this).setTitle("Zakończyć kompletację?").setMessage(mode.equals("demo")?"Zapiszesz wynik na danych demonstracyjnych.":"Aplikacja potwierdzi zebranie produktów w BaseLinkerze.")
                    .setPositiveButton("Zakończ",(d,w)->requestAsync("/v1/tasks/"+taskId+"/complete","POST",new JSONObject(),data->{task=data;saveTask();taskScreen();feedback(true);})).setNegativeButton("Anuluj",null).show();
            });
            complete.setEnabled((!mode.equals("demo")||!view.optString("containerCode").isEmpty())&&shortages.length()==0&&pendingUndo.isEmpty()&&queued()==0&&view.optInt("picked")==view.optInt("total"));
            button("Wyślij skany / odśwież",false,()->{flush();refreshTask();});
            Button undo=button(pendingUndo.isEmpty()?"Cofnij ostatnią sztukę":"Sprawdź cofnięcie",false,this::undo);
            undo.setEnabled(queued()==0&&(view.optInt("picked")>0||!pendingUndo.isEmpty())&&state.equals("picking"));
            Button transfer=button("Przekaż zadanie do kolejki",false,()->new AlertDialog.Builder(this).setTitle("Przekazać zadanie?").setMessage("Zebrane sztuki pozostaną zapisane. Oznacz pojemnik numerem zamówienia. Kolejny pracownik musi przejąć ten pojemnik.").setPositiveButton("Przekaż",(d,w)->{pendingHandoff=true;saveTask();handoff();}).setNegativeButton("Anuluj",null).show());
            transfer.setEnabled(pendingUndo.isEmpty()&&queued()==0&&state.equals("picking"));
            Button release=button("Przerwij i zwolnij zamówienie",false,()->new AlertDialog.Builder(this).setTitle("Zwolnić zamówienie?")
                .setMessage("Kolejne zadanie zacznie liczenie od zera. Odłóż zebrany towar lub przekaż go pracownikowi.")
                .setPositiveButton("Zwolnij",(d,w)->requestAsync("/v1/tasks/"+taskId+"/release","POST",new JSONObject(),data->{clearTask();loadOrders();})).setNegativeButton("Anuluj",null).show());
            release.setEnabled(pendingUndo.isEmpty()&&queued()==0&&state.equals("picking"));
        }catch(Exception e){error(e);}
    }
    private void scanInput(String label,String hint){
        scanField=field(label,hint,false);scanField.setImeOptions(EditorInfo.IME_ACTION_DONE);scanField.setShowSoftInputOnFocus(false);
        scanField.setOnEditorActionListener((v,a,event)->{if(a==EditorInfo.IME_ACTION_DONE||(event!=null&&event.getAction()==KeyEvent.ACTION_UP&&event.getKeyCode()==KeyEvent.KEYCODE_ENTER)){String code=scanField.getText().toString();scanField.setText("");receiveScan(code);return true;}return false;});
        button("Wpisz kod ręcznie",false,()->{EditText input=new EditText(this);input.setSingleLine(true);new AlertDialog.Builder(this).setTitle(label).setView(input).setPositiveButton("Sprawdź",(d,w)->receiveScan(input.getText().toString())).setNegativeButton("Anuluj",null).show();});
    }
    private void loadStock(){if(!issuePending.isEmpty()){issueWaiting();retryIssue();return;}screen="stock";layout("Wydaj z magazynu",company);requestAsync("/v1/stock","GET",null,data->{stockData=data;stockScreen();if(!issueLastError.isEmpty()){banner(issueLastError,true);issueLastError="";}});}
    private void stockScreen(){screen="stock";issueProduct=null;issueCode="";layout("Wydaj z magazynu",company);JSONObject session=stockData.optJSONObject("session");if(session==null){add(text("Brak zapisanej inwentaryzacji. Najpierw policz magazyn.",20,INK,true),20);}else{banner(session.optString("purpose").equals("warehouse")?"MAGAZYN TAKMA — WYDANIE ROLEK":"TEST — WYDANIE ROLEK",false);add(text("Dostępne w magazynie: "+count(stockData.optInt("availableRolls"),"rolka","rolki","rolek"),22,INK,true),20);add(text("Zeskanuj kod kreskowy przy PN na kartonie. Następnie wpisz liczbę pobranych rolek.",18,INK,false),20);scanInput("Kod produktu","PN lub kod kreskowy");}button("Odśwież stan",false,this::loadStock);button("Wróć do zamówień",false,this::loadOrders);}
    private void issueLookup(String code){if(busy)return;requestAsync("/v1/stock/lookup","POST",json("code",code),data->{issueCode=data.getString("code");JSONArray products=data.getJSONArray("products");if(products.length()==1){issueProduct=products.getJSONObject(0);issueCountScreen();}else if(products.length()>1){screen="issueChoice";layout("Wybierz produkt",issueCode);for(int i=0;i<products.length();i++){JSONObject product=products.optJSONObject(i);button(product.optString("pn")+" · "+product.optString("name")+" · dostępne: "+product.optInt("availableRolls"),false,()->{issueProduct=product;issueCountScreen();});}button("Wróć do skanowania",false,this::loadStock);}else banner("Nie znaleziono produktu. Zeskanuj kod przy numerze PN na kartonie.",true);});}
    private void issueCountScreen(){screen="issueCount";layout("Ile rolek pobierasz?",issueProduct.optString("pn"));add(text(issueProduct.optString("name"),23,INK,true),20);add(text(issueProduct.optString("variant"),18,MUTED,false),15);int available=issueProduct.optInt("availableRolls");add(text("Dostępne: "+count(available,"rolka","rolki","rolek"),22,available>0?GREEN:RED,true),20);if(available>0){EditText quantity=field("Liczba pobranych rolek","Np. 1",false);quantity.setInputType(InputType.TYPE_CLASS_NUMBER);EditText note=field("Opis (opcjonalny)","Np. wysyłka zamówienia",false);button("Potwierdź wydanie",true,()->{try{int rolls=Integer.parseInt(quantity.getText().toString());if(rolls<1||rolls>available){quantity.setError("Wpisz liczbę od 1 do "+available);return;}if(note.length()>240){note.setError("Maksymalnie 240 znaków");return;}if(busy||!issuePending.isEmpty())return;JSONObject body=json("sessionId",stockData.getJSONObject("session").getString("id"),"productId",issueProduct.getString("id"),"code",issueCode,"operationId",UUID.randomUUID().toString(),"note",note.getText().toString()).put("rolls",rolls);new AlertDialog.Builder(this).setTitle("Wydać rolki z magazynu?").setMessage("Pobierasz "+rolls+" rolek produktu "+issueProduct.optString("pn")+". Stan magazynu zmniejszy się po zapisie.").setPositiveButton("Wydaj",(d,w)->{issuePending=body.toString();issueLogin=vault.get("lastLogin","");vault.putAll(Map.of("issuePending",issuePending,"issueLogin",issueLogin));issueWaiting();retryIssue();}).setNegativeButton("Anuluj",null).show();}catch(Exception e){quantity.setError("Wpisz liczbę pobranych rolek");}});}else add(text("Nie ma dostępnych rolek tego produktu.",18,RED,true),20);button("Anuluj wydanie",false,this::loadStock);}
    private void issueWaiting(){screen="issuePending";layout("Potwierdź zapis wydania",company);add(text("Wydanie oczekuje na potwierdzenie serwera. Nie rejestruj go drugi raz.",20,INK,true),20);button("Sprawdź zapis wydania",true,this::retryIssue);}
    private void retryIssue(){if(busy||issuePending.isEmpty())return;try{requestAsync("/v1/stock/issue","POST",new JSONObject(issuePending),data->{issuePending="";issueLogin="";vault.putAll(Map.of("issuePending","","issueLogin",""));stockData=data.getJSONObject("stock");stockScreen();banner("Wydano "+count(data.optInt("issuedRolls"),"rolkę","rolki","rolek"),false);feedback(true);});}catch(Exception e){error(e);}}
    private void loadInventory(){
        if(!inventoryPending.isEmpty()){inventoryWaiting();retryInventory();return;}
        screen="inventory";layout("Etykiety na magazynie",company);
        button("Wróć do zamówień",false,this::loadOrders);
        requestAsync("/v1/inventory","GET",null,data->{inventoryData=data;inventoryScreen();});
    }
    private void inventoryScreen(){
        inventoryCode="";inventoryProduct=null;inventoryAlias=false;
        screen="inventory";layout("Zeskanuj karton",company);
        JSONObject session=inventoryData.optJSONObject("session");if(session==null||!session.optString("state").equals("open")){add(text("Brak otwartej inwentaryzacji. Rozpocznij ją w panelu w zakładce Etykiety na magazynie.",20,INK,true),20);button("Odśwież inwentaryzację",true,this::loadInventory);button("Wróć do zamówień",false,this::loadOrders);return;}
        inventoryBanner();add(text(session.optString("name"),20,INK,true),20);
        add(text("Policzono "+count(inventoryData.optInt("totalCartons"),"karton","kartony","kartonów")+" · "+count(inventoryData.optInt("totalRolls"),"rolka","rolki","rolek"),22,INK,true),20);
        add(text("Zeskanuj PN lub kod z kartonu. Potem podaj liczbę rolek faktycznie znajdujących się w kartonie.",18,INK,false),20);scanInput("Kod kartonu","PN lub kod kreskowy");
        button("Szukaj produktu po PN lub nazwie",false,()->inventorySearchDialog());button("Odśwież inwentaryzację",false,this::loadInventory);button("Wróć do zamówień",false,this::loadOrders);
    }
    private void inventoryBanner(){JSONObject session=inventoryData==null?null:inventoryData.optJSONObject("session");banner(session!=null&&session.optString("purpose").equals("warehouse")?"MAGAZYN TAKMA — WŁASNE STANY":"INWENTARYZACJA TESTOWA",false);}
    private void inventoryLookup(String code){if(busy)return;requestAsync("/v1/inventory/lookup","POST",json("code",code),data->{inventoryCode=data.getString("code");JSONArray products=data.getJSONArray("products");inventoryAlias=products.length()==0;if(products.length()==1){inventoryProduct=products.getJSONObject(0);inventoryCountScreen();}else if(products.length()>1)inventoryChoices(products);else{screen="inventoryUnknown";layout("Nie znaleziono produktu",inventoryCode);inventoryBanner();add(text("Wpisz PN z kartonu lub nazwę produktu. Wybierz produkt z katalogu TAKMA.",20,INK,true),20);button("Szukaj w katalogu TAKMA",true,this::inventorySearchDialog);button("Zeskanuj inny kod",false,this::inventoryScreen);}});}
    private void inventorySearchDialog(){EditText query=new EditText(this);query.setHint("PN lub nazwa produktu");new AlertDialog.Builder(this).setTitle("Szukaj w katalogu TAKMA").setView(query).setPositiveButton("Szukaj",(d,w)->requestAsync("/v1/inventory/search","POST",json("query",query.getText().toString()),data->{inventoryChoices(data.getJSONArray("products"));banner("Znaleziono "+count(data.optInt("total"),"wariant","warianty","wariantów")+". Pokazano do 50.",false);})).setNegativeButton("Anuluj",null).show();}
    private void inventoryChoices(JSONArray products){screen="inventorySearch";layout("Wybierz produkt",inventoryCode);inventoryBanner();if(products.length()==0)add(text("Brak pasujących produktów. Sprawdź PN na kartonie.",20,RED,true),20);for(int i=0;i<products.length();i++){JSONObject product=products.optJSONObject(i);button(product.optString("pn")+" · "+product.optString("name")+"\n"+product.optString("variant"),false,()->{inventoryProduct=product;if(inventoryCode.isEmpty()){inventoryCode=product.optString("pn");inventoryAlias=false;}inventoryCountScreen();});}button("Zmień wyszukiwanie",false,this::inventorySearchDialog);button("Wróć do skanowania",false,()->{inventoryCode="";inventoryScreen();});}
    private void inventoryCountScreen(){screen="inventoryCount";layout("Policz rolki",inventoryProduct.optString("pn"));inventoryBanner();
        add(text(inventoryProduct.optString("name"),23,INK,true),20);add(text(inventoryProduct.optString("variant"),19,INK,true),15);
        JSONObject attributes=inventoryProduct.optJSONObject("attributes");if(attributes!=null){java.util.Iterator<String> keys=attributes.keys();while(keys.hasNext()){String key=keys.next();add(text(key+": "+attributes.optString(key),16,MUTED,false),8);}}
        if(!inventoryProduct.isNull("cartonRolls"))add(text("Pełny karton według katalogu: "+inventoryProduct.optInt("cartonRolls")+" rolek. Policz faktyczną zawartość.",16,MUTED,false),15);
        EditText quantity=field("Liczba rolek w tym kartonie","Np. 12",false);quantity.setInputType(InputType.TYPE_CLASS_NUMBER);EditText location=field("Półka (opcjonalna)","Np. A-01 lub regał A, półka 2",false);
        Button save=button("Zapisz karton",true,()->{try{int rolls=Integer.parseInt(quantity.getText().toString());if(rolls<1||rolls>100000){quantity.setError("Wpisz liczbę od 1 do 100000");return;}if(location.length()>80){location.setError("Maksymalnie 80 znaków");return;}if(busy||!inventoryPending.isEmpty())return;
            String warning="Dodasz "+rolls+" rolek produktu "+inventoryProduct.optString("pn")+" jako osobny karton.";if(!location.getText().toString().trim().isEmpty())warning+=" Półka: "+location.getText().toString().trim()+".";JSONArray entries=inventoryData.optJSONArray("entries");if(entries!=null)for(int i=0;i<entries.length();i++){JSONObject entry=entries.optJSONObject(i);if(entry.isNull("cancelled_at")&&entry.optString("product_id").equals(inventoryProduct.optString("id"))){warning+=" Ten produkt był już liczony. Upewnij się, że liczysz kolejny karton.";break;}}
            if(inventoryAlias)warning+=" Kod "+inventoryCode+" zostanie powiązany z tym PN.";
            JSONObject body=json("sessionId",inventoryData.getJSONObject("session").getString("id"),"productId",inventoryProduct.getString("id"),"code",inventoryCode,"location",location.getText().toString(),"operationId",UUID.randomUUID().toString()).put("rolls",rolls).put("confirmAlias",inventoryAlias);
            new AlertDialog.Builder(this).setTitle("Zapisać policzony karton?").setMessage(warning).setPositiveButton("Zapisz",(d,w)->{inventoryPending=body.toString();inventoryLogin=vault.get("lastLogin","");vault.putAll(Map.of("inventoryPending",inventoryPending,"inventoryLogin",inventoryLogin));inventoryWaiting();retryInventory();}).setNegativeButton("Anuluj",null).show();
        }catch(Exception e){quantity.setError("Wpisz liczbę rolek");}});
        button("Anuluj liczenie kartonu",false,()->{inventoryCode="";inventoryProduct=null;inventoryScreen();});
    }
    private void inventoryWaiting(){screen="inventoryPending";layout("Potwierdź zapis kartonu",company);add(text("Zapis oczekuje na potwierdzenie serwera. Nie licz tego kartonu drugi raz.",20,INK,true),20);button("Sprawdź zapis kartonu",true,this::retryInventory);}
    private void retryInventory(){if(busy||inventoryPending.isEmpty())return;try{requestAsync("/v1/inventory/count","POST",new JSONObject(inventoryPending),data->{inventoryPending="";inventoryLogin="";vault.putAll(Map.of("inventoryPending","","inventoryLogin",""));inventoryData=data.getJSONObject("inventory");inventoryCode="";inventoryProduct=null;inventoryAlias=false;inventoryScreen();banner("Zapisano karton "+data.getString("carton"),false);feedback(true);});}catch(Exception e){error(e);}}
    private void containerScreen(){screen="container";layout("Zeskanuj pojemnik","Zamówienie #"+task.optString("orderId"));add(text("Włóż zamówienie do pojemnika z etykietą BOX-…. Jeden pojemnik może należeć do jednego zamówienia.",18,INK,false),20);scanInput("Kod pojemnika","Np. BOX-01");button("Wróć do kompletacji",false,this::taskScreen);}
    private void loadPacking(){screen="packingQueue";layout("Zeskanuj pojemnik","Kontrola pakowania · "+company);add(text("Zeskanuj pojemnik ze skompletowanym zamówieniem. Potem sprawdź ponownie każdą sztukę.",18,INK,false),20);scanInput("Kod pojemnika","Np. BOX-01");button("Odśwież kolejkę",false,this::loadPacking);button("Wróć do zamówień",false,this::loadOrders);requestAsync("/v1/packing","GET",null,data->{JSONArray jobs=data.getJSONArray("jobs");add(text("Do pakowania: "+jobs.length(),18,INK,true),15);for(int i=0;i<jobs.length();i++){JSONObject job=jobs.getJSONObject(i);add(text(job.optString("containerCode")+" · #"+job.optString("orderId")+(job.optBoolean("held")?" · wstrzymane":job.optBoolean("busy")?" · zajęte":""),17,MUTED,false),14);}});}
    private void savePacking(){vault.putAll(Map.of("packingId",packingId,"packing",packing==null?"":packing.toString(),"packingPending",packingPending,"packingLogin",packingLogin));}
    private void clearPacking(){packing=null;packingId="";packingPending="";packingLogin="";savePacking();}
    private void packingScreen(){
        screen="packing";layout("Kontrola #"+packing.optString("orderId"),"Pojemnik: "+packing.optString("containerCode"));
        add(text("Sprawdzono "+packing.optInt("verified")+" / "+packing.optInt("total")+" szt.",30,INK,true),20);
        if(packing.optString("state").equals("packed")){add(text("Spakowane",28,GREEN,true),20);button("Wróć do pakowania",true,()->{clearPacking();loadPacking();});return;}
        if(!packingPending.isEmpty()){add(text("Operacja oczekuje na potwierdzenie. Nowe skany są zablokowane.",18,RED,true),20);button("Sprawdź operację",true,this::recoverPacking);return;}
        if(packing.optBoolean("held")){
            add(text("Pakowanie wstrzymane",28,RED,true),20);
            JSONArray issues=packing.optJSONArray("issues");if(issues!=null)for(int i=0;i<issues.length();i++){JSONObject issue=issues.optJSONObject(i);if(issue.isNull("resolvedAt"))add(text((issue.optString("kind").equals("missing")?"Brak produktu":"Uszkodzony produkt")+" · "+issue.optInt("quantity")+" szt.\n"+issue.optString("productName")+" · "+issue.optString("sku")+"\n"+issue.optString("note"),18,INK,false),16);}
            add(text("Rozwiąż zgłoszenie w panelu. Następnie odśwież kontrolę i ponownie zeskanuj wskazany produkt.",18,INK,false),20);
            button("Odśwież kontrolę",true,this::recoverPacking);
            button("Odłóż pojemnik do kolejki",false,()->packingAction("handoff",new JSONObject()));return;
        }
        add(text("Skanuj każdy produkt ponownie. Każdy skan potwierdza jedną sztukę.",17,MUTED,false),20);scanInput("Kod produktu","EAN lub SKU");
        JSONArray items=packing.optJSONArray("items");if(items!=null)for(int i=0;i<items.length();i++){JSONObject item=items.optJSONObject(i);add(text(item.optString("name")+" · "+item.optString("sku")+"\nSprawdzono "+item.optInt("verified")+" z "+item.optInt("quantity")+" szt.",18,item.optInt("verified")==item.optInt("quantity")?GREEN:INK,true),20);button("Zgłoś problem: "+item.optString("sku"),false,()->packingIssueDialog(item));}
        Button finish=button("Zakończ pakowanie",true,()->new AlertDialog.Builder(this).setTitle("Oznaczyć jako spakowane?").setMessage("Potwierdź, że wszystkie sprawdzone produkty są w paczce. To nie oznacza wysłania paczki.").setPositiveButton("Spakowane",(d,w)->packingAction("complete",new JSONObject())).setNegativeButton("Anuluj",null).show());finish.setEnabled(packing.optBoolean("canComplete"));
        Button undo=button("Cofnij ostatnią sztukę",false,()->packingAction("undo",json("operationId",UUID.randomUUID().toString())));undo.setEnabled(packing.optInt("verified")>0);
        button("Przekaż kontrolę do kolejki",false,()->new AlertDialog.Builder(this).setTitle("Przekazać kontrolę?").setMessage("Sprawdzone sztuki pozostaną zapisane. Przekaż ten sam pojemnik kolejnemu pracownikowi.").setPositiveButton("Przekaż",(d,w)->packingAction("handoff",new JSONObject())).setNegativeButton("Anuluj",null).show());
        button("Odśwież kontrolę",false,this::recoverPacking);
    }
    private void packingIssueDialog(JSONObject item){
        new AlertDialog.Builder(this).setTitle("Zgłoś problem: "+item.optString("sku")).setItems(new String[]{"Brak produktu","Uszkodzony produkt"},(dialog,which)->{
            LinearLayout fields=new LinearLayout(this);fields.setOrientation(LinearLayout.VERTICAL);fields.setPadding(40,20,40,20);
            EditText quantity=new EditText(this);quantity.setHint("Liczba sztuk");quantity.setInputType(InputType.TYPE_CLASS_NUMBER);quantity.setText("1");fields.addView(quantity);
            EditText note=new EditText(this);note.setHint("Opis problemu (opcjonalny)");fields.addView(note);
            AlertDialog form=new AlertDialog.Builder(this).setTitle(which==0?"Brak produktu":"Uszkodzony produkt").setMessage("Zgłoszenie wstrzyma pakowanie zamówienia.").setView(fields).setPositiveButton("Zgłoś",null).setNegativeButton("Anuluj",null).create();
            form.setOnShowListener(d->form.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(v->{try{int count=Integer.parseInt(quantity.getText().toString());if(count<1||count>item.optInt("quantity")){quantity.setError("Wpisz liczbę od 1 do "+item.optInt("quantity"));return;}if(note.length()>500){note.setError("Maksymalnie 500 znaków");return;}form.dismiss();packingAction("issue",json("itemId",item.optString("id"),"kind",which==0?"missing":"damaged","note",note.getText().toString(),"operationId",UUID.randomUUID().toString()).put("quantity",count));}catch(Exception e){quantity.setError("Wpisz liczbę sztuk");}}));form.show();
        }).show();
    }
    private void packingAction(String action,JSONObject body){if(busy||!packingPending.isEmpty())return;try{packingPending=new JSONObject().put("action",action).put("body",body).toString();savePacking();packingScreen();recoverPacking();}catch(Exception e){error(e);}}
    private void recoverPacking(){if(busy||packingId.isEmpty())return;
        if(packingPending.isEmpty()){requestAsync("/v1/packing/"+packingId,"GET",null,data->{packing=data;savePacking();packingScreen();});return;}
        try{JSONObject operation=new JSONObject(packingPending);String action=operation.getString("action");requestAsync("/v1/packing/"+packingId+"/"+action,"POST",operation.getJSONObject("body"),data->{packingPending="";if(action.equals("handoff")){clearPacking();loadPacking();}else{packing=data;savePacking();packingScreen();feedback(true);}});}catch(Exception e){error(e);}
    }
    private void saveTask(){synchronized(queueLock){vault.putAll(Map.of("taskId",taskId,"task",task==null?"":task.toString(),"pending",pending.toString(),"undo",pendingUndo,"handoff",pendingHandoff?"yes":""));}}
    private void clearTask(){task=null;taskId="";pendingUndo="";pendingHandoff=false;lastScan="";saveTask();vault.put("taskLogin","");}
    private void persistQueue(){saveTask();}
    private void handoff(){
        requestAsync("/v1/tasks/"+taskId+"/handoff","POST",new JSONObject(),data->{clearTask();loadOrders();});
    }
    private void shortage(String itemId,boolean resolved){
        if(busy||queued()>0||!pendingUndo.isEmpty())return;
        if(resolved){new AlertDialog.Builder(this).setTitle("Potwierdzić uzupełnienie?").setMessage("Potwierdź, że towar jest już dostępny. Pozostałe sztuki trzeba zeskanować.").setPositiveButton("Potwierdź",(d,w)->requestAsync("/v1/tasks/"+taskId+"/shortage","POST",shortageBody(itemId,true,""),data->{task=data;saveTask();taskScreen();})).setNegativeButton("Anuluj",null).show();return;}
        EditText note=new EditText(this);note.setHint("Np. brak towaru na półce");note.setText("Brak towaru na półce");note.setFilters(new android.text.InputFilter[]{new android.text.InputFilter.LengthFilter(240)});
        AlertDialog dialog=new AlertDialog.Builder(this).setTitle("Zgłoś brak").setView(note).setPositiveButton("Zgłoś",null).setNegativeButton("Anuluj",null).create();dialog.setOnShowListener(d->dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(v->{String value=note.getText().toString().trim();if(value.isEmpty()){note.setError("Wpisz opis braku.");return;}dialog.dismiss();requestAsync("/v1/tasks/"+taskId+"/shortage","POST",shortageBody(itemId,false,value),data->{task=data;saveTask();taskScreen();});}));dialog.show();
    }
    private JSONObject shortageBody(String itemId,boolean resolved,String note){JSONObject body=json("itemId",itemId,"note",note);try{body.put("resolved",resolved);}catch(Exception e){throw new IllegalStateException(e);}return body;}
    private void undo(){
        if(busy||queued()>0)return;
        if(pendingUndo.isEmpty()){pendingUndo=UUID.randomUUID().toString();saveTask();}
        busy=true;banner("Potwierdzanie cofnięcia…",false);
        network.execute(()->{try{
            JSONObject data=request("/v1/tasks/"+taskId+"/undo","POST",json("operationId",pendingUndo));
            runOnUiThread(()->{busy=false;pendingUndo="";task=data;saveTask();taskScreen();});
        }catch(Exception e){runOnUiThread(()->{busy=false;
            if(e instanceof Api.Failure&&((Api.Failure)e).status>=400&&((Api.Failure)e).status<500&&((Api.Failure)e).status!=401&&((Api.Failure)e).status!=429){pendingUndo="";saveTask();}
            taskScreen();error(e);});}});
    }
    private void receiveScan(String raw){
        String code=raw.trim();if(code.isEmpty())return;
        if(screen.equals("stock")){issueLookup(code);return;}
        if(screen.startsWith("issue")){banner("Najpierw zakończ lub anuluj bieżące wydanie.",true);return;}
        if(screen.equals("inventory")){inventoryLookup(code);return;}
        if(screen.startsWith("inventory")){banner("Najpierw zapisz lub anuluj bieżący karton.",true);return;}
        if(screen.equals("container")){if(busy)return;requestAsync("/v1/tasks/"+taskId+"/container","POST",json("code",code),data->{task=data;saveTask();taskScreen();feedback(true);});return;}
        if(screen.equals("packingQueue")){if(busy)return;requestAsync("/v1/packing/claim","POST",json("code",code),data->{packing=data;packingId=data.getString("id");packingLogin=vault.get("lastLogin","");savePacking();packingScreen();feedback(true);});return;}
        if(screen.equals("packing")){if(busy||!packingPending.isEmpty()){banner("Najpierw sprawdź poprzednią operację.",true);return;}packingAction("scan",json("code",code,"operationId",UUID.randomUUID().toString()));return;}
        if(code.length()>2048){banner("Kod jest za długi.",true);feedback(false);return;}
        if(screen.equals("activation")&&activationCode!=null){
            if(busy)return;
            if(code.startsWith("{")){
                try{ActivationConfig config=ActivationConfig.parse(code,System.currentTimeMillis());activationAddress.setText(config.server);activationCode.setText(config.code);activationName.setText(config.name.isEmpty()?Build.MODEL:config.name);scannedActivation=config;activationForm.setVisibility(View.VISIBLE);banner("Firma: "+config.company+". Sprawdź ustawienia i aktywuj terminal.",false);feedback(true);if(!config.login.isEmpty())activationButton.performClick();}
                catch(Exception e){scannedActivation=null;activationCode.setText("");banner(e instanceof org.json.JSONException||e.getMessage()==null?"Nieprawidłowy kod QR.":e.getMessage(),true);feedback(false);}
            }else if(code.matches("[A-Fa-f0-9]{12}")){scannedActivation=null;activationCode.setText(code.toUpperCase(java.util.Locale.ROOT));activationForm.setVisibility(View.VISIBLE);feedback(true);}
            else{banner("Zeskanuj kod aktywacji TAKMA z panelu.",true);feedback(false);}
            return;
        }
        if(!screen.equals("task")||task==null||!task.optString("state").equals("picking")||sessionToken.isEmpty())return;
        if(pendingHandoff||!pendingUndo.isEmpty()||busy){banner("Poczekaj na potwierdzenie operacji.",true);feedback(false);return;}
        try{
            JSONObject view=displayedTask();JSONArray items=view.getJSONArray("items");JSONObject match=null;Set<String> identities=new HashSet<>();boolean found=false;
            for(int i=0;i<items.length();i++){
                JSONObject item=items.getJSONObject(i);if(code.equals(item.optString("ean"))||code.equals(item.optString("sku"))){
                    found=true;identities.add(item.optString("productId")+"|"+item.optString("variantId")+"|"+item.optString("sku")+"|"+item.optString("ean")+"|"+item.optString("name"));
                    if(match==null&&item.optInt("picked")<item.optInt("quantity"))match=item;
                }
            }
            if(!found){feedback(false);banner("Kod „"+code+"” nie należy do zamówienia.",true);return;}
            if(identities.size()>1){feedback(false);banner("Kod wskazuje różne produkty. Popraw kody w katalogu.",true);return;}
            if(match==null){feedback(false);banner("Zebrano już wymaganą ilość produktu.",true);return;}
            synchronized(queueLock){pending.put(json("operationId",UUID.randomUUID().toString(),"code",code,"itemId",match.getString("id")));persistQueue();}
            lastScan=code;feedback(true);taskScreen();flush();
        }catch(Exception e){error(e);}
    }
    private void flush(){
        if(flushing||sessionToken.isEmpty()||taskId.isEmpty()||queued()==0)return;
        flushing=true;String active=taskId;
        network.execute(()->{
            Exception failure=null;
            while(true){JSONObject scan;synchronized(queueLock){scan=pending.optJSONObject(0);}if(scan==null)break;
                try{
                    JSONObject data=request("/v1/tasks/"+active+"/scan","POST",scan);
                    // UI owns task state. Keep accepted scan removal and task snapshot atomic with respect to new scans.
                    java.util.concurrent.CountDownLatch applied=new java.util.concurrent.CountDownLatch(1);
                    runOnUiThread(()->{try{synchronized(queueLock){task=data;pending.remove(0);saveTask();}if(screen.equals("task"))taskScreen();}finally{applied.countDown();}});
                    applied.await();
                }catch(Exception e){
                    if(e instanceof Api.Failure&&((Api.Failure)e).status>=400&&((Api.Failure)e).status<500&&((Api.Failure)e).status!=401&&((Api.Failure)e).status!=429){
                        synchronized(queueLock){pending.remove(0);persistQueue();}failure=e;
                    }else{failure=e;break;}
                }
            }
            Exception finalFailure=failure;
            runOnUiThread(()->{flushing=false;if(screen.equals("task"))taskScreen();if(finalFailure!=null)error(finalFailure);});
        });
    }
    private void refreshTask(){
        if(taskId.isEmpty()||busy)return;
        requestAsync("/v1/tasks/"+taskId,"GET",null,data->{task=data;saveTask();if(screen.equals("task"))taskScreen();});
    }
    @Override public boolean dispatchKeyEvent(KeyEvent event){
        if((screen.equals("task")||screen.equals("container")||screen.equals("packing")||screen.equals("packingQueue")||screen.equals("inventory")||screen.equals("stock"))&&!(getCurrentFocus() instanceof EditText)&&event.getAction()==KeyEvent.ACTION_DOWN){
            if(event.getKeyCode()==KeyEvent.KEYCODE_ENTER&&wedge.length()>0){String code=wedge.toString();wedge.setLength(0);receiveScan(code);return true;}
            int character=event.getUnicodeChar();if(character>=32){long now=System.currentTimeMillis();if(now-wedgeTime>250)wedge.setLength(0);wedgeTime=now;wedge.append((char)character);return true;}
        }
        return super.dispatchKeyEvent(event);
    }
    @Override public void onBackPressed(){
        if(screen.equals("inventoryPending")){banner("Najpierw potwierdź zapis kartonu.",true);return;}
        if(!issuePending.isEmpty()){banner("Najpierw potwierdź zapis wydania.",true);return;}
        if(screen.equals("stock")||screen.startsWith("issue")){loadOrders();return;}
        if(screen.startsWith("inventory")){inventoryCode="";inventoryProduct=null;loadOrders();return;}
        if(screen.equals("container")){taskScreen();return;}
        if(screen.equals("packingQueue")){loadOrders();return;}
        if(screen.equals("packing")){Toast.makeText(this,"Zakończ kontrolę albo przekaż ją do kolejki.",Toast.LENGTH_LONG).show();return;}
        if(screen.equals("task")){Toast.makeText(this,"Dokończ zadanie lub użyj „Przerwij i zwolnij zamówienie”.",Toast.LENGTH_LONG).show();return;}
        super.onBackPressed();
    }
}
