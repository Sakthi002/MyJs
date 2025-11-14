import { User } from "../models/user.js"

export class UserService {
    
    constructor() {

        this.users = new Map();
    }

    addUser(name) {

        if(!name || typeof name !== 'string') {

            throw new Error("Name must be non-empty string.")
        }

        const trimmedName = name.trim();


        if(this.users.has(trimmedName)) {
            throw new Error("User already exists.")
        }

        const user = new User(trimmedName);

        this.users.set(name, user);

        return user;
    }

    getAllUsers() {

        return Array.from(this.users.values());
    }

    getUserNames() {

        return Array.from(this.users.keys());
    }

    getUser(name) {

        return this.users.get(name);
    }

    hasUser(name) {

        return this.users.has(name);
    }

    getUsersCount() {
        return this.users.size;
    }

    clear() {

        this.users.clear();
    }
}