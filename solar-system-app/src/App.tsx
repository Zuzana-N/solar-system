import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions, QuestionState, Difficulty, planets } from './API';
import SolarSystem from './components/SolarSystem';
import {Question} from './questions';



export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const Question1 = {
  question: "What is the 4th planet in the Solar System?",
  correct_answer: planets[3],
  incorrect_answers: ["Venus", "Jupiter", "Earth"]
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isCorrect, setIsCorrect] = useState("");
  const [queries, setQueries] = useState<Question[]>([])


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.HARD
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
    // setQueries(Question1)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prevScore => prevScore + 1)
        setIsCorrect("correct")}
      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
    setIsCorrect("")
  }

  return (
    <main className="App">
      {/* <h1>Learn about our solar system!</h1> */}
      <SolarSystem />
      <div className='quiz-container'>
        <h2>Quiz</h2>
        {/* <div>{Question1}</div> */}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(<button className='start' onClick={startTrivia}>Start</button>) : null}
        {!gameOver && <p className='score'>Score: {score}</p>}
        {loading && <p className=''>Loading Questions...</p>}

        {!loading && !gameOver && (<QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
        // stylesClass={isCorrect}
        />)}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
        (<button className='next' onClick={nextQuestion}>Next question</button>) : null}
      </div>
      
    </main>
  );
}

export default App;

