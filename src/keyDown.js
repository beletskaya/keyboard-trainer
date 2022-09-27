import press from '../src/pressLetter'
import {letters, special} from '../src/index'

function keydownFunc(event) {
    event.preventDefault()
    const letter = letters.find((item) => item.getAttribute('data-letters').includes(event.key))

    if (letter) {
        letter.classList.add('pressed')
        press(event.key)
        return;
    }
    let key = event.key;
    if (event.key === ' ') {
        key = 'Space'
        press(" ")
    }
    if (key === "Enter") {
        press("\n")
    }
    const spec = special.filter((item) => item.getAttribute('data-spec').includes(key))
    if (spec.length) {
        spec.forEach((item) => item.classList.add('pressed'))
        return;
    }
}
export default keydownFunc