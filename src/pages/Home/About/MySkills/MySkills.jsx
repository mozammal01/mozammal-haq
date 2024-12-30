import React, { useRef, useState } from 'react';
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiHtml5, SiJavascript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import firebaseIcon from '../../../../assets/Icons/firebaseIcon.png'
import mongodbIcon from '../../../../assets/Icons/mongodbIcon.png'
import gitIcon from '../../../../assets/Icons/gitIcon.png'
import bootstrapIcon from '../../../../assets/Icons/bootstrapIcon.png'
import figmaIcon from '../../../../assets/Icons/figmaIcon.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';

const MySkills = () => {
  return (
    <>
      <div>

        <SectionTitle heading='My Skills' />

        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper max-w-6xl my-20"
        >


          {/* React */}
          <SwiperSlide>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <FaReact className='size-20 text-blue-600 animate-spin-slow' />
              <span className='font-bold'>React</span>
            </div>
          </SwiperSlide>

          {/* Next Js */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <RiNextjsFill className='size-20 transform hover:rotate-180 duration-1000' />
              <span className='font-bold'>Next JS</span>
            </div>
          </SwiperSlide>

          {/* Js */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <SiJavascript className='size-16 text-yellow-500 duration-700' />
              <span className='font-bold'>JS</span>
            </div>
          </SwiperSlide>

          {/* HTML */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <SiHtml5 className='size-16 text-orange-600 duration-700' />
              <span className='font-bold'>HTML</span>
            </div>
          </SwiperSlide>

          {/* CSS */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating rotating'>
              <FaCss3Alt className='size-16 text-blue-600 duration-700' />
              <span className='font-bold'>CSS</span>
            </div>
          </SwiperSlide>


          {/* Node Js */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <IoLogoNodejs className='size-20 text-green-600 duration-700' />
              <span className='font-bold'>Node JS</span>
            </div>
          </SwiperSlide>

          {/*Tailwind CSS */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <RiTailwindCssFill className='size-20 text-cyan-500 duration-700' />
              <span className='font-bold'>Tailwind CSS</span>
            </div>
          </SwiperSlide>

          {/*Firebase */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <div className='w-20 duration-700'>
                <img src={firebaseIcon} alt="firebaseIcon" />
              </div>
              <span className='font-bold'>Firebase</span>
            </div>
          </SwiperSlide>

          {/* Bootstrap */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <div className='w-20 duration-700'>
                <img src={bootstrapIcon} alt="bootstrapIcon" />
              </div>
              <span className='font-bold'>Bootstrap</span>
            </div>
          </SwiperSlide>


          {/* Git */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <div className='w-20 duration-700'>
                <img src={gitIcon} alt="gitIcon" />
              </div>
              <span className='font-bold'>Git</span>
            </div>
          </SwiperSlide>

          {/* mongodb */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <div className='w-20 duration-700'>
                <img src={mongodbIcon} alt="mongodbIcon" />
              </div>
              <span className='font-bold'>MongoDB</span>
            </div>
          </SwiperSlide>

          {/* Figma */}
          <SwiperSlide className='-ml-20'>
            <div className='rounded-xl w-40 h-40 bg-base-200 flex flex-col items-center justify-center space-y-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rotating'>
              <div className='w-20 duration-700'>
                <img src={figmaIcon} alt="figmaIcon" />
              </div>
              <span className='font-bold'>Figma</span>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </>
  );
}

export default MySkills;