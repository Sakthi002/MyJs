function throttle(fn, interval, trail = false) {

    let lastCall = 0;

    let timeoutId = null;

    return function(...args) {

        let now = Date.now();

        if((now - lastCall) >= interval) {

            lastCall = now;
            
            fn.apply(this, args);
        
        } else if(trail && !timeoutId) {

            let remaining = interval - (now - lastCall);
            
            timeoutId = setTimeout(() => {

                timeoutId = null;

                lastCall = Date.now();

                fn.apply(this, args);

            }, remaining)
        }
    }
}

function handleScroll() {
    const scrollY = window.scrollY;
    document.getElementById("tracker").textContent = `Scroll Y: ${scrollY}`;
    console.log("Scroll event fired at, ", new Date().toLocaleTimeString());
}

const throttleScroll = throttle(handleScroll, 400, true)

document.addEventListener('scroll', throttleScroll)