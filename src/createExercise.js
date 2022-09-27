function createExercise(text) {
    const exercise = {
        text,
        strings: [],
        maxShowString: 3,
        currentStringIndex: 0,
        currentPrintedIndex: 0,
        error: [],
        statisticFlag: false,
        startTime: 0,
        timerCounter: 0,
        errorCounter: 0,
        commonCounter: 0
    }
    exercise.text = exercise.text.replace(/\n/g, '\n ')
    const words = exercise.text.split(' ')

    let string = [];
    for (const word of words) {
        string.push(word)
        if (word.includes("\n")) {
            exercise.strings.push(string.join(" "))
            string = []
        }
    }
    if (string.length) {
        exercise.strings.push(string.join(" "))
    }
    return exercise
}
export default createExercise