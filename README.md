# cypress-task

This project uses [Cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
with [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support)

## System requirements

* Actual requirements can be found
  in [Cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## Instalation guide

* If node.js is not installed install it (16 or above as specified in package.json `engines` property)

* If you are Mac user you can install node.js using homebrew via command:

```
brew install node
```

* Or you can use [volta](https://docs.volta.sh/guide/)

```
volta install node
```

## Setting up the project on your machine after cloning the repository

* After cloning the repository it's enough to run the command:

```
npm install
```

## Opening Cypress test runner

* To open cypress test runner run the command:

```
CYPRESS_password=<LOGIN_PASSWORD> npx cypress open --e2e --browser <BROWSER>
```

## Running Cypress tests

* To run cypress tests in headless mode run the command:

```
CYPRESS_password=<LOGIN_PASSWORD> npx cypress run --e2e --browser <BROWSER>
```
* Where :
- `<LOGIN_PASSWORD>` is the global user password required to login to the application - eg. `CYPRESS_password=user_password`
- `--e2e` specifies end to end testing type and is optional
- `--browser <BROWSER>` specifies broser type and is optional - for example to run with the chrome browser use `--browser chrome`

## Running Cypress tests with visual testing

* For visual testing [Cypress Percy plugin](https://docs.percy.io/docs/cypress) is being used

* To run cypress tests in headless mode with visual testing `PERCY_TOKEN` environment variable must be set

```
On Unix:
export PERCY_TOKEN=dda2541daec785abe7a65a91c6c9167d67cf901578a9bf84677dd6e3b0a6739f
```

* run command:
```
CYPRESS_password=<LOGIN_PASSWORD> npx percy exec -- cypress run --browser <BROWSER>
```

* Snapshots will be stored and compared on Percy.io page under [cypress-task](https://percy.io/2b464f5b/cypress-task) project to which access can be provided on demand by the authot of this readme
