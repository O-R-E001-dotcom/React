
function ExpenseStats({ expenses}) {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const highest = expenses.length ? Math.max(...expenses.map(expense => expense.amount)) : 0;

    return (
        <div className="stats">
            <div className="stat-item"> 
                <span className="stat-number">₦{total.toLocaleString()}</span>
                <span className="stat-label">Total</span>
            </div>

            <div className="stat-item">
                <span className="stat-number">{expenses.length}</span>
                <span className="stat-label">Number of Expenses:</span>
            </div> 
            
            <div className="stat-item">
                <span className="stat-number">₦{highest.toLocaleString()}</span>
                <span className="stat-label">Highest Expense:</span>
            </div> 
        </div>
    );
}

export default ExpenseStats;