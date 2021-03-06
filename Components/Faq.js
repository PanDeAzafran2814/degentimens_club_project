import AccordionFaq from "./AcordionFaq/Acordion";
import "react-light-accordion/demo/css/index.css";

const Faq = () => {
  return (
    <div
      id="faq"
      data-aos="fade-up"
      className="text-white lg:rounded-lg pt-8 pr-2 pinkgradientBackground mb-5 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2"
    >
      <div className="text-center flex justify-evenly items-center text-white text-3xl mb-10">
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
        <h1>FAQ</h1>
        <hr className="w-5/12 in:hidden lineneonblue"></hr>
      </div>

      <div className="flex flex-col mx-10">
        <div className="mb-5">
          <AccordionFaq
            title={"What is the Degentlemen’s Club?"}
            content={
              "- The Degentlemen’s club is a collection of 6000 Saber-toothed degens roaming in the Ethereum jungle. Each NFT is unique and comes with holders-only benefits."
            }
          />
        </div>
        <div className="mb-5">
          <AccordionFaq title={"Mint price?"} content={"first 2000 free, then .0069 eth"} />
        </div>

        <div className="mb-5">
          <AccordionFaq
            title={"Where can I mint?"}
            content={
              "- You will be able to mint from our website and if experienced, directly from contract."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
