import { useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Header() {
	const location = useLocation();

	const searchParams = new URLSearchParams(window.location.search);

	let password = searchParams.get("password");

	const navigationCheckbox = useRef();
	const navigationElement = useRef();

	const [isMobile, setIsMobile] = useState(false);

	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth < 1000) {
			setIsMobile(true);
		} else {
			setIsMobile(false);

			navigationElement.current.style.display = "block";
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});

	function selectedLink(pathname) {
		var className = "hover:text-sky-300";

		if (pathname === location.pathname) {
			className += " text-sky-500";
		}

		return className;
	}

	function onNavigationClick() {
		if (isMobile) {
			if (navigationCheckbox.current.checked) {
				navigationElement.current.style.display = "block";
			} else {
				navigationElement.current.style.display = "none";
			}
		}
	}

	const navigation = [
		{
			header: "Art Direction / BG Paint & Color Supervisor",
			shows: [{ name: "Pantheon", url: "/pantheon" }],
		},
		{
			header: "BG Paint & Color Supervisor",
			shows: [
				{ name: "Mao Mao: Heroes of Pure Heart", url: "/mao-mao" },
				// { name: "Arlo the Alligator Boy", url: "/arlo" },
			],
		},
		{
			header: "Background Paint",
			shows: [
				// { name: "Midnight Gospel", url: "/midnight" },
				{ name: "Star Wars: Galaxy of Adventures", url: "/star-wars" },
				{ name: "Nike and the Sword of Light", url: "/niko" },
				{ name: "Little Big Awesome", url: "/little-big" },
				{ name: "Turbo Fast", url: "/turbo" },
				{ name: "Team Hot Wheels", url: "/hot-wheels" },
			],
		},
		{
			shows: [
				// { name: "Personal Work", url: "/personal-work" },
				// { name: "About Me", url: "/about-me" },
				{ name: "Let's Connect", url: "/contact-me" },
			],
		},
	];

	return (
		<header className="p-12 bg-slate-50">
			<a className="text-5xl font-extralight uppercase tracking-wide text-black" href={"/"}>
				<h1>Crystal Yoori Son</h1>
			</a>
			<div className="py-3 pl-2 text-xl">
				<a className="hover:text-sky-400" href="mailto:crystalson826@gmail.com">
					crystalson826@gmail.com
				</a>
			</div>
			{navigation.map((nav) => {
				return (
					<nav className="pt-6 pl-2" ref={navigationElement}>
						{nav.header && <div className="pb-3 text-lg font-bold">{nav.header}</div>}

						{nav.shows.map((show) => {
							return (
								<div className="py-1 text-2xl">
									<a className={selectedLink(show.url)} href={"#" + show.url}>
										{show.name}
									</a>
								</div>
							);
						})}
					</nav>
				);
			})}
		</header>
	);
}

export default Header;
