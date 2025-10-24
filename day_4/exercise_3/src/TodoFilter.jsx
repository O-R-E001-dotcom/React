function TodoFilter({ current, onChangeFilter }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <span>Filter: </span>
            {["all", "active", "completed"].map((f) => (
                <button
                key={f}
                onClick={() => onChangeFilter(f)}
                style={{
                    margin: "0 5px",
                    backgroundColor: current === f ? "#007bff" : "#ddd",
                    color: current === f ? "white" : "black",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                }}
                >
                {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;
