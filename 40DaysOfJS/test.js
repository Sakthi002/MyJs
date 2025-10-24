function createOrder(items, callback) {

    if (!items.length) {
        console.log("Cart is empty");
        return;
    }

    console.log("Creating order!!!");

    setTimeout(() => {

        console.log("Order created");
        
        let order = { id: 1, name: "bag"};
        
        callback(order);

    }, 2000)
}

function processOrder(order, callback) {

    if(!order) {
        console.log("Order details empty");
        return;
    }

    console.log("Processing order!!!");
    

    setTimeout(() => {

        console.log(`Order Processed!! ${order.name}`);
        
        let details = { id: 1, name: "bag", orderId: order.id};

        callback(details);

    }, 2000)
}

function sendMail(details) {
    setTimeout(() =>{
        console.log(`Sent mail with details: ${details.name} ${details.id}`);
    }, 2000)
}

let cart = ["bag"];

createOrder(cart, function (order) {
    processOrder(order, function (details) {
        sendMail(details)
    });
});