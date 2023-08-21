import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

	function selectedLink(pathname) {
		if (pathname === location.pathname) {
			return "navigation--link navigation--link-selected";
		}

		return "navigation--link";
	}

	return (
		<header className="header">
			<section className="header--section">
				<a className="header--link" href="/">
					<h1 className="crystal__name">
						<img className="crystal__name--icon" src="./images/crystal_icon.png" />
						<div className="crystal__name--name">Crystal Yoori Son</div>
					</h1>
				</a>
				<div className="crystal__description">
					<div>Background Paint | Concept Design</div>
					<div>crystalson826@gmail.com</div>
				</div>
				<nav className="navigation">
					<div className="navigation--header">Background Paint</div>
					<div className="navigation--item">
						<a className={selectedLink("/pantheon")} href="/#/pantheon">
							Pantheon
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/mao-mao")} href="/#/mao-mao">
							Mao Mao
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/arlo")} href="/#/arlo">
							Arlo
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/niko")} href="/#/niko">
							Niko
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/midnight")} href="/#/midnight">
							Midnight Gospel
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/little-big")} href="/#/little-big">
							Little Big Awesome
						</a>
					</div>
				</nav>
				<nav className="navigation">
					<div className="navigation--header">Crystal</div>
					<div className="navigation--item">
						<a className={selectedLink("/about-me")} href="/#/about-me">
							About Me
						</a>
					</div>
					<div className="navigation--item">
						<a className={selectedLink("/contact-me")} href="/#/contact-me">
							Contact Me
						</a>
					</div>
				</nav>
			</section>
		</header>
	);
}

export default Header;
