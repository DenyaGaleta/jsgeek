// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Animal(name) {
  this.name = name;
  this.thinkRationally = true;
}
// Методы хранятся в прототипе
Animal.prototype.run = function() {
  console.log(this.name + " бежит!")
}
Animal.prototype.squeak = function() {
	console.log(this.squeak + " пищит!")
}

// --------- Класс-потомок -----------
// Конструктор потомка
function Mouse(name) {
	this.squeak = true;
	Animal.apply(this, arguments);
}
// Унаследовать
Mouse.prototype = Object.create(Animal.prototype);
// Желательно и constructor сохранить
Mouse.prototype.constructor = Mouse;
// Методы потомка
Mouse.prototype.run = function() {
	  // Вызов метода родителя внутри своего
	Animal.prototype.run.apply(this);
};
// Готово, можно создавать объекты
var mouse = new Mouse('Мышь');
mouse.run();
console.log(mouse.squeak); // + отдельно в классе Mouse она еще и пищит

function Eagle(name) {
	Animal.apply(this, arguments);
}
Eagle.prototype = Object.create(Animal.prototype);
Eagle.prototype.constructor = Eagle;
Eagle.prototype.run = function() {
	console.log(this.name + " летает!");
};
var eagle = new Eagle('Орел');
eagle.run();
console.log(eagle.squeak); // ОШЫБКА, специально показать что в eagle нету squeak

function Deer(name) {
	this.horns = true;
	Animal.apply(this, arguments);
}
Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;
Deer.prototype.run = function() {
	Animal.prototype.run.apply(this);
};
var deer = new Deer('Олень');
deer.run();
console.log(deer.horns);

function Human(name) {
	Animal.apply(this, arguments);
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.run = function() {
	Animal.prototype.run.apply(this);
};
var human = new Human('Человек');
human.run();
console.log(human.thinkRationally + " - да, " + human.name + " думает рационально");

function Hunter(name) {
	Human.apply(this, arguments);
}
Hunter.prototype = Object.create(Human.prototype);
Hunter.prototype.constructor = Hunter;
Hunter.prototype.run = function() {
	Human.prototype.run.apply(this);
};
var hunter = new Hunter('Охотник');
hunter.run();
console.log(hunter.thinkRationally + " - да, " + hunter.name + " думает рационально");

function Aborigine(name) {
	Human.apply(this, arguments);
	  this.thinkRationally = false;
}
Aborigine.prototype = Object.create(Human.prototype);
Aborigine.prototype.constructor = Aborigine;
Aborigine.prototype.run = function() {
	Human.prototype.run.apply(this);
};
var aborigine = new Aborigine('Абориген');
aborigine.run();
console.log(aborigine.thinkRationally + " - нет, " + aborigine.name + " думает не рационально");
