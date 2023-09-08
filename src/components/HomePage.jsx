function HomePage() {
	const searchParams = new URLSearchParams(window.location.search);

	let password = searchParams.get("password");

	const stories = [
		{ name: "Pantheon", img: "./images/pantheon/pantheon-06.jpg", url: "#/pantheon" },
		{
			name: "Mao Mao: Heroes of Pure Heart",
			img: "./images/mao-mao/mao-mao-01.jpg",
			url: "#/mao-mao",
		},
		{
			name: "Star Wars: Galaxy of Adventures",
			img: "./images/star-wars/star-wars-04.jpg",
			url: "#/star-wars",
		},
		{ name: "Niko and the Sword of Light", img: "./images/niko/niko-01.jpg", url: "#/niko" },
		{
			name: "Little Big Awesome",
			img: "./images/little-big/little-big-01.jpg",
			url: "#/little-big",
		},
		{ name: "Turbo Fast", img: "./images/turbo/turbo-03.jpg", url: "#/turbo" },
		{
			name: "Team Hot Wheels",
			img: "./images/hot-wheels/hot-wheels-04.jpg",
			url: "#/hot-wheels",
		},
		// {
		// 	name: "Personal Work",
		// 	img: "./images/personal/personal-03.jpg",
		// 	url: "#/personal-work",
		// },
	];

	return (
		<main className="stories">
			{stories ? (
				stories.map((story) => {
					return (
						<div className="story">
							{/* <a href={"?password=" + password + story.url}> */}
							<a href={"/" + story.url}>
								<figure class="story__shape">
									<img src={story.img} alt={story.name} class="story__image" />
									<figcaption class="story__caption">{story.name}</figcaption>
								</figure>
							</a>
						</div>
					);
				})
			) : (
				<div>There are no images</div>
			)}
		</main>
	);
}

export default HomePage;
