import "./StateCard.css"
function StateCard({state, capital, region, population, children}) {
    return (
        <div className="states">
            <p>{state}</p>
            <p>{capital}</p>
            <p>{region}</p>
            <p>{population}</p>
            {children}
        </div>
    );
}

export default StateCard;