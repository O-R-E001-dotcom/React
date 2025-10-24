import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {
    const [color, setColor] = useState({ r: 255, g: 100, b: 50 });

    function handleChange(colorChannel, value) {
        setColor((prev) => ({ ...prev, [colorChannel]: value }));
    };

    function rgbToHex(r, g, b) {
        "#" + [r, g, b].map((x) => {
            const hex = parseInt(x).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }).join("").toUpperCase();
    }

        const hexColor = rgbToHex(color.r, color.g, color.b);

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "40px" }}>
            <h2> 🎨 Color Picker</h2>

            <RGBSlider label="Red" value={color.r} onChange={(val) => handleChange("r", val)} />
            <RGBSlider label="Green" value={color.g} onChange={(val) => handleChange("g", val)} />
            <RGBSlider label="Blue" value={color.b} onChange={(val) => handleChange("b", val)} />

            <ColorDisplay color={color} hexColor={hexColor} />
        </div>
    );
}

export default ColorPicker;
