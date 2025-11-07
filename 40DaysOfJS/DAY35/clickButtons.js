function createbuttons() {

    let buttons = [];

    for(var i = 1; i <= 3; i++) {
        buttons.push(function() {
            console.log(`Button ${i} clicked`)
        })
    }

    return buttons;
}

const [btn1, btn2, btn3] = createbuttons();

btn1(); // Button 4 clicked
btn2(); // Button 4 clicked
btn3(); // Button 4 clicked

// Not work as expected
// You’re using var i, which is function-scoped, not block-scoped.
// That means all three functions share the same i variable, not a new one for each iteration.
// By the time the loop finishes, i has become 4.

function fixCreatebuttons() {

    let buttons = [];

    for(let i = 1; i <= 3; i++) {
        buttons.push(function() {
            console.log(`Button ${i} clicked`)
        })
    }

    return buttons;
}

const [btn11, btn12, btn13] = fixCreatebuttons();

btn11(); // Button 1 clicked
btn12(); // Button 2 clicked
btn13(); // Button 3 clicked

// ✅ Each function “remembers” its own i because let creates a new binding on each loop iteration.