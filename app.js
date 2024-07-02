// Variables to store score & keep track of win
let user = 0;
let comp = 0;
let userWin = true;
// Accessing all the required elements
let choices = document.querySelectorAll(".choices");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let result = document.querySelector("#result");
// Score calculating function
const score = (userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScore.innerText=user;
        result.innerText=`You Won! Your ${userChoice} beats Computer's ${compChoice}`;
        result.style.backgroundColor = "green";
    }else{
        comp++;
        compScore.innerText=comp;
        result.innerText=`You lose! Computer's ${compChoice} beats Your ${userChoice}`;
        result.style.backgroundColor = "red";
    }
}
// Draw function
const draw = ()=>{
    result.innerText = "Game was draw ";
    result.style.backgroundColor = "#3a0ca3";
}
// GamePlay function
const gamePlay = (userChoice)=>{
    // storing each options in an array and using math fns to choose a random option for computer
    const options = ["rock","paper","scissor"];
    const compChoice = options[Math.floor(Math.random()*3)];
    if(userChoice===compChoice){
        draw();
    }else{
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true; 
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        score(userWin,userChoice,compChoice);
    }
}
// Accessing each choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // Gameplay using user's choice
        gamePlay(userChoice);
    });
});