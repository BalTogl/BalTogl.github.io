var SecretNumber= Math.floor(Math.random() * 100);
console.log(SecretNumber);
var Guess=0;
var GuessesRemain = 7;
var GuessesMade = 0;
var GameStatus= "";
var GameWinner= false;
var input=document.querySelector ("#input");
var output=document.querySelector ("#output");
var button=document.querySelector ("button");
button.addEventListener("click", clickCatcher, false);
var arrow = document.querySelector("#arrow");
window.addEventListener("keydown", keydownCatcher, false);
function keydownCatcher(event)
{
    if(event.keyCode===13)
    {
        VaLiDaToR();
    }
}
function clickCatcher()
{
    VaLiDaToR();
}
function VaLiDaToR()
{
    Guess=parseInt(input.value);
    if (isNaN(Guess))
    {
        output.innerHTML="You didn't enter a number!";
    }
    else
    {
        TheGameIsOn();
    }
}
function TheGameIsOn ()
{
    GuessesRemain -=1;
    GuessesMade +=1;
    GameStatus= " Сделано попыток:  " + GuessesMade + ". Осталось: "
    + GuessesRemain + ".";
    if (Guess>SecretNumber)
    {
     output.innerHTML="It's too big. Try again!" + GameStatus;
     if (GuessesRemain<1)
     {
        GameEnd ();
     }
    }
    else if (Guess<SecretNumber)
         {
            output.innerHTML= "Oh...It'so small!Try again!"+ GameStatus;
            if (GuessesRemain<1)
           {
            GameEnd ();
           }
         }
         else
            {
                GameWinner= true;
                GameEnd ();
            }
}
function GameEnd ()
{
    if (GameWinner===true)
    {
        output.innerHTML="My avations! You're a winner. The right answer was "+SecretNumber + "<br>"+
        "You tried this " + GuessesMade + " timeMy avations!You're a winner. The right answer wass!";
    }
    else
    {
        output.innerHTML="The game is over! You lost!" + "<br>"+
        "It was "+SecretNumber ;
    }
    button.removeEventListener("click", clickCatcher, false);
    button.disabled=true;
    window.removeEventListener("keydown", keydownHandler, false);
    input.disabled=true;
    render();
}
function render()
{
arrow.style.left = playersGuess * 3 + "px";
}
