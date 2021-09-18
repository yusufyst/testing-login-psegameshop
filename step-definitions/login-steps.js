module.exports = function () {
    //Scenario #1
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage('https://www.psegameshop.com/my-account/')
    });

    this.Given(/^user fill email field$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();

        })
    });

    this.Given(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fieldPw.performFill();

        })
    });

    this.When(/^user click login button$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });

    this.Then(/^user can see dashboard page$/, function () {
        return driver.findElements(by.xpath("//h1[normalize-space()='My Account']"))

            .then(function (elements){

                //verify this element has children
                expect(elements.length).to.equal(0);
            });
    });

}