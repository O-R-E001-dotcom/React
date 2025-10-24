
function RGBSlider({ label, value, onChange }) {
    const colors = {
        Red: "#ff4d4d",
        Green: "#4dff4d",
        Blue: "#4da6ff",
    };

    return (
        <div style={{ marginBottom: "15px" }}>
            <label>
                <strong>{label}:</strong> {value}
            </label>
            <input
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                width: "80%",
                accentColor: colors[label],
                cursor: "pointer",
                }}
            />
        </div>
    );
}

export default RGBSlider;
