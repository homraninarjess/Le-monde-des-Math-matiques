function startGame() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'flex';
}

function goToStartPage() {
    document.getElementById('game-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'flex';
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const result = document.getElementById('result');
    const inputField = document.getElementById('answer');

    if (answer == 10) {
        inputField.style.backgroundColor = 'green';
        result.textContent = 'إجابة صحيحة! أحسنت!';
        result.style.color = 'green';
    } else {
        inputField.style.backgroundColor = 'red';
        result.textContent = 'إجابة خاطئة! حاول مرة أخرى.';
        result.style.color = 'red';
    }
}