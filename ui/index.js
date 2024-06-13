import { getGooglePoints, getPlayerPoints } from "../core/state-manager.js"

const rootElement = document.getElementById('root')

rootElement.innerHTML = " "

const googlePoints = getGooglePoints()

const player1Points = getPlayerPoints(1)
const player2Points = getPlayerPoints(2)

rootElement.append(`Player1: ${player1Points}, Player2: ${player2Points}, Google ${googlePoints}`)