
const Shape = require('./shape');
const Rectangle = require('./rectangle');
const Circle = require('./circle');
const Triangle = require('./triangle');

// Test cases for the SVG class
describe('SVG', () => {
    test('should create an SVG with the specified shape and text', () => {
        const svg = new SVG('circle', 'Hello World');
        expect(svg.shape).toBe('circle');
        expect(svg.text).toBe('Hello World');
    });

    test('should set the shape of the SVG', () => {
        const svg = new SVG('circle', 'Hello World');
        svg.setShape('triangle');
        expect(svg.shape).toBe('triangle');
    });

    test('should set the text of the SVG', () => {
        const svg = new SVG('circle', 'Hello World');
        svg.setText('Welcome');
        expect(svg.text).toBe('Welcome');
    });

    test('should render the SVG', () => {
        const svg = new SVG('circle', 'Hello World');
        const renderResult = svg.render();
        expect(renderResult).toBe('Rendered SVG');
    });
});

// Test cases for the Shape class
describe('Shape', () => {
    test('should create a shape with the specified shape and color', () => {
        const shape = new Shape('circle', 'red');
        expect(shape.shape).toBe('circle');
        expect(shape.color).toBe('red');
    });

    test('should set the color of the shape', () => {
        const shape = new Shape('circle', 'red');
        shape.setColor('blue');
        expect(shape.color).toBe('blue');
    });

    test('should render the shape', () => {
        const shape = new Shape('circle', 'red');
        const renderResult = shape.render();
        expect(renderResult).toBe('Rendered shape');
    });
});

// Test cases for the Rectangle class
describe('Rectangle', () => {
    test('should create a rectangle with the specified width and height', () => {
        const rectangle = new Rectangle(10, 20);
        expect(rectangle.width).toBe(10);
        expect(rectangle.height).toBe(20);
    });

    test('should set the color of the rectangle', () => {
        const rectangle = new Rectangle(10, 20);
        rectangle.setColor('red');
        expect(rectangle.color).toBe('red');
    });

    test('should render the rectangle', () => {
        const rectangle = new Rectangle(10, 20);
        const renderResult = rectangle.render();
        expect(renderResult).toBe('Rendered rectangle');
    });
});

// Test cases for the Circle class
describe('Circle', () => {
    test('should create a circle with the specified radius', () => {
        const circle = new Circle(5);
        expect(circle.radius).toBe(5);
    });

    test('should set the color of the circle', () => {
        const circle = new Circle(5);
        circle.setColor('blue');
        expect(circle.color).toBe('blue');
    });

    test('should render the circle', () => {
        const circle = new Circle(5);
        const renderResult = circle.render();
        expect(renderResult).toBe('Rendered circle');
    });
});

// Test cases for the Triangle class    
describe('Triangle', () => {
    test('should create a triangle with the specified base and height', () => {
        const triangle = new Triangle(10, 20);
        expect(triangle.base).toBe(10);
        expect(triangle.height).toBe(20);
    });

    test('should set the color of the triangle', () => {
        const triangle = new Triangle(10, 20);
        triangle.setColor('green');
        expect(triangle.color).toBe('green');
    });

    test('should render the triangle', () => {
        const triangle = new Triangle(10, 20);
        const renderResult = triangle.render();
        expect(renderResult).toBe('Rendered triangle');
    });
});

// Test cases for the Text class
describe('Text', () => {
    test('should create a text with the specified content', () => {
        const text = new Text('Hello, world!');
        expect(text.content).toBe('Hello, world!');
    });

    test('should set the color of the text', () => {
        const text = new Text('Hello, world!');
        text.setColor('red');
        expect(text.color).toBe('red');
    });

    test('should render the text', () => {
        const text = new Text('Hello, world!');
        const renderResult = text.render();
        expect(renderResult).toBe('Rendered text');
    });
});
