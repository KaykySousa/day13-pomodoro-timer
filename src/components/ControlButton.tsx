import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: "primary" | "secondary"
}

const themes = {
	primary:
		"h-12 px-6 bg-red-300 shadow flex justify-center items-center text-red-900 rounded-lg",
	secondary:
		"h-10 w-10 bg-red-200 shadow flex justify-center items-center text-red-900 rounded-lg",
}

export default function ControllerButton({
	className,
	theme = "primary",
	...props
}: ButtonProps) {
	return <button className={`${themes[theme]} ${className}`} {...props} />
}
