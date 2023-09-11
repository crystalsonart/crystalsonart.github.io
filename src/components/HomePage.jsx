function HomePage() {
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

	const transitions = "transition-all duration-500 ease-in-out";

	return (
		<main className="p-12">
			<section className="flex flex-wrap justify-around">
				{stories ? (
					stories.map((story) => {
						return (
							<div className="p-10">
								<a href={"/" + story.url}>
									<figure className="relative group w-[500px] h-[250px]">
										<img
											src={story.img}
											alt={story.name}
											className={
												"w-full h-full " +
												"blur-sm group-hover:blur-none group-hover:scale-110 " +
												transitions
											}
										/>
										<figcaption
											className={
												"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
												"font-bold text-3xl text-center text-white tracking-widest uppercase " +
												"group-hover:scale-125 " +
												transitions
											}
										>
											{story.name}
										</figcaption>
									</figure>
								</a>
							</div>
						);
					})
				) : (
					<div>There are no images</div>
				)}
			</section>
		</main>
	);
}

export default HomePage;
