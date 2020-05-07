 function extractDomain(url) {
  var hostname;
  if (url.indexOf("://") > -1) {hostname = url.split('/')[2];}
  else {hostname = url.split('/')[0];}
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];
  return hostname;
 }
 function exception(){
  var exception = new Array(); 
  pengaturan.kecualiuntuk = pengaturan.kecualiuntuk;
  exception = pengaturan.kecualiuntuk.split(",");
  return exception;
 }
 function convertstr(str) {
  return str.replace(/^\s+/, '').replace(/\s+$/, '');
 }
 if (!pengaturan.kecualiuntuk) {
  pengaturan.kecualiuntuk = window.location.href;
 }else {
  pengaturan.kecualiuntuk += ","+window.location.href;
 }
 var exception = exception();
 var exceptionlength = exception.length;
 var checklink = "";
 var checkexception = ""; 
 var linktag = document.getElementsByTagName("a");
 var blogpage = pengaturan.laman;  
 if (pengaturan.kecualitampil == false) {
  alert('Untuk mengaktifkan auto safelink silakan edit html dan pilih menjadi true')
 }
 for (var i = 0; i < linktag.length; i++) { 
  checkkecualiuntuk = true;
  no = 0;
  if (pengaturan.kecualitampil) {  
   checkkecualiuntuk = false;
   while (checkkecualiuntuk == false && no < exceptionlength) {
    checklink = extractDomain(linktag[i].href);
    checkexception = extractDomain(exception[no]);
    if (checklink.match(checkexception)) {
     checkkecualiuntuk = true;
    }
    no++;
   }
  }
  if (checkkecualiuntuk == false) { 
   linktag[i].href = blogpage + pengaturan.path + aesCrypto.encrypt(convertstr(linktag[i].href),convertstr('root'));
   linktag[i].target = "_blank";
  }
 }
