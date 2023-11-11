interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swin(): void;
}


class Tucan implements Bird, FlyingBird {
  fly(): void {
    console.log("I am flying");
  }

  eat(): void {
    console.log("I am eating");
  }
}


//Colibri
class Humminbird implements Bird, FlyingBird {
  fly(): void {
    console.log("I am flying");
  }
  eat(): void {
    console.log("I am eating");
  }
}


//Avestrus
class Osttrich implements Bird, RunningBird {
  run(): void {
    console.log("I am running");
  }
  eat(): void {
    console.log("I am eating");
  }
}


class Penguin implements Bird, SwimmerBird {
  swin(): void {
    console.log("I am swimming");
  }
  eat(): void {
    console.log("I am eating");
  }
}