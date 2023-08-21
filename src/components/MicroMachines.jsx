import Main from "./Main";

function MicroMachines() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default MicroMachines;
