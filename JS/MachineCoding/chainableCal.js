function calculator(initial = 0) {

    let result = initial;

    let ops = {
        add: function(value) {
            result += value;
            return ops;
        },
        subtract: function(value) {
            result -= value;
            return ops;
        },
        value: function() {
            return result;
        }
    }

    return ops;
}

let calc = calculator(1);
console.log(calc.add(10).subtract(5).value());
