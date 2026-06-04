const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const path = require('path');

const reportsDir = path.join(__dirname, '..', 'cypress', 'reports');

merge({ files: [`${reportsDir}/*.json`] })
  .then((report) =>
    generator.create(report, {
      reportDir: reportsDir,
      reportFilename: 'combined-report',
      reportTitle: 'Cypress Demo Test Report',
      reportPageTitle: 'Cypress Demo Test Report',
      overwrite: true,
    })
  )
  .then(() => {
    console.log(`Combined report: ${path.join(reportsDir, 'combined-report.html')}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
