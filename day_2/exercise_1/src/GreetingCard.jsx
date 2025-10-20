function GreetingCard(props, color = "lightgray") {
    return (

        <div
            style={{
                backgroundColor: props.color,
                padding: "20px",
                borderRadius: "12px",
                margin: "10px 40px",
                textAlign: "center",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2 >Hello, {props.name}!</h2>
            <p>{props.message}</p>
            <p></p>

        </div>
    
    );
}

export default GreetingCard;