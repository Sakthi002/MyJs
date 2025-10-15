function multiple(x,y,z) {
    console.log(x * y * z);
}

function multipleBy2(x,y) {
    multiple(2, x, y);
}

multipleBy2(5, 10);

function partial(fn, ...fixedArgs) {

    return function(...remainingArgs) {

        return fn(...fixedArgs, ...remainingArgs);
    }
}

let multipleBy3 = partial(multiple, 3);
multipleBy3(4,5);

function greet(greet, name) {
    console.log(`${greet}, ${name}`);
}

let sayHello = partial(greet, "Hello");
sayHello("Sakthi")
