import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Bio() {
  return (
    <section className="bg-gradient-to-br from-handyellow to-introorange pb-5 ">
      <div
        className="title__projects flex justify-center bg-green w-full p-[3vw] mb-[3vw]"
        id="bio"
      >
        <h1 className="tracking-wide text-xl md:text-3xl font-bold">BIO</h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/fotoshoot-bio.jpg"
              alt="Frederik König"
              width={300}
              height={300}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold mb-2">Frederik König</h1>
            <p className="text-xl mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Leipzig, Deutschland
            </p>
            <p className="text-lg mb-4">Frontend-Entwickler | Übersetzer</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Fredmpk"
                passHref
                legacyBehavior
                className="hover:text-gray-300"
              >
                <a target="_blank">
                  <FaGithub size={24} />
                </a>
              </Link>
              <Link
                href="https://www.linkedin.com/in/frederik-k%C3%B6nig-161161161161161161161"
                passHref
                legacyBehavior
                className=" hover:text-gray-300"
              >
                <a target="_blank">
                  <FaLinkedin size={24} />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-transgreen bg-opacity-20 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Beruflicher Werdegang
            </h2>
            <ul className="space-y-2">
              <li>
                🌐 Freiberuflicher Übersetzer
                (Französisch-Deutsch/Englisch-Deutsch)
              </li>
              <li>🛠️ Selbstständiger Handwerker/Monteur</li>
            </ul>
          </div>
          <div className="bg-green bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-4">Bildung</h2>
            <ul className="space-y-2">
              <li>🚀 Frontend-Entwickler (in Ausbildung) - Devhaus Leipzig</li>
              <li>
                🎓 M.A. Translatologie - Universität Leipzig
                <p className="text-sm mt-1">
                  Schwerpunkte: Jura, Medizin, Wirtschaft, Tourismus, Linguistik
                </p>
              </li>

              <li>
                🎓 B.A. Afrikastudien - Universität Leipzig
                <p className="text-sm mt-1">
                  Schwerpunkte: Hausa, Sprache und Kultur, Medien und Soziale
                  Strukturen, Politik und Wirtschaft
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-footerdarkgreen bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Internationale Erfahrung
            </h2>
            <ul className="space-y-2">
              <li>
                <span role="img" aria-label="Niger Flagge">
                  🇳🇪
                </span>
                Auslandssemester - Université Abdou Moumouni, Niger
                <p className="text-sm mt-1">Soziologie und Hausasprachkurs</p>
              </li>
              <li>
                <span role="img" aria-label="Togo Flagge">
                  🇹🇬
                </span>
                Freiwilligendienst - Collège Protestant, Kpalimé, Togo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
