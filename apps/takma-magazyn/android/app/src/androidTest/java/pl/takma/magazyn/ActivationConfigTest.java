package pl.takma.magazyn;
import junit.framework.TestCase;
import org.json.JSONObject;
public class ActivationConfigTest extends TestCase {
    private JSONObject payload()throws Exception{return new JSONObject().put("type","takma.magazyn.activation").put("version",1).put("server","http://127.0.0.1:8787").put("name","CT37 test QR").put("company","TAKMA Demo").put("code","ABCDEF123456").put("expiresAt",System.currentTimeMillis()+60000);}
    private void rejects(JSONObject value)throws Exception{try{ActivationConfig.parse(value.toString(),System.currentTimeMillis());fail("Accepted invalid QR");}catch(AssertionError e){throw e;}catch(Exception expected){}}
    public void testValidQr()throws Exception{ActivationConfig c=ActivationConfig.parse(payload().toString(),System.currentTimeMillis());assertEquals("CT37 test QR",c.name);assertEquals("ABCDEF123456",c.code);assertEquals("http://127.0.0.1:8787",c.server);}
    public void testHttps()throws Exception{assertEquals("https://demo.takma.pl",ActivationConfig.parse(payload().put("server","https://demo.takma.pl/").toString(),0).server);}
    public void testExpired()throws Exception{rejects(payload().put("expiresAt",1));}
    public void testVersion()throws Exception{rejects(payload().put("version",2));}
    public void testWrongType()throws Exception{rejects(payload().put("type","other"));}
    public void testUnsafeServer()throws Exception{for(String s:new String[]{"http://demo.takma.pl","https://user:pin@demo.takma.pl","https://demo.takma.pl?a=b","https://demo.takma.pl/#x","file:///tmp/demo","https://demo.takma.pl/path"})rejects(payload().put("server",s));}
    public void testBadCode()throws Exception{rejects(payload().put("code","BAD-CODE"));}
    public void testNameLimit()throws Exception{rejects(payload().put("name","x".repeat(81)));}
    public void testMissingCompany()throws Exception{JSONObject p=payload();p.remove("company");rejects(p);}
    public void testQuickStartCredentials()throws Exception{ActivationConfig c=ActivationConfig.parse(payload().put("login","magazyn").put("pin","123456").toString(),System.currentTimeMillis());assertEquals("magazyn",c.login);assertEquals("123456",c.pin);rejects(payload().put("login","magazyn"));rejects(payload().put("pin","123456"));}
}
