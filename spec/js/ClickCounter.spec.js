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
            clicksRecorded = 0;
        })

        describe('handleClick', function(){
            it('should record 1 for 1 click', function(){
                sut.handleClick();
                expect(sut.clicksRecorded).toBe(1);
            })

            it('should return 1 for 1 click', function(){
                sut.handleClick();
                expect(sut.getClickCount()).toBe(1);
            })
        
        })

        describe('Click Companion', function(){

            describe('addCompanion', function(){
                it('should be able to add a companion', function(){
                    sut.clicksRecorded = 100;
                    sut.addCompanion();
                    expect(sut.companionCount).toBe(1);
                })

                it('should deduct cost of companion from clicksRecorded', function(){
                    sut.clicksRecorded = 100;
                    sut.addCompanion();
                    expect(sut.clicksRecorded).toBe(0);
                })

                
                it('should increase cost of companion by 10% each time one is purchased', function(){
                    sut.clicksRecorded = 100;
                    sut.addCompanion();
                    expect(sut.companionCost).toBe(110)
                })

                it('should not allow user to buy companion without enough clicks', function(){
                    sut.clicksRecorded = 90;
                    sut.addCompanion();
                    expect(sut.companionCount).toBe(0)
                })
            })

            describe('getCompanionCount', function(){
                it('should return number of companions', function(){
                    sut.clicksRecorded = 100;
                    sut.addCompanion();
                    expect(sut.getCompanionCount()).toBe(1);
                })
            })

            describe('increaseCompanionCost', function(){
                it('should increase companion cost by 10%', function(){
                    sut.clicksRecorded = 100;
                    sut.increaseCompanionCost();
                    expect(sut.companionCost).toBe(110)

                })

            })


            
        })

    







})