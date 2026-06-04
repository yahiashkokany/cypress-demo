Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');

    cy.get('[data-testid="email"]')
        .clear()
        .type(email);

    cy.get('[data-testid="password"]')
        .clear()
        .type(password);

    cy.get('[data-testid="login-btn"]')
        .click();
});

Cypress.Commands.add('addProduct', (name, price) => {
    cy.get('[data-testid="product-name"]')
        .type(name);

    cy.get('[data-testid="product-price"]')
        .type(price);

    cy.get('[data-testid="add-product-btn"]')
        .click();
});