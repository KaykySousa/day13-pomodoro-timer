import ControlButton from "./components/ControlButton"
import Status from "./components/Status"
import Timer from "./components/Timer"
import { useTimer } from "./hooks/useTimer"

export default function App() {
	const { startTimer, resetTimer, pauseTimer, nextTimer, playing } =
		useTimer()

	return (
		<div className="min-h-screen w-full bg-red-100 flex flex-col justify-center items-center p-6">
			<Status />
			<Timer />
			<div className="flex items-center gap-x-3 mt-6">
				<ControlButton theme="secondary" onClick={resetTimer}>
					<span className="material-symbols-outlined text-2xl">
						restart_alt
					</span>
				</ControlButton>

				{playing ? (
					<ControlButton onClick={pauseTimer}>
						<span className="material-symbols-outlined text-3xl">
							pause
						</span>
					</ControlButton>
				) : (
					<ControlButton onClick={startTimer}>
						<span className="material-symbols-outlined text-3xl">
							play_arrow
						</span>
					</ControlButton>
				)}

				<ControlButton theme="secondary" onClick={nextTimer}>
					<span className="material-symbols-outlined text-2xl">
						fast_forward
					</span>
				</ControlButton>
			</div>
			<div className="mt-8 text-center opacity-70 text-red-900 text-sm">
				<p>Developed by: Kayky de Sousa</p>
				<p>
					<a
						href="https://www.linkedin.com/in/kayky-de-sousa/"
						className="hover:underline"
					>
						Linkedin
					</a>{" "}
					|{" "}
					<a
						href="https://github.com/KaykySousa"
						className="hover:underline"
					>
						Github
					</a>
				</p>
			</div>
		</div>
	)
}
