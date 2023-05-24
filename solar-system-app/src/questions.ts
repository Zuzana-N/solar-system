import {planets} from "./API"
import {shuffleArray} from "./utils";

export type Question = {
    id: number,
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
}
const questionsData = [
{
    id: 1,
    question: "What is the 4th planet of the Solar System?",
    correct_answer: "Mars",
    incorrect_answers: ["Venus", "Jupiter", "Earth"]
},
 {
    id: 2,
    question: "When was Neptune discovered?",
    correct_answer: "23/09/1846",
    incorrect_answers: ["21/01/1947", "30/12/2008", "14/02/1563"]
},
 {
    id: 3,
    question: "How many moons of Jupiter do we know about? (as of 2023)" ,
    correct_answer: "95",
    incorrect_answers: ["51", "124", "89"]
},
 {
    id: 4,
    question: "What is the name of the 2nd largest planet (by mean radius)?",
    correct_answer: "Saturn",
    incorrect_answers: ["Venus", "Jupiter", "Earth"] 
},
 {
    id: 5,
    question: "Which planet was named after the Roman god of the sea?",
    correct_answer: "Neptune",
    incorrect_answers: ["Uranus", "Jupiter", "Mars"]
},
 {
    id: 6,
    question: "Which planet reaches the highest average temperatures?",
    correct_answer: "Venus",
    incorrect_answers: ["Mercury", "Neptune", "Earth"]
},
 {
    id: 7,
    question: "Which of these moons is NOT orbiting around Uranus?",
    correct_answer: "Ganymede",
    incorrect_answers: ["Oberon", "Ariel", "Miranda"]
},
 {
    id: 8,
    question: "How is Saturn classified?",
    correct_answer: "as a gas giant",
    incorrect_answers: ["as a rocky planet", "as an ice giant", "as a lava planet"]
},
 {
    id: 9,
    question: "What or who is the planet Mercury named after?",
    correct_answer: "Roman god",
    incorrect_answers: ["Famous singer", "Programming language", "Chemical element"]
}
,
 {
    id: 10,
    question: "What is the name of the planet with most Venus figurines?",
    correct_answer: "Earth",
    incorrect_answers: ["Venus", "Neptune", "Uranus"]
}
]

export const getNewQuestions = () => {
    return questionsData.map((question) => ({
        ...question, 
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
} 