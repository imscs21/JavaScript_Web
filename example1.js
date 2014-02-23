//(function(){
var result="[Your external ip address]";
var language = window.navigator.userLanguage || window.navigator.language;
if(language == "ko-KR"){
  result="<xmp>[당신의 공인 아이피]</xmp>";
}
else{
 result="<xmp>[Your external ip address]</xmp>";
}

//
document.write(result);
document.write("<br>");
//}
//)();
//checkl
