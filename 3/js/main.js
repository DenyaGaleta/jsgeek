var circle = {
    x: 0,
    y: 0,
    r: 15
};

/* Добавим свойство area к объекту circle */
Object.defineProperty(circle, 'area', {
	configurable: true,
    enumerable: true,
    get: function() {
    	console.log("Свойство прочитано");
        return 3.14 * this.r * this.r; 
    },
    set: function(s) {
    	console.log("Свойство записано");
        this.r = Math.sqrt(s / 3.14); 
    }
});

console.log(circle.r); // 15
console.log(circle.area); // 706.5

// изменим значение свойства area
circle.area = 1000;
console.log(circle.r); // 17.845765256206242
console.log(circle.area); // 1000
circle.area = 1000000;
console.log(circle.r); // 17.845765256206242
console.log(circle.area); // 1000
console.log(Object.getOwnPropertyDescriptor(circle, 'r'));

