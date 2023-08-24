import Header from "./Header";

import HomePage from "./HomePage";

import Pantheon from "./Pantheon";
import MaoMao from "./MaoMao";
import Arlo from "./Arlo";
import Midnight from "./Midnight";
import Niko from "./Niko";
import LittleBig from "./LittleBig";
import Turbo from "./Turbo";
import HotWheels from "./HotWheels";

import PersonalWork from "./PersonalWork";
import AboutMe from "./AboutMe";

import { HashRouter, Outlet, Routes, Route } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

function Navigation() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/pantheon" element={<Pantheon />} />
					<Route path="/mao-mao" element={<MaoMao />} />
					<Route path="/arlo" element={<Arlo />} />
					<Route path="/midnight" element={<Midnight />} />
					<Route path="/niko" element={<Niko />} />
					<Route path="/little-big" element={<LittleBig />} />
					<Route path="/turbo" element={<Turbo />} />
					<Route path="/hot-wheels" element={<HotWheels />} />
					<Route path="/personal-work" element={<PersonalWork />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default Navigation;
