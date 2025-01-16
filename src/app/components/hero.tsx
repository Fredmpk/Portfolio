"use client";

import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
export default function Hero() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showWebDevPhoto, setShowWebDevPhoto] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    // Start first typewriter after 2 seconds
    const firstTimer = setTimeout(() => {
      setShowFirst(true);
    }, 2000);

    // Start second typewriter after 6 seconds
    const secondTimer = setTimeout(() => {
      setShowSecond(true);
    }, 6000);

    // Start third typewriter after 10 seconds
    const thirdTimer = setTimeout(() => {
      setShowThird(true);
    }, 12000);

    // Cleanup timers
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(thirdTimer);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  function handleHi() {
    setIsOpen(!isOpen);
  }
  function toggleWebDevPhoto() {
    setShowWebDevPhoto(!showWebDevPhoto);
  }

  const words = [
    {
      text: "Hi,",
      className: "text-xl text-white italic font-normal ",
    },

    {
      text: "i'm",

      className: "text-xl text-white italic font-normal",
    },
    {
      text: "Fred,",

      className: "text-xl text-white italic font-normal",
    },
    {
      text: "an",

      className: "text-xl text-white italic font-normal",
    },
    {
      text: "aspiring",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "frontend",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " developer.",
      className: "text-xl text-white italic font-normal",
    },
  ];

  const wordstwo = [
    {
      text: "I ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " studied ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " translation",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " and",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "then ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " found ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " my ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " passion ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " in",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: " coding.",
      className: "text-xl text-white italic font-normal",
    },
  ];
  const wordsthree = [
    {
      text: "Now",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "I'm ",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "looking",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "for",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "a",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "cool",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "job",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "to",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "combine",
      className: "text-xl text-white italic font-normal",
    },
    {
      text: "both.",
      className: "text-xl text-white italic font-normal",
    },
  ];

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
            style={{ transitionDuration: "1000ms" }}
            className={` bg-handyellow rounded-[50%] flex justify-center items-center px-[10vw] py-[5vw] xs:p-[4vw] sm:p-[3vw] row-start-3 md:row-start-4 row-span-2 col-start-2 transition-all ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            onClick={toggleWebDevPhoto}
            onMouseEnter={() => setShowWebDevPhoto(true)}
            onMouseLeave={() => setShowWebDevPhoto(false)}
          >
            {" "}
            WEB DEVELOPMENT{" "}
          </a>

          <a
            href="#translation"
            style={{ transitionDuration: "1500ms" }}
            className={`bg-transgreen w-30 rounded-[50%] flex justify-center items-center p-[5vw] xs:p-[4vw] sm:p-[3vw] row-start-4 md:row-start-5 row-span-3 col-start-4 col-span-2 transition-all ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            TRANSLATION
          </a>
        </div>
        <div
          style={{
            transitionDuration: "10000ms",
            backgroundImage: "url('/images/screen.png')",
          }}
          className={`relative h-[80vh] w-full bg-center bg-no-repeat bg-[length:140%_80%] ${
            isLoaded ? "opacity-95" : "opacity-0"
          }`}
        >
          <div className="absolute top-[35%] left-[17%] w-[70%] ">
            <div className="relative z-10 animate-[fadeIn_2s_ease-in_3s]">
              {showFirst && <TypewriterEffect words={words} />}
              {showSecond && <TypewriterEffect words={wordstwo} />}
              {showThird && <TypewriterEffect words={wordsthree} />}
            </div>
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
