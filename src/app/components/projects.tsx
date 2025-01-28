// components/Projects.tsx

import { Carousel } from "./projects-carousel";

export function Projects() {
  return (
    <section className="projects-container bg-bluebright tracking-widest">
      <div
        className="flex justify-center bg-bluepull w-full p-[3vw]"
        id="projects"
      >
        <h1 className="tracking-wide text-xl md:text-3xl text-white font-bold">
          PROJEKTE
        </h1>
      </div>
      <Carousel />
    </section>
  );
}

export default Projects;
