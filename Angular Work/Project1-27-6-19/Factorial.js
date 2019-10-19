var factorial = /** @class */ (function () {
    function factorial() {
    }
    factorial.prototype.fac = function (num) {
        var f = 1;
        var i;
        if (num != 0) {
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
        }
        console.log("factorial numer of  " + num + "is:  " + f);
    };
    return factorial;
}());
var o = new factorial();
o.fac(5);
