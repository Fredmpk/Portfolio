"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const cards = [
  {
    title: "My Bootcamp @Devhaus",
    image: "/images/devhaus.png",
    content:
      "In September, I successfully completed an intensive training program at Devhaus Leipzig, where I pursued my goal of becoming a front-end developer. During this program, I gained a comprehensive understanding of front-end development fundamentals, including HTML, CSS, JavaScript, TypeScript, React, and Next.js. I also acquired valuable insights into backend technologies such as Node.js, Express, and SQL. While the course was challenging at times and truly pushed me to my limits, it was an incredibly rewarding experience that allowed me to grow both technically and personally. The program also covered essential design principles, focusing on UI/UX and Figma, and equipped me with practical knowledge of tools like Git, Docker, Prisma, and VS Code. Through hands-on team and solo projects that simulated real-world scenarios, I developed the skills and confidence needed to apply my new expertise in professional settings.",
  },
  {
    title: "Meine Portfolio-Website",
    image: "/images/portfolio.png",
    content:
      "Wie ihr seht befindet sich diese Website noch im Aufbau, das ist nur die aktuelle Version und es wird noch viel passieren! Ich habe vor die Seite mehrsprachig zu gestalten, ein Kontaktformular und vielleicht ein Blog einzurichten, ich werde das Design bestimmt noch einige Male ändern und auch inhaltlich gibt es bestimmt immer etwas was ich doch denke schöner gestalten zu können. Also kommt wieder!",
  },
  {
    title: "Meine erste App: WerIstSchuld?",
    image: "/images/weristschuld.jpg",
    content:
      "Für mein nächstes Projekt möchte ich mich dem Thema Steuerbetrug und Sozialbetrug widmen. Ich plane, eine App zu entwickeln, die die offiziellen statistischen Daten zu diesen Themen aufbereitet und in Beziehung zueinander setzt. Mithilfe von anschaulichen Animationen und interaktiven Funktionen soll den Nutzerinnen und Nutzern ein Einblick in die finanziellen Auswirkungen und Handlungsmöglichkeiten gegeben werden. Dabei werde ich auch Beispielrechnungen zur möglichen Verwendung der durch Steuerbetrug entzogenen Mittel für soziale Zwecke einbinden.",
  },
  {
    title: "Website für einen Fahrradmechaniker",
    image: "/images/journeyman.png",
    content:
      "Dies ist mein erstes Projekt nach dem Bootcamp, ich gestalte die Website eines befreundeten Fahrradmechanikers. Für mich eine gute Gelegenheit das gelernte anzuwenden und mich auszuprobieren",
  },
];
export function Carousel({ interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className="cards-container-body flex justify-center items-center relative"
      {...handlers}
    >
      <div className="cards-container flex flex-col flex-wrap justify-center md:flex-row gap-[2vw] w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card bg-bluegrey text-white rounded-lg p-[2vw] max-w-[90vw] md:max-w-[80vw] md:min-w-20 m-[1vw] flex flex-col gap-[2vw] transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0"
            }`}
          >
            <h3 className="font-bold text-xl">{card.title}</h3>
            <Image
              src={card.image}
              alt=""
              width={500}
              height={500}
              className="object-contain max-h-[25vw]"
            />
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <IoIosArrowForward></IoIosArrowForward>
      </button>
    </div>
  );
}
