function AboutMe() {
	return (
		<main className="about-me">
			<section className="about-me__section">
				<img
					className="about-me__image"
					src="./images/crystal_profile.png"
					alt="Crystal Yoori Son"
				/>

				<section className="about-me__paragraphs">
					<p className="about-me__paragraph">
						Hello, my name is <strong>Crystal Yoori Son</strong>. I'm an artist based in
						Los Angeles with 10 years of experience.
					</p>
					<p className="about-me__paragraph">
						My art seamlessly weaves [Themes/Concepts], drawing inspiration from
						[Influences/Subjects]. My background in design has led me to excel as a
						<strong> background painter</strong> in animation, infusing vitality into
						visuals for [Studio/Projects]. Rooted in [Describe Style]
					</p>
					<p className="about-me__paragraph">
						I aspire to transition into concept design, fusing design expertise with
						[Concept Design Elements]. Join me on this artistic journey by exploring my
						portfolio, as we embrace the boundless realms of creativity.
					</p>
					<p className="about-me__paragraph">
						Please contact me at <strong>crystalson826@gmail.com</strong> for further
						questions.
					</p>
				</section>

				<section className="about-me__contacts">
					<div>
						<a href="#">
							<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
						</a>
					</div>
				</section>
			</section>
		</main>
	);
}

export default AboutMe;
