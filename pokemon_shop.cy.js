describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.get('.header__container > .header__id').click();//перехожу на своего тренера
         cy.get('[href="/shop"]').click();// нажимаем кнопку смены аватара
         cy.get(':nth-child(3) > .shop__button').click({ force: true })//кликаем купить доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');//вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');//вводим срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//вводим код карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Maksim Kopylov'); //вводим имя
         cy.get('.pay-btn').click();// нажимаем оплатить
         cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
