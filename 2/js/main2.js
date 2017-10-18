//decorator 1
function doSomething(name) {
  console.log('Привет, ' + name);
}
function loggingDecorator(wrapped) {
  return function() {
    console.log('Старт');
    const result = wrapped.apply(this, arguments);
    console.log('Финишь');
    return result;
  }
}
const wrapped = loggingDecorator(doSomething);
wrapped('Миха');

//decorator 2
function Coffee() {
    this.cost = function() {
		return 1;
    };
}
// Decorator A
function Milk(coffee) {
    this.cost = function() {
		return coffee.cost() + 0.5;
    };	
}
// Decorator B
function Cream(coffee) {
    this.cost = function() {
		return coffee.cost() + 0.7;
    };
} 
// Decorator C
function Sugar(coffee) {
    this.cost = function() {
		return coffee.cost() + 0.2;
    };
}

var coffee = new Coffee();
coffee = new Sugar(coffee);
coffee = new Cream(coffee);
coffee = new Milk(coffee);
console.log(coffee.cost());


