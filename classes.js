class Animal {
    constructor(name, legs, eyes, sound) {
        this.name = name;
        this.legs = legs;
        this.eyes = eyes;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, 4, 2, 'Woof');
    }
    lickBalls() {
        console.log('Yummy')
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, 4, 2, 'Meow');
    }
    lickAss() {
        console.log('Yummy')
    }
}