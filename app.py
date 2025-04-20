# app.py
from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# Sample question bank
questions = [
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "Berlin", "Madrid", "Rome"],
        "answer": "Paris"
    },
    {
        "question": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Venus"],
        "answer": "Mars"
    }
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate_quiz')
def generate_quiz():
    question = random.choice(questions)
    return jsonify(question)

if __name__ == '__main__':
    app.run(debug=True)
