import viewUpdate from '../src/viewUpdate'
import keydownFunc from '../src/keyDown'
import keyupFunc from '../src/keyUp'
import createExercise from '../src/createExercise'
import switchTheme from '../src/switchTheme'

export const text = "The placeholder text, beginning with the line - Lorem ipsum dolor"
export const inputField = document.querySelector('.form-wrapper input')
export const textExample = document.querySelector('#textExample .line')
export const errorPercent = document.querySelector('#errorPercent')
export const counterWords = document.querySelector('#counterWords')
export const letters = Array.from(document.querySelectorAll('[data-letters]'))
export const special = Array.from(document.querySelectorAll('[data-spec]'))
export const exercise = createExercise(text)

const restartLink = document.querySelectorAll('.restartLink')

function init() {
    inputField.addEventListener('keydown', keydownFunc)
    inputField.addEventListener('keyup', keyupFunc)
    viewUpdate()
    switchTheme()
}
init()

restartLink.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        document.location.reload();
    })
})

document.querySelector('.closeMenu').addEventListener('click', () => {
    document.querySelector('.navbar-collapse.show').classList.remove('show')
})

