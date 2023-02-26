import { useContext } from "react"
import { TimerContext } from "../contexts/TimerProvider"

export function useTimer() {
	const {
		pauseTimer,
		playing,
		resetTimer,
		startTimer,
		timeInSec,
		status,
		timerIndex,
		nextTimer,
	} = useContext(TimerContext)

	return {
		pauseTimer,
		playing,
		resetTimer,
		startTimer,
		timeInSec,
		status,
		timerIndex,
		nextTimer,
	}
}
