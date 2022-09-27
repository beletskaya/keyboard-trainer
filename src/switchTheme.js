function switchTheme() {
    const switchBtn = document.querySelectorAll('.switchTheme')
    switchBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark')
                moveImage(item, '.darkIcon', '.lightIcon')
            }
            else {
                document.body.classList.add('dark')
                moveImage(item, '.lightIcon', '.darkIcon')
            }
            function moveImage(item, first, sec) {
                item.querySelector(first)
                    .setAttribute('style', 'display:inline-block')
                item.querySelector(sec)
                    .setAttribute('style', 'display:none')
            }
        })
    })
}

export default switchTheme