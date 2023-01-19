'use strict';

// // console.log(this);

// const calcAge = function (birthYear) {
//   //   console.log(2037 - birthYear);
//   //   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   //   console.log(2037 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(1980);

//
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    //SOLUTION 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1991 && self.year <= 1996);
    // };

    //SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.calcAge();
jonas.greet();

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//ARGUMENTS KEYWORD

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(2, 5, 8);
