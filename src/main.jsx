import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import HiddenPage from "./components/HiddenPage";
import Navigation from "./components/Navigation";

function App() {
	// const searchParams = new URLSearchParams(window.location.search);

	// let password = searchParams.get("password");

	// if (password === null || password !== "secret") {
	// 	return <HiddenPage />;
	// }

	return <Navigation />;
}

//import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
