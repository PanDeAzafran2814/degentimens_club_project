import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Pagination,Navigation } from "swiper";
import nft1 from "../assets/images/Falsecrackzz.png";
import nft2 from "../assets/images/Bai.png";
import nft3 from "../assets/images/Wu.png";
import Image from "next/image";

const Carrosel = ({away}) => {
    return ( 
        <div className="neondiv px-3 text-white md:flex md:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
        <Swiper
        slidesPerView={5}
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
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={nft1} width={400} height={400} objectFit="cover"/>
        </SwiperSlide>

      </Swiper>
        </div>
     );
}
 
export default Carrosel;