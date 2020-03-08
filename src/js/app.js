

const updateClickCount = (clickCount, appClickCounter) => {
    clickCount.innerText = appClickCounter.getClickCount();
}

const updateCompanionCount = (companionCount, appClickCounter) => {
    companionCount.innerText = appClickCounter.getCompanionCount();
}

const updateCompanionCost = (companionCost, appClickCounter) => {
    companionCost.innerText = appClickCounter.getCompanionCost();
}

const updateCompounderCount = (compounderCount, appClickCounter) => {
    compounderCount.innerText = appClickCounter.getCompounderCount();
}

const updateCompounderCost = (compounderCost, appClickCounter) => {
    compounderCost.innerText = appClickCounter.getCompounderCost();
}

const makeClickButton = (cookieButton, clickCount, appClickCounter) => {
    cookieButton.addEventListener('click', function(){
        appClickCounter.handleClick();
        updateClickCount(clickCount, appClickCounter);
    })
}

const makeCompanionButton = (companionButton, companionCount, companionCost, appClickCounter) => {
    companionButton.addEventListener('click', function(){
        appClickCounter.addCompanion();
        updateCompanionCount(companionCount, appClickCounter);
        updateCompanionCost(companionCost, appClickCounter);
    })
}

const makeCompounderButton = (compounderButton, compounderCount, compounderCost, appClickCounter) => {
    compounderButton.addEventListener('click', function(){
        appClickCounter.addCompounder();
        updateCompounderCount(compounderCount, appClickCounter);
        updateCompounderCost(compounderCost, appClickCounter);
    })
}

const autoClicker = setInterval(autoClick, 1000);

function autoClick(){
    appClickCounter.addCompanionCountToClickCount();
    updateClickCount(clickCount, appClickCounter);
}

const clickCount = document.querySelector('.click-count');
const cookieButton = document.querySelector('.cookie-button');

const companionCount = document.querySelector('.companion-count');
const companionCost = document.querySelector('.companion-cost');
const companionButton = document.querySelector('.companion-button');

const compounderCount = document.querySelector('.compounder-count');
const compounderButton = document.querySelector('.compounder-button');
const compounderCost = document.querySelector('.compounder-cost');
const appClickCounter = new ClickCounter();

makeClickButton(cookieButton, clickCount, appClickCounter);
makeCompanionButton(companionButton, companionCount, companionCost, appClickCounter);
makeCompounderButton(compounderButton, compounderCount, compounderCost, appClickCounter);
updateClickCount(clickCount, appClickCounter);
updateCompanionCount(companionCount, appClickCounter);
updateCompanionCost(companionCost, appClickCounter);
updateCompounderCount(compounderCount, appClickCounter);