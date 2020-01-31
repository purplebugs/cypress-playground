describe('My First Test', function() {
    it('clicking "type" navigates to a new url', function() {
      cy.visit('https://example.cypress.io')

      cy.pause()

      cy.contains('type').click()

      // should be on a new url which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('anita@email.com')
        .should('have.value', 'anita@email.com')

    })
  })