const inquirer = require('inquirer')
const fs = require('fs')

  console.log('Create your README by answering the following prompts.')
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'username',
        message: 'GitHub Username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Project Description:'
      },
      {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines:'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test Instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'License Type:',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
    ])
    .then(res => {
      fs.writeFile('customREADME.md', `
# ${res.title}
> ${res.desc}

![License Badge](https://img.shields.io/badge/license-${res.license}-blue.svg)

***
### Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

***
## Installation:
 - ${res.install}

***
## Usage:
 - ${res.usage}
***
## Contributing:
 - ${res.contributing}
***
## Tests:
 - ${res.test}
***
### License:
**License Used**: ${res.license}
***
### Questions: 
**What is your GitHub username?** https://github.com/${res.username}
**Email to reach for additional questions:** ${res.email}
`, (err) => {console.log(err)})
    })
    .catch(err => {console.log(err)})