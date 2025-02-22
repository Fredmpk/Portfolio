import React from "react";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50">
      <nav className="flex items-center justify-between font-primary font-bold text-lg md:text-2xl tracking-wide mx-4 md:my-4 h-12 md:h-16">
        <div className="flex items-center">
          <svg
            className="w-10 h-10 md:w-16 md:h-16 mr-4"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z"
              fill="white"
            />
            <path
              d="M48.5001 93L46.5001 73.5M44.5001 54L18.0001 61.5L11 31L34 43L44.5001 18L51.5001 40L72.5001 8V48.5L44.5001 54ZM44.5001 54L46.5001 73.5M46.5001 73.5L34.0001 78L61.5001 67.5"
              stroke="black"
              strokeOpacity="0.76"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="/" className=" md:ml-4">
            FREDERIK KÖNIG
          </Link>
        </div>
        <ul
          className="items-center gap-4 md:gap-9 hidden md:flex"
          id="navbar__right"
        >
          <li>
            <LocaleSwitcher />
          </li>
          <li>
            <Link href="/#skills">{t("skills")}</Link>
          </li>
          <li>
            <Link href="/#bio">{t("bio")}</Link>
          </li>

          <li>
            <Link href="/#projects">{t("projects")}</Link>
          </li>
          {/* <li>
            <a href="#">kontakt</a>
          </li> */}
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  );
}
