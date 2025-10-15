// 1. deepClone

function deepClone(value) {

    if(value === null || typeof value !== 'object') {

        return value;
    }

    if(Array.isArray(value)) {
        
        return value.map(val => deepClone(val));
    }

    let clonedObj = {};

    for(let key in value) {        

        if (value.hasOwnProperty(key)) {

            clonedObj[key] = deepClone(value[key])
        }
    }

    return clonedObj;
    
}

const original = { a: 1, b: { c: 2 }, d: [ 3, 4 ] }

const cloneTest=deepClone(original)

console.log(cloneTest) //{a:1,b:{c:2},d:[3,4]}

console.log(cloneTest !== original) //true

console.log(cloneTest.b !== original.b) //true

console.log(cloneTest.d !== original.d) //true