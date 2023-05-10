import React from "react";
import { AnswerObject } from "../App";


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
    // stylesClass: string;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions}) => 
(
    <div>
        <p className="number">Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question}} />
        <div>{answers.map(answer => (
            <div key={answer} >
                <button disabled={userAnswer ? true : false} value={answer} onClick={callback} >
                    <span dangerouslySetInnerHTML={{ __html: answer}} />
                </button>
            </div>
        ))}</div>
    </div>
);

export default QuestionCard;