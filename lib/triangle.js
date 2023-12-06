const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(shape, color) {
        super('triangle', color);
    }

    render() {
        return triangle
    }
}

module.exports =  Triangle