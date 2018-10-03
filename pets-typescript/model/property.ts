export default class Property {

  constructor(protected _address, protected _amount) { }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get formatedAmount() {
    return this._amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  print() {
    return `Imóvel localizado no endereço: ${this._address}. Com valor de: R$ ${this.formatedAmount}`;
  }
}
