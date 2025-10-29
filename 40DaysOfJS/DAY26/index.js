console.log("DAY 26 - COMMON MISTAKES IN ASYNC/AWAIT & PROMISES");

let ids = [1,2,3,4];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}

// Traditional Promises way
const loopFetches = () => {

    for(let i = 0; i < ids.length; i++) {

        console.log(`Fetching data of user with id ${ids[i]}`);

        let response = fetchData(ids[i]);

        response.then((data)=>{

             data.json().then(user => {
        
                console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
            
            }).catch(err => {

                console.err(err);      
            })
        })
    }
}

// loopFetches();

// Async/Await
const loopAsyncFetches = async () => {

    for(let i = 0; i < ids.length; i++) {

        try {
         
             console.log(`Fetching data of user with id ${ids[i]}`);

            let response = await fetchData(ids[i]);
            let user = await response.json();

            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);

        } catch (err) {
         
            console.error(err)
        }
    }
}

// loopAsyncFetches();

const loopAll = async () => {

    const responses = await Promise.allSettled(ids.map(id => fetchData(id)));
    const users = await Promise.allSettled(responses.map(obj => obj.value.json()));

    users.forEach(({value : user}) => {
         console.log(`===Fetching data of user with id ${user.id}===`);
         console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
}

// loopAll();

const ten = new Promise ((resolve) => {
    resolve(10)
})

// Chain
ten.then(res => {
    return res * 10;
}).then(res => {
    return res * 2;
}).then(res => {
    return res - 10;
}).then(res => {
    console.log(res);
})

// No chain
ten.then(res => {
    return res * 10;
})
ten.then(res => {
    return res * 2;
})
ten.then(res => {
    return res - 10;
})
ten.then(res => {
    console.log(res);
})

function isEven(number) {

    return new Promise((resolve, reject) => {

        if(number % 2 === 0) {
            resolve("Yes, It is Even")
        } else {
            reject("not Even")
        }
    })
}

// isEven(11).then(res=>{
//     console.log(res);
// })

const hello = Promise.resolve('Hello');

hello.then(() => "World").then(res => {
    console.log(res);
})

let cache = {
    'sakthi@gmail.com' : {
        name: "Sakthi",
        org: "Tapas"
    }
}

const getData = (email) => {

    let userFromCache = cache[email];
  
    if(userFromCache) {
  
        console.log(`User details ${JSON.stringify(userFromCache)}`);
  
        return;
  
    } else {
  
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                // resolve
                // update cache
                console.log("Makes an call an update cache");  
            
            }, 2000)
        })
    }
}

getData('sakathi@gmail.com')