
# Tivix - QA Recruitment Task

  
## About
The purpose of this project is to create 3 different test cases on the [Tivix Labs](http://qalab.pl.tivixlabs.com/) site.

The tests are made using **Cypress** with **JavaScript** and **cypress-cucumber-preprocessor** which allows us to experience a behavior similar to that of Cucumber in Cypress. More details [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor).

Project has **ESlint** set with plugins like: **Prettier**, **Cypress** etc. to maintain good practises, keep the code clear and out of errors.
Project also has **husky** 🐶 to lint commits before pushing.

## Installation

Install dependencies

```sh

npm i

```  

⚠️ The version of Cypress used in the project requires node 18.x or above.


## Running tests

Run tests on Chrome brwoser headlessly:

```sh

npm run cy:run

```

Opens up Cypress:

```sh

npm run cy:open

```

## Reports

Report is generated automatically after the tests are over. Report can be found in the main directory.

Example report:

![Report screenshot](/cypress/screenshots/reportScreenshot.png?raw=true)

## GitHub Actions

Project has configured **GitHub Actions** workflow which is triggered on:
- Pushing commits to the **main** branch.
- Opening, reopening, editing a pull request.
- Manual trigger.

Workflow also uploads a test report into the artifacts.

![GitHub Actions Report screenshot](/cypress/screenshots/ghActionsReportScreenshot.png?raw=true)

## Bugs 🐛

- User can select a city which does **not** exist in the given country e.g. I can select **Berlin** even though the selected country is **France**.

**Expected result**: I expect to be able to select only **French** cities from the drop down list of cities when I select **France**.
##

- User can select a pick-up date and a drop-off date from the **past**.

**Expected result**: Choosing a past pick-up date or a drop-off date should not be possible.
##

- Entering a **model** has no effect on **search results**.

**Expected result**: **Search result** should display based on the **model** entered.
##

- There is a typo in the country **"Germiany"**.

**Expected result**: It shoud be **"Germany"**.
##

- **Special** characters can be used in the **name** input field.

**Expected result**: **Name** input should **not** accept **special** characters.
##

- **Special** characters can be used in the **last name** input field.

**Expected result**: **last name** input should **not** accept **special** characters.
##

- Personal data form can be submitted **without** providing an **email**.

**Expected result**Expected result: User should not be able to submit form **without** providing an **email**.
##

- **Submitting** a car rental form leads to an **error**.

**Expected result**: The user should be able to **successfully** submit the car rental form.
