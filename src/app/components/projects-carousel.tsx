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
    title: "My Portfolio Page",
    image: "/images/portfolio.png",
    content:
      "Welcome to my portfolio! I'm continuously working on improving and expanding my webpage, so feel free to check back anytime to see what's new. Future updates may include multilingual support, a contact form, or even a blog. The design might also evolve—how much flies in and out will depend on my creativity and mood. Stay tuned!",
  },

  {
    title: "Website for a Bike Manufacturer",
    image: "/images/journeyman.png",
    content:
      "This was my first project after completing the bootcamp—a website for a friend who manufactures custom cargobikes. While I created the design in Figma, it was tailored to my friend's wishes and vision for the site. I built the website with Next.js for a fast, modern experience. I used Sanity as the headless CMS to manage content seamlessly. It was a great opportunity to apply everything I've learned, experiment with new technologies, and gain hands-on experience in web development.",
  },
  {
    title: "An idea for an app: WerIstSchuld?",
    image: "/images/weristschuld.jpg",
    content:
      "For a future project, I want to focus on the topic of tax fraud and social fraud. My plan is to develop an app that processes and interconnects official statistical data on these issues. Using engaging animations and interactive features, the app will provide users with insights into the financial impacts and potential courses of action. Additionally, I intend to include example calculations to illustrate how the funds lost to tax fraud could be redirected for social purposes. Sadly, this is still only an idea",
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
