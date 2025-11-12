console.log("Day 38");

let dept = {
    name: 'Sales'
}

let department = dept;

dept = null;

console.log(department); // dept and department refrencing dame object


function createCycle(objA, objB) {
    objA.ref = objB;
    objB.ref = objA;
    return {
        A: objA,
        B: objB,
    }
}

const cycle = createCycle({sal:100}, {sal:200});

console.log(cycle);


