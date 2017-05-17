/**
 * Created by imam.hasan on 5/9/2017.
 */
'use strict';

module.exports = {
    fields:{
        loggedinTextElement: element(by.xpath("//div[@class='container']//p[1]")),
        logoutlink: element(by.xpath("//a[@href='#/login']"))
    },

    loggedinMessage: function () {
        var fields = this.fields
        return fields.loggedinTextElement.getText()

    },

    logout: function () {
        var fields = this.fields
        fields.logoutlink.click()
    }
};