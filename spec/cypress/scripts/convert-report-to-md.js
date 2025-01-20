import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateMarkdownReport(testResults) {
    let totalScore = 0;
    let markdown = `# Test Report\n\n| Test Case | Status | Score | Error |\n|-----------|--------|-------|-------|\n`;

    testResults.forEach(test => {
        let score = test.passed ? 20 : 0;
        totalScore += score;
        markdown += `| ${test.name} | ${test.passed ? 'Passed' : 'Failed'} | ${score} | ${test.error || ''} |\n`;
    });

    markdown += `\n**Total Score:** ${totalScore}\n`;
    markdown += `**Test Time:** ${new Date().toLocaleString()}\n`;

    // Add screenshots section
    markdown += `\n## Screenshots\n`;
    const screenshotsDir = path.resolve(__dirname, '../screenshots/spec.cy.js');
    const screenshots = fs.readdirSync(screenshotsDir);
    screenshots.forEach(screenshot => {
        markdown += `![${screenshot}](./cypress/screenshots/spec.cy.js/${screenshot})\n`;
    });

    return markdown;
}

function writeReportToFile(testResults, filePath) {
    const markdown = generateMarkdownReport(testResults);
    fs.writeFileSync(filePath, markdown);
}

function readTestResultsFromFile(filePath) {
    const data = fs.readFileSync(filePath);
    const json = JSON.parse(data);
    const testResults = [];

    json.results.forEach(result => {
        result.suites.forEach(suite => {
            suite.suites.forEach(subSuite => {
                subSuite.tests.forEach(test => {
                    testResults.push({
                        name: test.fullTitle,
                        passed: test.state === 'passed',
                        error: test.err ? test.err.message : null
                    });
                });
            });
        });
    });

    return testResults;
}
// console.log(path.resolve(path.dirname(new URL(import.meta.url).pathname), '../reports/results.json'))
// Read test results from results.json and write the markdown report
const testResults = readTestResultsFromFile(path.resolve(__dirname, '../reports/results.json'));
writeReportToFile(testResults, '__test-report__.md');
