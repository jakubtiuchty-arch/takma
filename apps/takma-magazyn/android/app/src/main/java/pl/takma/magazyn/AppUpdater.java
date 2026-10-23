package pl.takma.magazyn;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.widget.Toast;
import org.json.JSONObject;
import java.io.*;
import java.net.*;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.concurrent.Executors;

/** HTTPS-only updates; no credentials are sent to the download host. */
final class AppUpdater {
 private final Activity activity;
 private boolean running=false,waitingPermission=false;
 private long checkedAt=0;
 private final java.util.concurrent.ExecutorService executor=Executors.newSingleThreadExecutor();
 private static final String HOST="www.takma.com.pl";
 AppUpdater(Activity activity){this.activity=activity;}
 private HttpURLConnection connect(String value)throws Exception {
  URL url=UpdatePolicy.trustedUrl(value);
  HttpURLConnection c=(HttpURLConnection)url.openConnection();c.setInstanceFollowRedirects(false);c.setConnectTimeout(15000);c.setReadTimeout(30000);c.setRequestProperty("Cache-Control","no-cache");
  if(c.getResponseCode()!=200){c.disconnect();throw new IOException("Serwer aktualizacji jest niedostępny");}return c;
 }
 void check(boolean manual){
  if(running||(!manual&&System.currentTimeMillis()-checkedAt<6*60*60*1000))return;
  checkedAt=System.currentTimeMillis();running=true;
  executor.execute(()->{try{
   HttpURLConnection c=connect("https://"+HOST+"/downloads/magazyn/"+(BuildConfig.DEBUG?"pilot":"release")+".json?t="+System.currentTimeMillis());
   byte[] bytes;try(InputStream in=c.getInputStream()){ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] buffer=new byte[4096];int n;while((n=in.read(buffer))!=-1){if(out.size()+n>32768)throw new IOException("Nieprawidłowy opis aktualizacji");out.write(buffer,0,n);}bytes=out.toByteArray();}finally{c.disconnect();}
   if(bytes.length>32768)throw new IOException("Nieprawidłowy opis aktualizacji");
   JSONObject data=new JSONObject(new String(bytes,java.nio.charset.StandardCharsets.UTF_8));
   if(!activity.getPackageName().equals(data.getString("packageName")))throw new IOException("Aktualizacja innej aplikacji");
   if(data.getInt("versionCode")<=BuildConfig.VERSION_CODE){if(manual)message("Masz aktualną wersję aplikacji.");return;}
   if(data.getInt("minSdk")>Build.VERSION.SDK_INT)throw new IOException("Ta aktualizacja wymaga nowszego Androida");
   activity.runOnUiThread(()->{if(activity.isFinishing()||activity.isDestroyed())return;
    new AlertDialog.Builder(activity).setTitle("Nowa wersja "+data.optString("versionName"))
     .setMessage(data.optString("notes")+"\n\nZakończ bieżącą czynność przed instalacją. Aktywacja i dane aplikacji zostaną zachowane.")
     .setNegativeButton("Później",null).setPositiveButton("Pobierz",(d,w)->download(data)).show();});
  }catch(Exception e){if(manual)message("Nie można sprawdzić aktualizacji. "+e.getMessage());}finally{running=false;}});
 }
 private void message(String text){activity.runOnUiThread(()->Toast.makeText(activity,text,Toast.LENGTH_LONG).show());}
 private void download(JSONObject data){
  if(running)return;running=true;message("Pobieranie aktualizacji…");
  executor.execute(()->{File temp=new File(activity.getCacheDir(),"update.part");File apk=new File(activity.getCacheDir(),"update.apk");
   try{
    long expected=data.getLong("size");if(expected<=0||expected>100*1024*1024)throw new IOException("Nieprawidłowy rozmiar APK");
    HttpURLConnection c=connect(data.getString("url"));MessageDigest sha=MessageDigest.getInstance("SHA-256");long total=0;
    try(InputStream in=c.getInputStream();OutputStream out=new FileOutputStream(temp)){
     byte[] buffer=new byte[32768];int n;while((n=in.read(buffer))!=-1){total+=n;if(total>expected)throw new IOException("Nieprawidłowy rozmiar pliku");sha.update(buffer,0,n);out.write(buffer,0,n);}
    }finally{c.disconnect();}
    StringBuilder hex=new StringBuilder();for(byte b:sha.digest())hex.append(String.format(java.util.Locale.ROOT,"%02x",b&255));
    UpdatePolicy.verifyFile(expected,total,hex.toString(),data.getString("sha256"));
    PackageManager pm=activity.getPackageManager();
    PackageInfo installed=pm.getPackageInfo(activity.getPackageName(),PackageManager.GET_SIGNATURES);
    PackageInfo next=pm.getPackageArchiveInfo(temp.getAbsolutePath(),PackageManager.GET_SIGNATURES);
    if(next==null||!installed.packageName.equals(next.packageName)||next.versionCode!=data.getLong("versionCode")||!Arrays.equals(installed.signatures,next.signatures))throw new IOException("Nieprawidłowy podpis lub wersja aplikacji");
    if(apk.exists()&&!apk.delete())throw new IOException("Nie można zastąpić poprzedniego pliku");
    if(!temp.renameTo(apk))throw new IOException("Nie można zapisać aktualizacji");
    activity.runOnUiThread(()->new AlertDialog.Builder(activity).setTitle("Aktualizacja gotowa")
     .setMessage("Zainstalować nową wersję? Android poprosi o potwierdzenie. Nie odinstalowuj obecnej aplikacji.")
     .setNegativeButton("Później",null).setPositiveButton("Zainstaluj",(d,w)->install()).show());
   }catch(Exception e){message("Aktualizacja nie została zainstalowana. "+e.getMessage());}finally{temp.delete();running=false;}
  });
 }
 private void install(){try{
  if(!activity.getPackageManager().canRequestPackageInstalls()){
   waitingPermission=true;
   new AlertDialog.Builder(activity).setTitle("Zezwól na aktualizację")
    .setMessage("W ustawieniach Androida zezwól aplikacji TAKMA Magazyn na instalowanie aktualizacji. Następnie wróć do aplikacji.")
    .setNegativeButton("Anuluj",(d,w)->waitingPermission=false)
    .setPositiveButton("Otwórz ustawienia",(d,w)->activity.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,Uri.parse("package:"+activity.getPackageName())))).show();return;
  }
  activity.startActivity(new Intent(Intent.ACTION_VIEW).setDataAndType(Uri.parse("content://"+activity.getPackageName()+".updates/update.apk"),"application/vnd.android.package-archive").addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION));
 }catch(Exception e){message("Nie można uruchomić instalatora Androida.");}}
 void resume(){if(waitingPermission&&activity.getPackageManager().canRequestPackageInstalls()){waitingPermission=false;install();}}
}
