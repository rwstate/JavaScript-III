/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: When this is used in the global scope, the value of this is the Window object
* 2. Implicit Binding: When a method is called, the value of this is the owner of the method
* 3. New Binding: When an object is created from a constructor, the new object is the value of this
* 4. Explicit Binding: this is whatever is passed to call, apply, or bind
*
* write out a code example of each explanation above
*/

// Principle 1

this

window.age = 27

function sayAge () {
  console.log(`My age is ${this.age}`)
}

sayAge()

// Principle 2

const test = {
    implicit: "Working",
    tester: function() {
        console.log(this.working)
    }
}

test.tester()
// Principle 3

function Test(input) {
    this.output = input;
    this.tester = function () {console.log(this.output)}
}

newTest = new Test("test input")
newTest.tester()
// Principle 4

explicitTest = new Test("test explicit input")

newTest.tester.call(explicitTest)