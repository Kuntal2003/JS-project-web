const jslogo = document.querySelector("#jsLogo");
const myphoto = document.querySelector("#nextPageImg");
const mainContent = document.querySelector("#mainContent");
const nextpage = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        jslogo.remove();
        resolve();
    },2500)
})
nextpage.then(()=>{
    mainContent.classList.remove("hidden")
})
// nextpage.then(()=>{
//     myphoto.innerHTML = `
//         <img src="./img/ChatGPT Image Sep 21, 2025, 02_09_47 AM (1).png" class="h-[100vh]  animate-fade animate-once animate-duration-[2000ms] animate-ease-in" alt="">`
// }).then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             myphoto.remove();
//             resolve();
//         },2000)
//     })
// }).then(()=>{
//     mainContent.classList.remove("hidden")
// })

console.log(jslogo)