retryMech("https://www.api.example.com").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

function retryMech(url, retries = 3, delay = 1000) {

    return new Promise((resolve, reject) => {

        const attempts = (n) => {

            fetch(url).then(res=>{

                resolve(res);

            }).catch(err=>{

                if(n > 0) {

                    setTimeout(() => {
                        attempts(retries - 1)
                    }, delay)
                } else {
                    reject(err)
                }
            })
        }

        attempts(retries)
    })
}

await new Promise((resolve) => setTimeout(resolve, delay))