console.log("DAY 25 - FETCH API");

// GET

async function getPosts() {

    try  {

        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        let data = await response.json();

        console.log(data);

    } catch (err) {

        console.error(err);
    } 
}

// getPosts();

// GET with query

async function getPostsWithQueryParams() {
    
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    const queryParams = {
        _limit : 5
    }

    try {
        
        const queryString = new URLSearchParams(queryParams).toString();

        const api = `${API_URL}/?${queryString}`;

        const response = await fetch(api);

        if(!response.ok) {
            throw new Error("Error occured")
        }

        let contentType = response.headers.get('content-type');

        if(!contentType.includes('application/json')) {
            throw new TypeError("Mot a valid JSON")
        }

        const data = await response.json();
        
        console.log(data);
        
    } catch (error) {
        
        console.error(err);
    }
}

// getPostsWithQueryParams();

// POST

async function createPost(postData) {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    try {
        
        let response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-type' : 'application/json; charset=UTF-8'},
            body: JSON.stringify(postData)
        });

        let data = await response.json();

        console.log(data);
        
    } catch (error) {
        console.error(err);
    }
}

// createPost({ title: "New Post", body : "New Post Body", userId: 1 })

// PUT
async function updatePost(postData) {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        
        let response = await fetch(API_URL, {
            method: 'PUT',
            headers: { 'Content-type' : 'application/json; charset=UTF-8'},
            body: JSON.stringify(postData)
        });

        let data = await response.json();

        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

// updatePost({ id:1, title: "New Post UPDATED", body : "New Post Body", userId: 1 })

// PATCH
async function updatePostData(postData) {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        
        let response = await fetch(API_URL, {
            method: 'PATCH',
            headers: { 'Content-type' : 'application/json; charset=UTF-8'},
            body: JSON.stringify(postData)
        });

        let data = await response.json();

        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

// updatePostData({ body : "New Post Body" })

// PATCH
async function deletePost() {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        
        let response = await fetch(API_URL, {
            method: 'DELETE'
        });

        let data = await response.json();

        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}

// deletePost();

// REQUEST OBJECT

const request1 = new Request('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: { 'Content-type' : 'application/json'},
    body: JSON.stringify({ title: "Test", body: "Test", userId: 1 })
})

// const request2 = new Request(request1, {
//     body: JSON.stringify({ title: "Test One", body: "Test One", userId: 1 })
// })

async function post(request) {

    try {
     
        const response = await fetch(request);
        
        const result = await response.json();

        console.log(result);
    
    } catch (error) {
    
        console.error(error)
    }
}

// post(request1);
// post(request2);

// ABORTCONTROLLER

let controller;

const downloadBtn = document.getElementById("download");
const abortBtn = document.getElementById("abort");

downloadBtn.addEventListener('click', downloadFile);

abortBtn.addEventListener('click', function() {
    if(controller.signal) {
        controller.abort("User aborted the download action!!!");
        console.warn("Download aborted");
    }
})

const url = "./download/file.txt";

async function downloadFile() {

    controller = new AbortController();
    const signal = controller.signal;

    try {
        console.log("Downloading...");
        
        await new Promise(resolve => setTimeout(resolve, 2000))

        let response = await fetch(url, {signal});
        let blob = await response.blob();
        console.log("Download complete");
        

        const objectUrl = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = objectUrl;
        link.download = "file.txt"; 
        link.click();
        URL.revokeObjectURL(objectUrl);

    } catch (error) {
    
        console.error(error)
    }
}


