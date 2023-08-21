import Main from "./Main";

function Pantheon() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default Pantheon;
