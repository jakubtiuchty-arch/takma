package pl.takma.magazyn;

import org.json.JSONObject;
import java.io.InputStream;
import java.io.ByteArrayOutputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.nio.charset.StandardCharsets;

final class Api {
    static class Failure extends Exception {
        final int status; final String code;
        Failure(int status, String code, String message) { super(message); this.status=status; this.code=code; }
    }
    static JSONObject request(String base, String path, String method, JSONObject body, String device, String session) throws Exception {
        HttpURLConnection connection = (HttpURLConnection) URI.create(base+path).toURL().openConnection();
        connection.setRequestMethod(method); connection.setConnectTimeout(6000); connection.setReadTimeout(25000);
        connection.setInstanceFollowRedirects(false);
        connection.setRequestProperty("Content-Type", "application/json");
        if (!device.isEmpty()) connection.setRequestProperty("X-Device-Token", device);
        if (!session.isEmpty()) connection.setRequestProperty("Authorization", "Bearer "+session);
        try {
            if (body != null) { connection.setDoOutput(true); try (var output = connection.getOutputStream()) { output.write(body.toString().getBytes(StandardCharsets.UTF_8)); } }
            int status=connection.getResponseCode();
            InputStream stream=status<400?connection.getInputStream():connection.getErrorStream();
            if (stream==null) throw new Failure(status,"NETWORK","Serwer nie potwierdził operacji.");
            JSONObject data;
            try (stream; ByteArrayOutputStream bytes=new ByteArrayOutputStream()) {
                byte[] buffer=new byte[4096];int count;
                while((count=stream.read(buffer))!=-1){bytes.write(buffer,0,count);if(bytes.size()>4_000_000)throw new Failure(502,"NETWORK","Odpowiedź serwera jest zbyt duża.");}
                data=new JSONObject(bytes.toString(StandardCharsets.UTF_8.name()));
            }
            if (status>=400) { JSONObject error=data.optJSONObject("error"); throw new Failure(status,error==null?"ERROR":error.optString("code"),error==null?"Błąd serwera.":error.optString("message")); }
            return data;
        } finally { connection.disconnect(); }
    }
}
