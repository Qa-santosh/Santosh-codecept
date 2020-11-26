exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Testing',

  gherkin: {
    features: "./register/feature/registerFeature.feature",

    steps: [
      "./register/step/registerStep.js",
    ],
  },
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
    },
    wdio: {
      enabled : true,
      services: ["selenium-standalone"],
    },
  },
};