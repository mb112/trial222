require("../Utilities/CustomLocators.js");

var Customers = function(){

    this.table= element(by.xpath("//table[contains(@class,'table-bordered')]"));
    

    this.getLastRowValue=(function(columnNumber){
       return this.table.element(by.xpath("//tbody/tr[last()]/td["+columnNumber+"]"));
    });

};

module.exports = new Customers();