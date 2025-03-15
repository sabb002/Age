import { useState } from "react";

export default function Input({ setDob, disc, shrink, setShrink, calculate }) {
	const [limit, setLimit] = useState(false);
	const buttons = [
		"linear-gradient(to top, #c33764, #1d2671)",
		"linear-gradient(to top, #34e89e, #0f3443)",
		"linear-gradient(to bottom, #41295a, #2f0743)",
		"linear-gradient(to bottom, #f85032, #e73827)",
		"linear-gradient(to top, #000428, #004e92)",
		"linear-gradient(to bottom, #141e30, #243b55)",
		"linear-gradient(to bottom, #2c3e50, #4ca1af)",
		"linear-gradient(to top, #834d9b, #d04ed6)",
		"linear-gradient(to bottom, #b24592, #f15f79)",
		"linear-gradient(to top, #ffb75e, #ed8f03)",
		"linear-gradient(to top, #005c97, #363795)",
		"linear-gradient(to top, #f1f2b5, #135058)",
		"linear-gradient(to top, #00bf8f, #001510)",
		"linear-gradient(to top, #ff0084, #33001b)",
		"linear-gradient(to top, #6441a5, #2a0845)",
		"linear-gradient(to top, #43cea2, #185a9d",
		"linear-gradient(to top, #52c234, #061700)",
		"linear-gradient(to top, #00c6ff, #0072ff)",
		"linear-gradient(to top, #606c88, #3f4c6b)",
		"linear-gradient(to top, #870000, #190a05)",
		"linear-gradient(to top, #c04848, #480048)",
		"linear-gradient(to bottom, #134e5e, #71b280)",
		"linear-gradient(to bottom, #614385, #516395)",
	];
	function getDOB(e) {
		setLimit(false);
		setShrink(false);
		setDob(null);
		const dob = new Date(e.target.value);
		const max = new Date();
		if (dob < max) {
			setDob(dob);
		} else {
			setLimit(true);
		}
	}

	return (
		<section className={`calc ${shrink ? "shrink" : null}`}>
			<div id="Idbar"></div>
			<div className="inputAge">
				<label htmlFor="dob">
					Date Of Birth <span>[মাস/দিন/সাল]</span> :
				</label>
				<input
					type="date"
					placeholder="Date"
					className={limit ? "limit" : null}
					onChange={getDOB}
				/>
			</div>
			{limit ? (
				<div className="button">
					<button
						type="button"
						style={{
							backgroundColor: "#000",
						}}
						disabled
					>
						Wrong
					</button>
				</div>
			) : (
				<div className="button">
					<button
						type="button"
						onClick={calculate}
						style={{
							backgroundImage: `${
								buttons[Math.floor(Math.random() * buttons.length)]
							}`,
						}}
					>
						Calculate
					</button>
				</div>
			)}

			{disc && (
				<div className="disc">
					<span className="title">Disclaimer:</span>
					মুলত দুটি পদ্ধতিতে বয়স গণনা করা যায়।
					<div>
						পদ্ধতি ১ঃ গতানুগতিক বয়স গণনায় আমরা দিন, মাস, বছরের সূক্ষ্ম হিসাব করি
						না। এ পদ্ধতিতে সকল বছর ৩৬৫ দিন ও সকল মাস ৩০ দিন ধরা হয়।
						<br /> উদাহরণস্বরূপ, একজন মা যখন বলে আমার বাচ্চার বয়স ৬ মাস, তিনি
						অতিবাহিত মাসগুলো ২৮, ২৯, ৩০ নাকি ৩১ দিনের ছিল তা হিসাব করে বলেন না।
						এই পদ্ধতিই সর্বজনস্বীকৃত।
					</div>
					<div>
						পদ্ধতি ২ঃ এই পদ্ধতিতে লিপ ইয়ার বা অধিবর্ষ এবং প্রতিটি মাসে দিনের
						সংখ্যা আমলে নিয়ে সূক্ষ্ম ভাবে বয়স হিসাব করা হয়। তবে এক্ষেত্রে শুধু
						মোট অতিবাহিত দিনের সংখ্যা বের করা হয়, তাকে বছর বা মাসে রূপান্তর করা
						হয় না।
					</div>
					<div>এখানে উভয়টি পদ্ধতিতে বয়স জানতে পারবেন।</div>
				</div>
			)}
		</section>
	);
}
