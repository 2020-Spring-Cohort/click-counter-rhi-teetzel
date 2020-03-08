class ClickCounter {

    constructor() {
        this.clickCount = 0;
        this.clickValue = 1;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;

    }

    handleClick() {
        this.clickCount = this.clickValue + this.clickCount;
    }
    getClickCount() {
        return this.clickCount;
    }


    addCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount = this.clickCount - this.companionCost;
            this.companionCount++;
            this.increaseCompanionCost();
        }
    }

    getCompanionCount() {
        return this.companionCount;
    }

    getCompanionCost() {
        return this.companionCost;
    }

    increaseCompanionCost() {
        this.companionCost = this.companionCost + this.companionCost * .1;
    }

    addCompanionCountToClickCount() {
        this.clickCount = this.clickCount + this.companionCount * this.clickValue;
    }


    addCompounder() {
        if (this.clickCount >= this.compounderCost) {
            this.clickCount = this.clickCount - this.compounderCost;
            this.compounderCount++;
            this.increaseCompounderCost();
            this.increaseClickValue();
        }
    }

    getCompounderCount() {
        return this.compounderCount;
    }

    getCompounderCost(){
        return this.compounderCost;
    }

    increaseCompounderCost() {
        this.compounderCost = this.compounderCost + this.compounderCost * .1;
    }

    increaseClickValue() {
        this.clickValue = this.clickValue + this.clickValue * .2;
    }


}





