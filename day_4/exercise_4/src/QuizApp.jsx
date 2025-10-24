import { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";

function QuizApp() {
    const questions = [
        {
        id: 1,
        question: "What is the capital of Lagos State?",
        options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
        answer: "Ikeja",
        },

        {
        id: 2,
        question: "What is the capital of Ogun State?",
        options: ["Ijebu-Ode", "Sagamu", "Abeokuta", "Ota"],
        answer: "Abeokuta",
        },

        {
        id: 3,
        question: "What is the capital of Oyo State?",
        options: ["Ibadan", "Ogbomoso", "Iseyin", "Eruwa"],
        answer: "Ibadan",
        },

        {
        id: 4,
        question: "What is the capital of Kaduna State?",
        options: ["Zaria", "Kaduna", "Kafanchan", "Saminaka"],
        answer: "Kaduna",
        },

        {
        id: 5,
        question: "What is the capital of Rivers State?",
        options: ["Bonny", "Port Harcourt", "Opobo", "Okrika"],
        answer: "Port Harcourt",
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [quizFinished, setQuizFinished] = useState(false);

    function handleAnswerSubmit() {
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
        setFeedback("Correct!");
        } else {
        setFeedback(`Wrong! The correct answer is ${correctAnswer}.`);
        }

        setTimeout(() => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
            setFeedback("");
        } else {
            setQuizFinished(true);
        }
        }, 1500);
    };

    function restartQuiz() {
        setCurrentQuestion(0);
        setSelectedAnswer("");
        setScore(0);
        setFeedback("");
        setQuizFinished(false);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Nigerian States Quiz</h2>
            <ScoreBoard score={score} total={questions.length} />

            {!quizFinished ? (
                <>
                <Question
                    question={questions[currentQuestion]}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    onSubmit={handleAnswerSubmit}
                />
                {feedback && <AnswerFeedback message={feedback} />}
                </>
            ) : (
                <div>
                    <h3>Quiz Finished!</h3>
                    <p>
                        Final Score: <strong>{score}</strong> / {questions.length}
                    </p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            )}
        </div>
    );
}

export default QuizApp;
