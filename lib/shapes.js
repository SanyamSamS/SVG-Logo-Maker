class Shape {
    constructor(shape, color) {
        this.shape = shape; 
        this.color = color;
    }

    setColor(color) {
        this.color = color;
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

module.exports = { Shape, shapes};