package pl.takma.magazyn;
import java.net.URL;
import java.io.IOException;
final class UpdatePolicy {
 static URL trustedUrl(String value)throws Exception {
  URL url=new URL(value);
  if(!"https".equals(url.getProtocol())||!"www.takma.com.pl".equals(url.getHost())||url.getUserInfo()!=null||url.getPort()!=-1||!url.getPath().startsWith("/downloads/magazyn/"))throw new IOException("Nieprawidłowy adres aktualizacji");
  return url;
 }
 static void verifyFile(long expected,long actual,String hash,String expectedHash)throws IOException {
  if(expected<=0||expected>100*1024*1024||expected!=actual||!expectedHash.matches("[a-fA-F0-9]{64}")||!hash.equalsIgnoreCase(expectedHash))throw new IOException("Plik jest niekompletny lub uszkodzony. Spróbuj ponownie");
 }
}
