'use strict';

// const num = new Number(5);
// const num = new Function(5);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello by ${this.name}`)
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} go away.`);
};

const ivan = new User('Ivan', 2),
    alex = new User('Alex', 3);


console.log(ivan, alex);
alex.hello();
ivan.hello();

ivan.exit();
