import Property from './property';

export default class NewProperty extends Property {
  set amount(amount) {
    this._amount = amount + ((amount / 100) * 20);
  }
}
