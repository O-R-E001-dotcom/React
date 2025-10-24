
function Question({ question, selectedAnswer, setSelectedAnswer, onSubmit }) {
    return (
        <div style={{ margin: "20px 0" }}>
            <h3>Question {question.id}:</h3>
            <p>{question.question}</p>

            {question.options.map((option, index) => (
                <div key={index}>
                    <label>
                        <input
                        type="radio"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        {option}
                    </label>
                </div>
            ))}

            <button
                onClick={onSubmit}
                disabled={!selectedAnswer}
                style={{ marginTop: "10px" }}
            >
                Submit Answer
            </button>
        </div>
    );
}

export default Question;
