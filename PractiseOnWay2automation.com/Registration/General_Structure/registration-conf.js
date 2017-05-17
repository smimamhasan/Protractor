/**
 * Created by imam.hasan on 4/28/2017.
 */
describe('Login test by', function () {
    it('Valid id and password', function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var username2 = element(by.model("model[options.key]"));

        username.sendKeys("angular");
        password.sendKeys("password");
        username2.sendKeys("test");
        element(by.xpath("//button[@class='btn btn-danger']")).click();
        var loggedinText = element(by.xpath("//div[@class='container']//p[1]"));
        expect(element(by.xpath("//div[@class='container']//p[1]")).getText()).toEqual("You're logged in!!");
    });

    it('Logout successfully', function () {
        var loggedinText = element(by.xpath("//div[@class='container']//p[1]"));
        expect(element(by.xpath("//div[@class='container']//p[1]")).getText()).toEqual("You're logged in!!");
        element(by.xpath("//a[@href='#/login']")).click();
        expect(element(by.id("username")).isDisplayed()).toBeTruthy();
    });

    it('invalid id and password', function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var username2 = element(by.model("model[options.key]"));

        username.sendKeys("angularss");
        password.sendKeys("passwordss");
        username2.sendKeys("test");
        element(by.xpath("//button[@class='btn btn-danger']")).click();
        var errorMessage = element(by.xpath("//div[@class='alert alert-danger ng-binding ng-scope']"));
        expect(errorMessage.getText()).toContain("Username or password is incorrect")
    });
});


