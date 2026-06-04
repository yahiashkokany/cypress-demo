describe('Login Using Fixture', () => {

    it('Login successfully using fixture data', () => {

        cy.fixture('user').then((user) => {

            cy.login(
                user.email,
                user.password
            );

            cy.url().should('include', '/dashboard');
        });
    });
});