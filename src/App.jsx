import { useState } from "react";
import DarkMode from "./components/darkMode";
import Result from "./components/Result";
import Input from "./components/Input";
import Loading from "./components/Loading";
import "./App.css";

function App() {
	const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
	const [disc, setDisc] = useState(true);
	const [dob, setDob] = useState(null);
	const [shrink, setShrink] = useState(false);
	const [loading, setLoading] = useState(false);

	const [result, setResult] = useState({
		dobDay: null,
		dobMonth: null,
		year: null,
		month: null,
		day: null,
		totalDay: null,
		birthdayLeft: null,
		birthdayData: {
			weekday: null,
			hijri: null,
			hijriMonth: null,
		},
		zodiacSign: "",
		famousBirths: [],
	});

	async function fetchDobData(day, month, year) {
		try {
			const response = await fetch(
				`https://api.aladhan.com/v1/gToH/${day}-${month + 1}-${year}`
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchOnThisDay(day, month) {
		try {
			const response = await fetch(
				`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${
					month + 1
				}/${day}`
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function calculate() {
		if (dob === null) return;
		setDisc(false);
		setShrink(true);
		setLoading(true);

		/*=============Typical Age Calculation============= */
		const today = new Date();
		let todayYear = today.getFullYear();
		let todayMonth = today.getMonth();
		let todayDay = today.getDate();

		const dobYear = dob.getFullYear();
		const dobMonth = dob.getMonth();
		const dobDay = dob.getDate();

		/*--------------------------------- */
		let nextBirthday = new Date(`${todayYear + 1}- ${dobMonth + 1}, ${dobDay}`);
		let daysLeft = Math.floor((nextBirthday - today) / 86400000);
		if (daysLeft >= 365) daysLeft -= 365;
		/*--------------------------------- */

		let extra = 0;
		if (dobDay > todayDay) extra += 1;

		if (todayDay - dobDay < 0) {
			todayMonth--;
			todayDay += 30;
		}
		if (todayMonth - dobMonth < 0) {
			todayYear--;
			todayMonth += 12;
		}

		const age_year = todayYear - dobYear;
		const age_month = todayMonth - dobMonth;
		const age_day = todayDay - dobDay + extra;

		/*============ Exact Day Calculation ============ */
		let today_year = today.getFullYear();
		let today_month = today.getMonth() + 1; //0-indexed
		let today_day = today.getDate();

		let exactDay = 0;

		//let's calculate full years first;
		for (let i = dobYear + 1; i < today_year; i++) {
			if (i % 4 === 0) {
				exactDay += 366;
			} else {
				exactDay += 365;
			}
		}
		/*==now let's handle fractional year (dob)==*/
		//full months first
		for (let i = dobMonth + 2; i <= 12; i++) {
			switch (i) {
				case 3:
					exactDay += 31;
					break;
				case 4:
					exactDay += 30;
					break;
				case 5:
					exactDay += 31;
					break;
				case 6:
					exactDay += 30;
					break;
				case 7:
					exactDay += 31;
					break;
				case 8:
					exactDay += 31;
					break;
				case 9:
					exactDay += 30;
					break;
				case 10:
					exactDay += 31;
					break;
				case 11:
					exactDay += 30;
					break;
				case 12:
					exactDay += 31;
					break;
			}
			if (i === 2 && dobYear % 2 === 0) {
				exactDay += 29;
			} else if (i === 2 && dobYear % 2 !== 0) {
				exactDay += 28;
			}
		}
		//now days;
		if (dobMonth + 1 === 2 && dobYear % 2 === 0) {
			exactDay += 29 - dobDay;
		} else if (dobMonth + 1 === 2 && dobYear % 2 !== 0) {
			exactDay += 28 - dobDay;
		} else {
			switch (dobMonth + 1) {
				case 1:
					exactDay += 31 - dobDay;
					break;
				case 3:
					exactDay += 31 - dobDay;
					break;
				case 4:
					exactDay += 30 - dobDay;
					break;
				case 5:
					exactDay += 31 - dobDay;
					break;
				case 6:
					exactDay += 30 - dobDay;
					break;
				case 7:
					exactDay += 31 - dobDay;
					break;
				case 8:
					exactDay += 31 - dobDay;
					break;
				case 9:
					exactDay += 30 - dobDay;
					break;
				case 10:
					exactDay += 31 - dobDay;
					break;
				case 11:
					exactDay += 30 - dobDay;
					break;
				case 12:
					exactDay += 31 - dobDay;
			}
		}

		/*==now let's handle fractional year(current)==*/
		//full months first
		for (let i = 1; i < today_month; i++) {
			switch (i) {
				case 1:
					exactDay += 31;
					break;
				case 3:
					exactDay += 31;
					break;
				case 4:
					exactDay += 30;
					break;
				case 5:
					exactDay += 31;
					break;
				case 6:
					exactDay += 30;
					break;
				case 7:
					exactDay += 31;
					break;
				case 8:
					exactDay += 31;
					break;
				case 9:
					exactDay += 30;
					break;
				case 10:
					exactDay += 31;
					break;
				case 11:
					exactDay += 30;
					break;
				case 12:
					exactDay += 31;
					break;
			}
			if (i === 2 && today_year % 2 === 0) {
				exactDay += 29;
			} else if (i === 2 && today_year % 2 !== 0) {
				exactDay += 28;
			}
		}
		// now days
		//hehe boi this is fun;
		exactDay += today_day;

		/* ====== Fetch arabic birthday data from an api ====== */

		const birthdayResponse = await fetchDobData(dobDay, dobMonth, dobYear);
		const data = birthdayResponse.data;
		const weekday = data.gregorian.weekday.en;
		const hijriDob = data.hijri.date;
		const hijriMonthName = data.hijri.month.en;

		/* ============ Zodiac sign determination ============= */

		let zodiacSign;
		// zero based month
		if ((dobMonth === 2 && dobDay >= 21) || (dobMonth === 3 && dobDay <= 19)) {
			zodiacSign = "Aries - মেঘ";
		} else if (
			(dobMonth === 3 && dobDay >= 20) ||
			(dobMonth === 4 && dobDay <= 20)
		) {
			zodiacSign = "Taurus - বৃষ";
		} else if (
			(dobMonth === 4 && dobDay >= 21) ||
			(dobMonth === 5 && dobDay <= 20)
		) {
			zodiacSign = "Gemini - মিথুন";
		} else if (
			(dobMonth === 5 && dobDay >= 21) ||
			(dobMonth === 6 && dobDay <= 20)
		) {
			zodiacSign = "Cancer - কর্কট";
		} else if (
			(dobMonth === 6 && dobDay >= 21) ||
			(dobMonth === 7 && dobDay <= 22)
		) {
			zodiacSign = "Leo - সিংহ";
		} else if (
			(dobMonth === 7 && dobDay >= 23) ||
			(dobMonth === 8 && dobDay <= 22)
		) {
			zodiacSign = "Virgo - কন্যা";
		} else if (
			(dobMonth === 8 && dobDay >= 23) ||
			(dobMonth === 9 && dobDay <= 22)
		) {
			zodiacSign = "Libra - তুলা";
		} else if (
			(dobMonth === 9 && dobDay >= 23) ||
			(dobMonth === 10 && dobDay <= 21)
		) {
			zodiacSign = "Scrorpio - বৃশ্চিক";
		} else if (
			(dobMonth === 10 && dobDay >= 22) ||
			(dobMonth === 11 && dobDay <= 21)
		) {
			zodiacSign = "Sagittarius - ধনু";
		} else if (
			(dobMonth === 11 && dobDay >= 22) ||
			(dobMonth === 0 && dobDay <= 19)
		) {
			zodiacSign = "Capricorn - মকর";
		} else if (
			(dobMonth === 0 && dobDay >= 20) ||
			(dobMonth === 1 && dobDay <= 18)
		) {
			zodiacSign = "Aquarius - কুম্ভ";
		} else {
			zodiacSign = "Pisces - মীন";
		}

		/* ====== Fetch birthday event from an api ====== */

		const famousBirths = [];
		const eventResponse = await fetchOnThisDay(dobDay, dobMonth);
		for (let i = 0; i < 15; i++) {
			let celebPage = eventResponse.births[i].pages[0];
			if (celebPage.thumbnail) {
				famousBirths.push(celebPage);
			}
		}
		setResult({
			dobDay: dobDay,
			dobMonth: dobMonth,
			year: age_year,
			month: age_month,
			day: age_day,
			totalDay: exactDay,
			birthdayLeft: daysLeft,
			birthdayData: {
				weekday: weekday,
				hijri: hijriDob,
				hijriMonth: hijriMonthName,
			},
			zodiacSign: zodiacSign,
			famousBirths: famousBirths,
		});
		setLoading(false);
	}

	return (
		<div id="app">
			<header>
				<a href="/" id="title">
					Age
				</a>
				<DarkMode mode={mode} setMode={setMode} />
			</header>
			<Input
				setDob={setDob}
				disc={disc}
				shrink={shrink}
				setShrink={setShrink}
				calculate={calculate}
				setLoading={setLoading}
			/>
			{!disc && !loading && <Result result={result} />}
			{!disc && loading && <Loading />}
		</div>
	);
}

export default App;
