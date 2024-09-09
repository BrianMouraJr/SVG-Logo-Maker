// Constructor Arithmetic is imported.
const { Square, Triangle, Circle } = require('./shapes.js');

// A testing suite for Shapes is created.
describe('Shape tests', () => {
  // Several tests are created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('Square Test', () => {
    it('render test', () => {
      const text = "svg";
      const shapeColor = "red";
      const textcolor = "white";

      const shapeTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="20" rx="5" ry="5" fill="${shapeColor}" /><text x="150" y="110" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`

      const shape = new Square(text, shapeColor, textcolor)
      expect(shape.render()).toEqual(shapeTemplate);
    });

  });

  describe('Square Test', () => {
    it('render test', () => {
      const text = "svg";
      const shapeColor = "red";
      const textcolor = "white";

      const shapeTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="20" rx="5" ry="5" fill="${shapeColor}" /><text x="150" y="110" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`

      const shape = new Square(text, shapeColor, textcolor)
      expect(shape.render()).toEqual(shapeTemplate);
    });

  });

  describe('Square Test', () => {
    it('render test', () => {
      const text = "svg";
      const shapeColor = "red";
      const textcolor = "white";

      const shapeTemplate = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="75" y="20" rx="5" ry="5" fill="${shapeColor}" /><text x="150" y="110" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`

      const shape = new Square(text, shapeColor, textcolor)
      expect(shape.render()).toEqual(shapeTemplate);
    });

  });
});
