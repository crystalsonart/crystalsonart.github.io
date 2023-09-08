function HomePage() {
	const searchParams = new URLSearchParams(window.location.search);

	let password = searchParams.get("password");

	const stories = [
		{ name: "Niko and the Sword of Light", img: "./images/niko/niko-01.jpg", url: "#/niko" },
		{
			name: "Little Big Awesome",
			img: "./images/little-big/little-big-07.png",
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
							<a href={"?password=" + password + story.url}>
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
