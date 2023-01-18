import React from "react";
import {SocialLinks } from "../../Datas";

const Social = () => {
	return (
		<div className='home_social'>
		{ SocialLinks.map((socialLink)=>
				<a
					key={socialLink.name}
					href={socialLink.link}
					target='_blank'
					rel='noreferrer'
					className={`home_social-icon ${socialLink.iconClass}`}
				>
					<i className={socialLink.icon}></i>
				</a>
			)
		}
		</div>
	);
};

export default Social;
