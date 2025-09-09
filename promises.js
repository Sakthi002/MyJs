function createOrder(cart, callback) {

  if(!cart.length) {
    console.log('Cart is empty')
  } else {
    setTimeout(()=>{
      let orderId = "123";
      callback(orderId)
    }, 1000)
  }
}

function proceedToPayment(orderId, callback) {
  console.log("Procession the payment...");
  if(!orderId) {
    console.log("Invalid Order!!!")
  } else {
    setTimeout(()=>{
      let paymentInfo = { id: "P1" }
      callback(paymentInfo)
    },1000)
  }
}

function completeOrder(callback) {
  console.log("Completing the order...")
  setTimeout(()=>{
    callback();
  },1000)
}

function sendMail() {
  console.log("Sending mail..")
  setTimeout(()=>{
    console.log("Mail sent...")
  },1000)
}

let cart = ["pants"]

createOrder(cart, function(orderId) {
  console.log("Order created....");
  proceedToPayment(orderId, function (paymentInfo) {
    console.log("Payment processed..." + paymentInfo.id)
    completeOrder(function () {
    console.log("Order Completed...")
      sendMail();
    })
  })
})

// WITH PROMISES

function createOrder1(cart) {
  console.log("Creating the order...")
  return new Promise(function (resolve, reject) {
    setTimeout(()=>{
      if(!cart.length) reject(Error('Cart is empty'))
      let orderId = 123
      resolve(orderId)
    },1000)
  })
}

function proceedToPayment1(orderId) {
  console.log("Processing the payment...")
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(!orderId) reject(Error('Invaild Order...'))
      let paymentInfo = { id: "PAY1", o_id: orderId }
      resolve(paymentInfo)
    },1000)
  })
}

function completeOrder1(oId) {
  console.log('Completing the order...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!oId) reject(Error('Invalid order...'));
      resolve("order completed")
    }, 1000);
  })
}

function sendMail1() {
  console.log('Sending the mail...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mail sent")
    }, 1000);
  })
}

createOrder1(cart).then(res=>{
  console.log("Order created...")
  return res
}).then(res => {
  return proceedToPayment1(res)
}).then(res => {
  console.log("Payment processed with id : " + res.id)
  return completeOrder1(res.o_id)
}).then(res => {
  console.log(res)
  return sendMail1()
}).then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

async function completeFlow () {
  try {
    let cart1 = ["Jeans"];
    const orderId = await createOrder1(cart1);
    console.log("Order created...")
    const paymentInfo = await proceedToPayment1(orderId)
    console.log("Payment processed with id : " + paymentInfo.id)
    const orderComplete = await completeOrder1(paymentInfo.o_id)
    console.log(orderComplete)
    const sendMail = await sendMail1(orderComplete) 
    console.log(sendMail)
  } catch (err) {
    console.log(err)
  }
}

completeFlow()
