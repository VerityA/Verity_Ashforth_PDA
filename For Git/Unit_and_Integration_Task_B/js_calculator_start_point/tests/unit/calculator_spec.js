var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    assert.strictEqual(calculator.previousTotal, 0);
    calculator.add(10);
    assert.strictEqual(calculator.runningTotal, 10);
    calculator.add(2);
    assert.strictEqual(calculator.runningTotal, 2);
  })

  it('can add 1 + 4 = 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract', function(){
    assert.strictEqual(calculator.previousTotal, 0);
    calculator.subtract(10);
    assert.strictEqual(calculator.runningTotal, -10);
    calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, -2);
  })

  it('can subtract 7 - 4 = 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply', function(){
    calculator.previousTotal = 10;
    calculator.multiply(10);
    assert.strictEqual(calculator.runningTotal, 100);
    calculator.multiply(2);
    assert.strictEqual(calculator.runningTotal, 20);
  })

  it('can multiply 3 x 5 = 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can divide', function(){
    calculator.previousTotal = 10;
    calculator.divide(10);
    assert.strictEqual(calculator.runningTotal, 1);
    calculator.divide(2);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can divide 21/7 = 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can display clicked number on first click', function(){
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 9);
  })

  it('can concatenate clicked number on nth click', function(){
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 9);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 94);
  })

  it('can display clicked number on first click post operator click', function(){
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 9);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 9);
  })

  it('can chain multiply operator clicks', function(){
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(6);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('can clear the running total to display 0', function(){
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  })

  it('can clear the running total without affecting calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12);
  })


});
