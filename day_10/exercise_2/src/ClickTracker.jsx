
import {useState, useRef, useEffect} from 'react'

function ClickTracker() {
    const clickRef = useRef(0);
    const [stateCount, setStateCount] = useState(0);
    const renderCount =useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    function incrementRefClicks() {
        clickRef.current = clickRef.current + 1;
    }

    function incrementStateCount() {
        setStateCount((prev) => prev + 1);
    } 

    function handleShowTotal() {
        alert(`Total clicks for (useREf): ${clickRef.current}`);
    }

    return (
        <div>
      <h2> Click Counter (useRef - No Re-renders)</h2>
      <button onClick={incrementRefClicks}> Count Clicks</button>
      <button onClick={handleShowTotal}>Show Total</button>

      <h2> State Counter (Re-renders)</h2>
      <p>Clicks: {stateCount}</p>
      <button onClick={incrementStateCount}>Click Me</button>

      
      <p> Render Count: {renderCount.current}</p>
    </div>
    )
}

export default ClickTracker;