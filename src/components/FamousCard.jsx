export default function FamousCard({ celeb }) {
	return (
		<div className="celeb">
			<img src={celeb.thumbnail.source} alt={celeb.title} />
			<h4>{celeb.title}</h4>
			<p>{celeb.description}</p>
		</div>
	);
}
