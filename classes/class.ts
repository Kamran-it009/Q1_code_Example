class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(meters: number = 0) {
    console.log(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  constructor(name: string) {
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
