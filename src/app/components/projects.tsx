// components/Projects.tsx

import { Carousel } from "./projects-carousel";

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
      <Carousel />
    </section>
  );
}

export default Projects;
