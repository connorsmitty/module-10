const fs = require('fs');
const { promptText, promptColor, promptShape, promptShapeColor } = require('./generateInputs');
const { generateSVG } = require('./generateSVG');

function main() {
    const text = promptText();
    const textColor = promptColor('Enter text color (color keyword or hexadecimal number): ');
    const shape = promptShape();
    const shapeColor = promptColor('Enter shape color (color keyword or hexadecimal number): ');

    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('\x1b[32m%s\x1b[0m', 'Generated logo.svg');
}

main();
