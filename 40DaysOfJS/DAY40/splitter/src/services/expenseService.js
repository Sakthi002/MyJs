import { Expense } from "../models/expense.js";

// import { UserService } from "./userService.js"; // another way

class ExpenseService {

    constructor(userService) {

        this.expenses = [];
        
        this.userService = userService;

        // this.userService = new UserService(); // another way
    }

    addExpense(paidBy, amount, description) {

        if(!this.userService.hasUser(paidBy)) {

            throw new Error('User does not exist.')
        }

        const expense = new Expense(paidBy, amount, description);

        this.expenses.push(expense);

        return expense;
    }

    getAllExpenses() {

        return [...this.expenses];
    }

    getUserExpenses(name) {

        return this.expenses.filter(expense => expense.paidBy === name);
    }

    clear() {

        this.expenses = [];
    }

    simplifyExpenses() {
        
    }
}