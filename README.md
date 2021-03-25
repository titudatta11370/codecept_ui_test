CODECEPTJS UI test

To install 
```
npm install
```


To run all tests
```
npx codeceptjs run
```

To run 2 browsers parallel 
```
npx codeceptjs run-wrokers 2
```

To run a single test with tag

```
npx codeceptjs run --grep @tag
```
To run with a mochaawesome reporter
```
codeceptjs run --reporter mochawesome

```
To run with allure report
````
npx codeceptjs run --plugins allure
