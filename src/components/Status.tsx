import { useTimer } from "../hooks/useTimer"

export default function Status() {
	const { status } = useTimer()

	return (
		<div className="flex items-center rounded-full px-2 border border-red-900 text-red-900 bg-red-200 mb-6">
			<span className="material-symbols-outlined text-xl mr-1">
				{status === "FOCUS" ? "timer" : "local_cafe"}
			</span>
			<p className="capitalize">
				{status.toLowerCase().replace("_", " ")}
			</p>
		</div>
	)
}
