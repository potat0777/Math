let score = 0;
let attempts = 0;
let num1, num2, operator, result;

window.onload = function() {
    generateProblem();
    document.getElementById('submitBtn').addEventListener('click', checkAnswer);
    document.getElementById('nextBtn').addEventListener('click', generateProblem);
};

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = Math.round((num1 / num2) * 100) / 100;
            break;
    }
    document.getElementById('problem').innerText = `${num1} ${operator} ${num2} = ?`;
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('answer').disabled = false;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('message').classList.remove('correct', 'incorrect');
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const messageElement = document.getElementById('message');

    if (userAnswer === result) {
        score++;
        document.getElementById('scoreValue').innerText = score;
        messageElement.innerText = 'Correct!';
        messageElement.classList.add('correct');
        messageElement.classList.remove('incorrect');
    } else {
        score--; // Уменьшаем счет на 1 при неправильном ответе
        document.getElementById('scoreValue').innerText = score;
        attempts++;
        messageElement.innerText = 'Incorrect!';
        messageElement.classList.add('incorrect');
        messageElement.classList.remove('correct');
    }

    if (score === 5) {
        messageElement.innerText = 'You win!';
        disableInput();
    } else if (attempts === 5) {
        messageElement.innerText = 'Game over!';
        disableInput();
    } else {
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('answer').disabled = true;
        document.getElementById('problem').innerText = `${num1} ${operator} ${num2} = ${result}`;
    }
}


function disableInput() {
    document.getElementById('answer').disabled = true;
    document.getElementById('submitBtn').disabled = true;
}
