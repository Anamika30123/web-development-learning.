let userscore =0;
let compscore =0;

const choices =document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userscorePara = document.querySelector('#user-score');
const compscorePara = document.querySelector('#comp-score');


const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

  const showWinner =(userWin,Userchoice,compchoice) => {
    if(userWin){
       userscore++;
       userscorePara.innerText = userscore;
       msg.innerText = `You won!  Yours ${Userchoice} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
    }else{
      compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lose! ${compchoice} beats your ${Userchoice}`;
        msg.style.backgroundColor = "red";  
    }

};

     const playGame = (userchoice) => {
        console.log("user choice", userchoice);
        const compchoice = gencomchoice();
        console.log("comp choice = ", compchoice);

        if (userchoice === compchoice) {
            drawGame();
        }else{
            let UserWin = true;

            if(userchoice == "rock")
            {
                UserWin = compchoice === "paper" ? false : true;
            } else if(userchoice == "paper"){
                UserWin = compchoice === "scissors" ? false : true;
            }else{

             UserWin = compchoice === "rock" ? false : true;
            }
            showWinner(UserWin, userchoice, compchoice);
        }
     };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       console.log("choice clicked", userchoice);
       playGame(userchoice);
    });
});