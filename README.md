# Clean-Code-And-Clean-Architecture
Project created with the purpose of applying and practicing standards such as Clean Code, Clean Architecture, semantic Commits, code refactoring and TDD.

## Description

Some tools used in this project:

* Typescript
* Jest
* Husky
* Commitlint

In this project semantic commits were used, the default was ```<type>:<description>```. The ypes adopted were:

* style: used when changes are made to the style and formatting of the code that will not impact any code logic.
Example: perform the indentation of a code.

* doc: ideal when adding or modifying some documentation in the code or repository in question.
Example: adding documentation about the response of an API or adding a README.md.

* feat: used when adding some new functionality from scratch to the code/service/project.
Example: adding a new endpoint for a REST API or a new consumer for a messaging service.

* test: used when making changes of any kind to tests, whether adding new tests or refactoring existing tests.
Example: adding contract tests and modifying unit tests.

## Getting Started

### Executing program

* Make sure that you have installed Node.js on your pc
	* open a terminal and run ```node --version``` 
	* if no version appears, download and install via the link *[https://nodejs.org/en/]()*

* Open a terminal on the project's main folder and run ```npm i``` to install depedences.

* On a terminal run npm run test for run unit test
