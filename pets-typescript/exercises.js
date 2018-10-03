"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./model/dog");
var property_1 = require("./model/property");
var new_property_1 = require("./model/new_property");
var old_property_1 = require("./model/old_property");
var destitute_1 = require("./model/destitute");
var poor_1 = require("./model/poor");
var rich_1 = require("./model/rich");
var Exercises = /** @class */ (function () {
    function Exercises() {
    }
    Exercises.first = function () {
        var dogs = [
            new dog_1.default('Lala', 6, 'Beagle'),
            new dog_1.default('Lele', 3, 'Bull Terrier'),
            new dog_1.default('Lolo', 2, 'Golden Retriever'),
        ];
        var ageTotal = dogs.reduce(function (total, currentDog) { return total + currentDog.age; }, 0);
        console.log("A soma da idade dos cachorros: " + ageTotal);
        console.log('\n');
        console.log('Pets com mais de 2 anos de idade:');
        dogs
            .filter(function (dog) { return dog.age > 2; })
            .forEach(function (dog) {
            console.log("Nome do cachorro: " + dog.name + " - Idade do cachorro: " + dog.age);
        });
        console.log('\n');
        dogs
            .map(function (dog) {
            dog.name = dog.name.toUpperCase();
            return dog;
        })
            .forEach(function (dog) {
            console.log(dog);
        });
    };
    Exercises.second = function () {
        var property = new property_1.default('Rua XV de Novembro, 1000', 300000);
        console.log(property.print());
        var newProperty = new new_property_1.default('Rua XV de Novembro, 1000', 300000);
        var oldProperty = new old_property_1.default('Rua XV de Novembro, 1000', 300000);
        console.log(newProperty.print());
        console.log(oldProperty.print());
    };
    Exercises.third = function () {
        var destitute = new destitute_1.default('Maikitaiçon', 20);
        var poor = new poor_1.default('Francisleidy', 30);
        var rich = new rich_1.default('João', 25);
        console.log(destitute.beg());
        console.log(poor.work());
        console.log(rich.shopping());
    };
    return Exercises;
}());
exports.default = Exercises;
