const image = (url,id,imgid)=>{
    let parent = document.getElementById(id);
    return new Promise((resolve,reject)=>{
        let img = document.createElement("img");
        img.src = url;
        img.id = imgid;
        img.className = "card-img-top";
        img.style = "height: 10rem"
        img.onload = (()=>{
            resolve(img);
        })
        img.onerror = (()=>{
            reject(img);
        })
        parent.prepend(img);
    })
}



let number = Math.floor(Math.random()*80)+10;
let div = document.getElementById("cardbox");
let api = fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=21&offset=${number}`);
api.then((value)=>{
    return value.json();
}).then((value)=>{
    for(x in value["results"]){
        div.innerHTML += `
        <div class="card" style="width: 22rem" id="kb${x}">
            <div class="card-body" id = "card-body${x}" > 
                <h5 class="card-title">${value["results"][x].news_site}</h5>
                <p class="card-text">
                    ${value["results"][x].summary} <br>
                </p>
                <a href="${value["results"][x].url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `
        let img = image(value["results"][x].image_url,`kb${x}`,`id${x}`);
        let kbid = `kb${x}`;
        img.then(()=>{

        }).catch((img)=>{
            // let imgsrc = document.getElementById
            let parent =  document.getElementById(kbid);
            let imgBroke = document.getElementById(img.id)
            console.log(imgBroke);
            imgBroke.remove();
            let img1 = document.createElement("img");
            img1.src = "https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp";
            img1.className = "card-img-top";
            img1.style = "height: 10rem"
            parent.prepend(img1);
        })
    }
    
    
})