import {letters, special} from '../src/index'

function keyupFunc(event) {
    event.preventDefault()
    const letter = letters.find((item) => item.getAttribute('data-letters').includes(event.key))

    if (letter) {
        letter.classList.remove('pressed')
        return;
    }
    let key = event.key;
    if (event.key === ' ') {
        key = 'Space'
    }
    const spec = special.filter((item) => item.getAttribute('data-spec').includes(key))
    if (spec.length) {
        spec.forEach((item) => item.classList.remove('pressed'))
        return;
    }
}
export default keyupFunc