# Cypress Demo

End-to-end test automation demo for the Software QA & Test Automation Engineering Specialization. It uses [Cypress](https://www.cypress.io/) with [Mochawesome](https://github.com/adamgruber/mochawesome) for HTML test reports, and a small Express app to serve the pages under test.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

## Getting started

1. Clone or open this project, then install dependencies:

   ```bash
   npm install
   ```

2. Install the Cypress desktop binary (first time only):

   ```bash
   npm run cypress:install
   ```

3. Run the full test suite (starts the app, runs Cypress, merges reports):

   ```bash
   npm test
   ```

## npm scripts

| Script | Description |
|--------|-------------|
| `npm test` | Start demo server, run Cypress headless, merge Mochawesome reports |
| `npm start` | Start the demo app at `http://localhost:3000` |
| `npm run cypress:open` | Open the Cypress Test Runner (interactive) |
| `npm run cypress:run` | Run Cypress headless (server must already be running) |
| `npm run cypress:install` | Download/install the Cypress application binary |

## Test reports

After `npm test`, open the combined HTML report:

```
cypress/reports/combined-report.html
```

Individual per-spec reports are also written to `cypress/reports/` (`mochawesome.html`, `mochawesome_001.html`, etc.).

To merge existing JSON reports without re-running tests:

```bash
node scripts/merge-reports.js
```

## Project structure

```
cypress-demo/
├── cypress/
│   ├── e2e/              # Test specs
│   │   ├── login.cy.js
│   │   ├── auth/
│   │   └── dashboard/
│   ├── fixtures/         # Test data (user.json, products.json)
│   ├── reports/          # Mochawesome HTML/JSON output
│   └── support/          # Custom commands (login, addProduct)
├── dashboard/            # Demo app pages
├── login/
├── products/
├── index.html            # Demo login landing page
├── server.js             # Express static server (port 3000)
├── cypress.config.js
└── package.json
```

## What the tests cover

- **login.cy.js** — Demo login page (`index.html`)
- **auth/** — Login with fixtures and `cy.session`
- **dashboard/** — Products UI, API intercept mocking

Cypress scaffold examples under `cypress/e2e/1-getting-started/` and `cypress/e2e/2-advanced-examples/` are excluded from the default run. The flaky demo (`dashboard/flaky-test.cy.js`) is excluded so the main suite stays green.

## Configuration

- **Base URL:** `http://localhost:3000` (see `cypress.config.js`)
- **Test credentials** (for `cy.login` and env):

  | Variable | Default |
  |----------|---------|
  | `testEmail` | `test@example.com` |
  | `testPassword` | `Password123` |

## Running interactively

In one terminal:

```bash
npm start
```

In another:

```bash
npm run cypress:open
```

## Windows note (folder path with `&`)

This repo path contains `Software QA & Test Automation...`. On Windows, `&` breaks `npx` and some `.cmd` shims. Use the npm scripts in `package.json` (they call Node directly) instead of `npx cypress`.

If you hit path-related errors, consider moving the project to a folder without `&` or spaces (for example `C:\dev\cypress-demo`).

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Cypress binary not found | `npm run cypress:install` |
| `ECONNREFUSED` on tests | Run `npm start` before `npm run cypress:run`, or use `npm test` |
| Fixture not found | Use `cypress/fixtures/user.json` and `products.json` (not `*.json.json`) |
| Empty or missing report | Run `npm test` or `node scripts/merge-reports.js` after a test run |

## License

Educational demo for coursework. Cypress is licensed separately; see [Cypress license](https://www.cypress.io/legal).
