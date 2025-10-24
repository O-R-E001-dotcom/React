function FahrenheitInput({ value, onChange }) {
  return (
    <div style={{ margin: "20px" }}>
      <label>
          Fahrenheit:
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
      </label>
    </div>
  );
}

export default FahrenheitInput;
