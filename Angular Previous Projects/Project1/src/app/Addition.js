var fun1 = /** @class */ (function () {
    function fun1() {
    }
    fun1.prototype.add = function (num1, num2) {
        var num3 = num1 + num2;
        console.log(num3);
    };
    return fun1;
}());
var obj = new fun1();
obj.add(10, 20);
