import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import BlurFade from "../components/common/blur-fade";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<BlurFade duration={0.25} inView>
							<div className="title contact-title">
							&lt;Let's Get in Touch:<br></br>Ways to Connect with
								Me/&gt;
							</div>
						</BlurFade>
						<BlurFade duration={0.25*2} inView>
							<div className="subtitle contact-subtitle">
								for your interest in getting in touch
								with me. I welcome your feedback, questions, and
								suggestions. If you have a specific question or
								comment, please feel free to email me directly
								at &nbsp;{""}
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>
								. I make an effort to respond to all messages
								within 24 hours, although it may take me longer
								during busy periods. Finally, if you prefer to
								connect on social media, you can find me on{" "}
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
								>
									{"linkedin"}
								</a>
								. Thanks again for your interest, and I look
								forward to hearing from you!
							</div>
						</BlurFade>
					</div>
					<BlurFade inView duration={0.25*3}> 
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div></BlurFade>
					<BlurFade inView duration={0.25}>
					<div className="page-footer">
						<Footer />
					</div>
					</BlurFade>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;