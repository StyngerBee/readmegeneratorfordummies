function generateMarkdown(data){
    return `# ${data.project}

## Description
    ${data.description}
## Table of Contents

    - Usage
    - Installation
    - Credits
    - License
    - Contact Me
    

## Usage 
    ${data.usage}
### Testing
    ${data.test}
## Installation
    ${data.dependency}
## Credits
    ${data.contributions}
## License
    ${data.license}
## Contact Me
### ${data.fname}
    Github: ${data.username}
    Email: ${data.email}
    `
}

module.exports = generateMarkdown;
