const questions = [
  //1st
  {
    question: "what is the result of y**=3 if y is initially 7",
    answers: [
      { text: "63", correct: false },
      { text: "343", correct: true },
      { text: "21", correct: false },
      { text: "Error", correct: false },
    ],
  }, //2nd
  {
    question: "How do you add an event listener in JavaScript?",
    answers: [
      { text: "element.addEventListener(event, function)", correct: true },
      { text: "element.addEvent(event, function)", correct: false },
      { text: "element.on(event, function)", correct: false },
      { text: "selement.attachEvent(event, function)", correct: false },
    ],
  }, //3rd
  {
    question:
      "What type of dialog box is used to display a message to the user without requiring any user input?",
    answers: [
      { text: "Confirmation", correct: false },
      { text: "Prompt", correct: false },
      { text: "Alert", correct: true },
      { text: "swindow.confim()", correct: false },
    ],
  }, //4th
  {
    question: "What does the typeof operator return for an array?",
    answers: [
      { text: "array", correct: false },
      { text: "object", correct: true },
      { text: "string", correct: false },
      { text: "typeof", correct: false },
    ],
  }, //5th
  {
    question: "Which event is fired when an input field is changed?  ",
    answers: [
      { text: "oninput", correct: false },
      { text: "onchange", correct: true },
      { text: "onedit", correct: false },
      { text: "onmodify", correct: false },
    ],
  }, //6th
  {
    question: "What is the result of true && false?",
    answers: [
      { text: "true", correct: false },
      { text: "null", correct: false },
      { text: "false", correct: true },
      { text: "undefined", correct: false },
    ],
  }, //7th
  {
    question: "what does 1 === true return ?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "Error", correct: false },
      { text: "0", correct: false },
    ],
  }, //8th
  {
    question: "What happens if no break statement is included in a switch case?",
    answers: [
      { text: "An error is thrown", correct: false },
      { text: "The program stops executing", correct: false },
      { text: "The next case is executed regardless of the value", correct: true },
      { text: "The switch statement is automatically terminated", correct: false },
    ],
  }, //9th
  {
    question: "What does x += 3 do?",
    answers: [
      { text: "Adds 3 to x", correct:true },
      { text: "Subtracts 3 from x", correct: false },
      { text: "Multiplies x by 3", correct: false },
      { text: "Divides x by 3", correct: false },
    ],
  }, //10th
  {
    question: "Which type of dialog box is used to ask the user for a simple yes or no confirmation?",
    answers: [
      { text: "Message", correct: false },
      { text: "Confirmation", correct: true },
      { text: "Prompt", correct: false },
      { text: "Alert", correct: false },
    ],
  }, //11th
  {
    question: "What is the purpose of the else keyword in an if... else statement?",
    answers: [
      { text: "To specify multiple conditions", correct: false },
      { text: "To execute code when the condition is true", correct: false },
      { text: "To execute code when the condition is false", correct: true },
      { text: "To terminate the program", correct: false },
    ],
  }, //12th
  {
    question: "What does typeof null return?",
    answers: [
      { text: "null", correct: false },
      { text: "string", correct: false },
      { text: "object", correct: true },
      { text: "string", correct: false },
    ],
  }, //13th
  {
    question: "Which dialog box is used to collect input from the user through a text field?",
    answers: [
      { text: "window.input()", correct: false },
      { text: "Alert", correct: false },
      { text: "Input", correct: false },
      { text: "Prompt", correct: true },
    ],
  }, //14th
  {
    question: "How many times will the following loop execute? for (let i = 0; i <= 5; i++) {console.log(i);}",
    answers: [
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "0", correct: false },
    ],
  }, //15th
  {
    "question": "What will the following code output? function greet(name) { return`${'Hello, '} + name;} console.log(greet('John'));",
    "answers": [
      { "text": "Hello, John", "correct": true },
      { "text": "Hello, ", "correct": false },
      { "text": "John", "correct": false },
      { "text": "undefined", "correct": false }
    ]
  },   //16th
  {
    "question": "What will the following code output?\n\nfunction divide(a, b) {\n    if (b === 0) {\n        return 'Error';\n    }\n    return a / b;\n}\nconsole.log(divide(10, 0));",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "0", "correct": false },
      { "text": "Error", "correct": true },
      { "text": "NaN", "correct": false }
    ]
  },   //17th
  {
    question: "Which event is fired when the user moves the mouse over an element?  ",
    answers: [
      { text: "onclick", correct: false },
      { text: "onhover", correct: false },
      { text: "onmouseover", correct: true },
      { text: "onmousemove", correct: false },
    ],
  }, //18th
  {
    question: " Which of the following is true about JavaScript functions?  ",
    answers: [
      { text: "They must return a value", correct: false },
      { text: "They can accept any number of parameters", correct: true },
      { text: "They cannot be nested", correct: false },
      { text: "They must have a name", correct: false },
    ],
  }, //19th
  {
    question: "What is the purpose of the initialization expression in a for loop? ",
    answers: [
      { text: "To check the loop condition", correct: false },
      { text: "To update the loop variable", correct: false },
      { text: "To set the initial value of the loop variable", correct: true },
      { text: "To exit the loop", correct: false },
    ],
  }, //20th
  {
    question: " What is an infinite loop?  ",
    answers: [
      { text: "A loop that executes a finite number of times", correct: false },
      { text: "A loop that never executes", correct: false },
      { text: "A loop that runs indefinitely without terminating", correct: true },
      { text: "A loop that skips iterations", correct: false },
    ],
  }, //21th
  {
    question: "How do you call a function named myFunction?  ",
    answers: [
      { text: "call myFunction", correct: false },
      { text: "myFunction()", correct: true },
      { text: "myFunction;", correct: false },
      { text: "function myFunction()", correct: false },
    ],
  }, //22th
  {
    question: "Which loop is guaranteed to execute at least once?",
    answers: [
      { text: "for", correct: false },
      { text: "while", correct: false },
      { text: "do...while", correct: true },
      { text: "for...in", correct: false },
    ],
  }, //23th
  {
    question: "Which of the following is a function expression? ",
    answers: [
      { text: "function myFunction() {}", correct: false },
      { text: "def myFunction() {}", correct: false },
      { text: "function = myFunction() {}", correct: false },
      { text: "const myFunction = function() {}", correct: true },
    ],
  }, //24th
  {
    question: "What does the break statement do in a loop? ",
    answers: [
      { text: "Exits the loop immediately", correct: true },
      { text: "Skips the current iteration", correct: false },
      { text: "Pauses the loop", correct: false },
      { text: "Restarts the loop", correct: false },
    ],
  }, //25th
  {
    question: "What is the purpose of a function in JavaScript? ",
    answers: [
      { text: "To store values", correct: false },
      { text: "To loop through arrays", correct: false },
      { text: "To create objects", correct: false },
      { text: "To perform a specific task or calculation", correct: true },
    ],
  }, //26th
  {
    question: "What is the output of the following JavaScript code snippet?\n\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i + \", \" + j);\n    }\n}",
    answers: [
      { text: "0, 0 0, 1 1, 0 1, 1 2, 0 2, 1", "correct": false},
      { text: "0, 0 0, 1 0, 2 1, 0 1, 1 1, 2", "correct": false },
      { text: "0, 0 1, 0 2, 0 0, 1 1, 1 2, 1", "correct": true },
      { text: "0/2", "correct": false }
    ]
  }
  , //27th
  {
    question: "Which loop is used when you need to execute a block of code a specific number of times?",
    answers: [
      { text: "For loop", "correct": true },
      { text: "While loop", "correct": false },
      { text: "Do...while loop", "correct": false },
      { text: "Nested loop", "correct": false }
    ]
  }, //28th
  {
    question: "What will be the output of the following JavaScript code snippet?\n\nlet x = 10;\nfunction foo() {\n    console.log(x);\n}\nfunction bar() {\n    let x = 20;\n    foo();\n}\nbar();",
    answers: [
      { text: "10", "correct": false },
      { text: "20", "correct": false },
      { text: "undefined", "correct": false },
      { text: "Error", "correct": true }
    ]
  }
  , //29th
  {
    question: "What is the purpose of a loop in JavaScript?",
    answers: [
      { text: "To execute code repeatedly", "correct": true },
      { text: "To define functions", "correct": false },
      { text: "To create conditional statements", "correct": false },
      { text: "To handle exceptions", "correct": false }
    ]
  }
  , //30th
  {
    question: "Given the following JavaScript code snippet, how many times will the inner loop execute?\n\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 2; j++) {\n        console.log(i, j);\n    }\n}",
    answers: [
      { text: "2", "correct": false },
      { text: "3", "correct": false },
      { text: "4", "correct": false },
      { text: "6", "correct": true }
    ]
  },//31th
  {
    question: "How can you break out of a loop in JavaScript?",
    answers: [
      { text: "Using the end keyword", "correct": false },
      { text: "Using the break statement", "correct": true },
      { text: "Using the continue statement", "correct": false },
      { text: "Using the stop statement", "correct": false }
    ]
  },//32
  {
    question: "What will be the value of count after executing the following JavaScript code snippet?\n\nlet count = 0;\ndo {\n    count++;\n} while (count < 5);",
    answers: [
      { text: "0", "correct": false },
      { text: "4", "correct": false },
      { text: "5", "correct": true },
      { text: "6", "correct": false }
    ]
  },//33
  {
    question: "Which of the following is NOT a correct statement about the history of JavaScript?",
    answers: [
      { text: "JavaScript was initially developed as a scripting language for browsers.", "correct": false },
      { text: "Brendan Eich is the creator of JavaScript.", "correct": false },
      { text: "It was first called \"LiveScript\" but was renamed to \"JavaScript\" later.", "correct": true},
      { text: "JavaScript code is executed on the server-side.", "correct": false }
    ]
  },//34
  {
    question: "Which keyword is used to declare a variable within a specific block of code, such as within an if statement or loop?",
    answers: [
      { text: "block", "correct": false },
      { text: "var", "correct": false },
      { text: "let", "correct": true },
      { text: "const", "correct": false }
    ]
  },//35
  {
    question: "Which of the following is the latest version of JavaScript as of September 2021?",
    answers: [
      { text: "JavaScript 7.0", "correct": false },
      { text: "ECMAScript 2021", "correct": true },
      { text: "JavaScript 2021", "correct": false },
      { text: "JavaScript 8.0", "correct": false }
    ]
  },//36
  {
    question: "Which keyword is used to declare a constant variable in JavaScript that cannot be re-assigned?",
    answers: [
      { text: "const", "correct": true },
      { text: "let", "correct": false },
      { text: "variable", "correct": false },
      { text: "var", "correct": false }
    ]
  },//37
  {
    question: "How can you run JavaScript code?",
    answers: [
      { text: "By using a Java compiler", "correct": false },
      { text: "By embedding it directly in HTML tags", "correct": true },
      { text: "By using a Python interpreter", "correct": false },
      { text: "By creating a standalone executable file", "correct": false }
    ]
  },//38
  {
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    answers: [
      { text: "variable", "correct": false },
      { text: "block", "correct": false },
      { text: "let", "correct": true },
      { text: "var", "correct": false }
    ]
  } ,//39
  {
    question: "Which scope makes a variable accessible throughout the entire JavaScript program?",
    answers: [
      { text: "Local scope", "correct": false },
      { text: "Block scope", "correct": false },
      { text: "Function scope", "correct": false },
      { text: "Global scope", "correct": true }
    ]
  },//40
  {
    question: "Which event is fired when an input field is changed?",
    answers: [
      { text: "oninput", "correct": false },
      { text: "onchange", "correct": true },
      { text: "onedit", "correct": false },
      { text: "onmodify", "correct": false }
    ]
  }     
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your Scored ${score}  Out Of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
