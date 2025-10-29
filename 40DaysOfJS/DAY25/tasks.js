// # Tasks

// ## 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console

async function fetchUsers() {

    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok) throw new Error("Error while fetching users!!");

        let result = await response.json();

        result.forEach(user => {
            console.log(user.name);
        });
        
    } catch (error) {

        console.error(error);
    }
}

// fetchUsers();

// ## 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM

async function fetchPosts() {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    
    const queryParams = {
        userId : 1
    }

    try {
        
        const queryString = new URLSearchParams(queryParams).toString();

        const api = `${API_URL}?${queryString}`;

        const response = await fetch(api);

        if(!response.ok) throw new Error("Error while fetching posts!!");

        let result = await response.json();

        let ulElem = document.createElement("ul");

        let listFragement = document.createDocumentFragment();

        result.forEach(post => {
            
            let liElem = document.createElement('li');
            liElem.innerText = post.title;

            listFragement.appendChild(liElem);
        });

        ulElem.appendChild(listFragement);
        document.body.appendChild(ulElem);

    } catch (error) {

        console.error(error)
    }
}

// fetchPosts();

// ## 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console

async function createPost() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ title: 'New post', body: "Post description", userId: 1 })
        })

        const result = await response.json();

        console.log(result);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// createPost();

// ## 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint

async function updatePost() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ title: 'Updated post', body: "Updated description", })
        })

         if(!response.ok) throw new Error("Error while updating post!!");

        const result = await response.json();

        console.log(result);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// updatePost();

// ## 5. Send a `PATCH` request to update just the title of post `ID = 1`

async function editPost() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ title: 'Updated post again' })
        })

         if(!response.ok) throw new Error("Error while editing post!!");

        const result = await response.json();

        console.log(result);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// editPost();

// ## 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response

async function deletePost() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "DELETE"
        })

         if(!response.ok) throw new Error("Error while deleting post!!");

        const result = await response.json();

        console.log(`Post deleted successfully with status: ${response.status}`);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// deletePost();

// ## 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response

async function headUpdate() {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            }
        })

         if(!response.ok) throw new Error("Error while handling posts!!");

        const result = await response.json();

        console.log(result);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// headUpdate()

// ## 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post

async function request(url, options = {}) {

    try {
     
        const response = await fetch(url, options);

        if(!response.ok) throw new Error("Error while handling request!!");

        return await response.json();

    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

async function fetchUsers() {
    
    const users = await request('https://jsonplaceholder.typicode.com/users');

    console.log(users);
}

// fetchUsers();

async function createPost1() {

    try {

        const post = await request('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ title: 'New post', body: "Post description", userId: 1 })
        })

        console.log(post);
        
    } catch (error) {

        console.error(`Error: ${error}`)
    }
}

// createPost1();

// ## 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message

async function brokenTest() {
    const API_URL = "https://jsonplaceholder.typicode.com/posts/098765678";

    try {

        const response = await fetch(API_URL);

        if(!response.ok) throw new Error("Post not found!!!");

        const result = await response.json();

        console.log(result);
        
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

// brokenTest()

// ## 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

let controller;

let fetchBtn = document.createElement("button");
fetchBtn.setAttribute('type', "button");
fetchBtn.innerText = "Fetch";
document.body.appendChild(fetchBtn)

let abortBtn = document.createElement("button");
abortBtn.setAttribute('type', "button");
abortBtn.innerText = "Abort";
document.body.appendChild(abortBtn);

fetchBtn.addEventListener('click', fetchData);

abortBtn.addEventListener('click', function () {

    if (controller) {
        controller.abort("User aborted the request.");
        console.warn("⛔ Fetching aborted by user");
    }
})

async function fetchData () {

    controller = new AbortController();
    const signal = controller.signal;

    try {
        
        console.log("Fetching data from server...");

        await new Promise(resolve => setTimeout(resolve, 5000));

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {signal});

        if(!response.ok) throw new Error("Post not found!!!");

        const result = await response.json();

        console.log("Fetching Completed.", result);
        
    } catch (error) {

         if (error.name === "AbortError") {
            console.warn("⚠️ Request was aborted:", error.message);
        } else {
            console.error("❌ Fetch error:", error);
        }
    }
}