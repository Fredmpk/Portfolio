"use client";

import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleHi() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <section className="bg-cover bg-center h-[88vw] bg-[url('/images/hero.png')] ">
        <div className="grid grid-rows-[8vw_4.5vw_5vw_4vw_1vw_0vw_4.5vw] grid-cols-[4vw_32vw_33vw_3vw_28vw] gap-0 text-[clamp(1rem,0.5843rem+1.7738vw,2.5rem)] lowercase md:uppercase">
          <a
            href="#webdev"
            className="bg-handyellow rounded-[50%] flex justify-center items-center p-[4vw] sm:p-[3vw] row-start-3 md:row-start-4 row-span-2 col-start-2"
          >
            WEBENTWICKLUNG
          </a>

          <a
            href="#translation"
            className="bg-transgreen w-30 rounded-[50%] flex justify-center items-center p-[4vw] sm:p-[3vw] row-start-4 md:row-start-5 row-span-3 col-start-4 col-span-2"
          >
            ÜBERSETZUNGEN
          </a>
        </div>
        <div
          className={`${
            isOpen ? "7/8 md:w-4/5" : "w-1/3"
          } bg-introorange opacity-90 p-4 mx-4 mt-20 sm:mt-48
           rounded-lg text-lg`}
        >
          <div className="">
            <button onClick={handleHi}>
              <p>Hi!</p>
              <p className={`${isOpen ? "hidden" : "block"}`}>
                Hast du einen Job für mich?
              </p>
            </button>
            <p className={`${isOpen ? "block" : "hidden"} text-base`}>
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
