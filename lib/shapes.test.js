
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
    test('should create a square with the specified side length', () => {
        const square = new Square(10);
        expect(square.sideLength).toBe(10);
    });
});

// Test cases for the Circle class
describe('Circle', () => {
    test('should create a circle with the specified radius', () => {
        const circle = new Circle(5);
        expect(circle.radius).toBe(5);
    });
});

// Test cases for the Triangle class    
describe('Triangle', () => {
    test('should create a triangle with the specified base and height', () => {
        const triangle = new Triangle(10, 20);
        expect(triangle.base).toBe(10);
        expect(triangle.height).toBe(20);
    });
});

// Test cases for the Text class
describe('Text', () => {
    test('should create a text with the specified content', () => {
        const text = new Text('Hello, world!');
        expect(text.content).toBe('Hello, world!');
    });
});
