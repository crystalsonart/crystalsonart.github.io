function Main({ images }) {
	return (
		<main className="main">
			<section className="images">
				{images ? (
					images.map((image, index) => {
						return (
							<img
								alt={image.name}
								className="image"
								key={image.name}
								src={image.src}
							/>
						);
					})
				) : (
					<div>There are no images</div>
				)}
			</section>
		</main>
	);
}

export default Main;
