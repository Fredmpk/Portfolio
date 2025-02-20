"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

export function Carousel({ interval = 30000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("Projects");
  const cards = [
    {
      title: t("titleBoo"),
      image: "/images/devhaus.png",
      content: t("PrDev"),
    },
    {
      title: t("titlePo"),
      image: "/images/portfolio.png",
      content: t("PrPort"),
    },

    {
      title: "titleBi",
      image: "/images/journeyman.png",
      content: t("PrBike"),
    },
    // {
    //   title: t("titleWer")
    //   image: "/images/weristschuld.jpg",
    //   content: t("PrWer"),
    // },
  ];
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
      className="cards-container-body flex justify-center items-center relative p-4"
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
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
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
