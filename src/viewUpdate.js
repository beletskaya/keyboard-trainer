import {exercise, textExample, inputField, errorPercent, counterWords} from '../src/index'

function viewUpdate() {
    const string = exercise.strings[exercise.currentStringIndex] //текущая буква
    const done = document.createElement('span')
    done.classList.add('done')
    done.textContent = string.slice(0, exercise.currentPrintedIndex)
    textExample.innerHTML = ''
    let arr = []
    let str = [...string
        .slice(exercise.currentPrintedIndex)
        .split("")
        .map((letter) => {
            if(exercise.error.includes(letter)) {
                const errorSpan = document.createElement('span')
                errorSpan.classList.add('hint')
                errorSpan.textContent = letter
                done.appendChild(errorSpan)
                return errorSpan
            } else {
                exercise.error = []
            }
            arr.push(letter)
        })]

    textExample.append(done,arr.join(''))

    inputField.value = string.slice(0, exercise.currentPrintedIndex)
    if(exercise.text.length === exercise.currentPrintedIndex) {
        let passedMinutes = Math.ceil((Date.now() - exercise.startTime) / 60000)
        errorPercent.textContent = Math.floor((10000 * exercise.errorCounter) / exercise.commonCounter / 100) + '%'
        counterWords.textContent = Math.floor((exercise.text.split(' ').length) / passedMinutes)
        document.querySelector('.indicators').classList.add('done')
        const birdBlock = document.querySelector('.keyboard__bird')
        birdBlock.style.left = 15 + "%";
        birdBlock.style.top = 280 + "px";
    }
}
export default viewUpdate