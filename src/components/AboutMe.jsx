import Main from "./Main";

function AboutMe() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default AboutMe;
