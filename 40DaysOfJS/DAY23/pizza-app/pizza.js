// CALLBACK HELL

// function createPizzaOrder(type, name) {

//     console.log('Locating store'); 

//     query('api/pizzahub', function(result, error) {
    
//         if(!error) {
            
//             let location = result[0];
            
//             console.log(`Store located: ${location}`);

//             console.log('Loading order...');
            
//             query(`api/pizzahub/pizzas/${location}`, function(result, error) {

//                 if(!error) {

//                     let pizzas = result;
                    
//                     let myPizza = pizzas.find(pizza => pizza.name === name && pizza.type === type);

//                     if(myPizza) {

//                         console.log(`Order created for ${name} with type ${type}`);

//                         console.log("Checking for Add-ons");

//                         query(`api/pizzahub/beverages/${myPizza.id}`, function(result, error) {

//                             if(!error) {

//                                 let addOn = result[0];

//                                 console.log(`Added ${addOn.name} as beverage to the pizza`);
                                
//                                 console.log("Preparing your order!!!");
                                
//                                 query('api/order', function(result, error) {

//                                     if(!error) {
//                                         console.log(`Your order of ${type} ${name} with ${addOn.name} has been placed.`);
//                                     }
//                                 }, {
//                                     method: 'POST',
//                                     headers: {
//                                         'Content-Type': 'application/json'
//                                     },
//                                     body: JSON.stringify( {
//                                         pizzaId: myPizza.id,
//                                         beverageId: addOn.id,
//                                     })
//                                 })
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//     })
// }

// createPizzaOrder('veg', "Margherita");

// WITH PROMISES

function getShopId() {
    let url = 'api/pizzahub';
    return promiseQuery(url);
}

function getPizzaList(location) {
    let url = `api/pizzahub/pizzas/${location}`
    return promiseQuery(url)
}

function getAddons(pizzas, type, name) {

    let myPizza = pizzas.find(pizza => pizza.name === name && pizza.type === type)
    
    let url = `api/pizzahub/beverages/${myPizza.id}`;

    return promiseQuery(url);
}

function prepareOrder(result) {
    
     let url = 'api/order';
     let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pizzaId: result.pizzaId,
            beverageId: result.id,
        })
    }
    return promiseQuery(url, options)
}

let confirmOrder = (type, name) => {
    console.log(
        `Your order of ${type} ${name} has been placed!`
    );
};


function createPizzaOrder(type, name) {
    
    getShopId()
    .then(result => getPizzaList(result[0]))
    .then(pizzas => getAddons(pizzas, type, name))
    .then((addOns) => prepareOrder(addOns[0]))
    .then((result) => confirmOrder(type, name))
    .catch(err => {
        console.log("err", err);
    })
}

createPizzaOrder('veg', "Margherita");