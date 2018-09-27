import Property from './property';

export default class OldProperty extends Property {
  set amount(amount) {
    this._amount = amount - ((amount / 100) * 20);
  }
}
