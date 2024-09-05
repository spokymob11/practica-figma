import React from "react";
import './CarruselDesing.css'
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import carrusel1 from "../../assets/image/image.png"
 
import carrusel2 from "../../assets/image/carrusel2.png"

import carrusel3 from "../../assets/image/carruel 3.png"
const Carrusel =() =>{

    return(


        <Swiper
        
        modules={[Navigation,Pagination]}
        spaceBetween={50}
        SlidesPerview={3}
        navigation ={true}
        pagination={{clickable:true}}
        autoplay={{delay:3000}}

        
        >

            <SwiperSlide> <img className= "image_carrusel"src= {carrusel1} /></SwiperSlide>

            <SwiperSlide> <img className= "image_carrusel" src= {carrusel2} /></SwiperSlide>
            <SwiperSlide> <img className= "image_carrusel" src= {carrusel3} /></SwiperSlide>
       
       
       
        </Swiper>

    )




}

export default Carrusel 

