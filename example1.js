//(function(){
var result="Your external ip address: ";
var language = window.navigator.userLanguage || window.navigator.language;
if(language == "ko-KR"){
  result="당신의 공인 아이피: ";
}
else{
 result="Your external ip address: ";
}

//
document.write(result);
//}
//)();
//checklanguage();
