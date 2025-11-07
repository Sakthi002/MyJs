export class User {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }

    getRole() {
        return "User";
    }
}