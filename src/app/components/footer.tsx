import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row bg-bluedark align-center items-center justify-between py-[3vw] px-[2vw] text-white font-sm sm:font-base font-bold gap-[2vw] sm:gap-0">
      <ul className="flex gap-[3vw]">
        <li>
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/datenschutz">
            Datenschutz
          </a>
        </li>
      </ul>
      <ul className="flex gap-[3vw]">
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
      <div className="mail flex items-center">
        <FaEnvelope className="mr-2" />
        <a
          href="mailto:frederik.koenig@posteo.de"
          className=" hover:text-blue-800 hover:underline"
        >
          frederik.koenig@posteo.de
        </a>
      </div>
    </footer>
  );
}
