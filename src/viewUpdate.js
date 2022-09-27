import {exercise, textExample, inputField, errorPercent, counterWords} from '../src/index'

function viewUpdate() {
    const string = exercise.strings[exercise.currentStringIndex] //текущая буква
    const done = document.createElement('span')
    done.classList.add('done')
    done.textContent = string.slice(0, exercise.currentPrintedIndex)
    textExample.innerHTML = ''
    textExample.append(done,
        ...string
            .slice(exercise.currentPrintedIndex)
            .split("")
            .map((letter) => {
                if(exercise.error.includes(letter)) {
                    const errorSpan = document.createElement('span')
                    errorSpan.classList.add('hint')
                    errorSpan.textContent = letter
                    return errorSpan
                } else {
                    exercise.error = []
                }
                return letter
            }))

    inputField.value = string.slice(0, exercise.currentPrintedIndex)
    if(exercise.text.length === exercise.currentPrintedIndex) {
        let passedMinutes = Math.ceil((Date.now() - exercise.startTime) / 60000)
        errorPercent.textContent = Math.floor((10000 * exercise.errorCounter) / exercise.commonCounter / 100) + '%'
        counterWords.textContent = Math.floor((exercise.text.split(' ').length) / passedMinutes)
        document.querySelector('.indicators').classList.add('done')
        const birdBlock = document.querySelector('.keyboard__bird')
        birdBlock.style.left = 15 + "%";
        birdBlock.style.top = 36 + "%";
    }
}
export default viewUpdate