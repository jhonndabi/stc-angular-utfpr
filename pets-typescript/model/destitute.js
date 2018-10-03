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
var person_1 = require("./person");
var Destitute = /** @class */ (function (_super) {
    __extends(Destitute, _super);
    function Destitute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Destitute.prototype.beg = function () {
        return this.name + " do beg";
    };
    return Destitute;
}(person_1.default));
exports.default = Destitute;
