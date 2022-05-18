import { faEye, faHardHat, faHatCowboySide, faImage, faMeh, faTshirt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ImageNft from "../assets/images/nfts.gif";
import nft1 from "../assets/images/Bai.png";
import React, { useState } from "react";


const Traits = () => {
    const [Swipe, SetSwipe]=useState("")
    return ( 
        <div className="neondiv px-3 text-white md:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="text-center flex justify-evenly items-center neontextyellow text-3xl mb-10">
                <hr className="w-5/12 in:hidden lineneonblue"></hr>
                <h1>Traits</h1>
                <hr className="w-5/12 in:hidden lineneonblue"></hr>
            </div>
            <div className="flex mx-16 xlmin:mx-0 w-full xlmin:flex-col">
                <div className="w-1/2 xlmin:w-full">
                    <ul className="space-y-8 px-6 xlmin:px-1 uppercase text-lg font-bold">
                        <li 
                            className="traisbuton hover:-translate-y-6"
                            onClick={(e)=>{SetSwipe("Background")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faImage} width={30} height={30}/>
                                Background
                            </p>
                            <p className="neontextyellow">10</p>
                        </li>
                        <li 
                            className="traisbuton"
                            onClick={(e)=>{SetSwipe("Headwear")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faHatCowboySide} width={30} height={30}/>
                                Headwear
                            </p>
                            <p className="neontextyellow">30</p>
                        </li>
                        <li 
                            className="traisbuton"
                            onClick={(e)=>{SetSwipe("Clothing")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faTshirt} width={30} height={30}/>
                                Clothing
                            </p>
                            <p className="neontextyellow">37</p>
                        </li>
                        <li 
                            className="traisbuton"
                            onClick={(e)=>{SetSwipe("Mouth")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faMeh} width={30} height={30}/>
                                Mouth
                            </p>
                            <p className="neontextyellow">22</p>
                        </li>
                        <li 
                            className="traisbuton"
                            onClick={(e)=>{SetSwipe("Eyes")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faEye} width={30} height={30}/>
                                Eyes
                            </p>
                            <p className="neontextyellow">28</p>
                        </li>
                        <li 
                            className="traisbuton"
                            onClick={(e)=>{SetSwipe("Fur")}}
                        >
                            <p className="flex w-11/12 neontextblue">
                                <FontAwesomeIcon className="mr-4 w-1/12" icon={faUser} width={30} height={30}/>
                                Fur
                            </p>
                            <p className="neontextyellow">17</p>
                        </li>
                    </ul>
                </div>
                <div className="w-1/2 xlmin:w-full xlmin:mt-8">
                    <Image src={
                        Swipe !== ""?
                        ImageNft
                        :
                        nft1
                    } width={600} height={600} objectFit="cover" className="rounded-lg"/>
                </div>
            </div>
        </div>
     );
}
 
export default Traits;