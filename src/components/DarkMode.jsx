import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DarkMode({ mode, setMode }) {
	useEffect(() => {
		document.body.classList.add(mode);
	}, []);
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.classList.add("dark");
			document.body.classList.remove("light");
			localStorage.setItem("mode", "dark");
		}
		if (mode === "dark") {
			setMode("light");
			document.body.classList.add("light");
			document.body.classList.remove("dark");
			localStorage.setItem("mode", "light");
		}
	};

	const spring = {
		type: "spring",
		stiffness: 300,
		damping: 30,
	};
	return (
		<div className="toggle_mode" data-mode={mode} onClick={toggleMode}>
			<motion.div className="handle" layout transition={spring}>
				<div className="handle"></div>
			</motion.div>
		</div>
	);
}
