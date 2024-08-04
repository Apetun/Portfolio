import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Article from "../components/articles/article";
import BlurFade from "../components/common/blur-fade";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-main-container">
						<BlurFade inView duration={0.25}>
							<div className="title articles-title">
								{INFO.articles.title}
							</div>
						</BlurFade>

						<div className="subtitle articles-subtitle">
							<BlurFade inView duration={0.25 * 2}>
								{INFO.articles.description}
							</BlurFade>
						</div>
						<BlurFade inView duration={0.25 * 3}>
							<div className="articles-container">
								<div className="articles-wrapper">
									{myArticles.map((article, index) => (
										<div
											className="articles-article"
											key={(index + 1).toString()}
										>
											<Article
												key={(index + 1).toString()}
												date={article().date}
												title={article().title}
												description={
													article().description
												}
												link={"/portfolio/article/" + (index + 1)}
											/>
										</div>
									))}
								</div>
							</div>
						</BlurFade>
					</div>
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

export default Articles;
