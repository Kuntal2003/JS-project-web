let randomNum = Math.floor(Math.random() * 100) +1 ;
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const remaining = document.querySelector("#guessRem");
const restartButton = document.querySelector("#newGameButton");
const div = document.querySelector("#newGame");
let numberOfGuess = 10;
let playGame = true;
function showMessage(enteredMessage){
    const message = document.querySelector("#message");
    const span = document.createElement("span");
    span.classList = "font-new text-white text-4xl font-bold animate-fade-right animate-duration-[5000ms] animate-delay-500";
    span.innerHTML = `${enteredMessage}`;
    span.id = "message";
    message.replaceWith(span);
}
function guesses(preNumber){
    const box = document.querySelector("#previousGuess")
    let p = document.createElement("p");
    p.classList = "p-3  rounded-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 font-new text-white font-bold shadow-md shadow-black text-center animate-jump-in animate-once animate-duration-[1500ms]"
    p.innerHTML = `${preNumber}`
    box.appendChild(p);
}
// startOver()
function startOver(boolValue){
    
    if(boolValue){
        div.classList.remove("hidden");
        submit.classList.add("hidden");
    }
}
// startOver();
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        // console.log(numberOfGuess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        showMessage("Not a number...")
    }else if(guess < 1 || guess > 100){
        showMessage(" Range is 1 t0 100..")
    }else{
        numberOfGuess--;
        guesses(guess);
        if(numberOfGuess === 0){
            if(guess == randomNum){
                remaining.innerHTML = `${numberOfGuess}🔥`;
                checkGuess(guess);
            }else{
                remaining.innerHTML = ` 💔`;
                showMessage(`Game Over Buddy..... `);
                setTimeout(()=>{
                    showMessage(`Currect Number is ${randomNum}`);
                },5000);
                playGame = false;
                startOver(true);
            }
        }else{
            remaining.innerHTML = `${numberOfGuess}🔥`;
            checkGuess(guess);
            
        }
    }
}
function checkGuess(guess){
    userInput.value = "";
    if(guess === randomNum){
        showMessage(`You guess it Right..🙂`);
        startOver(true);
    }else if(guess < randomNum){
        showMessage(`Too Low...`);
    }else if(guess > randomNum){
        showMessage(`Too High...`);
    }
}
function newGame(){
    div.classList.add("hidden");
    submit.classList.remove("hidden");
    document.querySelector("#message").innerHTML = "";
    numberOfGuess = 10;
    remaining.innerHTML = `${numberOfGuess}🔥`;
    document.querySelector("#previousGuess").innerHTML = "";
    randomNum = Math.floor(Math.random() * 100) +1 ;
}
restartButton.addEventListener("click",()=>{
    playGame = true;
    newGame();
})
function play(){
    var audio = new Audio("song.mp3");
    audio.play();
}
setTimeout(()=>{
    play();
},1000)


console.log(randomNum);