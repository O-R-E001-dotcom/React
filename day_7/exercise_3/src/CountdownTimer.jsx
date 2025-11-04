
import { useState, useEffect} from "react";

function CountdownTimer() {
    const [targetDate, setTargetDate] = useState('2025-12-25');
    const [timeLeft, setTimeleft] = useState({});
    const [isEventStarted, setIsEventStarted] = useState(false);

    function calculateTimeLeft() {
        const now = new Date();
        const target = new Date(targetDate);
        const difference = target - now;

        if (difference <=0) {
            setIsEventStarted(true)
            return {};
        }

        const days = Math.floor(difference / (1000 * 60 * 60 *24));
        const hours = Math.floor(difference / (1000 * 60 * 60) % 24);
        const minutes = Math.floor (difference / (1000 * 60) % 60);
        const seconds = Math.floor(difference /(1000) % 60);

        return {days, hours, minutes, seconds}
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeleft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function handleDateChange(e) {
        setTargetDate(e.target.value);
        setIsEventStarted(false)
    };

    return (
        <div>
            <h2>Countdown to Christmas Day💃🎆🎉🎊</h2>

            <div>
                <label htmlFor="dateInput">Set Custom Date:</label>
                <input 
                    id="dateInput"
                    type="text"
                    value={targetDate}
                    onChange={handleDateChange} />
            </div>

            {isEventStarted ? (
                <h1>Event started!</h1>
            ): (
                <div>
                    {timeLeft.days ?? 0} Days: {timeLeft.hours ?? 0} Hours: {''}
                    {timeLeft.minutes ?? 0} Minutes: {timeLeft.seconds ?? 0} Seconds 
                </div>
            )}

            <p>Target Date: {new Date(targetDate).toLocaleString()}</p>
        </div>
    );

}

export default CountdownTimer;