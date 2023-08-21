import Main from "./Main";

function HotWheels() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default HotWheels;
