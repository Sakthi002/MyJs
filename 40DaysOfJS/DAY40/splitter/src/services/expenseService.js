import { Expense } from "../models/expense.js";

// import { UserService } from "./userService.js"; // another way

export class ExpenseService {

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
        
        const userCount = this.userService.getUsersCount();

        if(!userCount) return [];

        const userNames = this.userService.getUserNames();

        const net = {};

        userNames.forEach(name => {
            net[name] = 0
        })
        
        this.expenses.forEach(expense => {

            const share = expense.amount/userCount;

            userNames.forEach(name => {

                if(name === expense.paidBy) {

                    net[name] += (expense.amount - share);

                } else {
                    
                    net[name] -= share;
                }
            })
        })
        
        return this.calculateSettlements(net)
    }

    calculateSettlements(net) {

        let results = [];

        const names = Object.keys(net).filter(name => Math.abs(net[name]) > 0.01)

        console.log(names);

        names.sort((a,b) => net[a] - net[b]);

        let i = 0;
        let j = names.length - 1;

        while (i < j) {
            const creditor = names[j];
            const debtor = names[i];
            const settlement = Math.min(-net[debtor], net[creditor]);

            if (settlement > 0.01) {
                net[debtor] += settlement;
                net[creditor] -= settlement;
                results.push(`${debtor} owes ${creditor} ₹${settlement.toFixed(2)}`);
            }

            if (Math.abs(net[debtor]) < 0.01) i++;
            if (Math.abs(net[creditor]) < 0.01) j--;
        }

        return results;  
    }
}