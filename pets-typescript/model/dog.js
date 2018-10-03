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
var pet_1 = require("./pet");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.breed = breed;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.talk = function () {
        return 'Fala: auau';
    };
    Dog.prototype.layDown = function () {
        _super.prototype.stop.call(this);
        return "Deitado " + this.name;
    };
    Dog.prototype.toString = function () {
        return "Meu nome \u00E9 " + this.name + " e\ntenho " + this.age + " anos";
    };
    return Dog;
}(pet_1.default));
exports.default = Dog;
