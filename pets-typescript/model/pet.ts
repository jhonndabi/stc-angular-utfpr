export default class Pet {
  constructor(public name, public age) {
    this.name = name;
    this.age = age;
  }

  static printFeedBrand(feedBrand) {
    return `Marca da Ração: ${feedBrand}`;
  }

  walk() {
    return `Um passo por vez ${this.name}`;
  }

  stop() {
    return `Parado ${this.name}`;
  }

  talk() {
    return 'Nada para falar';
  }
}
