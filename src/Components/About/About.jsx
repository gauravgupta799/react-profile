import React from "react";
import "./About.css";
// import AboutImg from "../../assets/profileImg2.png";
import CV from "../../assets/John-Cv.pdf";
import Intro from "./Intro";

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section_title'>About Me</h2>
			<span className='section_subtitle'>My introduction</span>
			<div className='about_container container grid'>
				{/* <img src={AboutImg} alt='profileImg' className='about_img' /> */}
				<div className='about_data'>
					<Intro />
					<p className='about_description'>
						<b><i>ReactJs developer</i></b>, I create websites and web pages for with
						UI / UX user interface, I've 1 years of experiencea as a Reactjs developer and I 
						I also work in backend with NodeJs (express.Js) MongoDB database and  many clients
						that are happy with the projects carried out.
					</p>
					<a href={CV} download='' className='button button--flex'>
						Download CV
						<i className='bx bxs-cloud-download'
						style={{fontSize:"1.5em"}}
						></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
