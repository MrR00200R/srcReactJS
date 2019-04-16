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
  return new Promise((resolve, reject) => {
    if (number <= 1) resolve(1);
    fact(number - 1).then(res => {
      resolve(res * number);
    });
  });
}
fact(22).then(fact => console.log('factorial 22 is:', fact));

// async fibonacci with "async/await":
async function fib(number) {
  if (number <= 1) return 1;
  return (await fib(number - 2)) + (await fib(number - 1));
}
fib(3).then(fib => console.log('fibonacci 3 is:', fib));

// :)
fetch('https://reqres.in/api/users')
  .then(res1 => {
    return res1.json();
  })
  .then(res1JSON => {
    console.log(res1JSON);
    return fetch('https://reqres.in/api/users?page=2')
      .then(res2 => res2.json())
      .then(res2JSON => console.log(res2JSON));
  })
  .catch(err => console.log('Error is:', err));

// :)
async function reqres() {
  try {
    const req1 = await fetch('https://reqres.in/api/users/1');
    const res1 = await req1.json();
    console.log('result 1:', res1);
    const req2 = await fetch('https://reqres.in/api/users/2');
    const res2 = await req2.json();
    console.log('result 2:', res2);
    const req3 = await fetch('https://reqres.in/api/users/3');
    const res3 = await req3.json();
    console.log('result 3:', res3);
    const req4 = await fetch('https://reqres.in/api/users/4');
    const res4 = await req4.json();
    console.log('result 4:', res4);
  } catch (err) {
    console.log('Error is:', err);
  }
}
reqres().then(() => console.log('function "async/await" reqres done!'));

console.log('promise async behavior!');

/*
    sync/async
  master: https://github.com/Eddie-CooRo/
author: "MrR00200R"  >> https://github.com/MrR00200R/
*/
