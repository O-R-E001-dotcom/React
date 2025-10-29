import { useState } from "react";
import { Trash2, SquarePen } from "lucide-react";

function ExpenseItem({ expense, deleteExpense, editExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(expense.description);
  const [editAmount, setEditAmount] = useState(expense.amount);
  const [editCategory, setEditCategory] = useState(expense.category);
  const [editDate, setEditDate] = useState(expense.date);

  function handleSave() {
    // if (editExpense.trim() === "") return;
    editExpense(expense.id, {
      description: editDescription,
      amount: editAmount,
      date: editDate,
      category: editCategory,
    });
    setIsEditing(false);
  }
  return (
    <div className={`expense-item ${expense.category.toLowerCase()}`}>
      {isEditing ? (
        <>
          <input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />

          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
          />

          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />

          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <div className="expense-row">
          <div className="expense-description">{expense.description}</div>
          <div className="expense-amount">
            ₦{expense.amount.toLocaleString()}
          </div>
          <div className="expense-date">{expense.date}</div>
          <div className={`expense-category ${expense.category.toLowerCase()}`}>
            {expense.category}
          </div>
          <div className="expense-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              <SquarePen />
            </button>
            <button
              onClick={() => deleteExpense(expense.id)}
              className="delete-btn"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
