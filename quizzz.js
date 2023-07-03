const data = [
    {
      id: 1,
      question: "Who is Sunil Chhetri?",
      answers: [
        { answer: "Footballer", isCorrect: true },
        { answer: "Cricketer", isCorrect: false },
        { answer: "Actor", isCorrect: false },
        { answer: "Golfer", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What company was originally called 'Cadabra'?",
      answers: [
        { answer: "Google", isCorrect: false },
        { answer: "Microsoft", isCorrect: false },
        { answer: "Amazon", isCorrect: true },
        { answer: "Swiggy", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Which country has won the most mens football World Cups?",
      answers: [
        { answer: "France", isCorrect: false },
        { answer: "Brazil", isCorrect: true },
        { answer: "Argentina", isCorrect: false },
        { answer: "Germany", isCorrect: false },
      ],
    },
    {
        id: 4,
        question: "The great Victoria Desert is located in:",
        answers: [
          { answer: "Canada", isCorrect: false },
          { answer: "North America", isCorrect: false },
          { answer: "England", isCorrect: false },
          { answer: "Australia", isCorrect: true },
        ],
      },
      {
        id: 5,
        question: "The Battle of Plassey was fought in:",
        answers: [
          { answer: "1757", isCorrect: true },
          { answer: "1782", isCorrect: false },
          { answer: "1748", isCorrect: false },
          { answer: "1764", isCorrect: false },
        ],
      },
      {
        id: 6,
        question: "B. C. Roy Award is given in the field of:",
        answers: [
          { answer: "Medicine", isCorrect: true },
          { answer: "Music", isCorrect: false },
          { answer: "Journalism", isCorrect: false },
          { answer: "Environment", isCorrect: false },
        ],
      },
      {
        id: 7,
        question: "Which of the following is used in pencils?",
        answers: [
          { answer: "Silicon", isCorrect: false },
          { answer: "Charcoal", isCorrect: false },
          { answer: "Graphite", isCorrect: true },
          { answer: "Phosphorous", isCorrect: false },
        ],
      },
      {
        id: 8,
        question: "The members of the Rajya Sabha are elected by:",
        answers: [
          { answer: "the people", isCorrect: false },
          { answer: "Lok Sabha", isCorrect: false },
          { answer: "elected members of the legislative assembly", isCorrect: true },
          { answer: "elected members of the legislative council", isCorrect: false },
        ],
      },
      {
        id: 9,
        question: "Which scientist discovered the radioactive element radium?",
        answers: [
          { answer: "Marie Curie", isCorrect: true },
          { answer: "Benjamin Franklin", isCorrect: false },
          { answer: "Albert Einstein", isCorrect: false },
          { answer: "Isaac Newton", isCorrect: false },
        ],
      },
      {
        id: 10,
        question: "Where is the Railway Staff College located?",
        answers: [
          { answer: "Pune", isCorrect: false },
          { answer: "Vadodara", isCorrect: true },
          { answer: "Allahabad", isCorrect: false },
          { answer: "Biaora", isCorrect: false },
        ],
      },
 ];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (correctCount* 10 - wrongCount*5) 
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Select an answer from given options!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();