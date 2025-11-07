function processPayment(paymentData) {
    
    try {
        
        if(!paymentData.amount) throw "Invalid amount!";

        if(!paymentData.method) throw new Error("Payment method missing!");

        simulatePayment(paymentData);

        console.log("Payment processed successfully.");

    } catch (error) {
        
        console.error(`Error: ${error instanceof Error ? error.message : error }`);
        
    } finally {

        console.log("Payment attempted");
    }
}

function simulatePayment() {

    if(Math.random() > 0.5) {

        throw new Error("Payment gateway timeout!");
    }
}

processPayment({ amount: 100, method: 'UPI' });
// processPayment({ amount: 200 });
// processPayment({ method: 'UPI' });

// throw "Invalid amount!" - throws string
// throw new Error("Payment method missing!") - throws error object