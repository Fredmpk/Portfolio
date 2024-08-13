// components/Projects.tsx
import Image from "next/image";
import React from "react";

export function Projects() {
  return (
    <section className="projects-container bg-[#343F4F]">
      <div
        className="title__projects flex justify-center bg-transgreen w-full p-[3vw]"
        id="projects"
      >
        <h1 className="tracking-wide text-xl md:text-3xl font-bold">
          PROJEKTE
        </h1>
      </div>
      <div className="cards-container-body flex justify-center items-center ">
        <div className="cards-container flex  flex-col flex-wrap justify-center md:flex-row gap-[2vw]">
          <div className="card bg-introorange rounded-lg p-[2vw] max-w-[90vw] md:max-w-[30vw] md:min-w-20 m-[1vw] flex flex-col gap-[2vw]">
            <h3 className="font-bold text-xl">Mein Bootcamp im Devhaus</h3>
            <Image
              src="/images/devhaus.png"
              alt=""
              width={500}
              height={500}
              className="object-contain max-h-[25vw]"
            />
            <p>
              Im September werde ich meine intensive Weiterbildung beim Devhaus
              Leipzig abschließen, mit dem Ziel, ein Front-End-Entwickler zu
              werden. Während dieses Programms beschäftige ich mich umfassend
              mit den Grundlagen der Front-End-Entwicklung, darunter HTML, CSS,
              JavaScript, TypeScript, React und Next.js. Ich gewinne zudem
              wertvolle Einblicke in Backend-Technologien wie Node.js, Express
              und SQL. Auch wenn es manchmal herausfordernd ist und mein Kopf
              raucht, macht es Spaß und ich sammle wertvolle Erfahrungen. Der
              Kurs umfasst auch wichtige Design-Prinzipien mit UI/UX und Figma,
              und ich erwerbe praktische Kenntnisse in Tools wie Git, Docker,
              Prisma und VS Code. Durch realitätsnahe Team- und Einzelprojekte
              bereite ich mich intensiv auf die Anwendung meiner neuen
              Fähigkeiten vor.
            </p>
          </div>
          <div className="card bg-introorange rounded-lg p-[2vw] max-w-[90vw] md:max-w-[30vw] md:min-w-20 m-[1vw] flex flex-col gap-[2vw]">
            <h3 className="font-bold text-xl">Meine Portfolio-Website</h3>
            <Image
              src="/images/portfolio.png"
              alt=""
              width={500}
              height={500}
              className="object-contain max-h-[25vw]"
            />
            <p>
              Wie ihr seht befindet sich diese Website noch im Aufbau, das ist
              nur die aktuelle Version und es wird noch viel passieren! Ich habe
              vor die Seite mehrsprachig zu gestalten, ein Kontaktformular und
              vielleicht ein Blog einzurichten, ich werde das Design bestimmt
              noch einige Male ändern und auch inhaltlich gibt es bestimmt immer
              etwas was ich doch denke schöner gestalten zu können. Also kommt
              wieder!
            </p>
          </div>
          <div className="card bg-introorange rounded-lg p-[2vw] max-w-[90vw] md:max-w-[30vw] md:min-w-500 m-[1vw] flex flex-col gap-[2vw]">
            <h3 className="font-bold text-xl">
              Meine erste App: WerIstSchuld?
            </h3>
            <Image
              src="/images/weristschuld.jpg"
              alt=""
              width={500}
              height={500}
              className="object-contain max-h-[25vw]"
            />
            <p>
              {/* Zur Übung und auch weil ich das Thema spannend finde, dachte ich,
              dass ich eine App baue, mit der sich Statistiken, die Steuerbetrug
              und Sozialbetrug in Deutschland und vielleicht auch global in ein
              Verhältnis setzen. Schöne nette Animationen, verschiedene
              Einstellungsmöglichkeiten die einem die realen Verhältnisse
              anschaulich machen können. Dazu vielleicht noch diverse
              Beispielrechnungen, was mit dem Geld was reiche Steuerbetrüger dem
              Staat vorenthalten alles machen könnte. */}
              Für mein nächstes Projekt möchte ich mich dem Thema Steuerbetrug
              und Sozialbetrug widmen. Ich plane, eine App zu entwickeln, die
              die offiziellen statistischen Daten zu diesen Themen aufbereitet
              und in Beziehung zueinander setzt. Mithilfe von anschaulichen
              Animationen und interaktiven Funktionen soll den Nutzerinnen und
              Nutzern ein Einblick in die finanziellen Auswirkungen und
              Handlungsmöglichkeiten gegeben werden. Dabei werde ich auch
              Beispielrechnungen zur möglichen Verwendung der durch Steuerbetrug
              entzogenen Mittel für soziale Zwecke einbinden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
