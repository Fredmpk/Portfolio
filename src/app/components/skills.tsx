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

export function Skills() {
  return (
    <section className="">
      <div id="skills" className="absolute top-[11vw] md:top-[12vw]"></div>
      <div className="flex bg-skillsorange p-[3vw] justify-center">
        <h1 className="font-bold tracking-wide text-xl md:text-3xl">SKILLS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 w-full">
        <div
          className="py-[4vw] px-[5vw] md:row-start-1 md:col-start-1 md:col-span-2 bg-webbrightgreen order-1"
          id="webdev"
        >
          <h2 className="pl-[3vw] font-bold tracking-wide text-lg md:text-xl">
            WEBENTWICKLUNG
          </h2>
          <p className="py-[6vw] text-base md:text-lg lg:text-xl">
            Momentan befinde ich mich mitten in meiner Ausbildung zum
            Frontend-Entwickler bei Devhaus und bin begeistert von der Welt der
            Websites und Apps. Neben meiner Ausbildung arbeite ich bereits an
            eigenen Projekten, um mein Wissen zu vertiefen und praktische
            Erfahrungen zu sammeln. Meine Neugier kennt keine Grenzen, und ich
            bin ständig auf der Suche nach neuen Technologien und
            Lernmöglichkeiten, um meine Fähigkeiten weiter zu verbessern.
          </p>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-[3vw] mt-4 text-base md:text-lg">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHtml5}
                className="h-12 w-12 text-orange-500 mb-2"
              />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="h-12 w-12 text-blue-500 mb-2"
              />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faJsSquare}
                className="h-12 w-12 text-yellow-500 mb-2"
              />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/svg/ts.svg"
                alt="Trados Icon"
                width={150}
                height={150}
                className="h-12 w-12 mb-2"
              />
              <span>TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faReact}
                className="h-12 w-12 text-blue-400 mb-2"
              />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="h-12 w-12 text-green-500 mb-2"
              />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/svg/sql.svg"
                alt="Trados Icon"
                width={150}
                height={150}
                className="h-12 w-12 mb-2"
              />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/svg/vscode.svg"
                alt="Trados Icon"
                width={150}
                height={150}
                className="h-12 w-12 mb-2"
              />
              <span>VS Code</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faGit}
                className="h-12 w-12 text-orange-600 mb-2"
              />
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faDocker}
                className="h-12 w-12 text-blue-700 mb-2"
              />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/svg/prisma.svg"
                alt="Trados Icon"
                width={150}
                height={150}
                className="h-12 w-12 mb-2"
              />
              <span>Prisma</span>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faFigma}
                className="h-12 w-12 text-purple-500 mb-2"
              />
              <span>Figma</span>
            </div>
          </div>
        </div>
        <div className="md:row-start-1 md:col-start-3 order-2">
          <Image
            src="/images/web.png"
            alt="Arbeitsplatz mit Computer in schöner Natur"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:row-start-2 md:col-start-1 order-4 md:order-3">
          <Image
            src="/images/uebersetzung.png"
            alt="Frederik König hält seine Masterarbeit Übersetzungswissenschaften in die Kamera"
            width={1500}
            height={1500}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="py-[4vw] px-[5vw] md:row-start-2 md:col-start-2 md:col-span-2 bg-transgreen order-3 md:order-4"
          id="translation"
        >
          <h2 className="p-[3vw] font-bold tracking-wide text-lg md:text-xl">
            ÜBERSETZUNGEN
          </h2>
          <div className="flex flex-col justify-center gap-[3vw]">
            <p className="text-base md:text-lg lg:text-xl">
              Ich spezialisiere mich auf präzise Übersetzungen zwischen Deutsch,
              Französisch und Englisch. Mit meinem erfolgreich abgeschlossenen
              Masterstudium in Translatologie bringe ich fundiertes Fachwissen
              und ein tiefes Verständnis für sprachliche Feinheiten mit.
              Zusätzlich habe ich wertvolle Erfahrungen als freier Übersetzer
              gesammelt und im Ausland gelebt, unter anderem in Togo und Niger.
              Diese internationalen Erfahrungen und meine zahlreichen Reisen
              haben mir nicht nur sprachliche, sondern auch bedeutende
              kulturelle Kompetenzen vermittelt.
            </p>
            <div className="grid grid-cols-5 gap-[3vw] mt-4 text-base">
              <div className="flex flex-col items-center">
                <Image
                  src="/svg/trados.svg"
                  alt="Trados Icon"
                  width={250}
                  height={250}
                  className="h-12 w-12 mb-2 rounded-full"
                />
              </div>
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
