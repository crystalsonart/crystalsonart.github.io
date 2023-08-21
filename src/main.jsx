import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Navigation from "./components/Navigation";

function App() {
	return <Navigation />;
}

//import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
