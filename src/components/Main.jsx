function Main({ images }) {
	return (
		<main className="p-32 flex flex-col align-middle">
			{images &&
				images.map((image) => {
					return (
						<img alt={image.name} className="pb-12" key={image.name} src={image.src} />
					);
				})}
		</main>
	);
}

export default Main;
