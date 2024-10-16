import React from "react";
import BlurFade from "../components/common/blur-fade";

function article_2() {
	return {
		date: "2 Jan 2024",
		title: "Analyzing DarkComet in Memory with Volatility",
		description:
			"Volatility is used to analyze memory dumps for detecting and understanding the behavior of the DarkComet RAT. ",
		keywords: ["Volatility", "DarkComet", "Virus", "Memory Forensics"],
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					In this article, I dive into the process of analyzing a
					memory dump for DarkComet malware using Volatility. I break
					down the steps involved, from identifying malicious
					processes and network connections to examining registry
					entries and dumped strings for deeper insights. This
					analysis provides a detailed walkthrough of malware
					detection and behavioral analysis techniques in a forensic
					context.
					<br></br>
					For a more in-depth understanding, you can read the full Medium
					article <a href="https://medium.com/@jeffinjoffyp123/analyzing-darkcomet-in-memory-with-volatility-9aad98a8a787">here</a> and
					explore the complete code and analysis on my{" "}
					<a href="https://github.com/Apetun/Cryptonite/blob/main/Writeups/Forensics/bruh.raw/Solution.md">GitHub</a>.
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
				<div className="article-content">
					<BlurFade delay={0.25} inView>
						I had an incredible experience attending the ACM Summer
						School on "GenAI for Text" at IIT Gandhinagar, sponsored
						by Microsoft Research India. The event lasted 12 days
						and featured an impressive lineup of speakers from
						academia and industry, all specializing in Generative
						AI. We covered a wide range of topics, from the basics
						to advanced NLP and generative AI concepts.<br></br>
					</BlurFade>
					<div className="article-image-container">
						<div className="article-image-wrapper">
							<BlurFade delay={0.25} inView>
								<img src="../article1.jpeg" alt="about.jpg" />
							</BlurFade>
						</div>
					</div>
					<BlurFade delay={0.25} inView>
						During the internal hackathon, I put my newfound
						knowledge to the test by creating a tool called Query.
						This Gemini-backed tool was designed to parse and query
						tabular data from PDF files of the electoral bonds
						dataset. It was a challenging yet rewarding project, and
						you can check out a simple demo{" "}
						<a href="https://www.youtube.com/watch?v=2UeUEs9csPg">
							here
						</a>
						.<br></br> The beautiful IIT Gandhinagar campus and the
						fantastic peer group made the experience even more
						memorable. I am grateful to the organizers at Lingo Labs
						for their well-organized event. For a more official
						account, feel free to visit my LinkedIn post{" "}
						<a href="https://www.linkedin.com/posts/jeffinjoffy_i-am-delighted-to-share-my-experience-attending-activity-7216108016725606400-1ZIB?utm_source=share&utm_medium=member_desktop">
							here
						</a>
						.
					</BlurFade>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
