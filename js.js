let correct = 0
let score = 0
const quastonswer = [
    {
        quastons: 'Какой язык подходит для игр?',
        answer: {
            a: 'html',
            b: 'java',
            с: 'python',
            d: 'C++'
        },
        correctanswer: 'd'
    },
    {
        quastons: 'Что тут лишнее?',
        answer: {
            a: 'html',
            b: 'java',
            с: 'python',
            d: 'C++'
        },
        correctanswer: 'a'
    },
    {
        quastons: 'Какой язык учить для программирования?',
        answer: {
            a: 'Кыргызский',
            b: 'Китайский',
            с: 'Английский',
            d: 'Русский'
        },
        correctanswer: 'с'
    },
    {
        quastons: 'бегзат качок?',
        answer: {
            a: 'да',
            b: 'конечно',
            с: 'естественно',
            d: 'нет пидора ответ'
        },
        correctanswer: 'с'
    }
]


function Disit() {
    const quastonsselect = document.querySelector('.quastion')
    const answerselect = document.querySelector('.answer')
    quastonsselect.innerHTML = `${quastonswer[correct].quastons}`

    answerselect.innerHTML = ''

    for (const option in quastonswer[correct].answer) {
        const button = document.createElement('button')
        button.textContent = `${option}) ${quastonswer[correct].answer[option]}`
        button.onclick = () => ChekcAnswer(option)
        answerselect.appendChild(document.createElement('li')).appendChild(button)
    }

}
function ChekcAnswer(sellect) {
    if (sellect === quastonswer[correct].correctanswer) {
        score++
    }
    correct++
    if (correct < quastonswer.length) {
        Disit()
    } else {
        Result()
    }
}

function Result() {
    const result = document.querySelector('.result')
    result.textContent = `вы ответели на ${score}из${quastonswer.length};`
  
}
Disit()