# TF.automacao-funcional

# cypress-cucumber

Projeto de Automação End-to-End com BDD da Track&Field 

## Installation

Clone the directory and run

```shell
npm install
```

## Execution

```shell
npm run test
```
## Para executar apenas uma feature especifica no modo headless
npm run test:desktop "@CartTest"
## Cucumber Expressions

Use https://docs.cucumber.io/cucumber/cucumber-expressions/ to parse your .feature file, please use that document as your reference

## Para executar testes com Allure
yarn cypress run --config video=false --env allure=true

## Para gerar dashboard com Allure
yarn allure serve

