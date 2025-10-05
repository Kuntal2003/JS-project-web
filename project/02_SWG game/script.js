// 1==snake
// 2==water
// 3==gun


let computerInput = Math.floor(Math.random()*3)+1;
const win = (user,computer) =>{
    if(user == 's' && computer == '1' || user == 'w' && computer == '2' || user == 'g' && computer == '3'){
        return 'draw';
    }
    switch(user) {
        case 's':
            switch(computer){
                case 2:
                    return true;
                case 3:
                    return false;        
            }
            break;
        case 'w':
            switch(computer){
                case 1:
                    return false;
                case 3:
                    return true;;        
            }
            break;
        case 'g':
            switch(computer){
                case 1:
                    return true;;
                case 2:
                    return false;        
            }    
    }
    
}

let computersnake = document.getElementById("computerSnake");
let computerwater = document.getElementById("computerWater");
let computerGun = document.getElementById("computerGun");
const computerGuess = (computerInput1) =>{
    switch(computerInput1){
        case 1:
            console.log('snake');
            computersnake.style.display = "block"
            break
        case 2:
            console.log('water');
            computerwater.style.display = "block"
            break
        case 3:
            console.log('gun');
            computerGun.style.display = "block"    
            break
    }
}
let usersnake = document.getElementById("userSnake");
let userwater = document.getElementById("userWater"); 
let usergun = document.getElementById("userGun");
const userGuess = (userInput1) =>{
    switch(userInput1){
        case 's':
            console.log('snake');
            usersnake.style.display = "block";
            break
        case 'w':
            console.log('water');
            userwater.style.display = "block";
            break
        case 'g':
            console.log('gun');    
            usergun.style.display = "block";
            break
    }
}
let userInput = prompt("Enter your choice \n 's' = SNAKE \n 'w' = WATER \n 'g' = GUN ");
let won = document.getElementById("win");
let lose = document.getElementById("lose");
let draw = document.getElementById("draw");
userInput.toLowerCase();
const checkUserInput = (userInputcheck) =>{
    if(userInputcheck == 's' || userInputcheck == 'w' || userInputcheck == 'g'){
        userGuess(userInput);
        computerGuess(computerInput);
        switch(win(userInput,computerInput)){
            case true:
                won.style.display = "block";
                break
            case false:
                lose.style.display = "block";
                break
            case 'draw':
                draw.style.display = "block";

        }
        console.log(win(userInput,computerInput));
    }else{
        alert("Wrong Input");
    }
}
checkUserInput(userInput)

