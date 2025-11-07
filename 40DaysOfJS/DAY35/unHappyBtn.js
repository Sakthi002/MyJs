const user = {
    name: "Sakthi",
    clicks: 0,
    handleClick : () => {
        document.getElementById('clickBtn').addEventListener('click', () => {
            this.clicks++;
            console.log(`User ${this.name} clicked ${this.clicks} times.`);
        })
    }
}

// user.handleClick();

// Here are the key issues:
// handleClick is defined as an arrow function.
// Arrow functions don’t have their own this — they inherit it from their lexical scope (the environment where they were defined).
// In this case, that means this inside handleClick refers to the global object (or undefined in strict mode), not the user object.
// The inner arrow function inside addEventListener also inherits that same wrong this.

const user1 = {
    name: "Sakthi",
    clicks: 0,
    handleClick : function () {
        document.getElementById('clickBtn').addEventListener('click', () => {
            this.clicks++;
            console.log(`User ${this.name} clicked ${this.clicks} times.`);
        })
    }
}

user1.handleClick();

