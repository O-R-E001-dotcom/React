
function TodoList({ todos, onToggle, onDelete }) {
    return (
        <div style={{ marginTop: "10px" }}>
            {todos.length === 0 ? (
                <p>No todos to show</p>
            ) : (
                todos.map((todo) => (
                    <div key={todo.id} style={{ marginBottom: "8px" }}>
                        <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        />
                        <span
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            marginLeft: "8px",
                        }}
                        >
                        {todo.text}
                        </span>
                        <button
                        onClick={() => onDelete(todo.id)}
                        style={{ marginLeft: "10px" }}
                        >
                        Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TodoList;
