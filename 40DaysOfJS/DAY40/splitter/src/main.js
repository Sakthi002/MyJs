import { ExpenseService } from "./services/expenseService";
import { UserService } from "./services/userService";
import { ExpenseUI } from "./ui/expenseUI";

class ExpenseApp {
    
    constructor() {
    
        this.userService = new UserService();
    
        this.expenseService = new ExpenseService(this.userService);

        this.ui = null;
    }

    init() {

        try {
            
            this.ui = new ExpenseUI(this.userService, this.expenseService);

            console.log("Splitter App Initialized successfully.");
            
        } catch (error) {
            
            console.log("Failed to initialize Splitter App.");
        }
    }
}

let expenseApp;

document.addEventListener("DOMContentLoaded", function() {
    expenseApp = new ExpenseApp();
    expenseApp.init();
})

window.addEventListener('load', function() {
    if(!expenseApp) {
        expenseApp = new ExpenseApp();
        expenseApp.init();
    }
})