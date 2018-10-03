"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Pet.printFeedBrand = function (feedBrand) {
        return "Marca da Ra\u00E7\u00E3o: " + feedBrand;
    };
    Pet.prototype.walk = function () {
        return "Um passo por vez " + this.name;
    };
    Pet.prototype.stop = function () {
        return "Parado " + this.name;
    };
    Pet.prototype.talk = function () {
        return 'Nada para falar';
    };
    return Pet;
}());
exports.default = Pet;
