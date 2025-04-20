// static/script.js

function getQuiz() {
    fetch('/generate_quiz')
        .then(response => response.json())
        .then(data => {
            let html = `<h2>${data.question}</h2>`;
            data.options.forEach(option => {
                html += `<input type="radio" name="answer" value="${option}">${option}<br>`;
            });

            html += `<button onclick="checkAnswer('${data.answer}')">Submit</button>`;
            document.getElementById('quiz-area').innerHTML = html;
        });
}

function checkAnswer(correctAnswer) {
    const options = document.getElementsByName('answer');
    let selected = null;
    for (const option of options) {
        if (option.checked) {
            selected = option.value;
            break;
        }
    }

    if (selected === null) {
        alert("Please select an answer.");
        return;
    }

    if (selected === correctAnswer) {
        alert("✅ Correct!");
    } else {
        alert(`❌ Incorrect. The correct answer is ${correctAnswer}.`);
    }
}
