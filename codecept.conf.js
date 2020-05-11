exports.config = {
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://insight.exiger.com/Auth/Login',
            show: true,
            windowSize: '1280x1024',
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
        autoLogin: {
            enabled: true,
            saveToFile: true,
            inject: 'loginAs', // use `loginAs` instead of login
            users: {
                prod: {
                    login: (I) => {
                        I.amOnPage('/');
                        I.fillField('#UserName', 'nisha_ann_mathew@yahoo.com');
                        I.click('Continue')
                        I.see('Password')
                        I.fillField('#Password', 'Admin123$');
                        I.click('Log In')
                    },
                    check: (I) => {
                        I.amOnPage('/');
                        I.see('Dashboard', '.nav-item');
                    },
                },
                admin: {
                    login: (I) => {
                        I.amOnPage('/login');
                        I.fillField('email', 'admin@site.com');
                        I.fillField('password', '123456');
                        I.click('Login');
                    },
                    check: (I) => {
                        I.amOnPage('/');
                        I.see('Admin', '.navbar');
                    },
                },
            }
        },
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