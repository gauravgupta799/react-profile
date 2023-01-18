import React from "react";
import { FrontendData } from "../../Datas";

const Frontend = () => {
	return (
		<div className='skills_content'>
			<h3 className='skills_title'>Front developer</h3>
			<div className='skills_box'>
				{FrontendData.map((data, i) => (
					<div className='skills_group' key={i}>
						{data?.left?.map((leftdata, i) => (
							<div className='skills_data' key={leftdata.title}>
								<i className='bx bx-badge-check'></i>
								<div>
									<h3 className='skills_name'>{leftdata.title}</h3>
									<span className='skills_level'>{leftdata.level}</span>
								</div>
							</div>
						))}
						{data?.right?.map((rightdata, i) => (
							<div className='skills_data' key={rightdata.title}>
								<i className='bx bx-badge-check'></i>
								<div>
									<h3 className='skills_name'>{rightdata.title}</h3>
									<span className='skills_level'>{rightdata.level}</span>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Frontend;