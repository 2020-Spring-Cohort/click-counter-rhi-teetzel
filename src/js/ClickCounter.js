class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.clickValue = 1;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
        
    }
    
    handleClick(){
        this.clickCount = this.clickValue + this.clickCount;
    }    
    getClickCount(){
        return this.clickCount;
    }

    
    addCompanion(){
        if(this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost; 
            this.companionCount+= 1;
            this.increaseCompanionCost();
        }
    }    

    getCompanionCount(){
        return this.companionCount;
    }

    increaseCompanionCost(){
        this.companionCost += this.companionCost * .1;
    }

    addCompanionCountToClickCount(){
        this.clickCount = this.clickCount + this.companionCount*this.clickValue;
    }


    addCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderNumber += 1;
            this.increaseCompounderCost();
            this.increaseClickValue();
        }
    }

    getCompounderNumber(){
        return this.compounderNumber;
    }

    increaseCompounderCost(){
        this.compounderCost += this.compounderCost * .1;
    }
    
    increaseClickValue(){
        this.clickValue = this.clickValue + this.clickValue * .2;
    }
    

}

const appClickCounter = new ClickCounter();

const updateClickCount = (clickCount, appClickCounter)=>{
    clickCount.innerText = appClickCounter.getClickCount();
}


const clickCount = document.querySelector('.click-count');
const cookieButton = document.querySelector('.cookie-button');

const companionCount = document.querySelector('.companion-count');
const companionCost = document.querySelector('.companion-cost');
const companionButton = document.querySelector('.companion-button');

const compounderCount = document.querySelector('.compounder-count');
const compounderButton = document.querySelector('.compounder-button');
const compounderCost = document.querySelector('.compounder-cost');



