class Greeter {
    
    constructor(public greeting: string) {}
    
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hey there!");
    
document.body.innerHTML = greeter.greet();


// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

