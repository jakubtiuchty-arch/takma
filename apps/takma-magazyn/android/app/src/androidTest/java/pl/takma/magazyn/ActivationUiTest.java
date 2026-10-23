package pl.takma.magazyn;
import android.app.Activity;
import android.content.Intent;
import android.test.InstrumentationTestCase;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONObject;

public class ActivationUiTest extends InstrumentationTestCase {
    private void fields(View view,List<String> values){if(view instanceof EditText)values.add(((EditText)view).getText().toString());if(view instanceof ViewGroup){ViewGroup group=(ViewGroup)view;for(int i=0;i<group.getChildCount();i++)fields(group.getChildAt(i),values);}}
    public void testScannerBroadcastFillsActivationSettings()throws Exception{
        Activity activity=getInstrumentation().startActivitySync(new Intent(getInstrumentation().getTargetContext(),MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
        getInstrumentation().waitForIdleSync();
        List<Boolean> visible=new ArrayList<>();getInstrumentation().runOnMainSync(()->visibility(activity.getWindow().getDecorView(),visible));
        assertFalse("Setup fields must stay hidden until scan",visible.contains(true));
        String data=new JSONObject().put("type","takma.magazyn.activation").put("version",1).put("server","http://127.0.0.1:8787").put("name","CT37 — test QR").put("company","TAKMA Demo").put("code","ABCDEF123456").put("expiresAt",System.currentTimeMillis()+60000).toString();
        getInstrumentation().getContext().sendBroadcast(new Intent(BuildConfig.APPLICATION_ID+".BARCODE").setPackage(BuildConfig.APPLICATION_ID).putExtra("data",data));
        List<String> values=new ArrayList<>();
        for(int i=0;i<20;i++){values.clear();getInstrumentation().runOnMainSync(()->fields(activity.getWindow().getDecorView(),values));if(values.contains("ABCDEF123456"))break;Thread.sleep(100);}
        assertTrue("Scan must fill server",values.contains("http://127.0.0.1:8787"));assertTrue("Scan must fill activation code",values.contains("ABCDEF123456"));assertTrue("Scan must fill terminal name",values.contains("CT37 — test QR"));
        visible.clear();getInstrumentation().runOnMainSync(()->visibility(activity.getWindow().getDecorView(),visible));assertTrue("Scan must reveal setup fields",visible.contains(true));
    }
    private void visibility(View view,List<Boolean> values){if(view instanceof EditText)values.add(view.isShown());if(view instanceof ViewGroup){ViewGroup group=(ViewGroup)view;for(int i=0;i<group.getChildCount();i++)visibility(group.getChildAt(i),values);}}
    public void testQuickStartOpensOrders()throws Exception{
        String qr=((android.test.InstrumentationTestRunner)getInstrumentation()).getArguments().getString("activationQr");if(qr==null)return;
        Activity activity=getInstrumentation().startActivitySync(new Intent(getInstrumentation().getTargetContext(),MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));getInstrumentation().waitForIdleSync();
        getInstrumentation().getContext().sendBroadcast(new Intent(BuildConfig.APPLICATION_ID+".BARCODE").setPackage(BuildConfig.APPLICATION_ID).putExtra("data",qr));
        List<String> texts=new ArrayList<>();for(int i=0;i<100;i++){texts.clear();getInstrumentation().runOnMainSync(()->texts(activity.getWindow().getDecorView(),texts));if(texts.contains("Zamówienia"))return;Thread.sleep(100);}fail("QR must activate, log in and open orders without a tap");
    }
    private void texts(View view,List<String> values){if(view instanceof android.widget.TextView)values.add(((android.widget.TextView)view).getText().toString());if(view instanceof ViewGroup){ViewGroup group=(ViewGroup)view;for(int i=0;i<group.getChildCount();i++)texts(group.getChildAt(i),values);}}
}
