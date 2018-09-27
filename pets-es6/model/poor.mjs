import Person from './person';

export default class Poor extends Person {
  work() {
    return `${this.name} do work`;
  }
}
