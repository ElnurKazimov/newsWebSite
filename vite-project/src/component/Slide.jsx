

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from '@mui/material';


const Slide = () => {


    const [slides, setSlides] = useState([])


    const BaseUrl = 'https://newsapi.org/v2/everything?q='
    const ApiKey = '1ce201ad543e4939b11b543962c2370b'

    const getNews = async () => {
        const response = await axios.get(`${BaseUrl}world&apiKey=${ApiKey}`)
        setSlides(response.data.articles);

    }

    useEffect(() => {
        getNews();

    }, [])


    return (
        <Container>




            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 4000 }}
                loop

                className='mt-2 cursor-pointer'>
                {
                    slides.map((slide) => (
                        slide.urlToImage != null && (
                            <SwiperSlide >

                                <div className='flex flex-col justify-center gap-3'>
                                    <img src={slide.urlToImage} alt="" className='w-[100%] h-[700px]' />
                                    <h2 className='text-white  text-3xl font-bold translate-y-[-100px] h-[100px] p-3 font-sans'>{slide.title}</h2>
                                </div>

                            </SwiperSlide>
                        )
                    ))
                }

            </Swiper>











        </Container>
    )
}

export default Slide