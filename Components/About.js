import Image from "next/image";
import ImageNft from "../assets/images/nfts.gif";

const About = () => {
    return ( 
        <div id="about-us" data-aos="fade-up" className=" text-white md:flex md:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2">
            <div className="md:w-3/4 p-10 text-justify flex flex-col justify-evenly">
                <h1 className="text-4xl mb-6 neontextyellow text-center"> Welcome to the <span className="text-Primarycolors-10">  Club!</span> </h1>
                <p className="mb-3 text-black"> The Degentlemen's Club is a collection of 6,000 unique Saber-toothed Degens roaming in the Ethereum jungle. In our club, everyone is welcomed! But being a holder grants you membership past the general area and into our exclusive VIP section, where you will receive holders-only benefits! Every single member will be able to vote on the initiatives we take to build this project. </p>
        </div>
            <div className="md:w-1/4 flex justify-center items-center">
                <Image src={ImageNft} className="rounded-lg"/>
            </div>
        </div>
     );
}
 
export default About;