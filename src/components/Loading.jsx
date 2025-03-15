export default function Loading() {
	return (
		<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="150px"
			height="150px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			style={{
				margin: "auto",
				display: "block",
				shapeRendering: "auto",
			}}
		>
			<circle cx="84" cy="50" r="10" fill="#ee5a30">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="0.5s"
					calcMode="spline"
					keyTimes="0;1"
					values="3;0"
					keySplines="0 0.5 0.5 1"
					begin="0s"
				></animate>
				<animate
					attributeName="fill"
					repeatCount="indefinite"
					dur="2s"
					calcMode="discrete"
					keyTimes="0;0.25;0.5;0.75;1"
					values="#ee5a30;#ee5a30;#f7981e;#ffd0b1;#ee5a30"
					begin="0s"
				></animate>
			</circle>
			<circle cx="16" cy="50" r="10" fill="#ee5a30">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="0;0;3;3;3"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="0s"
				></animate>
				<animate
					attributeName="cx"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="16;16;16;50;84"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="0s"
				></animate>
			</circle>
			<circle cx="50" cy="50" r="10" fill="#ffd0b1">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="0;0;3;3;3"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.5s"
				></animate>
				<animate
					attributeName="cx"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="16;16;16;50;84"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-0.5s"
				></animate>
			</circle>
			<circle cx="84" cy="50" r="10" fill="#f7981e">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="0;0;3;3;3"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-1s"
				></animate>
				<animate
					attributeName="cx"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="16;16;16;50;84"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-1s"
				></animate>
			</circle>
			<circle cx="16" cy="50" r="10" fill="#ee5a30">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="0;0;3;3;3"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-1.5s"
				></animate>
				<animate
					attributeName="cx"
					repeatCount="indefinite"
					dur="2s"
					calcMode="spline"
					keyTimes="0;0.25;0.5;0.75;1"
					values="16;16;16;50;84"
					keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
					begin="-1.5s"
				></animate>
			</circle>
		</svg>
		</>
	);
}
