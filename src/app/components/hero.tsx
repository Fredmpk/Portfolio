"use client";
import { useEffect, useRef, useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useTranslations } from "next-intl";
import useTypewriterWords from "../lib/utils/words";
import { useInView } from "motion/react";
import { useVisibility } from "../contexts/VisibilityContext";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const t = useTranslations("Hero");
  const { wordsOne, wordsTwo, wordsThree } = useTypewriterWords();
  const ref = useRef(null); // Create ref manually
  const inView = useInView(ref, { amount: 0.1 }); // Pass ref to useInView

  const { setIsHeroInView } = useVisibility();

  useEffect(() => {
    setIsHeroInView(inView);
  }, [inView, setIsHeroInView]);
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowFirst(true);
    }, 200);

    const secondTimer = setTimeout(() => {
      setShowSecond(true);
    }, 1800);

    const thirdTimer = setTimeout(() => {
      setShowThird(true);
    }, 5000);

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
    <section
      ref={ref}
      className="bg-bluepull mt-12 md:mt-24 flex flex-col md:flex-row text-white
"
    >
      <div
        className={`bg-[url('/images/hero-bg-sm.png')] md:bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[50vh] sm:h-[60vh] md:w-1/2 md:h-[90vh]`}
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
          {t("WebDev")}
        </h1>
        <div className="h-[20vh] sm:h-[15vh] flex items-center justify-center">
          <div className=" w-full  px-4 z-10 animate-[fadeIn_1/2s_ease-in_1/2s] flex flex-col items-center">
            <TypewriterEffect words={wordsOne} />
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
          {t("Transl")}
        </h1>
      </div>
    </section>
  );
}
