console.log("DAY 16");

const print = () => {

    const name = document.getElementById("m_name").value;
    const wish = document.getElementById("m_wish").value;

    const message = "Hello " + name + " ,May your wish `" + wish + "` comes true." ;
    
    logger(message);

    document.getElementById("output").innerHTML = `<span class="message"> ${message} </span>`
}

function logger(text) {
    console.log(text);
}