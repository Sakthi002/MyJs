console.log("pizza app")

async function getStore(type, name) {

    console.log('Locating the store...');
    
    let response = await fetch('http://localhost:3000/api/pizzahub')

    if (!response.ok) throw new Error("Failed to fetch store");
        
    let result = await response.json();

    let stores = result[0];

    console.log(`Store located : ${stores}`);

    console.log(`Finding pizzas...`);

    return { stores, name, type }
}

async function getPizza({stores, name, type}) {

    let response = await  fetch(`http://localhost:3000/api/pizzahub/pizzas/`+stores);

    if (!response.ok) throw new Error("Failed to fetch pizzas");

    let result = await response.json();

    let myPizza = result.find(pizza => pizza.type === type && pizza.name === name);

    if(myPizza) {

        console.log(`${name} - ${type} pizza available`);

        console.log(`Checking for beverages to your pizza....`);
        
        return myPizza;

    } else {

        throw new Error("Pizza not available...")
    }
}

async function getBeverages(pizza) {

    let response = await fetch(`http://localhost:3000/api/pizzahub/beverages/`+pizza.id)
    
    if (!response.ok) throw new Error("Failed to fetch beverages");

    let result = await response.json();

    let addOns = result[0];

    console.log(`${addOns.name} added as a beverage to your pizza`);
    
    console.log("Processing your order....");
    
    return {pizza, addOn: addOns}
}

async function confirmOrder({pizza, addOn}) {

    let response = await fetch(`http://localhost:3000/api/order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pizzaId: pizza.id,
            beverageId: addOn.id,
        })
    })

     if (!response.ok) throw new Error("Order submission failed");     
}

async function pizzaApp () {
    try {
        let store = await getStore('veg', 'Margherita');
        let pizza = await getPizza(store);
        let addOn = await getBeverages(pizza);
        await confirmOrder(addOn)
        console.log("✅ Order completed successfully!");
    } catch(err) {
        console.error("❌ Error during pizza order:", err.message);
    }
}

pizzaApp()