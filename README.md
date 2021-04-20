# Testing suite for sfgov.

## Visual Regression tests. 

### Set up
```bash
npm install
cp example.env .env
```

- Change environment variables in .env to suit your needs.

### Capture and run tests.
`npm run backstop`

## Cypress tests.
### Capture and run tests.
`npm run cypress`

## Axe accessibility tests.
### Install globally.
`npm install @axe-core/cli -g`

### Run test.
`axe https://anyurl.com`

## SFgov custom commands.

scripts.sh contains the following:

* Run code beautifier and code sniff on a custom module.

    `sfgov-check [module name]`

* Set local api url to phone test

    `sfgov-testurl-local phone`

* Set local api url to test

    `sfgov-testurl-local`

* Set pr env api url to test

    `sfgov-testurl-pr [prid]`
