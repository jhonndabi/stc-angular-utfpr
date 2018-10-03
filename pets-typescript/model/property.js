"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Property = /** @class */ (function () {
    function Property(_address, _amount) {
        this._address = _address;
        this._amount = _amount;
    }
    Object.defineProperty(Property.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (amount) {
            this._amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "formatedAmount", {
        get: function () {
            return this._amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        },
        enumerable: true,
        configurable: true
    });
    Property.prototype.print = function () {
        return "Im\u00F3vel localizado no endere\u00E7o: " + this._address + ". Com valor de: R$ " + this.formatedAmount;
    };
    return Property;
}());
exports.default = Property;
