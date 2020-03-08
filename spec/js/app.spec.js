describe('app.js manipulates DOM', () => {
    let testClickCounter;
    let testClickButton;
    let testClickCount;
    let testCompanionCost;
    let testCompanionButton;
    let testCompanionCount;
    let testCompounderCost;
    let testCompounderButton;
    let testCompounderCount;

    beforeEach(() => {
        testClickCounter = new ClickCounter();
        testClickButton = document.createElement('button');
        testClickCount = document.createElement('div');
        testCompanionCost = document.createElement('div');
        testCompanionButton = document.createElement('button');
        testCompanionCount = document.createElement('div');
        testCompounderCost = document.createElement('div');
        testCompounderButton = document.createElement('button');
        testCompounderCount = document.createElement('div');
        makeClickButton(testClickButton, testClickCount, testClickCounter);
        makeCompanionButton(testCompanionButton, testCompanionCount, testCompanionCost, testClickCounter);
        makeCompounderButton(testCompounderButton, testCompounderCount, testCompounderCost, testClickCounter);
    })
    describe('main click functions', () => {
        it('should show 0 in testClickCount element before any clicks are performed', () => {
            updateClickCount(testClickCount, testClickCounter);
            expect(testClickCount.innerText).toBe('0');
        })
        it('should show 1 in testClickCount element after one click is performed', () => {
            testClickButton.click();
            updateClickCount(testClickCount, testClickCounter);
            expect(testClickCount.innerText).toBe('1');
        })
        describe('makeClickButton() deploys with each click', () => {
            it('should update testClickCount after button is clicked', () => {
                testClickButton.click();
                expect(testClickCounter.getClickCount()).toBe(1);
            })
            it('should update innerText testClickCount after button is clicked', () => {
                testClickButton.click();
                expect(testClickCount.innerText).toBe('1');
            })
        })
    })
    describe('makeCompanionButton() deploys when clicked', () => {
        it('should add 1 to companionCount', () => {
            testClickCounter.clickCount = 100;            
            testCompanionButton.click();
            expect(testClickCounter.getCompanionCount()).toBe(1);
        })
        it('should update innerText of testCompanionCount after companion added', () => {
            testClickCounter.clickCount = 100;
            makeCompanionButton(testCompanionButton, testCompanionCount, testCompanionCost, testClickCounter);
            testCompanionButton.click();
            expect(testCompanionCount.innerText).toBe('1');
        })
        it('should deduct clicks from testClickCount when companion is bought', () => {
            testClickCounter.clickCount = 100;
            testCompanionButton.click();
            expect(testClickCounter.getClickCount()).toBe(0);
        })
        it('should increase companion cost by 10% after addCompanion is clicked', () => {
            testClickCounter.clickCount = 100;
            testClickCounter.addCompanion();
            updateCompanionCost(testCompanionCost, testClickCounter);
            expect(testCompanionCost.innerText).toBe('110');
        })
    })

    describe('makeCompounderButton() deploys when clicked', () => {
        it('should add 1 to compounderCount', () => {
            testClickCounter.clickCount = 10;
            testCompounderButton.click();
            expect(testClickCounter.getCompounderCount()).toBe(1);
        })
        it('should update innerText of testCompounderCount after compounder added', () => {

        })
        it('should deduct clicks from testClickCount when compounder is bought', () => {

        })
        it('should increase compounderCost by 10% after addCompounder is clicked', () => {

        })
    })
    


});
