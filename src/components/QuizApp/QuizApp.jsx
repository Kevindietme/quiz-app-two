import { useState } from "react";
import Card from "./Card"
import Result from "./Result"
import data from "../../data/Quiz.json";
import "./QuizApp.css";

const quizLength = data.length;

export default function QuizApp() {
    const [quizId, setQuizId] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isCorrect) => {
        isCorrect && setScore(score + 1);

        const newQuizId = quizId + 1;

        (newQuizId < quizLength)
            ? setQuizId(newQuizId)
            : setShowResult(true)
        }
        
        const handleReset = () => {
            setQuizId(0)
            setScore(0)
            setShowResult(false);
        }
        
        return(
            <> 
        {
            !showResult
            ? <Card
            quizId={quizId}
            data={data} 
            quizLength={quizLength}
            handleAnswer={handleAnswer} />
            
            : <Result 
                score={score}
                quizLength={quizLength}
                handleReset={handleReset} />
        }
        </>
    )

}