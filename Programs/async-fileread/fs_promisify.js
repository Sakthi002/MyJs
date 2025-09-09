const fs = require('fs');

// fs.readFile('./haiku1.txt', 'utf8', (err,data) => {
    
//     if(err){
    
//         console.log('Error reading file 1:: ', err);

//     } else {
            
//         console.log('Data from file 1:: ', data);

//         fs.readFile('./haiku2.txt', 'utf8', (err,data) => {
    
//             if(err){
            
//                 console.log('Error reading file 2:: ', err);
        
//             } else {
                    
//                 console.log('Data from file 2:: ', data);

//                 fs.readFile('./haiku3.txt', 'utf8', (err,data) => {
    
//                     if(err){
                    
//                         console.log('Error reading file 3:: ', err);
                
//                     } else {
                            
//                         console.log('Data from file 3:: ', data);
//                     }
//                 })
//             }
//         })
//     }
// })

function asyncReadFile(fileName) {

    return new Promise(function(resolve, reject) {

        fs.readFile(fileName, 'utf8', (err, data) => {
            
            if(err){
            
                reject(err);
        
            } else {
                    
                resolve(data);
            }
        })
    })
}

// asyncReadFile('./haiku1.txt').then((data) => {

//     console.log("HAIKU 1");
//     console.log(data);

//     return asyncReadFile('./haiku2.txt');

// }).then((data)=>{

//     console.log("HAIKU 2");
//     console.log(data);

//     return asyncReadFile('./haiku3.txt')

// }).then((data) => {

//     console.log('HAIKU 3');
//     console.log(data);

// }).catch((err) => {

//     console.log('ERROR:: ', err)
// })

async function getHaikus() {

    try {

        const haiku1 = await asyncReadFile('./haiku1.txt');
        console.log("HAIKU 1");
        console.log(haiku1);

        const haiku2 = await asyncReadFile('./haiku1.txt');
        console.log("HAIKU 2");
        console.log(haiku2);

        const haiku3 = await asyncReadFile('./haiku1.txt');
        console.log("HAIKU 3");
        console.log(haiku3);
    
    } catch(err) {

        console.log('ERRROR in haiko :: ', err)
    }

}

getHaikus();