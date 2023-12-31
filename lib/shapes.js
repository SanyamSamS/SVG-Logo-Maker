class SVG {
  constructor(shape, text, color) {
    this.shape = shape;
    this.text = text;
    this.color = color;
  }
  render() {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shape.render()}
      <fill="${this.color}">${this.text}</text>
    </svg>`;
  }
}

class Shape {
    constructor(shape, color) {
        this.shape = shape; 
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
  }
}

const shapes = {
    circle: Circle,
    triangle: Triangle,
    square: Square
};

class Text {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<text x="150" y="125" font-size="100" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = { SVG, Circle, Triangle, Square, Text, shapes};