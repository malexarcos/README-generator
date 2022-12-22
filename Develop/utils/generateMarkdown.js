// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.projectTittle}

## Description
${answers.projectDescription}

## Installation
${answers.projectInstallation}

## UsageInformation
${answers.projectUsageInformation}

## Contribution
${answers.projectContribution}

## Test
${answers.projectTest}

## License
${answers.projectLicense}

## GithubUsernme
${answers.projectGithubUsername}

## Email
${answers.projectEmail}


`;
}

module.exports = generateMarkdown;
