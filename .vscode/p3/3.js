const numberInput = document.getElementById('numberInput');
const generateBtn = document.getElementById('generateBtn');
const errorMsg = document.getElementById('errorMsg');
const resultTable = document.getElementById('resultTable');
const tableBody = document.getElementById('tableBody');

function generateTable(number) {

  tableBody.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');

    const exprCell = document.createElement('td');
    exprCell.textContent = `${number} x ${i}`;

    const resultCell = document.createElement('td');
    resultCell.textContent = number * i;

    row.appendChild(exprCell);
    row.appendChild(resultCell);
    tableBody.appendChild(row);
  }

  resultTable.classList.remove('hidden');
  resultTable.style.animation = 'none';

  void resultTable.offsetWidth;
  resultTable.style.animation = '';
}

function showError(message) {
  errorMsg.textContent = message;
  resultTable.classList.add('hidden');
}

function clearError() {
  errorMsg.textContent = '';
}

function handleGenerate() {
  const rawValue = numberInput.value.trim();

  if (rawValue === '') {
    showError('Please enter a number.');
    return;
  }

  if (!/^-?\d+(\.\d+)?$/.test(rawValue)) {
    showError('Please enter a valid number.');
    return;
  }

  const number = Number(rawValue);

  clearError();
  generateTable(number);
}

generateBtn.addEventListener('click', handleGenerate);

numberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGenerate();
  }
});