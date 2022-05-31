import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination,Navigation } from "swiper";
import nft1 from "../assets/images/slider/2.png";
import nft2 from "../assets/images/slider/3.png";
import nft3 from "../assets/images/slider/4.jpg";
import nft4 from "../assets/images/slider/5.png";
import nft5 from "../assets/images/slider/6.png";
import nft6 from "../assets/images/slider/7.png";
import nft7 from "../assets/images/slider/8.png";
import nft8 from "../assets/images/slider/9.png";
import nft9 from "../assets/images/slider/10.png";
import nft10 from "../assets/images/slider/11.png";

import Image from "next/image";
import { useMediaQuery } from 'react-responsive';


const Carrosel = ({away}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
    console.log(isMobile)
    return ( 
        <div className=" px-3 text-white md:flex md:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 ">
        <Swiper
        slidesPerView={
            isMobile?
            2
            :
            5
        }
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1250,
            disableOnInteraction: false,
            reverseDirection:away,
            
          }}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft2} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft3} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft4} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft5} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft6} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft7} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft8} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft9} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft10} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>

      </Swiper>
        </div>
     );
}
 
export default Carrosel;