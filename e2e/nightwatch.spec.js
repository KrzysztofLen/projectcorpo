const TARGET_PAGE_URL = 'http://localhost:3001';
// REMEMBER TO ALWAYS RUN APP AND THEN SPECS <=========
module.exports = {
  'Is title correct?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.assert.title('Business-corpo site');
    browser.end();
  },

  'Is phone icon is visible?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.expect.element('#phone').to.be.visible;
    browser.assert.elementPresent("#phone-ico");
    browser.end();
  },

  'Is slider exist?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.assert.cssClassPresent("#slider", "carousel");
    browser.end();
  },

  'Is section News exist?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.assert.visible('#news');
    browser.assert.containsText(".header-title", "NEWS");
    browser.end();
  },

  'Is header contains correct text?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.assert.containsText('h1', 'LOREM IPSUM DOLOR.');
    browser.end();
  },

  'Is main part of app contains proper number of elements?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.elements('css selector', '.nav li', (result) => {
      if (result.value.length !== 7) {
        browser.assert.fail('Number of elements is not correct');
      }
    });
    browser.end();
  },

  'Capture screenshot to see manually that page looks correct': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 1000);
    let screenshot = './e2e/screenshots/screenshot-' + new Date().toISOString().slice(0, -5) + '.png';
    let filename = screenshot.replace(/:/g, "-");
    browser.saveScreenshot(filename);
    browser.end();
  },

  'Is username element is input?': (browser) => {
    browser.url(TARGET_PAGE_URL);
    browser.waitForElementVisible('body', 3000);
    browser.expect.element('#username').to.be.an('input');
    browser.end();
  }
};
