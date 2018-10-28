require('../Utilities/CustomLocators.js');

var HomePage=function(){

    this.homeButton=$('button.home');
    this.pageHeader=$('.mainHeading');
    this.managerLoginButton=element(by.ngClick('manager()'));
};
module.exports=new HomePage();
