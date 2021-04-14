'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// };

// showThis(3, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         console.log(this);
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(`${this.name} ${surname}`);
}
const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Doe']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
const quadro = count.bind(4);

console.log(double(3));
console.log(double(23));

console.log(quadro(3));
console.log(quadro(23));

const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

const o = {
    num: 5,
    sayNum: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
o.sayNum();

// const calcDouble = (a) => {
//     return a * 2;
// };

// const calcDouble = (a) => a * 2;
const calcDouble = a => a * 2;
console.log(calcDouble(4));

const calcMultiplay = (a, b) => a * b;
console.log(calcMultiplay(4, 2));

// 1) Обычная функция: this = window, но если 'use strict', то this = undefined
// 2) this-контекст у методов объекта - сам объект
// 3) this-контекст в конструкторах и классах - новый экземпляр объекта
// 4) ручная привязка this: call, apply, bind