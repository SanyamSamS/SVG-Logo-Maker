
const { SVG, Circle, Triangle, Square, Text } = require('./shapes.js');

// Test cases for the SVG class
describe('SVG', () => {
    test('should create an SVG with the specified shape and text', () => {
        const svg = new SVG('circle', 'Hello World');
        expect(svg.shape).toBe('circle');
        expect(svg.text).toBe('Hello World');
    });
});


// Test cases for the Square class
describe('Square', () => {
    test('should create a square instance', () => {
        const square = new Square('green');
        expect(square).toBeInstanceOf(Square);
    });
});

// Test cases for the Circle class
describe('Circle', () => {
    test('should create a circle instance', () => {
        const circle = new Circle('green');
        expect(circle).toBeInstanceOf(Circle);
    });
});

// Test cases for the Triangle class    
describe('Triangle', () => {
    test('should create a triangle instance', () => {
        const triangle = new Triangle('green');
        expect(triangle).toBeInstanceOf(Triangle);
    });
});

// Test cases for the Text class
describe('Text', () => {
    test('should create a text instance', () => {
        const text = new Text('Hello', 'black');
        expect(text).toBeInstanceOf(Text);
    });
});
