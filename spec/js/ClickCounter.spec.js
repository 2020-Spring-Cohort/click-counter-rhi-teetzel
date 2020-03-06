//"describe"
//describe(suite-title, callbackFunction() {})

//"it"
//it('defines behavior we expect', callbackFunction() {})

//"expect"
//expect(functionWeAreTesting(params))

describe('Cookie Counter Game', function(){

    let sut;

        beforeEach(function(){
            sut = new ClickCounter();
            this.clickCount = 0;
        })

        describe('handleClick', function(){
            it('should record 1 for 1 click', function(){
                sut.handleClick();
                expect(sut.clickCount).toBe(1);
            })

            it('should return 1 for 1 click', function(){
                sut.handleClick();
                expect(sut.getClickCount()).toBe(1);
            })
        })

        describe('Click Companion', function(){

            describe('addCompanion', function(){
                it('should be able to add a companion', function(){
                    sut.clickCount = 100;
                    sut.addCompanion();
                    expect(sut.companionCount).toBe(1);
                })

                it('should deduct cost of companion from clickCount', function(){
                    sut.clickCount = 100;
                    sut.addCompanion();
                    expect(sut.clickCount).toBe(0);
                })

                
                it('should increase cost of companion by 10% each time one is purchased', function(){
                    sut.clickCount = 100;
                    sut.addCompanion();
                    expect(sut.companionCost).toBe(110)
                })

                it('should not allow user to buy companion without enough clicks', function(){
                    sut.clickCount = 90;
                    sut.addCompanion();
                    expect(sut.companionCount).toBe(0)
                })
            })

            describe('getCompanionCount', function(){
                it('should return number of companions', function(){
                    sut.clickCount = 100;
                    sut.addCompanion();
                    expect(sut.getCompanionCount()).toBe(1);
                })
            })

            describe('increaseCompanionCost', function(){
                it('should increase companion cost by 10%', function(){
                    sut.clickCount = 100;
                    sut.increaseCompanionCost();
                    expect(sut.companionCost).toBe(110)

                })
            })

            describe('addCompanionCountToClickCount', function(){
                it('should add companion count to click count', function(){
                    sut.clickCount = 100;
                    sut.addCompanion();
                    sut.addCompanionCountToClickCount();
                    expect(sut.clickCount).toBe(1);
                })

                it('should add companion count to click value for total click count', function(){
                    sut.clickCount = 110;
                    sut.addCompanion();
                    sut.addCompounder();
                    sut.addCompanionCountToClickCount();
                    expect(sut.clickValue).toBe(1.2);
                })
            })
        })

        describe('CollectiveCulminationCompounder', function(){
            
            describe('addCompounder', function(){
                it('should add 1 compounder to compounderNumber', function(){
                    sut.clickCount = 100;
                    sut.addCompounder();
                    expect(sut.compounderNumber).toBe(1);
                })

                it('should deduct 10 from clickcount', function(){
                    sut.clickCount = 100;
                    sut.addCompounder();
                    expect(sut.clickCount).toBe(90);
                })

                it('add compounder should increase compounderCost by 10%', function(){
                    sut.clickCount = 100;
                    sut.addCompounder();
                    expect(sut.compounderCost).toBe(11);
                })

                it('should not allow user to buy compounder without 10 clickcount', function(){
                    sut.clickCount = 9;
                    sut.addCompounder();
                    expect(sut.compounderNumber).toBe(0);

                })
            })          

            describe('getCompounderNumber', function(){
                it('should return number of compounders', function(){
                    sut.clickCount = 100;
                    sut.addCompounder();                    
                    expect(sut.getCompounderNumber()).toBe(1);
                })
            })

            describe('increaseClickValue', function(){
                it('should increase click value by 20%', function(){
                    sut.clickCount = 1;
                    sut.increaseClickValue();
                    expect(sut.clickValue).toBe(1.2);
                })
            })
        })
    
});

describe('app.js manipulates DOM', () => {
    let sut;
    let testClickHandler;
    let testClickCount;
    let testCompanionBuy;
    let testCompanionCount;
    let testCompounderBuy;
    let testCompounderCount;

    beforeEach(() => {
        testClickCounter = new ClickCounter();
        testClickHandler = document.createElement('button');
        testClickCount = document.createElement('div');
        testCompanionBuy = document.createElement('button');
        testCompanionCount = document.createElement('div');
        testCompounderBuy = document.createElement('button');
        testCompounderCount = document.createElement('div');
})
    describe('main click functions', ()=>{
        it('should show 0 in testClickCount element before any clicks are performed',()=>{
            updateClickCount(testClickCount, testClickCounter);
            expect(testClickCount.innerText).toBe('0');
        })
    })
});
