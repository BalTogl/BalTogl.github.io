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
button.style.cursor= "help";
button.addEventListener("click", clickCatcher, false);
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
        output.innerHTML="BAD A** N***A ENTER A NUMBER";
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
     output.innerHTML="WOOW TOOOOOOO BIG N***A" + GameStatus;
     if (GuessesRemain<1)
     {
        GameEnd ();
     }
    }
    else if (Guess<SecretNumber)
         {
            output.innerHTML= "Oh... It's... So small?"+ GameStatus;
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
        output.innerHTML="OH YEAH BABY YOU ARE THE WINNER. It was "+SecretNumber + "<br>"+
        "You tried this " + GuessesMade + " times!";
    }
    else
    {
        output.innerHTML="LOSEEEEEEEEEEEEEEEEEEEEEEER. " + "<br>"+
        "It was "+SecretNumber ;
    }
    button.removeEventListener("click", clickCatcher, false);
    button.disabled=true;
    window.removeEventListener("keydown", keydownHandler, false);
    input.disabled=true;
}