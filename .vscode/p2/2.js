const scoreInput = document.getElementById('scoreInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function checkGrade() {
  const rawValue = scoreInput.value.trim();

  if (rawValue === '') {
    showResult('Please enter a score.', true);
    return;
  }

  const score = Number(rawValue);

  if (score < 0 || score > 100) {
    showResult('Invalid score.', true);
    return;
  }

  const grade = getGrade(score);
  showResult(`Score: ${score} — Grade: ${grade}`, false);
}

function showResult(message, isError) {
  result.textContent = message;
  result.classList.toggle('error', isError);
}

checkBtn.addEventListener('click', checkGrade);

scoreInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkGrade();
  }
});
