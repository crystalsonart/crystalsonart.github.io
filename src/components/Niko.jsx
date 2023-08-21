import Header from "./Header";
import Main from "./Main";

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
				]}
				onSelectItem={(value) => {
					console.log(value);
				}}
			/>
		</>
	);
}

export default App;
