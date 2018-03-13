import {Triangle} from './../src/triangle.js';

describe('Triangle', function() {
  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22)
    expect(notTriangle.isTriangle()).toEqual(false);
  });

  it('should correctly determine whether three lengths can be made into an equilateral triangle', function() {
    var equilateralTriangle = new Triangle(8,8,8)
    expect(equilateralTriangle.equilateral()).toEqual(true);
  });

  it('should correctly determine whether three lengths is an isosceles triangle', function() {
    var isoscelesTriangle = new Triangle(4,4,2)
    expect(isoscelesTriangle.isosceles()).toEqual(true);
  });

  it('should correctly determine whether three lengths is a scalene triangle', function() {
    var scaleneTriangle = new Triangle(3,4,5)
    expect(scaleneTriangle.scalene()).toEqual(true);
  });

});
