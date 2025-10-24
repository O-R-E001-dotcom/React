import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: true },
        { id: 2, text: "Build Projects", completed: false },
        { id: 3, text: "Get a Job", completed: false },
    ]);

    const [filter, setFilter] = useState("all");

    
    function addTodo(text) {
        if (!text.trim()) return;
        const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    
    function toggleTodo(id) {
        setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        );
    };

    
    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    
    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    // To filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    // This is to show the total todos
    const totalTasks = todos.length;
    const completedTasks = todos.filter((t) => t.completed).length;

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>📝 My Todo List</h2>

            <TodoInput onAdd={addTodo} />
            <TodoFilter current={filter} onChangeFilter={setFilter} />

            <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />

            <p>
                Total: {totalTasks} | Completed: {completedTasks}
            </p>

            <button onClick={clearCompleted} style={{ marginTop: "10px" }}>
                Clear Completed
            </button>
        </div>
    );
}

export default TodoApp;
