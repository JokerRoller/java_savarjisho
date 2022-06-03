function Car ( make, model, year ) {
    this.make = make,
    this.model = model,
    this.year = year
    this.getCarInfo = function(){
        document.write( this.make + ' ' + this.model + ' released in ' + this.year + "</br>" )
    };
};

function Person ( name, age, cars ) {
    this.name = name,
    this.age = age,
    this.cars = cars
    this.getPersonInfo = function() {
        document.write( this.name + ' არის' + this.age + ' წლის და ყავს ' + this.cars + ' ' ) + car.getCarInfo()
    };
};

var car = new Car('Tesla', 'Model S', 2015);
car.getCarInfo();

var person = new Person( 'ტომი', 24, 'მანქანა' );
person.getPersonInfo(); 