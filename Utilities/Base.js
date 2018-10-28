var Base = function(){
    this.homeUrl= 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
    
    this.navigateToHome = function(){
        browser.get(this.homeUrl);
    };



}
module.exports=new Base();