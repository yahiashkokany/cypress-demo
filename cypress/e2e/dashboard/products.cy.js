describe('Products', () => {

    beforeEach(() => {

        cy.login(
            Cypress.env('testEmail'),
            Cypress.env('testPassword')
        );
    });

    it('Add new product', () => {

        cy.visit('/products');

        cy.addProduct(
            'Gaming Mouse',
            '25'
        );

        cy.contains('Gaming Mouse')
            .should('be.visible');
    });
});