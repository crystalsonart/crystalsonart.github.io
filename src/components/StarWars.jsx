import Main from "./Main";

function StarWars() {
	return (
		<Main
			images={[
				{ name: "Star Wars 04", src: "./images/star-wars/star-wars-04.jpg" },
				{ name: "Star Wars 01", src: "./images/star-wars/star-wars-01.jpg" },
				{ name: "Star Wars 03", src: "./images/star-wars/star-wars-03.jpg" },
				{ name: "Star Wars 02", src: "./images/star-wars/star-wars-02.jpg" },
			]}
		/>
	);
}

export default StarWars;
