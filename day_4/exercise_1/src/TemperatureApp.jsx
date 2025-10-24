import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
    const [temperature, setTemperature] = useState({ value: "", scale: "c" });

    function toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    function handleCelsiusChange(value) {
        setTemperature({ value, scale: "c" });
    }

    function handleFahrenheitChange(value) {
        setTemperature({ value, scale: "f" });
    }

    const celsius =
        temperature.scale === "f"
        ? toCelsius(Number(temperature.value))
        : Number(temperature.value);

    const fahrenheit =
        temperature.scale === "c"
        ? toFahrenheit(Number(temperature.value))
        : Number(temperature.value);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2> Temperature Converter</h2>
            <CelsiusInput 
            value={celsius} onChange={handleCelsiusChange} />

            <FahrenheitInput 
            value={fahrenheit} onChange={handleFahrenheitChange} />
            
        </div>
    );
}

export default TemperatureApp;
