upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerSet = "abcdefghijklmnopqrstuvwxyz";
numSet = "0123456789";
symSet = "~!@#$%^&*()+-=";

let password =  "";

const passBit = (dataset) => {
    let pass = dataset[Math.floor(Math.random() * dataset.length)];
    return pass;
}

const trim = (str, num) => {
    if(str.length > num){
        let substr = str.substring(0, num);
        return substr;
    }else{
        return str;
    }
}

const passGen = (password = "") => {
    const passCon = document.getElementById("passCon");
    const passLen = document.getElementById("passLen");
    const passUpp = document.getElementById("passUpp");
    const passLow = document.getElementById("passLow");
    const passNum = document.getElementById("passNum");
    const passSym =  document.getElementById("passSym");

    if(passUpp.checked){
        password += passBit(upperSet)
    }
    if(passLow.checked){
        password += passBit(lowerSet)
    }
    if(passNum.checked){
        password += passBit(numSet)
    }
    if(passSym.checked){
        password += passBit(symSet)
    }
    if(password.length < passLen.value){
        passGen(password)
    }else{
        passCon.value = trim(password, passLen.value)    
    }
    
}

passGen();