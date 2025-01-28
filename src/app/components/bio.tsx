import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Bio() {
  return (
    <section className="bg-gradient-to-br from-bluedark to-bluewhite ">
      <div className=" flex justify-center bg-bluepull w-full " id="bio">
        <h1 className="tracking-wide text-xl md:text-3xl font-bold text-white py-4 md:py-6 ">
          BIO
        </h1>
      </div>
      <div className="container mx-auto p-4 text-white">
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
              <FaMapMarkerAlt className="mr-2" /> Leipzig, Germany
            </p>
            <p className="text-lg mb-4">Web Developer | Translator </p>
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
              Professional Experiences
            </h2>
            <ul className="space-y-2">
              <li>🌐 Freelance Translator since 2022</li>
              <li>(French - German / English-German)</li>
              <li>🛠️ Freelance Craftsman since 2016</li>
            </ul>
          </div>
          <div className="bg-green bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="space-y-2">
              <li>🚀 Frontend Developer - Devhaus Leipzig | 2024</li>
              <li>
                🎓 M.A. Translatology - Universität Leipzig | 2018-2022
                <p className="text-sm mt-1">
                  Fields: Law, Medicine, Business, Tourism and Linguistics
                </p>
              </li>

              <li>
                🎓 B.A. African Studies - Universität Leipzig | 2013-2018
                <p className="text-sm mt-1">
                  Fields: Haussa, Language, Culture, Media, Social Structures,
                  Politics and Economy
                </p>
              </li>
            </ul>
          </div>
          <div className="bg-footerdarkgreen bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              International Experiences
            </h2>
            <ul className="space-y-2">
              <li>
                <span role="img" aria-label="Niger Flagge">
                  🇳🇪
                </span>
                Semester Abroad - Université Abdou Moumouni, Niger | 2015/2016
                <p className="text-sm mt-1">Sociology und Haussa course</p>
              </li>
              <li>
                <span role="img" aria-label="Togo Flagge">
                  🇹🇬
                </span>
                Volunteer work - Collège Protestant, Kpalimé, Togo | 2012/2013
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
