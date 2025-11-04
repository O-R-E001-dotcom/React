
import {useState, useEffect, useRef} from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, []);

    function startStopwatch() {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            setTime((prev ) => prev + 1)
        }, 1000);
    }

    function stopStopwatch() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function resetStopwatch() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTime(0);
        setLaps([])
    }

    function recordLap() {
        if (time > 0) setLaps((prev) => [...prev, time])
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0')
        return `${mins} : ${secs}`
    }

    return (
        <div>
            <h2>Stopwatch</h2>
            <h2>{formatTime(time)}</h2>

            <div>
                <button onClick={startStopwatch}>Start</button>
                <button onClick={stopStopwatch}>Stop</button>
                <button onClick={resetStopwatch}>Reset</button>
                <button onClick={recordLap}>Lap</button>
            </div>

            {laps.length > 0 && (
                <div>
                    <h3>Laps</h3>
                    <ul>
                        {laps.map((lap, index) => (
                            <li key={index}>
                                Lap {index + 1}: {formatTime(lap)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Stopwatch;