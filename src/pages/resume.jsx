import React, { useEffect } from "react";
import "./styles/resume.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/common/footer";

const Resume = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="page-content">
			<div className="content-wrapper">
			<div className="read-article-back">
				<img
					src="/portfolio/back-button.png"
					alt="back"
					className="read-article-back-button"
					onClick={() => navigate(-1)}
				/>
			</div>

			<div className="content-wrapper">
				<main className="resume-main">
					<div className="resume-content">
						<object
							data="/portfolio/resume.pdf"
							type="application/pdf"
							className="resume-pdf"
						>
							<p className="text-center text-gray-600">
								Your browser does not support PDFs.
								<a
									href="/portfolio/resume.pdf"
									className="text-blue-500 underline"
								>
									Download the PDF
								</a>
								.
							</p>
						</object>
					</div>
				</main>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
			</div>
		</div>
	);
};

export default Resume;


