var coffe = {
    nameCoffe: prompt("Какое кофе вы хотите?", "Американо"),
    quantityCoffe: prompt('Сколько вы хотите кофе?', 65),
    sugarCoffe: prompt("Сколько сахара в кофе вы хотите?", 1),
    creamCoffe: prompt("Добавлять сливки?", "ДА"),
index: function (){
    return this.quantityCoffe;
},
   FucnQuantityCoffe: function () {
        if (this.index() <= 20) {return'Мало кофе'}
        else if (this.index() < 50) {return'Нормальное количество кофе'}
        else if (this.index() < 70) {return'Кофе в хорошем наполнении'}
        else if (this.index() < 100) {return'Много кофе'}
        else {return'Ой-ой полилось через верх!!!'}
    },
    toString: function () {
        return this.nameCoffe + ' - ' + this.FucnQuantityCoffe();
    },
    toNum: function () {
        return 'Количество кофе - ' + this.quantityCoffe.valueOf() + 'мл. ' + this.sugarCoffe.valueOf() + ' - сахара';
    }
};

var toJson = JSON.stringify(coffe);

coffe.index();
console.log(coffe.toString());
console.log(coffe.toNum());
console.log(toJson);
