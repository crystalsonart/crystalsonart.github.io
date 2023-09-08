import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

	const searchParams = new URLSearchParams(window.location.search);

	let password = searchParams.get("password");

	function selectedLink(pathname) {
		if (pathname === location.pathname) {
			return "navigation--link navigation--link-selected";
		}

		return "navigation--link";
	}

	return (
		<header className="header">
			<section className="header--section">
				<a className="header--link" href={"/?password=" + password}>
					<h1 className="crystal__name">
						{/* <img className="crystal__name--icon" src="./images/crystal_icon.png" /> */}
						<div className="crystal__name--name">Crystal Yoori Son</div>
					</h1>
				</a>
				<div className="crystal__description">
					<div>crystalson826@gmail.com</div>
				</div>
				<nav className="navigation">
					<div className="navigation--header">
						Art Direction / BG Paint & Color Supervisor
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/pantheon")}
							href={"?password=" + password + "#/pantheon"}
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
							href={"?password=" + password + "#/mao-mao"}
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
							href={"?password=" + password + "#/star-wars"}
						>
							Star Wars: Galaxy of Adventures
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/niko")}
							href={"?password=" + password + "#/niko"}
						>
							Niko and the Sword of Light
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/little-big")}
							href={"?password=" + password + "#/little-big"}
						>
							Little Big Awesome
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/turbo")}
							href={"?password=" + password + "#/turbo"}
						>
							Turbo Fast
						</a>
					</div>
					<div className="navigation--item">
						<a
							className={selectedLink("/hot-wheels")}
							href={"?password=" + password + "#/hot-wheels"}
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
							href={"?password=" + password + "#/contact-me"}
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
