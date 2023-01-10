import React from "react";
import "./testimonials.css";
import Data from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
	return (
		<section className='testimonial container section'>
			<h2 className='section_title'>My clients say</h2>
			<span className='section_subtitle'>Testimonial</span>
			<Swiper
				className='testimonial_container'
				loop={true}
        sliderPerView ={2}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						sliderPerView: 2,
					},
					768: {
						sliderPerView: 2,
						spaceBetween: 48,
					},
          // 1048:{
          //   sliderPerView: 2,
					// 	spaceBetween: 48,
          // }
				}}
				modules={[Pagination]}
			>
				{Data.map(({ id, image, name, description }) => {
					return (
						<SwiperSlide className='testimonial_card' key={id}>
							<img src={image} alt='testImg' className='testimonial_img' />
							<h3 className='testimonial_name'>{name}</h3>
							<p className='testimonial_description'>{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
