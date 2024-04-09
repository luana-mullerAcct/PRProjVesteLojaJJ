# TF.automacao-funcional 
# Veste.automação-funcional - cópia base do projeto TF

# cypress-cucumber

Projeto de Automação End-to-End com BDD da Veste 

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

## Projeto Veste 20/03/24
## rotinas que rodaram loja: John John com ressalvas
## NavigationTest 20/03 ok
## PLP - categoryTeste unico cenário que não passou foi o 'ver mais'. 21/03
## PDP - erro no incluir item ao carrinho PDPPage validateBTNAddCart, nos demais cenários passou. 26/03
## LOGIN - erro no Sair, nos demais cenários passou. 27/03
## MyAccount - erro ao adicionar novo endereço e na altração de genero. 27/03
## MyAccount não passou no clear do endereço. 27/03
## Precisa rever a autenticação do cookie para usar o da loja atual
## Primeiro commit realizado em 09/04 as 14:30 com a subida do projeto no git.


