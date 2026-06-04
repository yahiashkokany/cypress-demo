describe('Login Using Session', () => {

    beforeEach(() => {

        cy.session('userSession', () => {

            cy.login(
                Cypress.env('testEmail'),
                Cypress.env('testPassword')
            );

            cy.url().should('include', '/dashboard');
        });
    });

    it('Open dashboard', () => {

        cy.visit('/dashboard');

        cy.contains('Dashboard')
            .should('be.visible');
    });

    it('Open products page', () => {

        cy.visit('/products');

        cy.contains('Products')
            .should('be.visible');
    });
});