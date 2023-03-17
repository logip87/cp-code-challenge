
# cp-code-challenge

  
## About
The purpose of this project is to cover some of the most important user scenarios for the [Swag Labs](https://www.saucedemo.com/) application.

The tests are made using **Cypress** with **JavaScript**.
Project has **ESlint** set with plugins like: **Prettier**, **Cypress** etc. to maintain good practises, keep the code clear and out of errors.
Project also has **husky** 🐶 to lint commits before pushing.

## Installation

Install dependencies

```sh

npm i

```  

⚠️ Running some tests requires setting environment variables first. Those variables are listed in `cypress.env.editme.json` file.

1. Copy the content of this file.

2. In the main directory, create new file `cypress.env.json`.

3. Paste the saved variables to the new file.

4. Replace the empty strings with actual passwords.

All password are stored in **Repository Secrets**.

## Usage

Run test suite in browser

```sh

npm run cy:run

```

Runs tests in headless mode on Chrome browser.

## Reporting

Report is generated automatically after the tests are over. Report can be found in `cypress/report`.

## GitHub Actions

Project has configured **GitHub Actions** workflow which is triggered on:
- Pushing commits to the **main** branch.
- Opening, reopening, editing a pull request.
- Manual trigger.

Workflow also uploads a test report into the artifacts.

![Report screenshot](/cypress/screenshots/ghactions.png?raw=true)
