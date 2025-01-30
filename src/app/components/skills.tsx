"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faDocker,
  faFigma,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useInView } from "motion/react";

export function Skills() {
  const webdevRef = useRef(null);
  const translationRef = useRef(null);
  const isWebdevInView = useInView(webdevRef, {
    once: false,
    margin: "0px 0px -300px 0px",
  });
  const isTranslationInView = useInView(translationRef, {
    once: false,
    margin: "0px 0px -300px 0px",
  });

  return (
    <section className="bg-bluebright pt-4 md:pt-6 tracking-widest">
      <div className="flex bg-bluebright  justify-center">
        <h1 className="font-bold text-white  text-xl md:text-3xl pb-4 md:pb-6">
          SKILLS
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 w-full">
        <div
          ref={webdevRef}
          style={{
            transform: isWebdevInView ? "none" : "translateX(-100%)",
            opacity: isWebdevInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`py-[4vw] px-[5vw] md:row-start-1 md:col-start-1 md:col-span-2 bg-bluepull order-1 }`}
          id="webdev"
        >
          <h2 className="pl-[3vw] font-bold tracking-wide text-white text-lg md:text-xl">
            WEB DEVELOPMENT
          </h2>
          <p className="py-[6vw] text-base md:text-lg lg:text-xl text-white">
            As a recent graduate of an intensive frontend development bootcamp{" "}
            <a
              href="https://startsteps.org/en/partner/devhaus-leipzig"
              className="hover:underline"
            >
              @DEVHAUS Leipzig
            </a>
            , I&apos;m fascinated by the infinite possibilities in the world of
            coding. My current focus lies in building modern web applications
            with Next.js, while continuously expanding my technical toolkit.
            Beyond frontend development, I&apos;ve gained valuable insights into
            backend technologies, working with databases and headless CMS
            solutions. I&apos;m passionate about creating intuitive user
            experiences and constantly enhance my skills through hands-on
            project work, developing both websites and applications. My
            curiosity drives me to stay current with emerging technologies and
            best practices in the ever-evolving development landscape.
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-7 gap-[3vw] mt-4 text-base md:text-lg text-white">
            <a
              href="https://html.spec.whatwg.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faHtml5}
                className="h-12 w-12 hover:h-14 hover:w-14 text-orange-500 mb-2"
              />
              <span>HTML</span>
            </a>

            <a
              href="https://www.w3.org/Style/CSS/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="h-12 w-12 hover:h-14 hover:w-14  text-blue-500 mb-2"
              />
              <span>CSS</span>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faJsSquare}
                className="h-12 w-12 hover:h-14 hover:w-14  text-yellow-500 mb-2"
              />
              <span className="mx-1">JavaScript</span>
            </a>

            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/ts.svg"
                alt="TypeScript Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>TypeScript</span>
            </a>

            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="h-12 w-12 hover:h-14 hover:w-14  text-blue-400 mb-2"
              />
              <span>React</span>
            </a>

            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/nextjs.svg"
                alt="Next.js Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>Next.js</span>
            </a>

            <a
              href="https://www.sanity.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/sanity.svg"
                alt="Sanity Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>Sanity</span>
            </a>

            <a
              href="https://en.wikipedia.org/wiki/SQL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/sql.svg"
                alt="SQL Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>SQL</span>
            </a>

            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/vscode.svg"
                alt="VS Code Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>VS Code</span>
            </a>

            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faGit}
                className="h-12 w-12 hover:h-14 hover:w-14  text-orange-600 mb-2"
              />
              <span>Git</span>
            </a>

            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faDocker}
                className="h-12 w-12 hover:h-14 hover:w-14  text-blue-700 mb-2"
              />
              <span>Docker</span>
            </a>

            <a
              href="https://www.prisma.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <Image
                src="/svg/prisma.svg"
                alt="Prisma Icon"
                width={150}
                height={150}
                className="h-12 w-12 hover:h-14 hover:w-14  mb-2"
              />
              <span>Prisma</span>
            </a>

            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-2 hover:font-bold"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="h-12 w-12 hover:h-14 hover:w-14  text-purple-500 mb-2"
              />
              <span>Figma</span>
            </a>
          </div>
        </div>
        <div className="md:row-start-1 md:col-start-3 order-2">
          <Image
            src="/images/Fotoshoot-pc.jpg"
            alt="Arbeitsplatz mit Computer in schöner Natur"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:row-start-2 md:col-start-1 order-4 md:order-3">
          <Image
            src="/images/Github-pb.jpg"
            alt="Portrait Frederik König"
            width={1500}
            height={1500}
            className="object-cover w-full h-full hidden md:block"
          />
        </div>
        <div
          ref={translationRef}
          style={{
            transform: isTranslationInView ? "none" : "translateX(100%)",
            opacity: isTranslationInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="py-[4vw] px-[5vw] md:row-start-2 md:col-start-2 md:col-span-2 bg-bluedark order-3 md:order-4"
          id="translation"
        >
          <h2 className="p-[3vw] font-bold tracking-wide text-lg md:text-2xl text-white">
            TRANSLATION
          </h2>
          <div className="flex flex-col justify-center gap-[3vw]">
            <p className="text-base md:text-lg text-white lg:text-xl tracking-widest">
              As a translator with a Master&apos;s degree in Translatology, I
              specialize in precise and culturally nuanced translations between
              German, French, and English. My expertise has been shaped through
              extensive freelance work across diverse projects, complemented by
              immersive experiences living in West African countries like Togo
              and Niger. This combination of academic foundation, professional
              practice, and cultural immersion enables me to deliver
              translations that are not only linguistically accurate but also
              culturally authentic. I bring particular attention to capturing
              subtle meanings and contextual nuances that are essential for
              effective cross-cultural communication.
            </p>
            <div className="flex flex-row justify-between mx-10 sm:mx-28  mt-4 text-base">
              {/* <div className="flex flex-col items-center">
                <Image
                  src="/svg/trados.svg"
                  alt="Trados Icon"
                  width={250}
                  height={250}
                  className="lg:h-24 lg:w-24 h-12 w-12 mb-2 rounded-full p-1 bg-white"
                />
              </div> */}
              <div className="flex flex-col items-center">
                <Image
                  src="/svg/france.svg"
                  alt="France"
                  width={250}
                  height={250}
                  className="h-12 w-12 mb-2 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/svg/engl.svg"
                  alt="engl"
                  width={250}
                  height={250}
                  className="h-12 w-12 mb-2 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/svg/dt.svg"
                  alt="dt Icon"
                  width={250}
                  height={250}
                  className="h-12 w-12 mb-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
