
function ScoreBoard({ score, total }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h4>
                Score: {score} / {total}
            </h4>
        </div>
    );
}

export default ScoreBoard;
