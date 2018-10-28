require('../Utilities/CustomLocators.js');
var HomePage =  require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');

describe('Bank Manager', () => {

    describe('Manager Login', () => {
    
    beforeEach(function(){
        Base.navigateToHome();
    });

        it('should have correct page title', () => {
         expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
        });

        it('should display home button', () => {
            expect(HomePage.homeButton.isDisplayed()).toBe(true);
            expect(HomePage.homeButton.getText()).toEqual('Home');
        });

        it('should display page header', () => {
            expect(HomePage.pageHeader.isDisplayed()).toBe(true);
            expect(HomePage.pageHeader.getText()).toEqual(BankData.appData.bankName);
        });

        it('should display login option for Bank Manager', () => {
            expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
            expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        });

        it('should stay at the homepage when Home Button is clicked', () => {
            HomePage.homeButton.click();
            expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
            expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        });

        it("should login as Bank Manager",function(){  
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
        }) ;

        it('should display  options for manager', () => {
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.openAccountButton.getText()).toEqual('Open Account');
            expect(BankManagerPage.customersButton.isDisplayed()).toBe(true);
        });


        it('should navigate back to home page from Manager Login Page', () => {
            HomePage.managerLoginButton.click();
            HomePage.homeButton.click();
            expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        });

});


    



});