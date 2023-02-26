import { createContext, ReactNode, useEffect, useState } from "react"

interface TimerContextValue {
	timeInSec: number
	playing: boolean
	timerIndex: number
	status: TimerStatus
	startTimer: () => void
	pauseTimer: () => void
	resetTimer: () => void
	nextTimer: () => void
}

interface TimerProviderProps {
	children: ReactNode
}

type TimerStatus = "FOCUS" | "BREAK" | "LONG_BREAK"

export enum Times {
	FOCUS = 25 * 60,
	BREAK = 5 * 60,
	LONG_BREAK = 15 * 60,
}

export const TimerContext = createContext({} as TimerContextValue)

export default function TimerProvider({ children }: TimerProviderProps) {
	const [timeoutId, setTimeoutId] = useState<number | null>(null)
	const [timeInSec, setTimeInSec] = useState<number>(Times.FOCUS)
	const [playing, setPlaying] = useState(false)

	const [timerIndex, setTimerIndex] = useState(1)
	const [status, setStatus] = useState<TimerStatus>("FOCUS")

	useEffect(() => {
		if (playing) {
			const timeout = setTimeout(() => {
				setTimeInSec(timeInSec - 1)
			}, 1000)

			setTimeoutId(timeout)

			if (timeInSec <= 0) {
				setPlaying(false)
				setTimerIndex(timerIndex + 1)
			}
		} else {
			clearTimeout(timeoutId!)
			setTimeoutId(null)
		}

		return () => clearTimeout(timeoutId!)
	}, [timeInSec, playing])

	useEffect(() => {
		let status: TimerStatus

		if (timerIndex % 8 === 0) status = "LONG_BREAK"
		else if (timerIndex % 2 === 0) status = "BREAK"
		else status = "FOCUS"

		setStatus(status)
		setTimeInSec(Times[status])
	}, [timerIndex])

	function startTimer() {
		setPlaying(true)
	}

	function pauseTimer() {
		setPlaying(false)
	}

	function resetTimer() {
		setPlaying(false)
		setTimeInSec(Times[status])
	}

	function nextTimer() {
		setPlaying(false)
		setTimerIndex(timerIndex + 1)
	}

	return (
		<TimerContext.Provider
			value={{
				timeInSec,
				playing,
				startTimer,
				pauseTimer,
				resetTimer,
				nextTimer,
				timerIndex,
				status,
			}}
		>
			{children}
		</TimerContext.Provider>
	)
}
