import { Bio } from "./components/bio";
import { Footer } from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ScrollToTopButton from "./components/scroll-to-top-button";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="skills" className="overflow-hidden">
          <Skills />
        </section>
        <section id="bio">
          <Bio />
        </section>

        <section id="projects">
          <Projects />
        </section>

        {/*<section id="contact"><Contact /></section>  */}
      </main>
      <ScrollToTopButton />
    </>
  );
}
