package pl.takma.magazyn;
import android.content.ContentProvider;
import android.content.ContentValues;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.provider.OpenableColumns;
import java.io.File;
import java.io.FileNotFoundException;
/** Exposes only the verified APK, read-only, via a temporary URI grant. */
public class UpdateProvider extends ContentProvider {
 public boolean onCreate(){return true;}
 private File file(Uri uri) throws FileNotFoundException {
  if(!"/update.apk".equals(uri.getPath()))throw new FileNotFoundException();
  return new File(getContext().getCacheDir(),"update.apk");
 }
 public String getType(Uri uri){return "application/vnd.android.package-archive";}
 public ParcelFileDescriptor openFile(Uri uri,String mode)throws FileNotFoundException {
  if(!"r".equals(mode))throw new FileNotFoundException();
  return ParcelFileDescriptor.open(file(uri),ParcelFileDescriptor.MODE_READ_ONLY);
 }
 public Cursor query(Uri uri,String[] projection,String selection,String[] args,String sort){
  MatrixCursor c=new MatrixCursor(new String[]{OpenableColumns.DISPLAY_NAME,OpenableColumns.SIZE});
  try{c.addRow(new Object[]{"takma-magazyn.apk",file(uri).length()});}catch(Exception ignored){}return c;
 }
 public Uri insert(Uri u,ContentValues v){throw new UnsupportedOperationException();}
 public int update(Uri u,ContentValues v,String s,String[] a){throw new UnsupportedOperationException();}
 public int delete(Uri u,String s,String[] a){throw new UnsupportedOperationException();}
}
