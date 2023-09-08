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
		if (pathname === location.pathname) {
			return "navigation--link navigation--link-selected";
		}

		return "navigation--link";
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

	return (
		<header className="header">
			<section className="header--section">
				<a className="header--link" href={"/?password=" + password}>
					<h1 className="crystal__name">
						{/* <img className="crystal__name--icon" src="./images/crystal_icon.png" /> */}
						<div className="crystal__name--name">Crystal Yoori Son</div>
						{/* <div className="crystal__menu">
							<input
								ref={navigationCheckbox}
								type="checkbox"
								class="crystal__menu--checkbox"
								id="navi-toggle"
								onChange={onNavigationClick}
							/>

							<label for="navi-toggle" class="crystal__menu--button">
								<span class="crystal__menu--icon"></span>
							</label>
						</div> */}
					</h1>
				</a>
				<div className="crystal__description">
					<div>crystalson826@gmail.com</div>
				</div>
				<nav className="navigation" ref={navigationElement}>
					<div className="navigation--header">
						Art Direction / BG Paint & Color Supervisor
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/pantheon")}
							// href={"?password=" + password + "#/pantheon"}
							href={"/#/pantheon"}
						>
							Pantheon
						</a>
					</div>
				</nav>
				<nav className="navigation">
					<div className="navigation--header">BG Paint & Color Supervisor</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/mao-mao")}
							// href={"?password=" + password + "#/mao-mao"}
							href={"/#/mao-mao"}
						>
							Mao Mao: Heroes of Pure Heart
						</a>
					</div>
				</nav>
				{/* <nav className="navigation">
					<div className="navigation--header">Paint Supervisor / Background Painter</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/arlo")}
							href={"?password=" + password + "#/arlo"}
						>
							Arlo the Alligator Boy
						</a>
					</div>
				</nav> */}
				<nav className="navigation">
					<div className="navigation--header">Background Paint</div>
					{/* <div className="navigation--item">
						<a
							className={selectedLink("/midnight")}
							href={"?password=" + password + "#/midnight"}
						>
							Midnight Gospel
						</a>
					</div> */}
					<div className="navigation--item">
						<a
							className={selectedLink("/star-wars")}
							// href={"?password=" + password + "#/star-wars"}
							href={"/#/star-wars"}
						>
							Star Wars: Galaxy of Adventures
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/niko")}
							// href={"?password=" + password + "#/niko"}
							href={"/#/niko"}
						>
							Niko and the Sword of Light
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/little-big")}
							// href={"?password=" + password + "#/little-big"}
							href={"/#/little-big"}
						>
							Little Big Awesome
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/turbo")}
							// href={"?password=" + password + "#/turbo"}
							href={"/#/turbo"}
						>
							Turbo Fast
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/hot-wheels")}
							// href={"?password=" + password + "#/hot-wheels"}
							href={"/#/hot-wheels"}
						>
							Team Hot Wheels
						</a>
					</div>
				</nav>
				<nav className="navigation">
					{/* <div className="navigation--header">Crystal</div> */}
					{/* <div className="navigation--item">
						<a
							className={selectedLink("/personal-work")}
							href={"?password=" + password + "#/personal-work"}
						>
							Personal Work
						</a>
					</div> */}
					<div className="navigation--item">
						<a
							className={selectedLink("/contact-me")}
							// href={"?password=" + password + "#/contact-me"}
							href={"/#/contact-me"}
						>
							Let's Connect
						</a>
					</div>
				</nav>
			</section>
		</header>
	);
}

export default Header;
