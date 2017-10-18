function simpleClone(initalObj) {
    var obj = {};
    for ( var i in initalObj) {
        obj[i] = initalObj[i];
    }
    return obj;
}

var obj = {
    a: "hello",
    b: {
        a: "world",
        b: 21
    },
    c: ["Bob", "Tom", "Jenny"],
    d: function() {
        alert("hello world");
    }
}
var cloneObj = simpleClone(obj); // объект клон
 
console.log(cloneObj.b); // {a: "world", b: 21}
console.log(cloneObj.c); // ["Bob", "Tom", "Jenny"]
console.log(cloneObj.d); // function() { alert("hello world"); }
 
cloneObj.b.a = "changed";
cloneObj.c = [1, 2, 3];
cloneObj.d = function() { alert("changed"); };
 
console.log(obj.b); // {a: "changed", b: 21}
console.log(obj.c); // ["Bob", "Tom", "Jenny"]
console.log(obj.d); // function() { alert("hello world"); }