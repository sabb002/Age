import age from "../assets/img/age.png";
import party from "../assets/img/party.png";
import birthday from "../assets/img/birthday.png";
import forest from "../assets/img/forest.png";
import quotebg from "../assets/img/quotebg.png";
import banner from "../assets/img/banner.png";
import Quotes from "./Quotes";
import FamousCard from "./FamousCard";

// zodiacs
import aries from "../assets/img/zodiac/aries.png";
import taurus from "../assets/img/zodiac/taurus.png";
import gemini from "../assets/img/zodiac/gemini.png";
import cancer from "../assets/img/zodiac/cancer.png";
import leo from "../assets/img/zodiac/leo.png";
import virgo from "../assets/img/zodiac/virgo.png";
import libra from "../assets/img/zodiac/libra.png";
import scorpio from "../assets/img/zodiac/scorpio.png";
import sagittarius from "../assets/img/zodiac/sagittarius.png";
import capricorn from "../assets/img/zodiac/capricorn.png";
import aquarius from "../assets/img/zodiac/aquarius.png";
import pisces from "../assets/img/zodiac/pisces.png";

export default function Result({ result }) {
	const {
		dobDay,
		dobMonth,
		year,
		month,
		day,
		totalDay,
		birthdayLeft,
		birthdayData,
		zodiacSign,
		famousBirths,
	} = result;
	const { weekday, hijri, hijriMonth } = birthdayData;

	let birthMonth = "";
	switch (dobMonth + 1) {
		case 1:
			birthMonth = "January";
			break;
		case 2:
			birthMonth = "February";
			break;
		case 3:
			birthMonth = "March";
			break;
		case 4:
			birthMonth = "April";
			break;
		case 5:
			birthMonth = "May";
			break;
		case 6:
			birthMonth = "June";
			break;
		case 7:
			birthMonth = "July";
			break;
		case 8:
			birthMonth = "August";
			break;
		case 9:
			birthMonth = "September";
			break;
		case 10:
			birthMonth = "October";
			break;
		case 11:
			birthMonth = "November";
			break;
		case 12:
			birthMonth = "December";
			break;
	}

	const quoteIndex = Math.floor(Math.random() * Quotes.length);

	let zodiacURL = "";
	if (zodiacSign === "Aries - মেঘ") zodiacURL = aries;
	if (zodiacSign === "Taurus - বৃষ") zodiacURL = taurus;
	if (zodiacSign === "Gemini - মিথুন") zodiacURL = gemini;
	if (zodiacSign === "Cancer - কর্কট") zodiacURL = cancer;
	if (zodiacSign === "Leo - সিংহ") zodiacURL = leo;
	if (zodiacSign === "Virgo - কন্যা") zodiacURL = virgo;
	if (zodiacSign === "Libra - তুলা") zodiacURL = libra;
	if (zodiacSign === "Scrorpio - বৃশ্চিক") zodiacURL = scorpio;
	if (zodiacSign === "Sagittarius - ধনু") zodiacURL = sagittarius;
	if (zodiacSign === "Capricorn - মকর") zodiacURL = capricorn;
	if (zodiacSign === "Aquarius - কুম্ভ") zodiacURL = aquarius;
	if (zodiacSign === "Pisces - মীন") zodiacURL = pisces;

	return (
		<section className="container">
			<div className="row">
				<div
					className="age"
					style={{
						backgroundImage: `url(${age})`,
						backgroundPosition: "center",
					}}
				>
					<div className="first">
						Your age: {year} years, {month} months and {day} days.
					</div>
					<div className="second">Exactly: {totalDay} days</div>
				</div>
			</div>
			<div className="row">
				<div
					className="card-2 birthdayData"
					style={{
						backgroundImage: `url(${forest})`,
					}}
				>
					<div className="weekday">
						Born on: <span>{weekday}</span>
					</div>
					<div className="hijri">
						Arabic birth date: <span>{hijri}</span>
					</div>
					<div className="hijriMonth">
						Hijri month: <span>{hijriMonth}</span>
					</div>
				</div>
				<div
					className="card-2 nextBirthday"
					style={{
						backgroundImage:
							birthdayLeft === 0 ? `url(${birthday})` : `url(${party})`,
						backgroundColor: birthdayLeft === 0 ? "#ffffff" : "transparent",
					}}
				>
					{birthdayLeft !== 0 && (
						<span>{birthdayLeft} days left till your next birthday</span>
					)}
				</div>
			</div>
			<div className="row">
				<div
					className="card-3 quote"
					style={{
						backgroundImage: `url(${quotebg})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="quoteText">"{Quotes[quoteIndex].quoteText}"</div>
					<div className="quoteAuthor">{Quotes[quoteIndex].quoteAuthor}</div>
				</div>
				<div
					className="card-3 zodiac"
					style={{
						backgroundImage: `url(${zodiacURL})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					{zodiacSign}
				</div>
			</div>
			<div className="row">
				<div
					className="famous"
					style={{
						backgroundImage: `url(${banner})`,
						backgroundSize: "cover",
						backgroundPosition: "top",
					}}
				>
					who else born on {birthMonth} {dobDay}
				</div>
				<div className="card-4">
					{famousBirths.map((celeb) => {
						return <FamousCard celeb={celeb} key={celeb.pageid} />;
					})}
				</div>
			</div>
			<div className="footer">developed by: sabb002</div>
		</section>
	);
}
