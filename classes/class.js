class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite() {
        console.log("bites");
    }
}
const a = new Snake("anaconda");
a.move();
export {};
