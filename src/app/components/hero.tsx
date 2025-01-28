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
    <div className="bg-bluepull mt-12 md:mt-24 flex flex-col md:flex-row">
      <div
        className={`bg-[url('/images/hero-bg-sm.png')] md:bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[65vh] md:w-1/2 md:h-[90vh]`}
      />
      <div className="md:w-1/2 h-[30vh] md:h-auto md:flex items-center justify-center">
        <div className="w-full py-10 px-4 z-10 animate-[fadeIn_1/2s_ease-in_1/2s] flex flex-col items-center">
          {showFirst && <TypewriterEffect words={wordsOne} />}
          {showSecond && <TypewriterEffect words={wordsTwo} />}
          {showThird && <TypewriterEffect words={wordsThree} />}
        </div>
      </div>
    </div>
  );
}
