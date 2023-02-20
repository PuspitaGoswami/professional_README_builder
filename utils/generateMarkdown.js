// function to generate markdown for README
function generateMarkdown(answers) {
  //show badge function to indicate the license a user opted out for
function showBadge(license) {
  const diffBadge = {
    gnuplv3:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)",
    isc: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensources.org/MIT)",
  };
  return diffBadge[license];
}

  return `# ${answers.title}

  ${showBadge(answers.licenses)}
  
  ## Table of Content
  - [project description](#description)
  - [usage](#usage)
  - [project License](#license)
  - [Contibuting](#contibuting)
  - [Test](#test)
  - [Questions](#questions)
  - [Installations](#installations)
  
  ## Description
  ${answers.description}
  
  ## usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Installations
  ${answers.installation}
  
  ## Contributing
  ${answers.contributors}
  
  ## Questions
  ${answers.email}
  ${answers.github}
  
  ## Test
  ${answers.test}

`
}

module.exports = generateMarkdown;
