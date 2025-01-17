import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import BlurFade from "../components/common/blur-fade";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<BlurFade duration={0.25} inView>
							<div className="title projects-title">
								&lt;Things I’ve made trying to put my dent in
								the universe./&gt;
							</div>
						</BlurFade>
						<BlurFade duration={0.25 * 2} inView>
							<div className="subtitle projects-subtitle">
								I've worked on a variety of projects over the
								years and I'm proud of the progress I've made.
								Many of these projects are open-source and
								available for others to explore and contribute
								to. If you're interested in any of the projects
								I've worked on, please feel free to check out
								the code and suggest any improvements or
								enhancements you might have in mind.
								Collaborating with others is a great way to
								learn and grow, and I'm always open to new ideas
								and feedback.
							</div>
						</BlurFade>
						<BlurFade duration={0.25 * 3} inView>
							<div className="projects-list">
								<AllProjects />
							</div>
						</BlurFade>
					</div>
					<BlurFade duration={0.25 * 3} inView>
						<div className="page-footer">
							<Footer />
						</div>
					</BlurFade>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
