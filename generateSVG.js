const fs = require('fs');

function generateSVG(text, textColor, shape, shapeColor) {
    let svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="${shapeColor}" />
    `;

    switch (shape) {
        case 'circle':
            svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
    }

    svgContent += `
        <text x="150" y="100" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;

    return svgContent;
}

module.exports = {
    generateSVG
};
