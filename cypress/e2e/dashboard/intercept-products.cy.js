describe('Intercept Products API', () => {

    it('Mock products response', () => {

        cy.intercept(
            'GET',
            '/api/products',
            {
                fixture: 'products.json'
            }
        ).as('getProducts');

        cy.visit('/products');

        cy.wait('@getProducts');

        cy.contains('Test Product')
            .should('be.visible');
    });
});