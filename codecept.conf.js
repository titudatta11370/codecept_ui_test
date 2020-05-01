exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://insight.exiger.com/Auth/Login',
      show: true,
      windowSize: '1200x1500',
      waitforTimeout: 30000
    }
  },
  include: {
    I: './steps_file.js',
    loginPagePage: './pages/LoginPage.js'

  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Codecept'
}