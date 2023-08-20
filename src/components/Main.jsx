import { useState } from "react";

function Main({ images, onSelectItem }) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	// Event Handler
	const handleClick = (event, image, index) => {
		console.log(event);
		onSelectItem(image);
		setSelectedIndex(index);
	};

	return (
		<main className="main">
			<section className="images">
				{images &&
					images.map((image, index) => {
						return (
							<img
								alt={image.name}
								className={selectedIndex === index ? "selected-image" : "image"}
								key={image.name}
								onClick={(event) => {
									handleClick(event, image, index);
								}}
								src={image.src}
							/>
						);
					})}
			</section>
		</main>
	);
}

export default Main;
