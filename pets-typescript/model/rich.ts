import Person from './person';

export default class Rich extends Person {
  shopping() {
    return `${this.name} do shopping`;
  }
}
