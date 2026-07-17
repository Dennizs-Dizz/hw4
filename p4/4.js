const scores = [45, 82, 91, 60, 77, 33];

const scoreList = document.getElementById('scoreList');
const highestScoreEl = document.getElementById('highestScore');
const lowestScoreEl = document.getElementById('lowestScore');
const averageScoreEl = document.getElementById('averageScore');
const scoreInput = document.getElementById('scoreInput');
const addBtn = document.getElementById('addBtn');
const errorMsg = document.getElementById('errorMsg');

function getScoreClass(score) {
  if (score >= 90) return 'high';
  if (score >= 70) return 'good';
  if (score >= 50) return 'mid';
  return 'low';
}

function renderScores() {
  scoreList.innerHTML = '';

  scores.forEach((score) => {
    const li = document.createElement('li');
    li.textContent = score;
    li.className = `score-item ${getScoreClass(score)}`;
    scoreList.appendChild(li);
  });
}

function updateStats() {
  if (scores.length === 0) {
    highestScoreEl.textContent = '—';
    lowestScoreEl.textContent = '—';
    averageScoreEl.textContent = '—';
    return;
  }

  const highest = Math.max(...scores);
  const lowest = Math.min(...scores);
  const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;

  highestScoreEl.textContent = highest;
  lowestScoreEl.textContent = lowest;
  averageScoreEl.textContent = average.toFixed(2);
}

function showError(message) {
  errorMsg.textContent = message;
}

function clearError() {
  errorMsg.textContent = '';
}

function refresh() {
  renderScores();
  updateStats();
}

function handleAddScore() {
  const rawValue = scoreInput.value.trim();

  if (rawValue === '') {
    showError('Please enter a score.');
    return;
  }

  if (!/^\d+(\.\d+)?$/.test(rawValue)) {
    showError('Please enter a valid number.');
    return;
  }

  const score = Number(rawValue);

  if (score < 0 || score > 100) {
    showError('Please enter a score between 0 and 100.');
    return;
  }

  clearError();
  scores.push(score);
  refresh();
  scoreInput.value = '';
  scoreInput.focus();
}

addBtn.addEventListener('click', handleAddScore);

scoreInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleAddScore();
  }
});

refresh();