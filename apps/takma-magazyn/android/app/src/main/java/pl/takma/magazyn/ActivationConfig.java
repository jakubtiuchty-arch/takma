package pl.takma.magazyn;

import java.net.URI;
import org.json.JSONObject;

/** Versioned provisioning data; no network requests or credential persistence during parsing. */
public final class ActivationConfig {
    public final String server,code,name,company,login,pin;
    public final long expiresAt;
    private ActivationConfig(String server,String code,String name,String company,long expiresAt,String login,String pin){this.server=server;this.code=code;this.name=name;this.company=company;this.expiresAt=expiresAt;this.login=login;this.pin=pin;}
    public static String server(String value)throws Exception{
        String url=value.trim().replaceAll("/+$","");
        URI uri=new URI(url);boolean local="127.0.0.1".equals(uri.getHost())||"localhost".equals(uri.getHost());
        if(url.length()>240||uri.getHost()==null||uri.getUserInfo()!=null||uri.getRawQuery()!=null||uri.getRawFragment()!=null||
            (uri.getRawPath()!=null&&!uri.getRawPath().isEmpty())||(!"https".equals(uri.getScheme())&&!(local&&"http".equals(uri.getScheme()))))throw new Exception("Podaj adres HTTPS. W teście USB możesz użyć 127.0.0.1.");
        return url;
    }
    public static ActivationConfig parse(String raw,long now)throws Exception{
        if(raw.length()>2048)throw new Exception("Kod QR jest za długi.");
        JSONObject data=new JSONObject(raw);
        if(!"takma.magazyn.activation".equals(data.optString("type"))||data.optInt("version")!=1)throw new Exception("To nie jest obsługiwany kod aktywacji TAKMA.");
        String code=data.getString("code"),name=data.optString("name",""),company=data.getString("company");
        long expiry=data.getLong("expiresAt");
        if(!code.matches("[A-F0-9]{12}")||name.length()>80||company.isEmpty()||company.length()>100)throw new Exception("Kod QR zawiera nieprawidłowe ustawienia.");
        if(expiry<=now)throw new Exception("Kod aktywacji wygasł. Wygeneruj nowy QR w panelu.");
        String login=data.optString("login",""),pin=data.optString("pin","");
        if((!login.isEmpty()||!pin.isEmpty())&&(login.isEmpty()||login.length()>80||!pin.matches("[0-9]{6,12}")))throw new Exception("QR zawiera nieprawidłowe dane pracownika.");
        return new ActivationConfig(server(data.getString("server")),code,name,company,expiry,login,pin);
    }
}
