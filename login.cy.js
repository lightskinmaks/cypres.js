describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
       cy.get('#mail').type('german@dolnikov.ru');//ввел верный логин
       cy.get('#pass').type('iLoveqastudio1');//ввел верный пароль
       cy.get('#loginButton').click();//нажал кнопку войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверяю что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible');//текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и виден для пользователя
     })
    })
    
    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');//зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
      cy.get('#mail').type('german@dolnikov.ru');//ввел верный логин
      cy.get('#pass').type('iLoveqastudio11');//ввел не верный пароль
      cy.get('#loginButton').click();//нажал кнопку войти
      cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверяю что после  вижу текст
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и виден для пользователя
   })

   it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
  cy.get('#mail').type('germandolnikov.ru');//ввел логин без @
  cy.get('#pass').type('iLoveqastudio1');//ввел верный пароль
  cy.get('#loginButton').click();//нажал кнопку войти
  cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю что после ввода вижу текст
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и виден для пользователя
})

it('Не верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');//зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
  cy.get('#mail').type('german@dolkov.ru');//ввел верный логин
  cy.get('#pass').type('iLoveqastudio1');//ввел верный пароль
  cy.get('#loginButton').click();//нажал кнопку войти
  cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю что после ввода вижу текст
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и виден для пользователя
})

it('Верный пароль, логин со строчными буквами', function () {
    cy.visit('https://login.qa.studio/');//зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
  cy.get('#mail').type('GerMan@Dolnikov.ru');//строчные буквы в логине
  cy.get('#pass').type('iLoveqastudio1');//ввел верный пароль
  cy.get('#loginButton').click();//нажал кнопку войти
  cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю что после ввода вижу текст
  cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и виден для пользователя
})

it('Забыли пароль', function () {
    cy.visit('https://login.qa.studio/');//зашел на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверил цвет кнопки вост пароля
    cy.get('#forgotEmailButton').click();//нажал кнопку забыли пароль
    cy.get('#forgotForm > .header').contains('Восстановите пароль');//проверяю что после ввода вижу текст
    cy.get('#mailForgot').type('maximpala3@gmail.com');//ввел  email
    cy.get('#restoreEmailButton').click();//нажал кнопку отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю что после ввода вижу текст
    cy.get('#exitMessageButton').should('be.visible');
})
