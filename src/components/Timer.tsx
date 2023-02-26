import { Times } from "../contexts/TimerProvider"
import { useTimer } from "../hooks/useTimer"

export default function Timer() {
	const { timeInSec, status } = useTimer()

	return (
		<div
			style={{
				background: `conic-gradient(#fca5a5 ${
					100 - (100 * timeInSec) / Times[status]
				}%, #0000 0)`,
			}}
			className="max-w-xs w-full aspect-square rounded-full flex justify-center items-center p-1"
		>
			<div className="w-full h-full bg-red-200 rounded-full flex justify-center items-center">
				<p className="font-bold text-6xl text-red-900 tabular-nums">
					{Math.floor(timeInSec / 60)}:
					{(timeInSec % 60 < 10 ? "0" : "") + (timeInSec % 60)}
				</p>
			</div>
		</div>
	)
}
