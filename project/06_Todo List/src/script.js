let buttonaction = document.getElementById("addbutton");
let textaction = document.getElementById("textinput");
let mainFlexBox = document.getElementById("mainBox");
let valueBox = document.getElementById("valueBox");
// localStorage.clear();
if(localStorage.length > 0){
    i = Number(localStorage.getItem("index"));
}else{
    i = -1;
    localStorage.setItem("index",i);
}
let indexValue = Number(localStorage.getItem("index"));
for(let num =0; num<indexValue+1;num++){
    if(localStorage.getItem(num) != null){
        addHtml(localStorage.getItem(num),`${num}`,`removeid${num}`);
    }else{
        continue;
    }
}
function addHtml (value,id,xid){
    let div = document.createElement("div");
    div.className = "w-full p-3 h-fit rounded bg-white shadow-2xl flex items-center justify-between";
    div.id = id;
    div.innerHTML = `
                <div class="flex items-center gap-10">
                    <div class="h-10 w-10 flex-shrink-0 rounded bg-LightGreen inset-shadow-sm ml-5 cursor-pointer checkBox">
                        <i data-feather="check" class="h-10 w-10 text-Gray cursor-pointer"></i>
                    </div>
                    <p class="font-mulish text-lg  font-bold ml-5 w-40" >${value}</p>
                </div>
                <div  class="h-10 w-10 rounded bg-LightGreen inset-shadow-sm mr-5 crossClass">
                    <i data-feather="x" class="h-10 w-10 text-Gray cursor-pointer" id= ${xid}></i>
                </div>
    `
    document.getElementById("mainBox").appendChild(div);
}
buttonaction.addEventListener("click",()=>{
    let value = textaction.value;
    i++;
    localStorage.setItem(i,value);
    localStorage.setItem("index",i);
    addHtml(localStorage.getItem(i),`${i}`,`removeid${i}`);
    let removebutton = document.getElementsByClassName("crossClass");
for(let btn of removebutton){
    btn.addEventListener("click",()=>{
        let previous = btn.previousElementSibling;
        let previuosparentId = previous.parentElement.id;
        localStorage.removeItem(previuosparentId);
        btn.parentElement.remove();
    });
}
    feather.replace();
})
let removebutton = document.getElementsByClassName("crossClass");
for(let btn of removebutton){
    btn.addEventListener("click",()=>{
        let previous = btn.previousElementSibling;
        let previuosparentId = previous.parentElement.id;
        localStorage.removeItem(previuosparentId);
        btn.parentElement.remove();
    });
}
let checkbox = document.getElementsByClassName("checkBox");
for(let btn of checkbox){
    btn.addEventListener("click",()=>{
        btn.innerHTML = ` <i data-feather="check" class="h-10 w-10 text-Gray cursor-pointer"></i>`;
        btn.nextElementSibling.className = "font-mulish text-lg font-bold ml-5 text-Gray line-through"
        feather.replace();
    })
}
feather.replace();



