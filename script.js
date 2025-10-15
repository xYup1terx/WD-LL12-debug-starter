const quiz = document.getElementById('quizForm');
quiz.addEventListener('submit', handleQuizSubmission);
function handleQuizSubmission(e) {
  console.log('Quiz submitted');
  e.preventDefault(); // Prevent the default form submission behavior
  const { score, total } = calculateScore();
  displayQuizResult(score, total);
}

function calculateScore() {
  const answerKey = {
    q1: 'a', // click
    q2: 'b', // getElementById
    q3: 'b'  // submit
  };

  let score = 0;
  const total = Object.keys(answerKey).length;

  for (const question in answerKey) {
    // Find the selected radio button for this question
    const selectedOption = document.querySelector(`input[name="${question}"]:checked`);

    // If an option was selected and it matches the correct answer
    if (selectedOption && selectedOption.value === answerKey[question]) {
      score++; // Increase the score
    }
  }
  return { score, total };
}

function displayQuizResult(score, total) {
  const percentage = (score / total) * 100;
  const isPassing = percentage >= 70;

  document.getElementById('result').innerHTML = `
    <div class="alert ${isPassing ? 'alert-success' : 'alert-danger'}" role="alert">
      <h4 class="alert-heading">${isPassing ? 'Congratulations!' : 'Keep Learning!'}</h4>
      <p>You scored ${score} out of ${total} (${Math.round(percentage)}%)</p>
    </div>
  `;
}
