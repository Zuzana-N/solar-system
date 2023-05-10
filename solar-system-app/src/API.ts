import { shuffleArray } from "./utils";
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]};
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=22&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
            ...question, 
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
}

// export const fetchQuizQuestions = async (name: string) => {
//     const endpoint = `https://api.api-ninjas.com/v1/planets?name=${name}`;
//     const data = await (await fetch(endpoint)).json();
//     console.log(data);
// }

// export const fetchQuestions = async () => {
//     const response = await fetch('https://api.api-ninjas.com/v1/planets?name=Neptune');
//     const json = await response.json();
//     console.log(json);
// }
