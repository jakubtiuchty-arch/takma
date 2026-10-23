package pl.takma.magazyn;
public class UpdatePolicyTest {
 interface Attempt { void run() throws Exception; }
 static void rejects(Attempt a)throws Exception {try{a.run();}catch(Exception expected){return;}throw new AssertionError("Unsafe update accepted");}
 public static void main(String[] args)throws Exception {
  UpdatePolicy.trustedUrl("https://www.takma.com.pl/downloads/magazyn/pilot.json?t=1");
  for(String url:new String[]{"http://www.takma.com.pl/downloads/magazyn/a.apk","https://evil.example/a.apk","https://www.takma.com.pl.evil.example/downloads/magazyn/a.apk","https://user@www.takma.com.pl/downloads/magazyn/a.apk","https://www.takma.com.pl:444/downloads/magazyn/a.apk","file:///tmp/a.apk","https://www.takma.com.pl/images/a.apk"})rejects(()->UpdatePolicy.trustedUrl(url));
  String hash="a".repeat(64);
  UpdatePolicy.verifyFile(123,123,hash,hash.toUpperCase());
  rejects(()->UpdatePolicy.verifyFile(123,122,hash,hash));
  rejects(()->UpdatePolicy.verifyFile(123,124,hash,hash));
  rejects(()->UpdatePolicy.verifyFile(0,0,hash,hash));
  rejects(()->UpdatePolicy.verifyFile(104857601,104857601,hash,hash));
  rejects(()->UpdatePolicy.verifyFile(123,123,hash,"b".repeat(64)));
  rejects(()->UpdatePolicy.verifyFile(123,123,hash,"invalid"));
  System.out.println("OK: trusted URL, size bounds, truncation, tampering, checksum validation");
 }
}
