var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hey there!");
document.body.innerHTML = greeter.greet();
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
