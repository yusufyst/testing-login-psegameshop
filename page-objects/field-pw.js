module.exports = {

    url: 'https://www.psegameshop.com/my-account/',

    elements: {
        fieldPw: by.xpath("//input[@id='password']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};