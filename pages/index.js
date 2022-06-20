import ImageBar from "../Components/BarImage";
import Nav from "../Components/Nav";
import SEO from "../Components/SEO";
import About from "../Components/About";
import RoadMap from "../Components/RoadMap";
import Mint from "../Components/Mint";
import Faq from "../Components/Faq";
import TheTeam from "../Components/TheTeam";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Welcome from "../Components/Welcome";
import Metrics from "../Components/Metrics";
import Carrosel from "../Components/Carrosel";
import Traits from "../Components/Traits";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <SEO
        tittle={"Degentlemen's Club"}
        description={
          "Et est in consequat id. Esse cillum aliqua eiusmod laborum dolor Lorem ex id labore cupidatat dolor eiusmod quis adipisicing. Tempor officia enim laboris duis labore qui. Voluptate cupidatat voluptate consectetur commodo nisi nulla ea labore qui ullamco est laboris. Enim nostrud officia nisi in mollit adipisicing irure id eu quis non et cillum. Culpa cillum reprehenderit amet ipsum laboris irure nisi dolore nisi. Enim reprehenderit sunt dolor magna amet duis ad elit nostrud elit sit cillum aute."
        }
      />
      <Nav />
      <div className="h-36 mdmax:h-24"></div>
      <div className="p-4 space-y-2">
        <ImageBar />
        <Carrosel away={false}/>
        {/* <About /> */}
        <Traits/>
        <Carrosel away={true}/>
        <Mint/>
        <TheTeam />
        <Faq />
        <Metrics />
      </div>

      <Footer />
    </>
  );
};

export default Index;
