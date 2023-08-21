import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HomePage from "./components/HomePage";
import LittleBig from "./components/LittleBig";
import Niko from "./components/Niko";
import Header from "./components/Header";
import { HashRouter, Outlet, Routes, Route } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/niko" element={<Niko />} />
					<Route path="/little-big" element={<LittleBig />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

//import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
