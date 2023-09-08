import { useRef } from "react";

function HiddenPage() {
	const passwordField = useRef();

	function onKeyDown(event) {
		if (event.nativeEvent.key === "Enter") {
			let path = window.location.href.split("?")[0];

			window.open(path + "?password=" + passwordField.current.value, "_self");
		}
	}

	return (
		<main className="hidden-page">
			<section className="hidden-page__section">
				<h1 className="hidden-page_title">
					Under
					<br />
					Construction
				</h1>
				<div className="hidden-page__password">
					<input
						className="hidden-page__password-text"
						ref={passwordField}
						type="text"
						placeholder="password"
						onKeyDown={onKeyDown}
					/>
				</div>
			</section>
		</main>
	);
}

export default HiddenPage;
