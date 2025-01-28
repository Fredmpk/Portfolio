"use client";
import { useEffect, useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { wordsOne, wordsThree, wordsTwo } from "../lib/utils/words";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirst(true);
    }, 200);

    const secondTimer = setTimeout(() => {
      setShowSecond(true);
    }, 3800);

    const thirdTimer = setTimeout(() => {
      setShowThird(true);
    }, 10000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(thirdTimer);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="bg-bluepull mt-12 md:mt-24 flex flex-col md:flex-row text-white
"
    >
      <div
        className={`bg-[url('/images/hero-bg-sm.png')] md:bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[55vh] sm:h-[60vh] md:w-1/2 md:h-[90vh]`}
      />
      <div className="md:w-1/2 h-[45vh] sm:h-[35vh] md:h-auto flex flex-col items-center justify-between pt-5 pb-16 sm:py-10 md:py-28">
        <h1
          style={{ transitionDuration: "700ms" }}
          className={`text-bluewhite text-3xl text-center transition-all ease-out ${
            isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          WEB DEVELOPMENT
        </h1>
        <div className="h-[20vh] sm:h-[15vh] flex items-center justify-center">
          <div className=" w-full  px-4 z-10 animate-[fadeIn_1/2s_ease-in_1/2s] flex flex-col items-center">
            {showFirst && <TypewriterEffect words={wordsOne} />}
            {showSecond && <TypewriterEffect words={wordsTwo} />}
            {showThird && <TypewriterEffect words={wordsThree} />}
          </div>
        </div>
        <h1
          style={{ transitionDuration: "500ms" }}
          className={`text-bluewhite text-3xl text-center transition-all ease-out ${
            isLoaded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          TRANSLATION
        </h1>
      </div>
    </div>
  );
}
