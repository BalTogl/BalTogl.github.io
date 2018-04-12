var AlienX = Math.floor(Math.random() * 280);
var AlienY = 20;
var FireX = 0;
var FireY = 0;
var ShotsRemain = 8;
var ShotsMade = 0;
var GameStatus = "";
var GameWinner = false;
var cannon = document.querySelector("#cannon");
var alien = document.querySelector("#alien");
var missile = document.querySelector("#missile");
var inputX = document.querySelector("#inputX");
var inputY = document.querySelector("#inputY");
var output = document.querySelector("#output");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickCatcher, false);
window.addEventListener("keydown", keydownCatcher, false);
function render()
{
alien.style.left = AlienX + "px";
alien.style.top = AlienY + "px";
cannon.style.left = FireX + "px";
missile.style.left = FireX + "px";
missile.style.top = FireY + "px";
}
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
    FireX = parseInt(inputX.value);
    FireY = parseInt(inputY.value);
    if(isNaN(FireX, FireY))
    {
    output.innerHTML ="Please enter a coordinate!";
    }
    else if(FireX < 0 || FireX > 280 || FireY < 0 || FireY>250)
        {
        output.innerHTML ="Comrade, ENTER A  CORRECT COORDINATE FASTER!";
        }
        else
        {
        TheGameIsOn();
        }
}
function TheGameIsOn ()
{
    ShotsRemain -= 1;
    ShotsMade += 1;
    GameStatus = "<br>Выстрелы: " + ShotsMade + ". Осталось: "
    + ShotsRemain + ".";
    if(FireX >= AlienX && FireX <= AlienX + 20)
        {
        if(FireY >= AlienY && FireY <= AlienY + 20)
            {
            GameWinner = true;
            GameEnd();
            }
        }
    else
        {
        output.innerHTML = "Мимо!" + GameStatus;
        if (ShotsRemain < 1)
            {
            GameEnd();
            }
        }
if(!GameWinner)
    {
    AlienX = Math.floor(Math.random() * 280);
    AlienY += 30;
    }
render();
console.log("X: " + AlienX);
console.log("Y: " + AlienY);
}
function GameEnd ()
{
    if(GameWinner)
        {
        output.innerHTML= "Победа! Вы спасли планету!" + "<br>"
        + "Израсходовано ракет: " + ShotsMade + ".";
        }
    else
        {
        output.innerHTML= "Вы проиграли!" + "<br>" + "Вторжение началось!";
        }
    button.removeEventListener("click", clickCatcher, false);
    button.disabled=true;
    window.removeEventListener("keydown", keydownHandler, false);
    input.disabled=true;
}