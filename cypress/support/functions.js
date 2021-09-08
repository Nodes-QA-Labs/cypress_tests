export function assertPageLoads() {
  cy.get('#onetrust-accept-btn-handler', {timeout: 10000})
    .should('exist')
    .and('be.visible')
  cy.get('#onetrust-accept-btn-handler').click()
  cy.scrollTo('bottom')
}

export function getReadyForScreen() {
  cy.scrollTo('0%', '10%')
  cy.wait(500)
  cy.scrollTo('10%', '20%')
  cy.wait(500)
  cy.scrollTo('20%', '30%')
  cy.wait(500)
  cy.scrollTo('30%', '40%')
  cy.wait(500)
  cy.scrollTo('40%', '50%')
  cy.wait(500)
  cy.scrollTo('50%', '60%')
  cy.wait(500)
  cy.scrollTo('60%', '70%')
  cy.wait(500)
  cy.scrollTo('70%', '80%')
  cy.wait(500)
  cy.scrollTo('80%', '90%')
  cy.wait(500)
  cy.scrollTo('90%', '100%')
  cy.wait(1000)
}

export function getReadyForScreenNew() {
  cy.scrollTo('bottom', {duration: 10000})
}