import React from "react";
import { AnswerObject } from "../App";


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    

    return (
        <div className="question-card">
            <p className="number">Question: {questionNr} / {totalQuestions}</p>
            <p className="question">{question}</p>
            <div className="answers">{answers.map(answer => (
    
                <button key={answer} disabled={userAnswer ? true : false} value={answer} onClick={callback} className={userAnswer?.correctAnswer === answer ? "answer-btn correct-answer" : "answer-btn"}>
                    {answer}
                </button>
    
            ))}</div>
        </div>
    );
}


export default QuestionCard;