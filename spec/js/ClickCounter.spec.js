//"describe"
//describe(suite-title, callbackFunction() {})

//"it"
//it('defines behavior we expect', callbackFunction() {})

//"expect"
//expect(functionWeAreTesting(params))

describe('Cookie Counter Game', function(){

        describe('handleClick', function(){
            it('should record 1 for 1 click', function(){
                handleClick();
                expect(clicksRecorded).toBe(1);
            })

            it('should record 3 for 3 clicks', function(){
                handleClick();
                handleClick();
                handleClick();
                expect(clicksRecorded).toBe(3);
            })
        })







})