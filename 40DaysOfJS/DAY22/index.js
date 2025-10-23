console.log("DAY 22");

console.log("Start");
setTimeout(() => {
    console.log("Waiting Done!");
}, 2000)
console.log("End");

// SIMPLE CALLBACK

function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback()
}

function sayBye() {
    console.log("Bye!!");
}

greet("Sakthi", sayBye);

// CALLBACK IN ASYNC
function fetchData(callback) {
    setTimeout(()=> {
        let data = { id: 1, name: "Item1" };
        callback(data);
    })
}
fetchData(function(data) {
   console.log("Data fetched", data);    
});

// EXAMPLE HELL

let storeEl = document.getElementById("store")
let detailsEl = document.getElementById("order-details")
let addOnEl = document.getElementById("add-on")
let orderEl = document.getElementById("order")

function orderPizza(type, name) {

    storeEl.innerText = "Locating the store..."
    // pizzahub for store
    setTimeout(()=> {

        let result = ["Dominos"];
        
        console.log(result[0]);
        storeEl.innerText = `Located the store: ${result[0]}`;

        detailsEl.innerText = `Loading the order...`;
        // get the store and query pizzas
        setTimeout(() => {
        
            let pizzas = [{ id: 1, shopId: "Dominos", name: "Margherita", type: "veg" }];
        
            // find my pizza
            let myPizza = pizzas.find(pizza => pizza.type === type && pizza.name === name);
        
            console.log(myPizza);

            detailsEl.innerText = `You have ordered : ${myPizza.name}`;

            addOnEl.innerText = `Checking for beverages...`;

            // get beverages
            setTimeout(()=>{

                let addOns = [{ id: 2, pizzaId: 2, name: "Coke" }];

                console.log(addOns[0]);

                addOnEl.innerText = `${addOns[0].name} added as beverage`;

                orderEl.innerText = "Placing the order...";

                setTimeout(()=> {

                    orderEl.innerText = `Order placed for ${name} of ${type} type with ${addOns[0].name}`;

                    console.log(`Order placed for ${name} of ${type} type with ${addOns[0].name}`);
                    
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
};

orderPizza("veg", "Margherita");
