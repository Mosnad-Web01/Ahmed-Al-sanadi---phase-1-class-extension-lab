class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  class Triangle extends Polygon {
    // Getter method to check if the triangle is valid
    get isValid() {
      if (this.countSides !== 3) return false;
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  class Square extends Polygon {
    // Getter method to check if the square is valid
    get isValid() {
      if (this.countSides !== 4) return false;
      const [a, b, c, d] = this.sides;
      return (a === b) && (b === c) && (c === d);
    }
  
    // Getter method to calculate the area of the square
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      return undefined;
    }
  }
  