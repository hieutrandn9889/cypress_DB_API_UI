import BasePage from '../../common/basePage';

export default class LoginTestPage extends BasePage {

  static loginTestUserName() {
    cy.fixture('account.json').as('account');
    cy.get('@account').then(user => {
      cy.loginUserTest(user.userTest.username, user.userTest.password, user.userTest.url);
    });
  }
}
