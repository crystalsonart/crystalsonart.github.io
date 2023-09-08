function AboutMe() {
	return (
		<main className="about-me">
			<section className="about-me__section">
				<img
					className="about-me__image"
					src="./images/crystal_icon.png"
					alt="Crystal Yoori Son"
				/>

				<section className="about-me__paragraphs">
					<p className="about-me__paragraph">
						Hello, my name is <strong>Crystal Yoori Son</strong>. I'm an artist based in
						Los Angeles with over 10 years of experience.
					</p>
					<p class="about-me__paragraph">
						I've worked in a variety of roles such as an <strong>Art Director</strong>,{" "}
						<strong>Paint Supervisor</strong>, & <strong>Background Paint</strong>. I
						have experience working with a different styles that range from dramatic &
						realistic shows like Pantheon & Niko to abstract & fun shows like Midnight
						Gospel & Little Big Awesome.
					</p>
					<p className="about-me__paragraph">
						Please contact me at <strong>crystalson826@gmail.com</strong> for further
						questions.
					</p>
				</section>

				<section className="about-me__contacts">
					<div>
						<a href="mailto:crystalson826@gmail.com">
							<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/crystal-yoori-son-b071ab40">
							<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
						</a>
					</div>
				</section>
			</section>
		</main>
	);
}

export default AboutMe;
