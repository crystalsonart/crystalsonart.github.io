import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<>
			<Header />
			<Main
				images={[
					{ name: "Niko 01", src: "./images/niko/niko-01.jpg" },
					{ name: "Niko 02", src: "./images/niko/niko-02.jpg" },
					{ name: "Niko 03", src: "./images/niko/niko-03.jpg" },
					{ name: "Niko 04", src: "./images/niko/niko-04.jpg" },
					{
						name: "Little Big Awesome 01",
						src: "./images/little-big-awesome/little-big-awesome-01.jpg",
					},
					{
						name: "Little Big Awesome 02",
						src: "./images/little-big-awesome/little-big-awesome-02.jpeg",
					},
					{
						name: "Little Big Awesome 03",
						src: "./images/little-big-awesome/little-big-awesome-03.jpeg",
					},
					{
						name: "Little Big Awesome 04",
						src: "./images/little-big-awesome/little-big-awesome-04.jpeg",
					},
					{
						name: "Little Big Awesome 05",
						src: "./images/little-big-awesome/little-big-awesome-05.png",
					},
					{
						name: "Little Big Awesome 06",
						src: "./images/little-big-awesome/little-big-awesome-06.png",
					},
					{
						name: "Little Big Awesome 07",
						src: "./images/little-big-awesome/little-big-awesome-07.png",
					},
				]}
				onSelectItem={(value) => {
					console.log(value);
				}}
			/>
		</>
	);
}

export default App;
