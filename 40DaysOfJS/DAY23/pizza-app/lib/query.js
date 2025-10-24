function query(endpoint, callback, options) {

    fetch(`http://localhost:3000/${endpoint}`, options).then(res=>{

        return res.json();
    
    }).then(result=>{
    
        setTimeout(() => {

            callback(result);
        }, 2000)
    
    }).catch(err => {
    
        console.error(err)
    })
}