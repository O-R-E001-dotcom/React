
import { useState } from "react";

function AddExpenseForm({ addExpense}) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("Food")

    function handleSubmit(e) {
        e.preventDefault();
        if (!description || amount <= 0) {
            return "Enter valid expense details!"
        } 
        addExpense({ description, amount: Number(amount), date, category});
        setDescription("");
        setDate("")
        setAmount("");
    }
    
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <input type="number" 
            placeholder="Amount (₦)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}/>

            <input type="date" 
            placeholder="10-10-2025"
            value={date}
            onChange = {(e) => setDate(e.target.value)}
            />

            <select value = {category} onChange={(e) => setCategory(e.target.value)}>
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
            </select>

            <button type="submit">Add Expense</button>
        </form>
    )
}

export default AddExpenseForm;