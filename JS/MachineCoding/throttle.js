function scrolling (value, customValue) {
    console.log(value, customValue)
}

let handleScroll = throttle((e) => scrolling(e, 'custom'), 500)

function throttle(fn, delay) {

    let flag = true;

    return function (...args) {

        let context = this;

        if(flag) {

            fn.apply(context, args)

            flag = false;

            setTimeout(()=>{

                flag = true;
            },delay)
        }
    }
}

document.addEventListener('scroll', handleScroll)