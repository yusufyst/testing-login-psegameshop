module.exports = {

    url: 'https://www.psegameshop.com/my-account/',

    elements: {
        loginBtn: by.xpath("//button[normalize-space()='Log in']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};