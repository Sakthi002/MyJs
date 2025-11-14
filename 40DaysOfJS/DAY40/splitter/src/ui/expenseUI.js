// initializing dom inputs
// binding events

import { DOMHelpers } from "../helpers/DOMHelpers";
import { successToast, errorToast } from "../utils/toastUtils";

export class ExpenseUI {

    constructor(userService, expenseService) {
    
        this.userService = userService;
    
        this.expenseService = expenseService;
    
        this.initializeDOMElements();

        this.bindEvents();

        this.initializeSelectBox();
    }

    initializeDOMElements() {
        this.elements = {
            addUserForm : DOMHelpers.getElementById('addUserForm'),
            userInput : DOMHelpers.getElementById('userInput'),
            addExpenseForm : DOMHelpers.getElementById('addExpenseForm'),
            expenseUserInput : DOMHelpers.getElementById('expenseUserInput'),
            expenseAmountInput : DOMHelpers.getElementById('expenseAmountInput'),
            expenseReasonInput : DOMHelpers.getElementById('expenseReasonInput'),
            expenseList: DOMHelpers.getElementById('payment-list'),
            simplifyBtn: DOMHelpers.getElementById('simplifyBtn'),
            resultArea: DOMHelpers.getElementById("resultArea")
        }
    }

    bindEvents() {
        this.elements.addUserForm.addEventListener('submit', (e) => {
            this.handleUser(e);
        });
        this.elements.addExpenseForm.addEventListener('submit', (e) => {
            this.handleExpense(e);
        });
        this.elements.simplifyBtn.addEventListener('click', () => {
            this.handleSimplify();
        });
    }

    handleUser(e) {

        e.preventDefault();

        try {
            
            let name = this.elements.userInput.value.trim();

            if(!name) {
                throw new Error("Name is mandatory");
            }

            const user = this.userService.addUser(name);

            this.elements.addUserForm.reset();

            this.addOptionToSelect(user.name);

            successToast(`User ${user.name} added.`)

        } catch (error) {
            
            console.error(`Error adding user`);

            errorToast(error.message)
        }
    }

    initializeSelectBox() {
        const defaultOption = DOMHelpers.createOption("Select User", "");
        this.elements.expenseUserInput.add(defaultOption);
    }

    addOptionToSelect(userName) {
        this.elements.expenseUserInput.add(DOMHelpers.createOption(userName, userName));
    }

    handleExpense(e) {

        e.preventDefault();

        try {
            
            let paidBy = this.elements.expenseUserInput.value.trim();
            let amount = this.elements.expenseAmountInput.valueAsNumber;
            let description = this.elements.expenseReasonInput.value.trim();

            if(!paidBy) {
                throw new Error("User is mandatory");
            }

            if(!amount || amount < 0) {
                throw new Error("Amount must be positive integer");
            }

            const expense = this.expenseService.addExpense(paidBy, amount, description);

            // Render expenses
            this.renderExpense(expense);

            // Reset form
            this.elements.expenseAmountInput.value = "";
            this.elements.expenseReasonInput.value = "";

            // Show Toast
            successToast(`Expense ${amount} added by ${paidBy}`);

        } catch (error) {
            
            console.error(`Error adding expense: ${error}`);

            errorToast(error.message)
        }
    }

    renderExpense(expense) {
        
        let text = expense.description ? `${expense.paidBy} paid ₹${expense.amount} for ${expense.description}` : `${expense.paidBy} paid ₹${expense.amount}`
        
        const li = DOMHelpers.createListItem(text,'expense-item');
                
        this.elements.expenseList.appendChild(li);
    }

    handleSimplify() {
        
        try {
            
            const results = this.expenseService.simplifyExpenses();

            this.displayResults(results);

        } catch (error) {
            
             console.error(`Error while simplify: ${error}`);

            errorToast(error.message)
        }
    }

    displayResults(results) {
        DOMHelpers.clearElement(this.elements.resultArea);

        if (results.length === 0) {
            const noResultsItem = DOMHelpers.createListItem(
                "All expenses are settled!",
                "no-results"
            );
            this.elements.resultArea.appendChild(noResultsItem);
            return;
        }

        DOMHelpers.appendFragment(this.elements.resultArea, results, (result) =>
            DOMHelpers.createListItem(result, "settlement-item")
        );
    }
}