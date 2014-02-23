//(function(){
var result="[Your external ip address]";
var language = window.navigator.userLanguage || window.navigator.language;
if(language == "ko-KR"){
  result="<a>[당신의 공인 아이피]</a>";
}
else{
 result="<a>[Your external ip address]</a>";
}

//
document.write(result);
document.write("<br>");
//}
//)();
//checkl
