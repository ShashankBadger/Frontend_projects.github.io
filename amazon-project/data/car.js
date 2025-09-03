class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  go() {
    if(!this.isTrunkOpen){
      if(this.speed >= 0 && this.speed <= 200){
        this.speed += 5;
      }
    }
  }

  brake() {
    if(this.speed >= 0 && this.speed <= 200){
      this.speed -= 5;
    }
  }

  openTrunk() {
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  displayInfo(){
    return `${this.#brand} ${this.#model}, ${this.speed} km/h, ${this.isTrunkOpen}`;
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    if(this.speed >= 0 && this.speed < 300){
      this.speed += this.acceleration;
    }
  }

  brake() {
    if(this.speed >= 0 && this.speed <= 300){
      this.speed -= this.acceleration;
    }
  }

  openTrunk() {
    this.isTrunkOpen = false;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

}

export const car = [
  {
    brand: 'Tayota',
    model: 'Corolla'
  },
  {
    brand: 'Tesla',
    model: 'Model 3'
  },
  {
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
  }
].map((carDetails) => {
  if('acceleration' in carDetails){
    return new RaceCar(carDetails);
  }
  return new Car(carDetails);
})

car[0].openTrunk();
car[0].go();
car[0].go();
car[0].go();
car[0].go();
car[0].go();
car[0].go();

car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();
car[2].go();



console.log(car);
car.forEach((carDetails) => {
  console.log(carDetails.displayInfo());
})