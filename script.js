'use strict';

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    calcArea() {
        return this.w * this.h;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(w, h, text, bgColor) {
        super(w, h);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10);
const loSquare = new Rectangle(20, 100);
console.log(square.calcArea());
console.log(loSquare.calcArea());

const cRect = new ColoredRectangleWithText(8, 12, 'abc', 'red');
cRect.showMyProps();
console.log(cRect.calcArea());
