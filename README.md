# cypress-playground

## Purpose

Ability to try out using cypress.io in order to run and write tests towards various web elements on a web page

This repo and test steps were done using steps from [cypress.io Getting Started](https://docs.cypress.io/guides/getting-started/installing-cypress.html)


## Pre-Requisites

1. Clone this repo
2. Have a web connection while running the tests


## Steps to take

1. Install the repo locally
2. Launch cypress.io
3. Run the tests using the WYSIWYG test runner tool
4. Interact with Chrome after the test has run
5. Experiment using the pause command
6. Stop cypress.io

### Install the repo locally

```npm install```


### Launch cypress.io

```npm run cypress:open```


### Run the tests using the WYSIWYG test runner tool

The cypress test runner will open in a few moments. This is the application with the black circle with "cy".

Click on the 

```sample_spec.js```

file under INTEGRATION to run the test. You might need to collapse the "examples" folder to see it.


Chrome will launch and you will be able to follow along watching the test run.


### Interact with Chrome after the test has run

Hover over the test commands that ran in the left hand part of Chrome.

Note you can click on steps to bring the browser to the state the test was in when it ran that step.


### Experiment using the pause command

Uncomment out the pause command in the test so this line

```// cy.pause()```

becomes

```cy.pause()```

Save the file.  By default the tests will start running automatically upon save.

Note that in Chrome the test has paused and there is a "paused" icon in red.

Hit the "Next" button to run just the next step.

Now hit the "Resume" button to contiue running all the steps.

Now undo the changes to the file, in other words, comment out the pause statement again.


### Stop cypress.io

This can be done by click the red "Stop" button in the test runner.  Note the test runner is the application with the black circle with "cy", not Chrome itself.

It can also be done by by hitting Ctrl+C on the command line.