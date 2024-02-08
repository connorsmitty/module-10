const prompt = require('prompt-sync')();

function promptText() {
    return prompt('Enter up to three characters for the text: ');
}

function promptColor(promptMessage) {
    return prompt(promptMessage);
}

function promptShape() {
    console.log('Choose a shape:');
    const shapes = ['circle', 'triangle', 'square'];
    shapes.forEach((shape, index) => console.log(`${index + 1}. ${shape}`));
    const choice = parseInt(prompt('Enter the number corresponding to the shape: '));
    return shapes[choice - 1];
}

function promptShapeColor() {
    return prompt('Enter shape color (color keyword or hexadecimal number): ');
}

module.exports = {
    promptText,
    promptColor,
    promptShape,
    promptShapeColor
};
