// src/pages/Minijuego.jsx
import React, { useState, useEffect } from 'react';
import '../App.css'; // Asegúrate de que App.css esté en src/

// 1. Calculadora
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="component">
      <h2>Calculadora</h2>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'].map(btn => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

// 2. Adivina el número
const GuessNumberGame = () => {
  const [target, setTarget] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Adivina un número entre 1 y 100');
  };

  const checkGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage('Por favor ingresa un número válido');
    } else if (num === target) {
      setMessage(`¡Correcto! El número era ${target}`);
    } else {
      setMessage(num < target ? 'Más alto' : 'Más bajo');
    }
  };

  return (
    <div className="component">
      <h2>Adivina el Número</h2>
      <p>{message}</p>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        min="1" 
        max="100"
      />
      <button onClick={checkGuess}>Comprobar</button>
      <button onClick={startNewGame}>Nuevo Juego</button>
    </div>
  );
};

// 3. Test interactivo
const QuizApp = ({ questions, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const checkAnswer = () => {
    if (selected === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelected(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setQuizCompleted(false);
  };

  return (
    <div className="component">
      <h2>{title}</h2>
      {quizCompleted ? (
        <div className="result">
          <p>Puntuación: {score}/{questions.length}</p>
          <button onClick={resetQuiz}>Reiniciar Test</button>
        </div>
      ) : (
        <div className="question">
          <p>{questions[currentIndex].question}</p>
          <div className="options">
            {questions[currentIndex].options.map((option, index) => (
              <button 
                key={option} 
                className={selected === index ? 'selected' : ''}
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <button 
            onClick={checkAnswer} 
            disabled={selected === null}
          >
            {currentIndex < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
          </button>
        </div>
      )}
    </div>
  );
};

// 4. Componente principal
const Minijuego = () => {
  const drivingTestQuestions = [
    {
      question: "¿Qué indica una señal circular azul?",
      options: ["Obligación", "Prohibición", "Advertencia", "Información"],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es la velocidad máxima en autopista?",
      options: ["100 km/h", "120 km/h", "80 km/h", "60 km/h"],
      correctAnswer: 1
    }
  ];

  const historyQuestions = [
    {
      question: "¿En qué año llegó Colón a América?",
      options: ["1492", "1521", "1607", "1776"],
      correctAnswer: 0
    },
    {
      question: "¿Quién pintó la Mona Lisa?",
      options: ["Picasso", "Van Gogh", "Da Vinci", "Miguel Ángel"],
      correctAnswer: 2
    }
  ];

  return (
    <div className="app">
      <h1>Aplicación de Mini Juegos</h1>
      <div className="components-grid">
        <Calculator />
        <GuessNumberGame />
        <QuizApp questions={drivingTestQuestions} title="Test de Conducir" />
        <QuizApp questions={historyQuestions} title="Test de Historia" />
      </div>
    </div>
  );
};

export default Minijuego;
