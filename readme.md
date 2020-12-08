# Saleor functional automation tests

Functional and regression e2e tests for Saleor web page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Node.js
Cypress

### Installing

Install Node.js

```
https://nodejs.org/en/download/
```

Install Cypress

```
https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
```

Clone repository

```
https://github.com/anton-malinovskiy/saleor
```

## Running the tests

Locally tests should be run with Cypress Runner. To launch  Cypress runner add npm script to you package.jason file, than use:


```
npm run cypress:open
```

### Coding style 

POP was used. There is a test scenario in - describe('Test scenario'), and test case description in - it ('Test case description')

```
describe('As a shopper. logging into the website as a shopper.', () => {
it('should show an error message with empty inputs', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.clearEmail();
    signIn.clearPassword();

    signIn.submit();

    signIn
        .getEmailErrorEmpty()
        .should('exist')
        .contains('Please fill in this field');

    signIn
        .getPasswordErrorEmpty()
        .should('exist')
        .contains('Please fill in this field');
});
```

## Authors

* **Anton Malinovskiy** 
