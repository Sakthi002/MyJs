export function successToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true
    }).showToast();
}

export function errorToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #8B0000, #FFCCCB)",
        }
    }).showToast(); 
}