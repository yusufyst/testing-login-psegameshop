module.exports = {

    url: 'https://www.psegameshop.com/my-account/',

    elements: {
        fieldWrongPw: by.xpath("//input[@id='password']")
    },

    performFill: function () {

        var selector = page.fieldWrongpw.elements.fieldWrongPw;
        return driver.findElement(selector).sendKeys(shared.id.wrongpw);
    }
};