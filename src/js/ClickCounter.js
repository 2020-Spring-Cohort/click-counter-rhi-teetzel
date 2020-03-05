class ClickCounter{

    constructor(){
        this.clicksRecorded = 0;
        this.companionCount = 0;
        this.companionCost = 100;
    }
    
    handleClick(){
        this.clicksRecorded++;
    }
    
    getClickCount(){
        return this.clicksRecorded;
    }

    getCompanionCount(){
        return this.companionCount;
    }

    addCompanion(){
        if(this.clicksRecorded >= this.companionCost){
            this.clicksRecorded -= this.companionCost; 
            this.companionCount++;
            this.increaseCompanionCost();
        }
        
    }

    increaseCompanionCost(){
        this.companionCost += this.companionCost * .1;
    }

    

}

