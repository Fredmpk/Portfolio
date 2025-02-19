import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export function Bio() {
  const t = useTranslations("Bio");
  return (
    <section className="bg-gradient-to-br from-bluedark to-bluewhite tracking-wider">
      <div className=" flex justify-center bg-bluepull w-full " id="bio">
        <h1 className="tracking-wide text-xl md:text-3xl font-bold text-white py-4 md:py-6 ">
          {t("TitleBio")}
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
            <p className="text-2xl mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {t("Location")}
            </p>
            <p className="text-2xl mb-4">{t("Prof")}</p>
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
            <h2 className="text-2xl font-semibold mb-4">{t("Exp")}</h2>
            <ul className="space-y-2 text-xl">
              <li>{t("FreeLTr")}</li>
              <li className="ml-7 text-lg italic">{t("Languages")}</li>
              <li>{t("FreeLCr")}</li>
            </ul>
          </div>

          <div className="bg-green bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
            <h2 className="text-2xl font-semibold mb-4">{t("Education")}</h2>
            <ul className="space-y-2 text-xl">
              <li>{t("Devhaus")}</li>
              <li>
                {t("Translatology")}
                <p className="text-lg mt-1 ml-7 italic">{t("FieldsTr")}</p>
              </li>
              {t("Afr")}
              <li>
                <p className="text-lg mt-1 ml-7 italic">{t("FieldsAfr")}</p>
              </li>
            </ul>
          </div>

          <div className="bg-footerdarkgreen bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">{t("IntExp")}</h2>
            <ul className="space-y-2 text-xl">
              <li>
                <span role="img" aria-label="Niger Flag">
                  🇳🇪
                </span>{" "}
                {t("Niamey")}
                <p className="text-lg mt-1 ml-7 italic">{t("Soc")}</p>
              </li>
              <li>
                <span role="img" aria-label="Togo Flag">
                  🇹🇬
                </span>{" "}
                {t("Togo")}
              </li>
              <p className="text-lg mt-1 ml-7 italic">{t("TogoWork")}</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
