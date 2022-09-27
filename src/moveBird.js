function findCoord(isCorrect = true) {
    const allLetters = document.querySelectorAll('[data-letters]')
    allLetters.forEach((item) => {
        if (item.classList.contains('pressed')) {
            let clientRect = item.getBoundingClientRect();
            const birdBlock = document.querySelector('.keyboard__bird')
            birdBlock.style.left = clientRect.left + "px";
            birdBlock.style.top = clientRect.top + "px";
            if (!isCorrect) {
                birdBlock.style.left = 15 + "%";
                birdBlock.style.top = 36 + "%";
            }
        }
    })
}

export default findCoord