import React from 'react'
import './Clients.css'
import { Data } from './Data'
// import { AboutUsTemp } from '../Aboutus/aboutus';

//Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//Import required modules
import { Pagination } from "swiper/modules";

export const Clients = () => {
  return (
    <section className="testimonial container section bg-blue-500" id="team">
        <h2 className="section_title font-bold">Our Team</h2>
        {/* <span className="section_subtitle">Our team details</span> */}

        <Swiper className="testimonial_container"
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id, image, title, description, proffesion }) => {
                return (
                    <SwiperSlide className="testimonial_card" key={id}>
                        <img src={image} alt="" className="testimonial_img" width={100} height={100} /> 
                        <span style={{float: 'right',fontSize: '14px' }}><b>Proffesion: {proffesion}</b></span>

                        <h3 className="testimonial_name">{title}</h3>
                        <p className="testimonial_description" style={{fontSize: '10px' }}>{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>

        {/* <div className='bg-dark text-light'>
            <AboutUsTemp />
        </div> */}

    </section>
  )
}
