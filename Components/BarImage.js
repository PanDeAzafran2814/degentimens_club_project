import React from 'react';
import Image from 'next/image';
import bar from '../assets/images/mail.png';
const ImageBar = () => {
    return ( 
        <div id='home' data-aos="fade-up" className=" text-white ni:rounded-lg ni:mb-5 pt-8 pr-2 bg-Containers-0 pb-8  xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className='BannerIndex'>
                <Image src={bar} objectFit='cover' alt=''/>
            </div>
        </div>
     );
}
 
export default ImageBar;