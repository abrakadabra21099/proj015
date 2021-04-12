'use strict';

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello!');

const btn = document.querySelector('.btn');
// let timerId, i = 0;

function myAnim() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        };
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}

btn.addEventListener('click', myAnim);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// });

// const timerId = setTimeout(logger, 2000);

// function logger() {
//     if (i > 1) {
//         clearInterval(timerId);
//     }
//     console.log(`text${i}`);
//     i++;
// };

// clearInterval(timerId);

// let id = setTimeout(function log() {
//     console.log('Hello!');
//     id = setTimeout(log, 500);
// }, 500);
