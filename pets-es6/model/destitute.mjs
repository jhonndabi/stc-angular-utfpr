import Person from './person';

export default class Destitute extends Person {
  beg() {
    return `${this.name} do beg`;
  }
}
