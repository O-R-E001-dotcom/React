import { useState } from "react";
import Header from "./Header";
import AddExpenseForm from "./AddExpenseForm";
import CategoryFilter from "./CategoryFilter";
import ExpenseList from "./ExpenseList";
import ExpenseStats from "./ExpenseStats";
import "./ExpenseTracker.css";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Breakfast at the Place",
      amount: 6500,
      category: "Food",
      date: "2025/10/25",
    },
    {
      id: 2,
      description: "Electricity",
      amount: 4000,
      category: "Bills",
      date: "2025/10/24",
    },
  ]);

  const [filter, setFilter] = useState("All");

  // To Add New Expense
  function addExpense(expense) {
    setExpenses([
      ...expenses,
      { ...expense, id: Date.now(), date: new Date().toLocaleDateString() },
    ]);
  }
  //delete expense
  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  function editExpense(id, newText) {
    setExpenses((prevExp) =>
      prevExp.map((expense) =>
        expense.id === id ? { ...expense, ...newText } : expense
      )
    );
    
  }

  // filter expenses
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  return (
    <div className="app">
      <Header />
      <AddExpenseForm addExpense={addExpense} />
      <CategoryFilter filter={filter} setFilter={setFilter} />
      <ExpenseStats expenses={filteredExpenses} />
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
    </div>
  );
}

export default App;
