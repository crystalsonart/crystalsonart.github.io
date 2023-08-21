import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Home from "./components/Home";
import LittleBig from "./components/LittleBig";
import Niko from "./components/Niko";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/niko" element={<Niko />} />
				<Route path="/little-big" element={<LittleBig />} />
			</Routes>
		</BrowserRouter>
	);
}

//import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
