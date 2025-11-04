// import { add, subtract, multiply, divide } from './utils.js'

// console.log(add(2,3));
// console.log(subtract(10,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));

import { fetchUsers, createUser } from "./api.js";

const init = async () => {

    try {

        const result = await fetchUsers();

        let divElm = document.createElement('ul');
        
        let userFrag = document.createDocumentFragment();
        
        result.forEach(element => {
            
            let liElem = document.createElement('li');

            liElem.innerText = element.name;

            userFrag.appendChild(liElem)

        });

        divElm.appendChild(userFrag);

        document.body.appendChild(divElm)

    } catch (err) {

        console.error(err);
    }
}

init();
