class ClickCounter{

    constructor(){
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderNumber = 0;
        this.compounderCost = 10;
    }
    
    handleClick(){
        this.clickCount += 1;
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


    addCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderNumber += 1;
            this.increaseCompounderCost();
        }
    }

    getCompounderNumber(){
        return this.compounderNumber;
    }

    increaseCompounderCost(){
        this.compounderCost += this.compounderCost * .1;
    }
    

}

