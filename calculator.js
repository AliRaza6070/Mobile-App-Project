let string = ''
let buttons = document.querySelectorAll(".calbtn")
let screen = document.getElementById('screen').firstElementChild
let outputDiv = document.getElementById('output')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string)
                outputDiv.textContent = string
            } catch (error) {
                outputDiv.textContent = 'Error'
            }
        } else if (e.target.innerHTML === 'AC') {
            string = '0'
            screen.textContent = string;
            outputDiv.textContent = '1234567890'
        } else {
            string = string + e.target.innerHTML
            screen.textContent = string
        }
    })
})
