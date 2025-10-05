const Line1 = (text,id)=>{
    return new Promise((resolve,reject)=>{
        let div = document.createElement("div");
        div.innerHTML = text;
        div.className = "text1";
        div.id = id;
        document.getElementById("subboxid").appendChild(div);
        resolve(56);
    })
    
}
const addWaiting = async(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let div = document.getElementById(id)
            div.innerHTML = div.innerHTML+" .";
            resolve(1);
        },1000);
    })
}
const waitWithDot = async (id)=>{
    for(let i=0;i<4;i++){
        await addWaiting(id);
    }
}
const top1 = (username)=>{
    return new Promise((resolve,reject)=>{
        let div = document.getElementById("homeid");
        div.innerHTML = `Victim's username is: ${username}`;
        resolve(56);
    })
}
const execute = async ()=>{
    Line1("Intitailizing Hack program","line1id");
    await waitWithDot("line1id");
    let username = prompt("Enter victim's name");
    Line1(`Hacking ${username}'s username`,"line2id");
    let number= Math.floor(Math.random()*100)+100;
    username = username + '@'+ number;
    await top1(username);
    await waitWithDot("line2id");
    Line1(`Username found ${username}`,"line3id");
    await waitWithDot("line3id");
    Line1(`Connecting to the facebook`,"line4id");
}
execute();

