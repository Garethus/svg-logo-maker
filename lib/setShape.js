// Importing Triangle, Square, Circle classes from ./shapes.js
const {Circle, Square, Triangle } = require('./shapes.js');

//Function called in index.js to return SVG string based on user's response
function setShape(response) {
    svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';


    if (response.shape === 'Circle') {
        let userShape = new Circle ();
        userShape.setColor(response.shapeColor);      
        svgString += userShape.render();
    }

    if (response.shape === 'Square') {
        let userShape = new Square ();
        userShape.setColor(response.shapeColor); 
        svgString += userShape.render();
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle ();
        userShape.setColor(response.shapeColor); 
        svgString += userShape.render();
    }

    svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`;
    svgString += "</svg>";
    return svgString;
};

module.exports = setShape;