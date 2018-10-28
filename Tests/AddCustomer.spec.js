require('../Utilities/CustomLocators.js');
var HomePage =  require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');



describe('Add Customer', () => {
    
    describe('Adding a Customer', () => {
        beforeAll(function(){
            Base.navigateToHome();
            HomePage.managerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
        });


        it('should display form for Adding Customer', () => {
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });

        it('should list all the labels', () => {
            expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
            expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
            expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');
        });

        it('should require firstname', () => {
            expect(AddCustomerPage.formRequiredFields.get(0)
            .getAttribute('required')).toEqual('true');
        });

        it('should require lastname', () => {
            expect(AddCustomerPage.formRequiredFields.get(1)
            .getAttribute('required')).toEqual('true');
        });

        it('should require postcode', () => {
            expect(AddCustomerPage.formRequiredFields.get(2)
            .getAttribute('required')).toEqual('true');
        });


       it('should add customer', () => {
    for(i=0; i<BankData.customers.length; i++){
    BankManagerPage.addCustomerButton.click()
    AddCustomerPage.firstNameInputBox.sendKeys(BankData.customers[i].fName);
    AddCustomerPage.lastNameInputBox.sendKeys(BankData.customers[i].lName);
    AddCustomerPage.postalCodeInputBox.sendKeys(BankData.customers[i].pCode);
    AddCustomerPage.formAddCustomerButton.click();
    expect(browser.switchTo().alert().getText()).
    toContain('Customer added successfully with customer id :');
    browser.switchTo().alert().accept();
    BankManagerPage.customersButton.click();
    expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[i].fName);
    expect(Customers.getLastRowValue(2).getText()).toEqual(BankData.customers[i].lName);
    expect(Customers.getLastRowValue(3).getText()).toEqual(BankData.customers[i].pCode);
}

});
    
    });





});