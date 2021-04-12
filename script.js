'use strict';

// const now = new Date();
// const now = new Date('2021-05-05');
// const now = new Date(2021, 5, 5, 20);
// const now = new Date(0); // миллисекунды
// const now = new Date(-9999999999999); // миллисекунды
const now = new Date('2021-04-13');

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start}мс`);

// console.log(now.setHours(40));
// console.log(now)

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
