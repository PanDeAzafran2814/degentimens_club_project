import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/images/logofinal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faDiscord,faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import rarity from "../assets/images/rarity.png";

const Nav = () => {
  const [navigator, cambiarEstadoNavigador] = useState(false);

  const ChangeEstadoNavigador = () => {
    cambiarEstadoNavigador(!navigator);
  };

  return (
    <header className="w-full bg-Containers-0 fixed z-10">
      <div className="mdmax:hidden w-full flex justify-end in:justify-center md:px-5 text-2xl pt-2 in:text-sm">
        <div className="p-2 mr-2 rounded-full text-Containers-0  flex justify-center items-center">
          <a
            target="_blank"
            href="https://discord.gg/KYeQnxTX"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faDiscord}
              color="white"
            />
          </a>
        </div>
        <div className="p-2 mr-2 rounded-full text-Containers-0  flex justify-center items-center">
          <a
            target="_blank"
            href="https://twitter.com/DegentlemensNFT"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={faTwitter}
              color="white"
              faq
            />
          </a>
        </div>
      </div>

      <nav className="in:hidden flex justify-center items-center text-xl pb-2">
        <ul className="flex lineneonpink justify-evenly w-1/4 border-y-2 border-y-Navbar-0 text-Navbar-0 py-5">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about-us"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>About Us</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="roadmap"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>Roadmap</a>
            </li>
          </Link>
        </ul>
        <div>
          <div className="mx-3 bg-black rounded-full flex justify-center items-center">
            <Image alt="" width={80} height={80} src={Logo} />
          </div>
        </div>
        <ul className="flex lineneonpink justify-evenly w-1/4 border-y-2 border-y-Navbar-0 text-Navbar-0 py-5">
          <Link
            activeClass="active"
            to="Mint"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>Mint</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>FAQ</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <li>
              <a>Team</a>
            </li>
          </Link>
        </ul>
      </nav>
      <nav className="flex py-2 lg:hidden text-Navbar-0">
        <div
          onClick={ChangeEstadoNavigador}
          className="w-3/12 flex justify-center items-center text-2xl"
        >
          <div>
            <FontAwesomeIcon className="w-5 h-5" icon={faBars} />
          </div>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div className="mx-3 w-3/12 bg-Containers-0 rounded-full flex justify-center items-center">
            <Image alt="" width={80} height={80} src={Logo} />
          </div>
        </div>
      </nav>
      {navigator && (
        <div className="bg-Containers-0">
          <ul className="text-white flex flex-col justify-center items-center space-y-4 py-4">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>Home</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="about-us"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>About us</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>Roadmap</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Mint"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>Mint</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>FAQ</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li onClick={() => cambiarEstadoNavigador(false)}>
                <a>Team</a>
              </li>
            </Link>
            <li>
              <a
                target="_blank"
                href="https://discord.gg/KYeQnxTX"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/DegentlemensNFT"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://raritysniper.com/"
                rel="noopener noreferrer"
              >
                Rarity sniper
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
