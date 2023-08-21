import Main from "./Main";

function Turbo() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default Turbo;
