var input_id;
var input_pw;
var input_pwr;
var input_na;
var input_em;
var ipSexes;


var id;
var pw;
var pwr;
var em;
var na;
var sex;


window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_pwr = document.getElementById("pwr");
    input_na = document.getElementById("na");
    input_em = document.getElementById("em");
    ipSexes=document.getElementsByName("sex");  // 주의		
  
}


function check(){
     id = input_id.value;
     pw = input_pw.value;
     pwr = input_pwr.value;
     na = input_na.value;
     em = input_em.value;
     

    if(checkId() && checkPw() && checkPwr()&&checkna()&&checkEmail() && checkPW2()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}




function checkPW2(){
    if(pw==pwr){
        console.log("ok pw");
        return true;

    }else{
        console.log("no pw");
        return false;

    }
}



function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPwr(){
    if(pwr.length>=4 && pwr.length<=12){
        console.log("ok pwre");
        return true;
    } else {
        console.log("no pwre");
        return false;
    }
}

function checkna(){
    if(na.length>=4 && na.length<=12){
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function checkEmail(){
    if(em.length>=4 && em.length<=12){
        console.log("ok em");
        return true;
    } else {
        console.log("no em");
        return false;
    }
}

	for(var i=0;i<ipSexes.length;i++){						
    // ipSexes[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻					
    if(ipSexes[i].checked == true){					
    sex = ipSexes[i].value; // 해당 라디오 버튼의 값을 변수에 저장					
    }					
}						