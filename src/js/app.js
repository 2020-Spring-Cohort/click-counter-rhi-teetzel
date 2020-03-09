

const updateClickCount = (clickCount, appClickCounter) => {
    clickCount.innerText = Math.round(appClickCounter.getClickCount());     
}

const updateCompanionCount = (companionCount, appClickCounter) => {
    companionCount.innerText = Math.round(appClickCounter.getCompanionCount());
}

const updateCompanionCost = (companionCost, appClickCounter) => {
    companionCost.innerText = Math.round(appClickCounter.getCompanionCost());
}

const updateCompounderCount = (compounderCount, appClickCounter) => {
    compounderCount.innerText = Math.round(appClickCounter.getCompounderCount());
}

const updateCompounderCost = (compounderCost, appClickCounter) => {
    compounderCost.innerText = Math.round(appClickCounter.getCompounderCost());
}

const makeClickButton = (cookieButton, clickCount, appClickCounter) => {
    cookieButton.addEventListener('click', function(){
        appClickCounter.handleClick();
        updateClickCount(clickCount, appClickCounter);
        enableCompanionButton();
        enableCompounderButton();
    })
}

const makeCompanionButton = (companionButton, companionCount, companionCost, appClickCounter) => {
    companionButton.addEventListener('click', function(){
        appClickCounter.addCompanion();
        updateCompanionCount(companionCount, appClickCounter);
        updateCompanionCost(companionCost, appClickCounter);
        enableCompanionButton();
        enableCompounderButton();
    })
}

const makeCompounderButton = (compounderButton, compounderCount, compounderCost, appClickCounter) => {
    compounderButton.addEventListener('click', function(){
        appClickCounter.addCompounder();
        updateCompounderCount(compounderCount, appClickCounter);
        updateCompounderCost(compounderCost, appClickCounter);
        enableCompanionButton();
        enableCompounderButton();
    })
}

const autoClicker = setInterval(autoClick, 1000);

function autoClick(){
    appClickCounter.addCompanionCountToClickCount();
    updateClickCount(clickCount, appClickCounter);
    enableCompanionButton();
    enableCompounderButton();
}



const makeResetButton = (resetButton) => {
    resetButton.addEventListener('click', function(){
        location.reload();
    })
}

function showAboutMe(){
    if(aboutMe.style.display === "block") {
        aboutMe.style.display = "none"
    }
    else{
        aboutMe.style.display = "block"
    }
}

function showAboutCompany(){
    if(aboutCompany.style.display === "block"){
        aboutCompany.style.display = "none"
    }
    else{
        aboutCompany.style.display = "block"
    }
}

function enableCompounderButton() {
    if (appClickCounter.clickCount >= appClickCounter.compounderCost) {
        compounderButton.removeAttribute('disabled')
    } 
    else {
        compounderButton.disabled = true
    }
}

function enableCompanionButton() {
    if (appClickCounter.clickCount >= appClickCounter.companionCost) {
        companionButton.removeAttribute('disabled')
    } 
    else {
        companionButton.disabled = true
    }
}
    
const appClickCounter = new ClickCounter();
const aboutMe = document.getElementById("about-Me");
const aboutCompany = document.getElementById("about-Company");
const resetButton = document.querySelector('#reset-button');
const clickCount = document.querySelector('.click-count');
const cookieButton = document.querySelector('.cookie-button');

const companionCount = document.querySelector('.companion-count');
const companionCost = document.querySelector('.companion-cost');
const companionButton = document.querySelector('#companion-button');

const compounderCount = document.querySelector('.compounder-count');
const compounderButton = document.querySelector('#compounder-button');
const compounderCost = document.querySelector('.compounder-cost');


makeClickButton(cookieButton, clickCount, appClickCounter);
makeCompanionButton(companionButton, companionCount, companionCost, appClickCounter);
makeCompounderButton(compounderButton, compounderCount, compounderCost, appClickCounter);
makeResetButton(resetButton, appClickCounter);
updateClickCount(clickCount, appClickCounter);
updateCompanionCount(companionCount, appClickCounter);
updateCompanionCost(companionCost, appClickCounter);
updateCompounderCount(compounderCount, appClickCounter);