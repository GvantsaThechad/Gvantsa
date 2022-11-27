

function Car(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
}
    
var manqanushka = new Car(' Bugatti ', 'La Voiture Noire', '2019')

console.log(manqanushka);


function Person(name, age){
    this.name=name
    this.age=age

}

var Person = new Person ('Vinme fuliani',20)


console.log (Person)

console.log(Person.name + " is " + Person.age + " and drives " + manqanushka.make + "model  " + manqanushka.model + " which was released in " + manqanushka.year)