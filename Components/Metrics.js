import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Metrics = () => {
  return (
    <div className="mb-10 text-white md:rounded-lg md:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2">
      <div className="text-cente flex justify-evenly items-center neontextyellowr text-5xl mb-5">
        <hr className="w-3/12 in:hidden lineneonpink"></hr>
        <h1 className="neontextyellow text-center mx-2">
          Stay up to date with us!
        </h1>
        <hr className="w-3/12 in:hidden lineneonpink"></hr>
      </div>
      <div className="lg:flex justify-evenly">
        <div className="lg:w-3/12 py-24 flex flex-col justify-center">
          <div className="flex text-Navbar-10 mb-12 justify-center text-7xl">
            <a
              target="_blank"
              href="https://discord.gg/KYeQnxTX"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-32 h-32" icon={faDiscord} />
            </a>
          </div>
        </div>

        <div className="lg:w-3/12 py-24 flex flex-col justify-center">
          <div className="flex text-Navbar-10 mb-12 justify-center text-7xl">
            <a
              target="_blank"
              href="https://twitter.com/DegentlemensNFT"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-32 h-32" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
