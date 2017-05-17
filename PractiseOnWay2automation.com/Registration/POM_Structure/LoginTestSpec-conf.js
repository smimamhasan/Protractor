/**
 * Created by imam.hasan on 5/9/2017.
 */
var loginPage = require('../POM_Structure/loginPage.js');
var loggedinPage = require('../POM_Structure/loggedInPage.js');

describe('Login test by', function () {
    it('Valid id and password', function (){
        loginPage.go();
        loginPage.login("angular", "password", "test");
    });

    it('Logout successfully', function () {
        expect(loggedinPage.loggedinMessage()).toEqual("You're logged in!!");
        loggedinPage.logout();
        expect(loginPage.fields.username.isDisplayed()).toBeTruthy();
    });

    it('Invalid id and password', function () {
        loginPage.go();
        loginPage.login("angularzzz", "passwordzzz", "test");
        expect(loginPage.loginError()).toContain("Username or password is incorrect");
    });
});