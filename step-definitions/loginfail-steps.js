module.exports = function () {
    //Scenario #2
    this.Given(/^user browse login page1$/, function () {
        helpers.loadPage('https://www.psegameshop.com/my-account/')
    });

    this.Given(/^user fill email field1$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();

        });
    });

    this.Given(/^user fill password field1$/, function () {
        driver.then(function () {
            return page.fieldWrongpw.performFill();

        });
    });

    this.When(/^user click login button1$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });

    this.Then(/^user see login page and login failed notification$/, function () {
        return driver.findElements(by.xpath("//h1[normalize-space()='My Account']"))

            .then(function (elements){

                //verify this element has children
                expect(elements.length).to.equal(1);
            });
    });

}