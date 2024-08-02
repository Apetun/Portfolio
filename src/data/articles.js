import React from "react";

function article_2() {
	return {
		date: "2 Jan 2024",
		title: "Analyzing DarkComet in Memory with Volatility",
		description:
			"Volatility is used to analyze memory dumps for detecting and understanding the behavior of the DarkComet RAT. ",
		keywords: [
			"Volatility",
			"DarkComet",
			"Virus",
			"Memory Forensics",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "12 Jul 2024",
		title: "ACM Summer School 2024",
		description:
			"Attended ACM Summer School 2024 which offers self-motivated students in-depth knowledge and exposure to research in current, advanced technology areas.",
		style: ``,
		keywords: [
			"Artificial Intelligence",
			"ACM Summer School",
			"ACM Summer School 2024",
			"ACM",
			"NLP",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
