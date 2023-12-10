// Packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const shapes = require('./lib/shapes');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logo-text',
        message: 'Enter text for the logo (max: 3 characters):',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter shape color:',
    },
]

// Function to create SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
} 

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
    const shapeClass = shapes[data.shape];
    const newShape = new shapeClass(data.shape, data.shape-color);
    newShape.setColor(data.shape-color);
    const svgMarkup = newShape.render();
        console.log('Creating SVG file');
        writeToFile('logo.svg', svgMarkup);
    })
}

// Call to initialize app
init();