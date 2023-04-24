// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const setShape = require('./lib/setShape.js');

// Array of questions for user
const questions = [
    {
        type: 'input',
        message: "Enter text for the logo. (Must not be more than 3 characters.)",
        name: 'text',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A text is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter the text color. (Enter a color keyword OR a hexadecimal number.)",
        name: 'textColor',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid color is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Select a shape for the logo.",
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: "Enter the shape color. (Enter a color keyword OR a hexadecimal number.)",
        name: 'shapeColor',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid color is required.");
            }
            return true;
        }
    },
];

// Function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}

const writeFileAsync = writeToFile;

// Function to initialize app
async function init() {
    try{
        // Answer the Questions
        const userResponse = await inquirer.prompt(questions);
        
        const generateSVG = setShape(userResponse);
        
        await writeFileAsync('./examples/logo.sgv', generateSVG);
        console.log("Generated logo.svg");

    
    } catch  (error) {
        console.error();
    }
}

// Function call to initialize app
init();