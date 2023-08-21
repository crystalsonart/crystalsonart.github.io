import Main from "./Main";

function MaoMao() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default MaoMao;
