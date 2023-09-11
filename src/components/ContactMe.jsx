function ContactMe() {
	const contacts = [
		{
			name: "Email Address",
			value: "crystalson826@gmail.com",
			url: "mailto:crystalson826@gmail.com",
		},
		{
			name: "LinkedIn",
			value: "Crystal Yoori Son",
			url: "https://www.linkedin.com/in/crystal-yoori-son-b071ab40",
		},
	];

	return (
		<main className="p-16">
			{contacts.map((contact) => {
				return (
					<div className="text-3xl">
						<span>{contact.name + ": "}</span>
						<a
							className="underline text-blue-500 hover:text-blue-300"
							href={contact.url}
						>
							{contact.value}
						</a>
					</div>
				);
			})}
		</main>
	);
}

export default ContactMe;
