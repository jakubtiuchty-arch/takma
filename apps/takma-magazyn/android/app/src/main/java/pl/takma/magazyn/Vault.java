package pl.takma.magazyn;

import android.content.Context;
import android.content.SharedPreferences;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyProperties;
import android.util.Base64;
import java.nio.charset.StandardCharsets;
import java.security.KeyStore;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import java.util.Map;

/** Credentials and the durable scan queue stay encrypted with an Android Keystore key. */
final class Vault {
    private final SharedPreferences prefs;
    private final SecretKey key;
    Vault(Context context) throws Exception {
        prefs = context.getSharedPreferences("magazyn_secure", Context.MODE_PRIVATE);
        String alias = context.getPackageName() + ".vault";
        KeyStore store = KeyStore.getInstance("AndroidKeyStore"); store.load(null);
        if (!store.containsAlias(alias)) {
            KeyGenerator generator = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore");
            generator.init(new KeyGenParameterSpec.Builder(alias, KeyProperties.PURPOSE_ENCRYPT | KeyProperties.PURPOSE_DECRYPT)
                .setBlockModes(KeyProperties.BLOCK_MODE_GCM).setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE).build());
            generator.generateKey();
        }
        key = (SecretKey) store.getKey(alias, null);
    }
    synchronized String get(String name, String fallback) {
        String value = prefs.getString(name, null);
        if (value == null) return fallback;
        try {
            String[] parts = value.split(":"); Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
            cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, Base64.decode(parts[0], Base64.NO_WRAP)));
            return new String(cipher.doFinal(Base64.decode(parts[1], Base64.NO_WRAP)), StandardCharsets.UTF_8);
        } catch (Exception e) { throw new IllegalStateException("Nie można odczytać danych terminala.", e); }
    }
    synchronized void put(String name, String value) {
        putAll(Map.of(name,value));
    }
    synchronized void putAll(Map<String,String> values) {
        try {
            SharedPreferences.Editor editor=prefs.edit();
            for(var entry:values.entrySet()) {
                Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding"); cipher.init(Cipher.ENCRYPT_MODE, key);
                String encrypted = Base64.encodeToString(cipher.getIV(), Base64.NO_WRAP) + ":" +
                    Base64.encodeToString(cipher.doFinal(entry.getValue().getBytes(StandardCharsets.UTF_8)), Base64.NO_WRAP);
                editor.putString(entry.getKey(),encrypted);
            }
            if (!editor.commit()) throw new IllegalStateException("Brak miejsca na zapis danych.");
        } catch (Exception e) { throw new IllegalStateException("Nie można zapisać danych terminala.", e); }
    }
}
