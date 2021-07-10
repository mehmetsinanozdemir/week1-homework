import userInfo from "./user_information";


var timerElement = document.getElementById("timer");




var mobileInput = document.getElementById("mobileCode");
var e = document.getElementById("selector");
var moneyInput =  document.getElementById("AmountInput");
var submitButton = document.querySelector("#submit");
var selectedValue = e.options[e.selectedIndex].value;
var errorCount = 0;

let index = e.selectedIndex;
if(moneyInput>userInfo.accounts[e].balance){
   submitButton.disabled=false;
}
   else{
    submitButton.disabled=true;
}
   


function Submit(){
   
    if(selectedValue == "HESAB SECINIZ"){
        window.alert("Hesab seçiniz")
    }else{
        if(moneyInput.value<=500){
            window.alert("Gönderme başarlı")
        }
        else{
            window.alert("Cep telefonunuza gelen kodu giriniz");
            mobileInput.style.display = "block";
                if(mobileInput.innerHTML!="1234"){
                    errorCount++;
                    window.alert("Şifre yanlış")
                    if(errorCount>3){
                        window.alert("Hesab bloke edildi")
                    }
                
                }else{
                    window.alert("Başarlı")
                }
        }
    }

}








function timer(duration,timeLabel){
    let time = duration, minutes, seconds;
    setInterval(()=>{
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time% 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        console.log(minutes)
        timeLabel.innerText = minutes + ":" + seconds;

        if (--time < 0) {
            window.alert("Oturmaniz sonlandirildi")
            location.reload();
        }
    }, 1000);
}
timer(2*60,timerElement);







