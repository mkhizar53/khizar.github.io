const questions = [
    {
      question: "What is the supreme law of the land?",
      choices: ["The Constitution", "The Bill of Rights", "The Declaration of Independence", "The Emancipation Proclamation"],
      correctAnswer: "The Constitution"
    },
    {
      question: "What does the Constitution do?",
      choices: ["Sets up the government", "Defines the government", "Protects basic rights of Americans", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
      choices: ["We the People", "We hold these truths", "We are united", "In God we trust"],
      correctAnswer: "We the People"
    },
    {
      question: "What is an amendment?",
      choices: ["A change (to the Constitution)", "An addition (to the Constitution)", "A document", "A law"],
      correctAnswer: "A change (to the Constitution)"
    },
    {
      question: "What do we call the first ten amendments to the Constitution?",
      choices: ["The Ten Commandments", "The Bill of Rights", "The Magna Carta", "The Federalist Papers"],
      correctAnswer: "The Bill of Rights"
    },
    {
      question: "What is one right or freedom from the First Amendment?",
      choices: ["Speech", "Religion", "Assembly", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "How many amendments does the Constitution have?",
      choices: ["17", "27", "10", "22"],
      correctAnswer: "27"
    },
    {
      question: "What did the Declaration of Independence do?",
      choices: ["Declared our independence (from Great Britain)", "Announced our independence (from Great Britain)", "Said that the United States is free (from Great Britain)", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What are two rights in the Declaration of Independence?",
      choices: ["Life", "Liberty", "Pursuit of happiness", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What is freedom of religion?",
      choices: ["You can practice any religion, or not practice a religion", "You can practice only one religion", "You must practice a religion", "You can practice any religion, but not in public"],
      correctAnswer: "You can practice any religion, or not practice a religion"
    },
    {
      question: "What is the economic system in the United States?",
      choices: ["Communism", "Capitalism", "Socialism", "Barter system"],
      correctAnswer: "Capitalism"
    },
    {
      question: "What is the 'rule of law'?",
      choices: ["Everyone must follow the law", "Leaders must obey the law", "Government must obey the law", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Name one branch or part of the government.",
      choices: ["Executive", "Legislative", "Judicial", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What are the two major political parties in the United States?",
      choices: ["Green Party and Libertarian Party", "Democratic and Republican", "Socialist Party and Communist Party", "Tea Party and Independence Party"],
      correctAnswer: "Democratic and Republican"
    },
    {
      question: "What is the highest court in the United States?",
      choices: ["The Supreme Court", "The Court of Appeals", "The District Court", "The Superior Court"],
      correctAnswer: "The Supreme Court"
    },
    {
      question: "Who wrote the Declaration of Independence?",
      choices: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
      correctAnswer: "Thomas Jefferson"
    },
    {
      question: "When was the Declaration of Independence adopted?",
      choices: ["July 4, 1776", "September 17, 1787", "June 21, 1788", "January 1, 1808"],
      correctAnswer: "July 4, 1776"
    },
    {
      question: "What did the Emancipation Proclamation do?",
      choices: ["Freed the slaves in the Confederacy", "Freed all the slaves", "Freed the slaves in the Union states", "Freed the slaves in the Northern states"],
      correctAnswer: "Freed the slaves in the Confederacy"
    },
    {
      question: "Who was President during World War I?",
      choices: ["Woodrow Wilson", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower"],
      correctAnswer: "Woodrow Wilson"
    },
    {
      question: "Who did the United States fight in World War II?",
      choices: ["Japan, Germany, and Italy", "Russia, France, and England", "North Korea, China, and Vietnam", "Iraq, Iran, and Afghanistan"],
      correctAnswer: "Japan, Germany, and Italy"
    },
    {
      question: "What movement tried to end racial discrimination?",
      choices: ["Civil Rights Movement", "Women's Suffrage Movement", "Labor Movement", "Environmental Movement"],
      correctAnswer: "Civil Rights Movement"
    },
    {
      question: "What did Martin Luther King Jr. do?",
      choices: ["Fought for civil rights", "Invented the telephone", "Explored North America", "Discovered electricity"],
      correctAnswer: "Fought for civil rights"
    },
    {
      question: "What is the capital of the United States?",
      choices: ["New York City", "Los Angeles", "Washington, D.C.", "Chicago"],
      correctAnswer: "Washington, D.C."
    },
    {
      question: "Where is the Statue of Liberty?",
      choices: ["New York Harbor", "San Francisco Bay", "Lake Michigan", "Puget Sound"],
      correctAnswer: "New York Harbor"
    },
    {
      question: "Why does the flag have 13 stripes?",
      choices: ["To represent the original 13 colonies", "To honor the 13 Founding Fathers", "To symbolize the 13 branches of government", "To signify the 13 major cities"],
      correctAnswer: "To represent the original 13 colonies"
    },
    {
      question: "Why does the flag have 50 stars?",
      choices: ["To honor the 50 states", "To represent the 50 branches of government", "To symbolize the 50 Founding Fathers", "To signify the 50 major cities"],
      correctAnswer: "To represent the 50 states"
    },
    {
      question: "When do we celebrate Independence Day?",
      choices: ["January 1st", "July 4th", "October 31st", "December 25th"],
      correctAnswer: "July 4th"
    },
    {
      question: "Name two national U.S. holidays.",
      choices: ["Labor Day and Memorial Day", "Thanksgiving and New Year's Day", "Veterans Day and Columbus Day", "Independence Day and Presidents' Day"],
      correctAnswer: "Independence Day and Presidents' Day"
    },
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const questionElem = document.getElementById("question");
    const choicesElem = document.getElementById("choices");
  
    questionElem.textContent = questions[currentQuestion].question;
    choicesElem.innerHTML = "";
  
    for (const choice of questions[currentQuestion].choices) {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(choice));
      choicesElem.appendChild(button);
    }
  }
  
  function checkAnswer(selectedChoice) {
    const resultElem = document.getElementById("result");
    if (selectedChoice === questions[currentQuestion].correctAnswer) {
      score++;
      resultElem.textContent = "Correct!";
      resultElem.style.color = "green";
    } else {
      resultElem.textContent = "Incorrect. The correct answer is: " + questions[currentQuestion].correctAnswer;
      resultElem.style.color = "red";
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    checkAnswer();
    const resultElem = document.getElementById("result");
    resultElem.textContent = "";

    }
    
  function showResult() {
    const container = document.querySelector(".container");
    container.innerHTML = `<h1>Your Score: ${score}/${questions.length}</h1>`;
    const restart = container.createElement("button");
    restart.textContent = "Restart Quiz";
    restart.addEventListener("click", () => location.reload());
  }
  
  showQuestion();
  