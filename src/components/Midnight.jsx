import Main from "./Main";

function Midnight() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default Midnight;
