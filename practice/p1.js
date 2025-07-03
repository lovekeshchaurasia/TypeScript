function demo(obj) {
    console.log(obj.a, obj.b, obj.c);
}
var obj = {
    a: 1,
    b: "kuch v",
    c: 2
};
demo(obj);
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200);
var ABCD = /** @class */ (function () {
    function ABCD(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(ABCD.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ABCD.getRandom = function () {
        return Math.random();
    };
    return ABCD;
}());
var u1 = new ABCD("harsh", 25);
