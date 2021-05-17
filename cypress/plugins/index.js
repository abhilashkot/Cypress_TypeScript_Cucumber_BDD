const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const { createPartiallyEmittedExpression } = require("typescript");



module.exports = (on, config) => {
  const options = browserify.defaultOptions;

  options.browserifyOptions.plugin.unshift(['tsify']);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

  on("file:preprocessor", cucumber(options));
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // provide absolute path to unpacked extension's folder
      launchOptions.extensions.push('C:\Cucumber\cypress + type script + cucumber_StudyBrowser\jifpbeccnghkjeaalbbjmodiffmgedin')
    }

    return launchOptions
  })
}

