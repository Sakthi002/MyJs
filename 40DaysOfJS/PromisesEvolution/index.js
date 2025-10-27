console.log("Promises Evolution");

// 🧩 Step 1: Normal Synchronous Functions

    function getUser(id) {
        return { id, name: 'Alice'};
    }

    function getPosts() {
        return [{ id:1, title: "Post 1" }];
    }

    function getComments() {
        return [{ id:1, text: "Nice post!!!"}]
    }

    const user = getUser(1);
    const posts = getPosts();
    const comments = getComments();

    console.log(user, 'user');
    console.log(posts, 'posts');
    console.log(comments, 'comments');

    // ✅ How it works:
        // Each function executes immediately and returns a value.
        // The next line doesn’t run until the previous one is done (because JavaScript runs synchronously by default).
        // Easy to follow: line 1 → line 2 → line 3.
        // 🧠 No async complexity — but this only works if data is available instantly (in memory).

// ⚙️ Step 2: When things become asynchronous
    // Imagine these functions making network requests or DB queries for data

    function getUser1(id) {
        setTimeout(() => {
            return { id, name: "Bob"}
        },1000)
    }

    let user1 = getUser1(1);
    console.log(user1); // undefined

    // ❌ Why it fails:
        // setTimeout schedules an callback
        // the function returns before setTimeout executes
        // there is no way to pause Javascript while waiting - it moves to the next line

    // 💡 Event loop behavior:
        // 1. The synchronous part (top-level code) runs first.
        // 2. The callback inside setTimeout is added to the callback queue.
        // 3. The callback runs only after the main thread is free.
        // 4. By then, your function has already returned undefined.

    // Result: getUser1(1) returns undefined

// 🔁 Step 3: Introducing Callbacks
    // We pass a callback function that will run after the async work finishes.

    function getUser2(id, callback) {
        setTimeout(() => {
            let user = { id, name: "Alice"};
            callback(user)
        },1000)
    }

    // Usage
    getUser2(1, function(user) {
        console.log(user);
    })

    // ✅ Why this works:
        // Instead of returning immediately, getUser accepts a function to call later.
        // The callback executes after the timeout completes.
        // The async result (user) is delivered through the callback, not as a return value.
    
    // 🧠 Concept: Inversion of Control
        // Instead of the function giving you a value, you give the function control over when your code should run.

// 🪜 Step 4: Sequential Asynchronous Flow (Callback Chain)

    // Now you want to fetch:
    // User →
    // Posts for that user →
    // Comments for that post.

    function getUser3(id, cb) {

        setTimeout(() => {

            cb({ id, name: "Alice"})
        
        }, 1000)
    }

    function getPosts3(id, cb) {

        setTimeout(() => {

            cb([{ id : 1, title: "Post 1"}])
        
        }, 1000)
    }

    function getComments3(id, cb) {

        setTimeout(() => {

            cb({ id : 1, text: "Nice post!!!"})
        
        }, 1000)
    }

    getUser3(1, (user, err) => {
        if(err) return console.log(err)
        getPosts3(user.id, (posts, err) => {
            if(err) return console.log(err)
            getComments3(posts[0].id, (comments, err) => {
                if(err) return console.log(err)
                console.log(comments, 'comments 3');
            })
        })
    })

    // ✅ Works fine — each async call waits for the previous one’s result.

    // ❌ But now we get:

        // getUser → getPosts → getComments
        //     ↳ nested ↳ deeper ↳ deeper

    // This is called the callback pyramid of doom.

// ⚠️ Step 5: Problems with Nested Callbacks
    // ------------------------------------------------------------------------------------------------------
    // Problem	                | Description                                                              //
    // ------------------------------------------------------------------------------------------------------
    // Indentation Hell    	    | Each async step depends on the previous one → deeply nested structure.   //
    // ------------------------------------------------------------------------------------------------------
    // Error Handling  	        | You must handle errors separately in every callback.                     //
    // ------------------------------------------------------------------------------------------------------
    // Readability	            | Hard to read, reason about, and modify.                                  //
    // ------------------------------------------------------------------------------------------------------
    // Reusability	            | Logic is tightly coupled; you can’t easily reuse inner steps.            //
    // ------------------------------------------------------------------------------------------------------
    // Control Flow Complexity	| You can’t easily do things like run tasks in parallel or cancel them.    //
    // ------------------------------------------------------------------------------------------------------

    // getUser3(1, (user, err) => {
    //     if(err) return console.log(err)
    //     getPosts3(user.id, (posts, err) => {
    //         if(err) return console.log(err)
    //         getComments3(posts[0].id, (comments, err) => {
    //             if(err) return console.log(err)
    //             console.log(comments, 'comments');
    //         })
    //     })
    // })

    // Quickly becomes messy

    // We can avoid callback hell with synchronous approach also - without promises
    
    function getUser4(id) {
        setTimeout(() => {
            getPosts4({ id, name: "Alice"});
        }, 1000);
    }

    function getPosts4(user) {
        setTimeout(() => {
            getComments4([{ id : 1, title: "Post 1"}]);
        }, 1000);
    }

    function getComments4(posts) {
        setTimeout(() => {
            console.log({ id : 1, text: "Nice post!!!"});
        }, 1000);
    }

    getUser4(1);

    // ERRORS IN THIS APPROACH
        // 1. NO REUSABILTY
            // What if tomorrow you want to use getUser() somewhere else —
            // say, just to show the user’s profile?
            // getUser(1); // automatically triggers getPosts() and getComments()
            // you can’t stop it. It always runs the full chain.
        // 2. NO RETURN VALUES
            // Each function doesn’t return anything useful — it just triggers the next.
            // So you can’t use these functions as part of other operations or compositions.
    
// 🔍 TL;DR — Why Promises are Required
        // Because they give you control and structure for async code:
        // You can write reusable functions that return results asynchronously.
        // You can compose, chain, and handle errors cleanly.
        // You can separate what a function does from when and how it’s used.
        // They make async programming predictable and maintainable.
        // Without Promises (or async/await), your async functions are just fire-and-forget blocks — impossible to manage in real-world apps with complex flows.

// 🧱 Step 6: Promises — The Modern Fix
    // - We can solve above problems using Promises

    function getUser5(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id, name: "Alice"})
            }, 1000)
        })
    }

    function getPosts5(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ id, title: "Post 1"}])
            }, 1000)
        })
    }

    function getComments5(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ id, text: "Nice post!!!"}])
            }, 1000)
        })
    }

    let user5 = getUser5(1);
    console.log(user5); // promise

    getUser5(1)
    .then(user => getPosts5(user.id))
    .then(posts => getComments5(posts[0].id))
    .then(comments => console.log(comments, 'comments 5'))
    .catch(err => console.log(err));

    // ✅ Why this is better:
        // Each .then() returns a new Promise → clean chaining.
        // Single .catch() handles any error in the chain.
        // No deep nesting.
        // Composable — you can return or reuse Promises elsewhere.

// 🧱 Step 7: ASYNC/AWAIT

    async function usingAsync() {
        try {

            const user = await getUser5(1);
            const posts = await getPosts5(user.id);
            const comments = await getComments5(posts[0].id);

            console.log(comments, 'comments 5 async')
        
        } catch (err) {
        
            console.error(err)
        }
    }

    usingAsync();