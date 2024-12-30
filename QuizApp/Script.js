const questions = [
  {
    question: "What is your age?",
    options: [
      { label: "Under 40", value: "Under 40" },
      { label: "Over 40", value: "Over 40" },
    ],
    answer: "",
  },

  {
    question: "How would you define your lifestyle ?",
    options: [
      { label: "Sedentary", value: "Sedentary" },
      { label: "Moderately active", value: "Moderately" },
      { label: "Active", value: "Active" },
      { label: "Varies", value: "Varies" },
      { label: "Prefer not to say", value: "Prefer not to say" },
    ],
    answer: "",
  },
  {
    question: "Do you think hours of cardio is beneficial for fat loss ?",
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
      { label: "Not Sure", value: "Not Sure" },
    ],
    answer: "",
  },
  {
    question:
      "If there was 7-minute routine to get you fit,would you want to add it to your daily routine ?",
    options: [
      { label: "Definitely", value: "Definitely" },
      { label: "Maybe", value: "Maybe" },
      { label: "Not Sure", value: "Not Sure" },
    ],
    answer: "",
  },
  {
    question: "What are your weight loss goals ?",
    options: [
      {
        label: "I'd like to loose upto 10 pounds",
        value: "I'd like to loose upto 10 pounds",
      },
      {
        label: "I'd like to loose 10 to 20 pounds",
        value: "I'd like to loose 10 to 20 pounds",
      },
      {
        label: "I'd like to loose 20 to 50 pounds",
        value: "I'd like to loose 20 to 50 pounds",
      },
      {
        label: "I'd like to loose over 50 pounds",
        value: "I'd like to loose over 50 pounds",
      },
    ],
    answer: "",
  },
  {
    question: "How fast do you want to reach your goals ?",
    options: [
      {
        label: "Within 14 days",
        value: "Within 14 days",
      },
      {
        label: "Within 1 month",
        value: "Within 1 month",
      },
      {
        label: "Within 3 months",
        value: "Within 3 months",
      },
      {
        label: "I am in no rush, as long as I get long-term results",
        value: "I am in no rush, as long as I get long-term results",
      },
    ],
    answer: "",
  },
  {
    question:
      "How much 'workout time' do you have each day to reach your body goals?",
    options: [
      {
        label: "Over One hour",
        value: "Over One hour",
      },
      {
        label: "30 minutes",
        value: "30 minutes",
      },
      {
        label: "Under 10 minutes",
        value: "Under 10 minutes",
      },
      {
        label: "Not Sure",
        value: "Not Sure",
      },
    ],
    answer: "",
  },
  {
    question: "What is a major concern when thinking about working out?",
    options: [
      {
        label:
          "Past or current injuries(back,shoulder,knees,ankles,muscle tear)",
        value:
          "Past or current injuries(back,shoulder,knees,ankles,muscle tear)",
      },
      {
        label:
          "Current medical,condition(heart disease,diabetes,kidney issues,arthritis,cancer,high blood pressure)",
        value:
          "Current medical,condition(heart disease,diabetes,kidney issues,arthritis,cancer,high blood pressure)",
      },
      {
        label: "Lack of time",
        value: "Lack of time",
      },
      {
        label: "Lack of knowing what to do",
        value: "Lack of knowing what to do",
      },
      {
        label: "Lack of motivation",
        value: "Lack of motivation",
      },
      {
        label: "Lack of energy",
        value: "Lack of energy",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
    answer: "",
  },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const progressBar = document.getElementById("progress-bar");
function loadQuestion() {
  if (currentQuestionIndex < questions.length && currentQuestionIndex >= 0) {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    if (currentQuestionIndex === 1) {
      const extraText = document.createElement("p");
      extraText.textContent =
        "(Did you know an average person walks about 900 miles per year)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 2) {
      const extraText = document.createElement("p");
      extraText.textContent =
        "(Many people think doing cardio every day is the answer)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 3) {
      const extraText = document.createElement("p");
      extraText.textContent =
        "(Certain extra routines can help ignite your metabolism for faster fat burn)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 4) {
      const extraText = document.createElement("p");
      extraText.textContent = "(Knowing your goals will keep you on track)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 5) {
      const extraText = document.createElement("p");
      extraText.textContent =
        "(Make sure you have the help you need to get where you want, when you want)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 6) {
      const extraText = document.createElement("p");
      extraText.textContent = "(You need a solution that fits your lifestyle)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);
    }

    if (currentQuestionIndex === 7) {
      const extraText = document.createElement("p");
      extraText.textContent =
        "(Make sure your solution is personalized to you)";
      extraText.classList.add("extra-text"); // Add class to reduce space
      optionsContainer.appendChild(extraText);

      const extraText1 = document.createElement("p");
      extraText1.textContent = "(Select all that apply)";
      extraText1.classList.add("extra-text1"); // Add class to reduce space
      optionsContainer.appendChild(extraText1);
    }

    currentQuestion.options.forEach((option) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = option.value;
      input.id = option.value;

      const label = document.createElement("label");
      label.setAttribute("for", option.value);
      label.textContent = option.label;

      optionsContainer.appendChild(input);
      optionsContainer.appendChild(label);
    });

    updateProgressBar();
  } else {
    showResult();
  }
}
function showResult() {
  // Hide the quiz container and display the result container
  quizContainer.style.display = "none";
  resultContainer.style.display = "flex"; // Ensure the container is visible and properly aligned

  // Add background image via JavaScript (if needed dynamically)
  resultContainer.style.backgroundImage = "url('MP34692_mer_images_3.jpg')";
  resultContainer.style.backgroundSize = "31%"; // Increase image size
  resultContainer.style.backgroundPosition = "120px -100px"; // Move image 100px to the right and 150px upward

  resultContainer.style.height = "100vh"; // Ensure it takes up the full height
  resultContainer.style.width = "100%"; // Ensure it takes up the full width
  resultContainer.style.overflow = "hidden"; // No scrollbars

  // Update the message
  document.getElementById("result-message").textContent =
    "Please wait while we match you with the best routine for maximum fat loss...";

  // Setup progress bar
  const percentageElement = document.querySelector(".percentage");
  const progressCircle = document.querySelector(
    ".circular-progress circle:nth-child(2)"
  );

  function updateProgress(percentage) {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    // Update circle and percentage
    progressCircle.style.strokeDashoffset = offset;
    percentageElement.textContent = `${percentage}%`;
  }

  function animateProgress(duration) {
    let currentPercentage = 0;
    const stepTime = duration / 100; // Time per increment (for 100 steps)
    const interval = setInterval(() => {
      updateProgress(currentPercentage);
      currentPercentage++;
      if (currentPercentage > 100) {
        clearInterval(interval);
        redirectToNextPage();
      }
    }, stepTime);
  }

  function redirectToNextPage() {
    window.location.href = "result.html";
  }

  animateProgress(8000);
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

nextButton.addEventListener("click", function () {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    questions[currentQuestionIndex].answer = selectedOption.value;
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert("Please select an answer before moving to the next question.");
  }
});

// Add functionality for the prev button
prevButton.addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  } else {
    alert("You are already at the first question.");
  }
});

// Initialize the quiz by loading the first question
loadQuestion();
