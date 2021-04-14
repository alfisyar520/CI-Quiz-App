const quizData = [{
    question: 'Proses menyesuaikan diri yang dilakukan oleh makhluk hidup pada lingkungannya disebut dengan ...',
    a: 'Morfologi',
    b: 'Ekosistem',
    c: 'Adaptasi',
    d: 'Habitat',
    correct: 'c'
}, {
    question: 'Di bawah ini yang bukan termasuk makhluk hidup yaitu ...',
    a: 'Manusia',
    b: 'Air',
    c: 'Hewan',
    d: 'Tumbuhan',
    correct: 'b'
}, {
    question: 'Setiap burung mempunyai bentuk paruh yang berbeda-beda tergantung dengan jenis ...',
    a: 'Bulunya',
    b: 'Kakinya',
    c: 'Makanannya',
    d: 'Ekornya',
    correct: 'c'
}, {
    question: 'Cicak melepaskan ekornya bertujuan untuk ...',
    a: 'Mengelabuhi musuhnya',
    b: 'Menjebak mangsanya',
    c: 'Berkembangbiak',
    d: 'Memancing mangsanya',
    correct: 'a'
}, {
    question: 'Berikut ini hewan yang melakukan perkembangbiakan dengan bertelur yaitu ...',
    a: 'Kera, bebek dan ayam',
    b: 'Hiu, ayam dan cicak',
    c: 'Angsa, bebek dan kelinci',
    d: 'Angsa, itik dan bebek',
    correct: 'd'
}];

let currentQuiz = 0;
let score = 0;

const quizEnd = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answer_a = document.getElementById("a_answer");
const answer_b = document.getElementById("b_answer");
const answer_c = document.getElementById("c_answer");
const answer_d = document.getElementById("d_answer");
const submit_button = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    answer_a.innerText = currentQuizData.a;
    answer_b.innerText = currentQuizData.b;
    answer_c.innerText = currentQuizData.c;
    answer_d.innerText = currentQuizData.d;
}

function getAnswerUser() {
    let answer = undefined;
    answers.forEach((answerNow) => {
        if (answerNow.checked) {
            answer = answerNow.id;
        }
    });
    return answer;
}

function deselectAnswerUser() {
    answers.forEach((answerNow) => {
        answerNow.checked = false;
    });
}

submit_button.addEventListener('click', () => {

    const answer_user = getAnswerUser();

    if (answer_user) {
        if (answer_user === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizEnd.innerHTML = `
            <h2 style="padding:1rem">Nilaimu adalah ${score} dari ${quizData.length} pertanyaan.</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
    deselectAnswerUser();
})

loadQuiz();