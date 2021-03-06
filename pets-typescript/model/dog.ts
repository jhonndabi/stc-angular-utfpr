import Pet from './pet';

export default class Dog extends Pet {
  constructor(public name, public age, public breed) {
    super(name, age);
    this.breed = breed;
  }

  talk() {
    return 'Fala: auau';
  }

  layDown() {
    super.stop();
    return `Deitado ${this.name}`;
  }

  toString() {
    return `Meu nome é ${this.name} e\ntenho ${this.age} anos`;
  }
}
