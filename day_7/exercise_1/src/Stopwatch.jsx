
import { useState, useEffect, useRef } from "react";

// useRef → to store a reference to the timer (setInterval) so we can stop it later
// useState → to manage component data (like seconds, running state, laps)
//useEffect → to handle side effects like starting/stopping the timer

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false) // whether the stopwatch is active or not
    const [laps, setLaps] = useState([]); // list of all lap times(like a snapshot)

    // Keep interval reference to clear it later
    const interalRef = useRef(null) 

    useEffect(() => {
        if (isRunning) {
            interalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1)
            }, 1000);
        } else {
            clearInterval(interalRef.current);
        }

        //Cleanup on unmount
        return () => clearInterval(interalRef.current);
    }, [isRunning]);

    function formatTime(totalSecs) {
        const mins = Math.floor(totalSecs / 60).toString().padStart(2, '0'); //padstart ensures two-digit formatting
        const secs = (totalSecs % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`
    };

    function handleStart() {
        setIsRunning(true)
    };

    function handlePause() {
        setIsRunning(false)
    };

    function handleReset() {
        setIsRunning(false);
        setSeconds(0);
        setLaps([]);
    };

    function handleLap() {
        if (isRunning) setLaps([...laps, formatTime(seconds)]);
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <h1>{formatTime(seconds)}</h1>

            <div>
                
                <button onClick={handleStart}>Start</button>
        
                <button onClick={handlePause}>Pause</button>
                
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>

            {/* Lap list */}
            {laps.length > 0 && (
                <div>
                    <h3>Lap times:</h3>
                    <ol>
                        {laps.map((lap, index) => (
                            <li key={index}>
                                Lap {index + 1}: {lap}
                            </li>
                        ))}
                    </ol>
                </div>
            )} 
        </div>
    )
}

export default Stopwatch;