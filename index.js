// import inquirer, fs, shapes
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// promt user
async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3 && input.length > 0
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hex number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hex number):',
        }
    ]);

    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
    } else if (answers.shape === 'triangle') {
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    } else {
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
        </svg>
    `;

    fs.writeFileSync('./examples.svg', svgContent);
    console.log('Generated logo.svg');
}

promptUser();