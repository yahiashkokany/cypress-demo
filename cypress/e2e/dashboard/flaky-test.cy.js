it('Flaky test example', () => {

    cy.visit('/products');

    cy.get('.success-message')
        .click();
});
it('Fixed flaky test', () => {

    cy.visit('/products');

    cy.get('.success-message')
        .should('be.visible')
        .click();
});