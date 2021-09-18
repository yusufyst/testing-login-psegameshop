module.exports = {

    url: 'https://www.psegameshop.com/my-account/',

    elements: {
        fieldEmail: by.xpath("//input[@id='username']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};