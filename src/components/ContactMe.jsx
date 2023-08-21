import Main from "./Main";

function ContactMe() {
	return (
		<Main
			onSelectItem={(value) => {
				console.log(value);
			}}
		/>
	);
}

export default ContactMe;
