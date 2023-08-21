import Main from "./Main";

function PersonalWork() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default PersonalWork;
