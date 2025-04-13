# Cypress-cucumber
> Cypress 10+ with Cucumber boilerplate project.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)


## 🚀 Install the project

Install project dependencies with: `npm i`.

Ensure allure reports is intalled `npm install --save-dev allure-cypress`.

Cucumber preprocessor installation: `npm install cypress @badeball/cypress-cucumber-preprocessor --save-dev`.

## Run the demo:
To run the visual interface of cyress `use npx cypres open`

1. Standard Execution: npm run cypress:execution
2. Native report(with JSON FORMATTER): Check how to do it in this video: [Cucumber BDD Report - YouTube](https://www.youtube.com/watch?v=5AGXK9cL2fs&t=2s&ab_channel=JoanMedia)
3. Allure Report 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/


##  Sample repo to generate an allure report as an artifact using GH Actions

* https://github.com/SeyiOG/newCyLearn2/blob/main/.github/workflows/cypress-allure-report.yml


## Extra steps

In order to allow Ctrl + Click in .feature files to show implementations change 'cucumberautocomplete' extension in visual studio code .json file to:

```cmd
{
    "workbench.iconTheme": "material-icon-theme",
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "explorer.confirmDelete": false,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "git.autofetch": true,
    "cucumberautocomplete.steps": [
      "cypress/e2e/step_definitions/**/*.ts"
    ],
    "cucumberautocomplete.syncfeatures": "cypress/e2e/features/**/*.feature",
    "cucumberautocomplete.strictGherkinCompletion": true,
    "cucumberautocomplete.smartSnippets": true,
    "cucumberautocomplete.stepsInvariants": true
}
```
  