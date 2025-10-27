// console.log("DAY 24");

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am resolved!!!");
//     }, 1000)
// })

// promise.then((result) => {
//     console.log(result);
// });

function getData() {

    console.log('in getData');
    
    return Promise.resolve(101)
}

// getData().then(result => {
//     console.log(result);
// })

// let data = getData();
// console.log(data)

async function tacklePromise() {
    console.log('In tackele');
    
    let result = await getData()
    // let result;
    // getData().then(value => {
    //     console.log("in then");
        
    //     result = value;
    // })
    console.log("above result");
    console.log(result)
}

tacklePromise();

console.log("after method call");

const errorPromise = Promise.reject("Error Occured!!!");

async function handleErrorPromise() {
    
    try {
        await errorPromise;
    } catch(err) {
        console.error(err);
    }
}

handleErrorPromise();


(
    async () => {
        let data = await fetch('http://localhost:3000/api/pizzahub');
        let stores = await data.json();
        console.log(stores);
    }
)()

const BULBASAUR_POKEMANS_API = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMANS_API = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMANS_API = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function resolvePokeman() {

    try {

        const responses = await Promise.allSettled([
            fetch(BULBASAUR_POKEMANS_API).then(res => res.json()),
            fetch(RATICATE_POKEMANS_API).then(res => res.json()),
            fetch(KAKUNA_POKEMANS_API).then(res => res.json())
        ])

        console.log(responses);
    
    } catch (err) {

        console.error(err.message);
    }
}

resolvePokeman()




