/*
    random examples JavaScript for begin...
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

let alert = () => console.log('welcome to here...');
let hoc = massage => massage();
hoc(alert);

class Person {
  constructor(name, age) {
    (this.Name = name), (this.Age = age);
  }
}
class Student extends Person {
  constructor(name, age, email) {
    super(name, age);
    this.email = email;
  }
}
const sina = new Person('sina', 20);
const Mr = new Student('Mr', 21, 'Mr@fake.xyz');
let { email, ...MrWithoutemail } = Mr;
let isStringifyMr = JSON.stringify(Mr);
let isParseStringifyMr = JSON.parse(isStringifyMr);
let { Name, address } = sina;
console.log('# rest oprator > Mr with out Email:', MrWithoutemail);
console.log('# stringify Mr is:', isStringifyMr);
console.log('# parse Stringify Mr is:', isParseStringifyMr);
console.log('# object destructuring:', Name, +address);

function closure(x) {
  return function(y) {
    return function(z) {
      return (x + y) * z;
    };
  };
}
let result = closure(0)(1)(2);
console.log('#closure function:', result);

console.log('#Tip:', hoisting);
function hoisting() {
  return 'first you have to define it, then call';
}

let objects = [
  'CaseBox',
  'Monitor',
  'MainBoard',
  'RAM',
  'CPU',
  'PowerSupply',
  'KB/Mouse'
];
let objectWithO = objects
  .filter(obj => obj.includes('o'))
  .map(obj => obj.toUpperCase());
console.log('#some JavaScript methods:', objectWithO);

let numbers = [1, 2, 3, 4];
let num = numbers.reduce((p, c) => p + c, 0);
console.log('#sum numbers with  reduce:', num);

let iran = ['Tehran'];
let city = [...iran, 'Newyork'];
console.log('#spread operator for array:', city);

console.log('#imperative style:');
city.forEach((cities, index) => console.log(index + ' ' + cities));

/*
    random examples JavaScript for begin...
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
