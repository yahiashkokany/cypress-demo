const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    reportTitle: 'Cypress Demo Test Report',
    reportPageTitle: 'Cypress Demo Test Report',
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: [
      'cypress/e2e/login.cy.js',
      'cypress/e2e/auth/**/*.cy.js',
      'cypress/e2e/dashboard/**/*.cy.js',
      '!cypress/e2e/dashboard/flaky-test.cy.js',
      '!cypress/e2e/1-getting-started/**',
      '!cypress/e2e/2-advanced-examples/**',
    ],
  },

  env: {
    testEmail: 'test@example.com',
    testPassword: 'Password123',
  },
});
