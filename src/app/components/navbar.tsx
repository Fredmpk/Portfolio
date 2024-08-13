import React from "react";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white opacity-90 shadow-md z-50">
      <nav className="flex items-center justify-between font-primary font-bold text-lg md:text-2xl tracking-wide m-[4vw] md:m-[3vw] h-[3vw] md:h-[1vw] ">
        <div className="flex items-center">
          <svg
            className="w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] mr-[2vw]"
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
              stroke-opacity="0.76"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <Link href="/#skills">skills</Link>
          </li>
          <li>
            <Link href="/#bio">bio</Link>
          </li>

          <li>
            <Link href="/#projects">projekte</Link>
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
