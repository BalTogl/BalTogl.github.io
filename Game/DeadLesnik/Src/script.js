var map = [];
map[0] = "Старый камень.";
map[1] = "Глубокий колодец.";
map[2] = "Солнечная поляна.";
map[3] = "Спящий дракон.";
map[4] = "Узкая тропинка.";
map[5] = "Древние ворота.";
map[6] = "Берег реки.";
map[7] = "Одинокая деревянная скамья.";
map[8] = "Отдельный коттедж. Слабая музыка слышится изнутри.";
var images = [];
images[0] = "keep.jpg";
images[1] = "well.jpg";
images[2] = "glade.jpg";
images[3] = "dragon.jpg";
images[4] = "path.jpg";
images[5] = "gate.jpg";
images[6] = "river.jpg";
images[7] = "bench.jpg";
images[8] = "cottage.jpg";
var blockedPathMessages = [];
blockedPathMessages[0] = "Что-то про смерть и вечные адовые муки. Лучше к маме домой";
blockedPathMessages[1] = "Вылез осёл из притчи, громко ругался и брыкался. Не пойдёт";
blockedPathMessages[2] = "Солнце прибыло прямиком из Сахары, а вот та птица вроде только что была не гриль. В другую сторону?";
blockedPathMessages[3] = "И куда мы прём через дракона? Не-не-не, спасибо";
blockedPathMessages[4] = "А вы тоже думаете, на кой тут эта надпись?";
blockedPathMessages[5] = "Не распечатано, милорд. Поищите другую... пристань";
blockedPathMessages[6] = "Но нееее тааак глубокааа, каааак... Глубоковато, в общем";
blockedPathMessages[7] = "Скамья. Из бревна. Ещё и одинокая. Не тот фронт работ, другую сторону выбираем";
blockedPathMessages[8] = "Я знаю фильм, который начинается точно также.... И в него не хочу... Да и замок знакомый...";
var items = ["камень"];
var itemLocations = [6];
var itemsIKnow = ["барабан", "камень", "меч"];
var item = "";
var backpack= [];
var image = document.querySelector("img");
var mapLocation = 4;
var playersInput = "";
var gameMessage = "";
var actionsIKnow = ["север", "восток", "юг", "запад", "взять","использовать", "выбросить"];
var action = "";
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
render();
function clickHandler()
    {
        playGame();
    }
function playGame()
{
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();
    gameMessage = "";
    action = "";
    for(i = 0; i < actionsIKnow.length; i++)
    {
        if(playersInput.indexOf(actionsIKnow[i]) !== -1)
        {
        action = actionsIKnow[i];
        console.log("Действие игрока: " + action);
        break;
        }
    }
    for(i = 0; i < itemsIKnow.length; i++)
    {
        if(playersInput.indexOf(itemsIKnow[i]) !== -1)
        {
        item = itemsIKnow[i];
        console.log("Выбранный игроком предмет: " + item);
        }
    }
        switch(action)
        {
        case "север":
        if(mapLocation >= 3)
            {
                mapLocation -= 3;
            }
        else
            {
                gameMessage = blockedPathMessages[mapLocation];
            }
        break;
        case "восток":
        if(mapLocation % 3 != 2)
        {
        mapLocation += 1;
        }
        else
        {
        gameMessage = blockedPathMessages[mapLocation];
        }
        break;
        case "юг":
        if(mapLocation < 6)
        {
        mapLocation += 3;
        }
        else
        {
        gameMessage = blockedPathMessages[mapLocation];
        }
        break;
        case "запад":
        if(mapLocation % 3 != 0)
        {
        mapLocation -= 1;
        }
        else
        {
        gameMessage = blockedPathMessages[mapLocation];
        }
        break;
        case "взять":
        takeItem();
        break;
        case "выбросить":
        dropItem();
        break;
        case "использовать":
        useItem();
        break;
        default:
        gameMessage = "Я этого не понимаю.";
        }
        render();
    }
function takeItem()
{
var itemIndexNumber = items.indexOf(item);
if(itemIndexNumber !== -1 && itemLocations[itemIndexNumber] === mapLocation)
    {
    gameMessage = "Вы взяли " + item + ".";
    backpack.push(item);
    items.splice(itemIndexNumber, 1);
    itemLocations.splice(itemIndexNumber, 1);
    console.log("Предметы МИРА: " + items);
    console.log("Предметы РЮКЗАКА: " + backpack);
    }
else
    {
    gameMessage = "Вы не можете это сделать.";
    }
}
function dropItem()
{
    if(backpack.length !== 0)
    {
        var backpackIndexNumber = backpack.indexOf(item);
        if(backpackIndexNumber !== -1)
            {
            gameMessage = "Вы бросили " + item + ".";
            items.push(backpack[backpackIndexNumber]);
            itemLocations.push(mapLocation);
            backpack.splice(backpackIndexNumber, 1);
            }
        else
        {
        gameMessage = "Вы не можете это сделать.";
        }
    }
    else
    {
    gameMessage = "У вас нечего нет.";
    }
}
function useItem()
{
    var backpackIndexNumber = backpack.indexOf(item);
    if(backpackIndexNumber === -1)
        {
        gameMessage = "У вас этого нет.";
        }
    if(backpack.length === 0)
        {
        gameMessage += " У вас ничего нет";
        }
    if(backpackIndexNumber !== -1)
        {
        switch(item)
            {
                case "меч":
                if(mapLocation === 3)
                    {
                    gameMessage = "Вы замахиваетесь и падаете, полуторный бастард дело нелегкое. Но дракон с этого нехило угорел. ";
                    gameMessage += "За хороший стендап можно и лес сохранить. Конгратилюэшнс";
                    }
                else
                    {
                    gameMessage = "Ага. Окей. И что делать будем с этим? Зубы чистить?"
                    }
                break;
                case "барабан":
                if(mapLocation === 8)
                    {
                    gameMessage = "Музыка в доме оказывается просто была среднего качества, а то уж надумали.";
                    gameMessage += "Измученный старик выходит на улицу. Ееееееееееееееееее рок и зрители. "
                    gameMessage += "БОЖЕЧКИ ОН КИНУЛ В МЕНЯ МЕЧ. ВОТ ВЕДЬ БЛАГОДАРНЫЙ ПАРЕНЬ";
                    items.push("меч");
                    itemLocations.push(mapLocation);
                    }
                else
                    {
                    gameMessage = "Положи. Это. На. Место. И скорее беги искать группу, лучший баранщик whenever,"
                    gameMessage += " но никто не слышит этого великолепия. Зрителя бы";
                    }
                break;
                case "камень":
                if(mapLocation === 1)
                {
                gameMessage = " Вы бросили камень в колодец. Не очень умно.";
                gameMessage += " Но всем везёт, кто-то ещё более умный кинул туда барабан";
                backpack.splice(backpackIndexNumber, 1);
                items.push("барабан");
                itemLocations.push(mapLocation);
                }
                else
                {
                gameMessage = "Вы вертите камень в руках. Может ли он плотить нологи и нырять в воду?";
                }
                break;
                }
            }
}
function render()
{
output.innerHTML = map[mapLocation];
image.src = "../Image/" + images[mapLocation];
for(var i = 0; i < items.length; i++)
    {
    if(mapLocation === itemLocations[i])
        {
        output.innerHTML+= "<br>Вы видите здесь <strong>" + items[i] + "</strong>.";
        }
    }
output.innerHTML += "<br><em>" + gameMessage + "</em>";
if(backpack.length !== 0)
    {
    output.innerHTML += "<br>Вы несете: "+ backpack.join(", ") ;
    }
}