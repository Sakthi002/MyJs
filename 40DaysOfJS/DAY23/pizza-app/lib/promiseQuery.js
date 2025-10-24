function promiseQuery(endpoint, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`http://localhost:3000/${endpoint}`, options).then(res=>{
                if(!res.ok) {
                    throw new Error(`HTTP error : ${res.status}`)
                }
                return res.json()
            })
            .then(resolve)
            .catch(reject)
        }, 2000)
    })
}