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

## Other commands

scripts.sh contains the following:

* Run code beautifier on sfgov_vaccine

    `sfgov-check cbf`

* Run code sniff on sfgov_vaccine

    `sfgov-check cs`

* Set local api url to phone test

    `sfgov-testurl-local phone`

* Set local api url to test

    `sfgov-testurl-local`

* Set pr env api url to test

    `sfgov-testurl-pr [prid]`
