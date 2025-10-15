function createExpenseTracker(name, budget) {
   
    let expenses = [];
    let user = {
        name, 
        budget
    };
    let expenseId = 0;

    return {
        // - Adding Expense
        addExpense : function(amount, category, description) {
            
            const expense = {
                id: ++expenseId,
                amount,
                category,
                description
            };

            expenses.push(expense);
            
            console.log("Expense Added", amount, category, description);
        },
        // - Removing Expense
        removeExpense : function (id) {

            let removeIndex = expenses.findIndex(expense => expense.id === id);
            
            if(removeIndex === -1){
            
                console.log("Invalid expense");
            
            } else {
                
                expenses.splice(removeIndex, 1);

                console.log("Expense removed");
            }
        },
        // - Updating Expense
        updateExpense : function (id, data) {

            let updateExp = expenses.find(expense => expense.id === id);

            if(updateExp) {

                Object.assign(updateExp, data)

                console.log("Expense updated");
            
            } else {

                console.log("Invalid expense");
            }
        },
        // - Getting total expenses done by the user
        totalExpenses: function () {

            let totalAmount = expenses.reduce((acc, curr) => {
                acc = acc + curr.amount;
                return acc;
            },0)

            console.log("Total Expenses done by", name, "is :", totalAmount);
        },
        // - Getting expense by category
        expenseByCategories: function () {

            let expByCategory = expenses.reduce((acc, curr) => {

                if(!acc[curr.category]) {
                
                    acc[curr.category] = [];
                }
                
                acc[curr.category].push(curr);

                return acc;

            }, {});

            let result = {};

            for(let key in expByCategory) {

                result[key] = expByCategory[key].reduce((acc, curr) => {
                    acc = acc + curr.amount
                    return acc;
                }, 0)
            }

            console.log("Expenses by categories", result);
            
        },
        // - Show all the expenses
        showAllExpenses: () => {

            console.log("All Expenses : ", expenses);
        },
        // - Get the Highest Expense
        highestExpense : () => {

            let highest = expenses.reduce((acc, curr) => {
                return acc.amount > curr.amount ? acc : curr;
            });

            console.log("Highest expense is :", highest);
        },
        // - Get the Lowest Expense
        lowestExpense: function () {
            let lowest = expenses[0];
            for(let exp of expenses) {
                if(exp.amount < lowest.amount) {
                    lowest = exp;
                }
            }
            console.log("Lowest Expense is :", lowest);
        },
        // - Get the user info
        userDetails : function () {
            console.log(user);
        },
        // - Update User data
        updateUserDetails : function (name, budget) {
            user.name = name || user.name;
            user.budget = budget || user.budget;
            console.log("User details updated");
        }
    }
}

let myTracker = createExpenseTracker("Sakthi", 5000);
myTracker.addExpense(200, "Food", "Lunch");
myTracker.addExpense(500, "Shopping", "New Shoes");
myTracker.addExpense(150, "Food", "Breakfast");
myTracker.addExpense(300, "Shopping", "T-shirt");
myTracker.addExpense(200, "Food", "Dinner");
myTracker.addExpense(400, "Transport", "Taxi");
myTracker.addExpense(250, "Shopping", "Groceries");
myTracker.addExpense(100, "Entertainment", "Coffee with friends");
myTracker.showAllExpenses()
myTracker.updateExpense(4,{ amount: 500, category: "HealthCare", description : "Vaccination"});
myTracker.showAllExpenses();
myTracker.totalExpenses();
myTracker.expenseByCategories();
myTracker.highestExpense();
myTracker.lowestExpense();
myTracker.userDetails();
myTracker.updateUserDetails("Viji", 10000);
myTracker.userDetails();
