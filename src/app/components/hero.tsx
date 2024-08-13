"use client";

import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
export default function Hero() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWebDevPhoto, setShowWebDevPhoto] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  function handleHi() {
    setIsOpen(!isOpen);
  }
  function toggleWebDevPhoto() {
    setShowWebDevPhoto(!showWebDevPhoto);
  }

  return (
    <div>
      <div className="h-[15vh] w-full bg-backgroundwhite md:hidden"></div>

      {/* <section className={`bg-cover bg-center h-[88vw] ${showWebDevPhoto ? "bg-[url('/images/hermirror.png')]" : "bg-[url('/images/hero.png')]"}`}></section> */}
      <section
        className={`bg-cover bg-center h-[88vw] ${
          showWebDevPhoto
            ? "bg-[url('/images/heromirror.png')]"
            : "bg-[url('/images/hero.png')]"
        }`}
      >
        <div className="grid grid-rows-[8vw_4.5vw_2vw_4vw_1vw_0vw_4.5vw] grid-cols-[2vw_38vw_29vw_3vw_28vw] gap-0 text-[clamp(1rem,0.5843rem+1.7738vw,2.5rem)] lowercase md:uppercase">
          <a
            href="#webdev"
            className={` bg-handyellow rounded-[50%] flex justify-center items-center px-[10vw] py-[5vw] xs:p-[4vw] sm:p-[3vw] row-start-3 md:row-start-4 row-span-2 col-start-2 transition-all duration-700 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            onClick={toggleWebDevPhoto}
            onMouseEnter={() => setShowWebDevPhoto(true)}
            onMouseLeave={() => setShowWebDevPhoto(false)}
          >
            {" "}
            WEBENTWICKLUNG{" "}
          </a>

          <a
            href="#translation"
            className={`bg-transgreen w-30 rounded-[50%] flex justify-center items-center p-[5vw] xs:p-[4vw] sm:p-[3vw] row-start-4 md:row-start-5 row-span-3 col-start-4 col-span-2 transition-all duration-700 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            ÜBERSETZUNGEN
          </a>
        </div>
        <div
          style={{ transitionDuration: "2000ms" }}
          className={`transition-transform ease-out
    ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
    ${isOpen ? "w-7/8 md:w-4/5" : "w-1/3"}
    bg-introorange opacity-90 p-4 mx-4 mt-20 sm:mt-48 rounded-lg text-lg`}
        >
          <div>
            <button className="hover:font-bold" onClick={handleHi}>
              <p>Hi!</p>
              <p className={`${isOpen ? "hidden" : "block"}`}>
                Hast du einen Job für mich?
              </p>
              <span className={`text-xl ${isOpen ? "hidden" : "block"}`}>
                <FaAngleDown /> {/* Arrow Down Icon */}
              </span>
              <span className={`text-xl ${isOpen ? "block" : "hidden"}`}>
                <FaAngleUp /> {/* Arrow Up Icon */}
              </span>
            </button>
            <p
              className={`${isOpen ? "block" : "hidden"} text-base md:text-lg`}
            >
              Ich bin ein Quereinsteiger mit Leidenschaft für Sprachen, Kultur
              und Technologie. Mein Weg führte mich von den Geistes- und
              Sprachwissenschaften über Handwerk und Übersetzen bis zum Coding.
              Ende September werde ich mein Frontend-Development-Bootcamp
              abschließen und kann es kaum erwarten, meine neuen Fähigkeiten mit
              meinen bisherigen Erfahrungen zu verbinden! Ich bin auf der Suche
              nach einem Team, das Vielfalt schätzt und einen Job bei dem ich
              mich und meine Talente voll entfalten kann. Lasst uns gemeinsam
              spannende Projekte gestalten!
            </p>
          </div>
        </div>
      </section>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } xs:hidden bg-green h-[34vh] xxs:h-[17vh]`}
      ></div>
    </div>
  );
}
