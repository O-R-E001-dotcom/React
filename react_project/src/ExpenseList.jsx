
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense, editExpense }) {
    if (expenses.length === 0) {
        return <p className="empty-message"> No expense to display. Add one to get this.started boss!</p>
    }

    return (
        <div className="task-list">
            {expenses.map((expense, index) => (
               <ExpenseItem
                    key = {index}
                    expense={expense}
                    index={index}
                    deleteExpense={deleteExpense}
                    editExpense={editExpense}
               />
            ))}
        </div>
    );
}

export default ExpenseList;