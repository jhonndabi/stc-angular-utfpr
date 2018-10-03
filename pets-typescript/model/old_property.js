"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var property_1 = require("./property");
var OldProperty = /** @class */ (function (_super) {
    __extends(OldProperty, _super);
    function OldProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OldProperty.prototype, "amount", {
        set: function (amount) {
            this._amount = amount - ((amount / 100) * 20);
        },
        enumerable: true,
        configurable: true
    });
    return OldProperty;
}(property_1.default));
exports.default = OldProperty;
