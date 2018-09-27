import Dog from './model/dog';
import Property from './model/property';
import NewProperty from './model/new_property';
import OldProperty from './model/old_property';
import Destitute from './model/destitute';
import Poor from './model/poor';
import Rich from './model/rich';

export default class Exercises {
  static first() {
    const dogs = [
      new Dog('Lala', 6, 'Beagle'),
      new Dog('Lele', 3, 'Bull Terrier'),
      new Dog('Lolo', 2, 'Golden Retriever'),
    ];

    const ageTotal = dogs.reduce((total, currentDog) => total + currentDog.age, 0);

    console.log(`A soma da idade dos cachorros: ${ageTotal}`);

    console.log('\n');

    console.log('Pets com mais de 2 anos de idade:');

    dogs
      .filter(dog => dog.age > 2)
      .forEach((dog) => {
        console.log(`Nome do cachorro: ${dog.name} - Idade do cachorro: ${dog.age}`);
      });

    console.log('\n');

    dogs
      .map((dog) => {
        dog.name = dog.name.toUpperCase();

        return dog;
      })
      .forEach((dog) => {
        console.log(dog);
      });
  }

  static second() {
    const property = new Property('Rua XV de Novembro, 1000', 300000);

    console.log(property.print());

    const newProperty = new NewProperty('Rua XV de Novembro, 1000', 300000);
    const oldProperty = new OldProperty('Rua XV de Novembro, 1000', 300000);

    console.log(newProperty.print());
    console.log(oldProperty.print());
  }

  static third() {
    const destitute = new Destitute('Maikitaiçon', 20);
    const poor = new Poor('Francisleidy', 30);
    const rich = new Rich('João', 25);

    console.log(destitute.beg());
    console.log(poor.work());
    console.log(rich.shopping());
  }
}
