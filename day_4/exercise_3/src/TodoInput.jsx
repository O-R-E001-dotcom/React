import { useState } from "react";

function TodoInput({ onAdd }) {
    const [text, setText] = useState("");

    function handleAdd() {
        onAdd(text);
        setText(""); // This is to clear the input
    };

    return (
        <div style={{ marginBottom: "15px" }}>
            <input
                type="text"
                value={text}
                placeholder="Add new todo..."
                onChange={(e) => setText(e.target.value)}
                style={{ padding: "8px", width: "200px" }}
            />
            <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;
