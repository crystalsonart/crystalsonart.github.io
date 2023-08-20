const Header = () => {
	return (
		<header class="header">
			<section className="header--section">
				<a className="header--link" href="/">
					<h1 className="crystal__name">
						<img className="crystal__name--icon" src="images/crystal_icon.png" />
						<div className="crystal__name--name">Crystal Yoori Son</div>
					</h1>
				</a>
				<div className="crystal__description">
					<div>Background Paint | Concept Design</div>
					<div>crystalson826@gmail.com</div>
				</div>
				<nav className="navigation">
					<div className="navigation--header">Background Paint</div>
					<div className="navigation--item"><a className="navigation--link" href="#">Pantheon</a></div>
					<div className="navigation--item"><a className="navigation--link" href="#">Mao Mao</a></div>
					<div className="navigation--item"><a className="navigation--link" href="#">Niko</a></div>
					<div className="navigation--item"><a className="navigation--link" href="#">Midnight Gospel</a></div>
					<div className="navigation--item"><a className="navigation--link" href="#">Little Big Awesome</a></div>
				</nav>
				<nav class="navigation">
					<div className="navigation--header">About Me</div>
					<div className="navigation--item"><a className="navigation--link" href="#">Contact Me</a></div>
					<div className="navigation--item"><a className="navigation--link" href="#">Past Work</a></div>
				</nav>
			</section>
		</header>
	);
}

export default Header;