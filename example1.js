//(function(){
var result="[Your external ip address]";
var language = window.navigator.userLanguage || window.navigator.language;
if(language == "ko-KR"){
  result="<pre>[당신의 공인 아이피]</pre>";
}
else{
 result="<pre>[Your external ip address]</pre>";
}

//
document.write(result);
document.write("<br>");
//}
//)();
//checkl
