import Image from "next/image";
import ntfImage from "../assets/images/ntfimage.jpg";
import Logo from "../assets/images/Logogege.png";
import ntfImagePng from "../assets/images/logofinal.png";
import BannerImage from "../assets/images/banner.png";
import IconImage from "../assets/images/imgmintleft.png";
import neonLogo from "../assets/images/neonLogo.png";
import blackLogo from "../assets/images/blackLogo.png";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import woodsing from "../assets/images/woodensign2.png";

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [mintValue, SetMintValue] = useState(1);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);
  const claimNFTs = () => {
    if (mintValue <= 0) {
      return;
    }
    setFeedback("Minting your Ethclusive NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintValue)
      .send({
        gasLimit: `${160000 * mintValue}`,
        to: "0x08b1AAef9fD158BbDF21C3Cad6408aFA7D35DF4c",
        from: blockchain.account,
        value: 0,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a Etclusive NFT go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <div
      id="Mint"
      data-aos="fade-up"
      className="neondiv text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 pinkgradientBackground pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
    >
      <div className="text-center flex justify-evenly items-center neontextyellow text-3xl mb-10">
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
        <div className="relative w-2/12 h-16 flex justify-center items-center py-16 xlmin:w-full">
          <div className="absolute">
            <Image
              width={150}
              height={190}
              objectFit="cover"
              className="mx-2"
              src={woodsing}
            />
          </div>
          <h1 className=" absolute text-black text-4xl">Mint</h1>
        </div>
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
      </div>
      <div className="ni:flex">
        <div className="ni:w-1/2 in:hidden flex justify-center items-center">
          <Image alt="" src={neonLogo} />
        </div>
        <div className="ni:w-1/2 m-5 p-5 border-4 lineneonpink rounded-lg ">
          <div className="flex w-full">
            <div className="w-8/12 font-bold">
              <h1 className="text-2xl mb-3 text-gray-600">Degentlemens club</h1>
            </div>
            <div className="w-4/12 flex justify-center negativeBannerImg">
              <Image alt="" objectFit="cover" src={BannerImage} />
            </div>
          </div>

          <div className="h-1/2">
            <div className="flex justify-between ni:text-2xl mt-5">
             First 2000 free, the rest 0.0069 ETH.
            </div>
            <div className="flex justify-between border-t-2 border-b-2 border-white my-5 py-2 ni:text-2xl text-gray-600">
              <h1>TOTAL</h1>
              <h1>0.00 ETH</h1>
            </div>
            <div className="space-y-2">
              <button
                className="MintBtn invisible"
                disabled
                onClick={(e) => {
                  console.log(blockchain.account);
                  if (
                    claimingNft ||
                    blockchain.account === "" ||
                    blockchain.smartContract === null
                  ) {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                    return;
                  } else {
                    claimNFTs(1, 0.01);
                  }
                }}
              >
                MINT
              </button>
              {/* <div>{blockchain.account}</div> */}
              <select
                className="MintBtn bg-transparent"
                onChange={(e) => SetMintValue(Number(e.target.value))}
                disabled={
                  blockchain.account === "" || blockchain.smartContract === null
                }
              >
                <option value={0}>Select Mint Amount</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                 <option value={7}>7</option>
                 <option value={8}>8</option>
                 <option value={9}>9</option>
                 <option value={10}>10</option>

              </select>
              <button
                className="MintBtn "
                onClick={(e) => {
                  if (
                    blockchain.account === "" ||
                    blockchain.smartContract === null
                  ) {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  } else {
                    claimNFTs();
                  }
                }}
              >
                {blockchain.account === "" || blockchain.smartContract === null
                  ? "Connect"
                  : "Mint"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
