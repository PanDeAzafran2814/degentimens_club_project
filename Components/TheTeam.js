import Image from "next/image";
import ImageNft from "../assets/images/ntfimage.jpg";
import nft1 from "../assets/images/Falsecrackzz.png";
import nft2 from "../assets/images/Bai.png";
import nft3 from "../assets/images/Wu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import woodsing from '../assets/images/woodensign2.png';

//data-aos="fade-up"
const TheTeam = () => {
  return (
    <div
      id="team"
      data-aos="fade-up"
      className="text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2"
    >
      <div className="text-center flex justify-evenly items-center neontextyellow text-3xl mb-10">
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
        <div className="relative w-2/12 h-16 flex justify-center items-center py-16 xlmin:w-full">
                    <div className="absolute">
                        <Image width={150} height={190} objectFit='cover' className='mx-2' src={woodsing}/>
                    </div>
                    <h1 className=" absolute text-xl ">Team</h1>
                </div>
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
      </div>

      <div className="">
        <div className="lg:flex mt-10 w-full justify-evenly">
          <div className="flex flex-col justify-center items-center text-2xl hover:translate-y-2 duration-300">
            <h1 className="mb-3 cursor-pointer">Founder</h1>
            <div className=" rounded-full w-64 h-64 flex justify-center items-center ">
              <a
                target="_blank"
                href="https://twitter.com/FalseCrackzz"
                rel="noopener noreferrer"
              >
                <Image alt="" src={nft1} className="rounded-full" />
              </a>
            </div>
            <p className="mt-3 cursor-pointer">
              <a>@Falsecrackzz</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
