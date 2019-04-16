"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
    sync/async

  master: https://github.com/Eddie-CooRo/

author: "MrR00200R"  >> https://github.com/MrR00200R/
*/

/*
//help: node ./dist/index.js
import fs from 'fs';
console.time('reading files');
for (let i = 1; i <= 5; i++) {
    console.time('reading:', i);
    fs.readFile('./files/file' + i + '.txt', 'utf8', (file, err) => {
    console.timeEnd('reading:', i);
  });
}
console.timeEnd('reading files');
*/
// async factorial with "promise":
function fact(number) {
  return new Promise(function (resolve, reject) {
    if (number <= 1) resolve(1);
    fact(number - 1).then(function (res) {
      resolve(res * number);
    });
  });
}

fact(22).then(function (fact) {
  return console.log('factorial 22 is:', fact);
}); // async fibonacci with "async/await":

function fib(_x) {
  return _fib.apply(this, arguments);
}

function _fib() {
  _fib = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(number) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(number <= 1)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", 1);

          case 2:
            _context.next = 4;
            return fib(number - 2);

          case 4:
            _context.t0 = _context.sent;
            _context.next = 7;
            return fib(number - 1);

          case 7:
            _context.t1 = _context.sent;
            return _context.abrupt("return", _context.t0 + _context.t1);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fib.apply(this, arguments);
}

fib(3).then(function (fib) {
  return console.log('fibonacci 3 is:', fib);
}); // :)

fetch('https://reqres.in/api/users').then(function (res1) {
  return res1.json();
}).then(function (res1JSON) {
  console.log(res1JSON);
  return fetch('https://reqres.in/api/users?page=2').then(function (res2) {
    return res2.json();
  }).then(function (res2JSON) {
    return console.log(res2JSON);
  });
}).catch(function (err) {
  return console.log('Error is:', err);
}); // :)

function reqres() {
  return _reqres.apply(this, arguments);
}

function _reqres() {
  _reqres = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var req1, res1, req2, res2, req3, res3, req4, res4;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch('https://reqres.in/api/users/1');

          case 3:
            req1 = _context2.sent;
            _context2.next = 6;
            return req1.json();

          case 6:
            res1 = _context2.sent;
            console.log('result 1:', res1);
            _context2.next = 10;
            return fetch('https://reqres.in/api/users/2');

          case 10:
            req2 = _context2.sent;
            _context2.next = 13;
            return req2.json();

          case 13:
            res2 = _context2.sent;
            console.log('result 2:', res2);
            _context2.next = 17;
            return fetch('https://reqres.in/api/users/3');

          case 17:
            req3 = _context2.sent;
            _context2.next = 20;
            return req3.json();

          case 20:
            res3 = _context2.sent;
            console.log('result 3:', res3);
            _context2.next = 24;
            return fetch('https://reqres.in/api/users/4');

          case 24:
            req4 = _context2.sent;
            _context2.next = 27;
            return req4.json();

          case 27:
            res4 = _context2.sent;
            console.log('result 4:', res4);
            _context2.next = 34;
            break;

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](0);
            console.log('Error is:', _context2.t0);

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 31]]);
  }));
  return _reqres.apply(this, arguments);
}

reqres().then(function () {
  return console.log('function "async/await" reqres done!');
});
console.log('promise async behavior!');
/*
sync/async

  master: https://github.com/Eddie-CooRo/

        author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
