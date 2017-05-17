/**
 * Created by imam.hasan on 5/9/2017.
 */
'use strict';

module.exports = {
    fields: {
        username: element(by.id("username")),
        password: element(by.id("password")),
        username2: element(by.model("model[options.key]")),
        login: element(by.xpath("//button[@class='btn btn-danger']")),
        errorMessage: element(by.xpath("//div[@class='alert alert-danger ng-binding ng-scope']"))
    },

    go: function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    },

    login: function (username, password, username2) {
        var fields = this.fields;

        fields.username.sendKeys(username);
        fields.password.sendKeys(password);
        fields.username2.sendKeys(username2);
        fields.login.click();
    },

    loginError: function () {
        var fields = this.fields;
        return fields.errorMessage.getText();
    }
};