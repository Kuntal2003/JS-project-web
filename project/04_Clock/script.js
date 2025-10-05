let sec = document.getElementById("second1");
let h = document.getElementById("hour1");
let m = document.getElementById("minute1");
let id = setInterval(()=>{
    let a = new Date();
    let hour = a.getHours();
    let minute = a.getMinutes();
    let second = a.getSeconds();    
    sec.innerHTML = second;
    if(hour == 0){  
        h.innerHTML = hour+12;
        
    }else if(hour>0 || hour<=12){
        h.innerHTML = hour;
    }else{
        h.innerHTML = hour-12;
    }
    m.innerHTML = minute;
},1000)


