import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import SolarSystem from './components/SolarSystem';
import {getNewQuestions, Question} from './questions';
import Footer from './components/Footer';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
type QuestionState = Question & {answers: string[]};

const TOTAL_QUESTIONS = 10;
// console.log(getNewQuestions)

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isDisplayed, setIsDisplayed] = useState(true);


  const startTrivia = async () => {
    setIsDisplayed(false)
    setLoading(true);
    setGameOver(false);
    const newQuestions = getNewQuestions
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)
  }
  const displaySystem = () => {
    setIsDisplayed(prevState => !prevState)
    setGameOver(true)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prevScore => prevScore + 1)
      }
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
  }

  return (
    <main className="App">
      <h1><span>SOLAR SYSTEM</span></h1>
      {isDisplayed && (<SolarSystem />)}
      {isDisplayed && <h2>Take the quiz to test your knowledge!</h2>}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(<button className='start-btn button' onClick={startTrivia}>START</button>) : null}
      {!isDisplayed && <div className='quiz-container'>

        {!gameOver && <p className='score'><span>Score: {score}</span></p>}
        {loading && <p className=''>Loading Questions...</p>}
  
        {!loading && !gameOver && (<QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
        />)}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
        (<button className='next-btn button' onClick={nextQuestion}>Next question</button>) : null}  
      </div>}
      {!isDisplayed && <button className='goback-btn button' onClick={displaySystem}>END GAME AND GO BACK</button>}
      <Footer />
    </main>
  );
}

export default App;

