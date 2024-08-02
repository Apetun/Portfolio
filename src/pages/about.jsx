import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Socials from "../components/about/socials";
import BlurFade from "../components/common/blur-fade";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									<BlurFade delay={0.25} inView>
										{INFO.about.title}
									</BlurFade>
								</div>

								<div className="subtitle about-subtitle">
									<BlurFade delay={0.25 * 2} inView>
										{INFO.about.description}
									</BlurFade>
								</div>

								<div className="skill">
									<div className="skill-name">
										Programming
									</div>
									<div className="skill-bar">
										<div
											className="skill-per"
											style={{ maxWidth: "90%" }}
											per="90%"
										></div>
									</div>
								</div>

								<div className="skill">
									<div className="skill-name">WebDev</div>
									<div className="skill-bar">
										<div
											className="skill-per"
											style={{ maxWidth: "60%" }}
											per="60%"
										></div>
									</div>
								</div>
								<div className="skill">
									<div className="skill-name">AI/ML</div>
									<div className="skill-bar">
										<div
											className="skill-per"
											style={{ maxWidth: "80%" }}
											per="80%"
										></div>
									</div>
								</div>
								<div className="skill">
									<div className="skill-name">Research</div>
									<div className="skill-bar">
										<div
											className="skill-per"
											style={{ maxWidth: "70%" }}
											per="70%"
										></div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<BlurFade delay={0.25} inView>
											<img
												src="./about.jpg"
												alt="./about.jpg"
												className="about-image"
											/>
										</BlurFade>
									</div>
								</div>

								<BlurFade delay={0.25 * 3} inView>
									<div className="about-socials">
										<Socials />
									</div>
								</BlurFade>
							</div>
						</div>
					</div>
					<BlurFade delay={0.25} inView>
						<div className="page-footer">
							<Footer />
						</div>
					</BlurFade>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
