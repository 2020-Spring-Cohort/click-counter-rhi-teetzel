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







})