import Main from "./Main";

function Arlo() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default Arlo;
