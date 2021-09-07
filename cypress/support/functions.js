export function assertPageLoad() {
  cy.get('.login-label')
    .should('exist')
    .and('be.visible')
}