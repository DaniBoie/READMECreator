const inquirer = require('inquirer')

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
        message: 'Contributing Partners:'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test Instructions:'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions:'
      },
      {
        type: 'input',
        name: 'toc',
        message: 'Table of Contents:'
      },
      {
        type: 'list',
        name: 'licence',
        message: 'License Type:',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
    ])
    .then(res => {
      console.log(res)
    })
    .catch(err => {console.log(err)})