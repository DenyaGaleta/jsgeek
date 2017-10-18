// 1
var acceleration = {}; 
Object.defineProperty( acceleration, "gravity", {
  value: 9.8,
  writable: false, // запретить присвоение "acceleration.gravity="
  configurable: false // запретить удаление "acceleration.gravity"
});
acceleration.gravity = 10; // пробуем изменить свойство объекта
delete acceleration.gravity; // пытаемся удалить acceleration.gravity
console.log(acceleration.gravity); // выведет 9.8

// 2
const con = {};

Object.defineProperty(con, 'name', {
  value: 'Деня',
  writable: false,
  configurable: true,
  enumerable: true
});

con.name = 'Миха'; // Ошибка
console.log(con.name);