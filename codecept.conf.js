var reporter = require('cucumber-html-reporter')

exports.config = {
    output: './output',
    helpers: {
        Puppeteer: {
            "chrome": {
                "args": ["--no-sandbox"]
            },
            url: 'https://insight.exiger.com/Auth/Login',
            show: true,
            windowSize: '1280x1824',
            waitForNavigation: "networkidle0",
            waitforTimeout: 30000
        }
    },
    include: {
        I: './steps_file.js',
        loginPagePage: './pages/LoginPage.js'

    },

    cucumber: {
        cucumberOptions: {
            jsonFile: './report/cucumber_report.json',

        }
    },


    "mocha": {
        "reporterOptions": {
            "reportDir": "output"
        }
    },
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
        },
        allure: {
            enabled: true,
            outputDir: './output/allure/allure-results', // notice the path used here pointing to allure-results
            screenshotOnFail: true,
            retryFailedStep: true
        },
    },
    "mocha": {
        "reporterOptions": {
            "reportDir": "output"
        }
    },
    tests: './*_test.js',
    name: 'Codecept'
}