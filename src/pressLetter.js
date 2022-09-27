import viewUpdate from '../src/viewUpdate'
import {exercise} from '../src/index'
import findCoord from "./moveBird";

function press(letter) {
    if(!exercise.statisticFlag) {
        exercise.statisticFlag = true;
        exercise.startTime = Date.now()
    }
    const string = exercise.strings[exercise.currentStringIndex] //текущая буква
    const mustLetter = string[exercise.currentPrintedIndex] //должны напечатать

    if (letter === mustLetter) {
        exercise.currentPrintedIndex++;
        findCoord()
    } else if (!exercise.error.includes(mustLetter)) {
        exercise.error.push(mustLetter)
        exercise.errorCounter++
        findCoord(false)
    }
    exercise.commonCounter++
    viewUpdate()
}
export default press