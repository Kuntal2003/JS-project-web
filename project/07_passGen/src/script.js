const upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number1 = "0123456789";
const symbols = "!@#$%&+";
let uperIp = document.getElementById("checkbox1");
let lowerIp = document.getElementById("checkbox2");
let numIp = document.getElementById("checkbox3");
let symIp = document.getElementById("checkbox4");
let button1 = document.getElementById("generate");
let passwordLength = document.getElementById("passlen");
let passDisplay = document.getElementById("passwordDisplay");
class password{
    constructor(){
        this.generatedPass = "";
    }
    generatepass(len,upercheck,lowercheck,numcheck,symcheck){
        let count = 0;
        if(upercheck){
            count++;
        }
        if(lowercheck){
            count++;
        }
        if(numcheck){
            count++;
        }
        if(symcheck){
            count++;
        }
        for(let i = 0; i<len;i++){
            let randomUpper = upercase[Math.floor(Math.random() * 26)];
            let randomLower = lowercase[Math.floor(Math.random() * 26)];
            let randomNumber = number1[Math.floor(Math.random() * 10)];
            let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
            let randomCount = Math.floor(Math.random() * count);
            let arr = [];
            if(upercheck){
                arr.push(randomUpper);
            }
            if(lowercheck){
                arr.push(randomLower);
            }
            if(numcheck){
                arr.push(randomNumber);
            }
            if(symcheck){
                arr.push(randomSymbols);
            }
            this.generatedPass += arr[randomCount];
        }
        return this.generatedPass;
    }
}
button1.addEventListener("click",()=>{
    let p = new password();
    passDisplay.innerHTML = p.generatepass(Number(passwordLength.value),uperIp.checked,lowerIp.checked,numIp.checked,symIp.checked);
})

