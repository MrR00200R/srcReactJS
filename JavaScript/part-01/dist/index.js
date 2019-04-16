"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

    random examples JavaScript for begin...

  master: https://github.com/Eddie-CooRo/

author: "MrR00200R"  >> https://github.com/MrR00200R

*/
var alert = function alert() {
  return console.log('welcome to here...');
};

var hoc = function hoc(massage) {
  return massage();
};

hoc(alert);

var Person = function Person(name, age) {
  _classCallCheck(this, Person);

  this.Name = name, this.Age = age;
};

var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, email) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name, age));
    _this.email = email;
    return _this;
  }

  return Student;
}(Person);

var sina = new Person('sina', 20);
var Mr = new Student('Mr', 21, 'Mr@fake.xyz');

var email = Mr.email,
    MrWithoutemail = _objectWithoutProperties(Mr, ["email"]);

var isStringifyMr = JSON.stringify(Mr);
var isParseStringifyMr = JSON.parse(isStringifyMr);
var Name = sina.Name,
    address = sina.address;
console.log('# rest oprator > Mr with out Email:', MrWithoutemail);
console.log('# stringify Mr is:', isStringifyMr);
console.log('# parse Stringify Mr is:', isParseStringifyMr);
console.log('# object destructuring:', Name, +address);

function closure(x) {
  return function (y) {
    return function (z) {
      return (x + y) * z;
    };
  };
}

var result = closure(0)(1)(2);
console.log('#closure function:', result);
console.log('#Tip:', hoisting);

function hoisting() {
  return 'first you have to define it, then call';
}

var objects = ['CaseBox', 'Monitor', 'MainBoard', 'RAM', 'CPU', 'PowerSupply', 'KB/Mouse'];
var objectWithO = objects.filter(function (obj) {
  return obj.includes('o');
}).map(function (obj) {
  return obj.toUpperCase();
});
console.log('#some JavaScript methods:', objectWithO);
var numbers = [1, 2, 3, 4];
var num = numbers.reduce(function (p, c) {
  return p + c;
}, 0);
console.log('#sum numbers with  reduce:', num);
var iran = ['Tehran'];
var city = [].concat(iran, ['Newyork']);
console.log('#spread operator for array:', city);
console.log('#imperative style:');
city.forEach(function (cities, index) {
  return console.log(index + ' ' + cities);
});
/*

random examples JavaScript for begin...

  master: https://github.com/Eddie-CooRo/

    author: "MrR00200R"  >> https://github.com/MrR00200R

*/
