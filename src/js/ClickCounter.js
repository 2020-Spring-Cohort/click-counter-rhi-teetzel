class ClickCounter{

    constructor(){
        this.clicksRecorded = 0;
    }
    
    handleClick(){
        this.clicksRecorded++;
    }
    
    getClickCount(){
        return this.clicksRecorded;
    }

    

}

