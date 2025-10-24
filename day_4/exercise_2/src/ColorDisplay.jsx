
function ColorDisplay({ color, hexColor }) {
    function handleCopy()  {
        navigator.clipboard.writeText(hexColor);
        alert(`Copied ${hexColor} to clipboard!`);
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <p>
                <strong>RGB:</strong> ({color.r}, {color.g}, {color.b})
            </p>
            <p>
                <strong>HEX:</strong> {hexColor}
            </p>
        <div
            style={{
            width: "150px",
            height: "150px",
            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            borderRadius: "10px",
            margin: "15px auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
        ></div>
            <button
                onClick={handleCopy}
                style={{
                backgroundColor: "#222",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                cursor: "pointer",
                }}
            >
                Copy Hex
            </button>
        </div>
    );
}

export default ColorDisplay;
