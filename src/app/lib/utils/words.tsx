import { useTranslations } from "next-intl";

const useTypewriterWords = () => {
  const t = useTranslations("Words");

  const commonClassName = "text-lg lg:text-2xl text-white italic font-normal";

  const wordsOne = [
    { text: t("hi"), className: commonClassName },
    { text: t("im"), className: commonClassName },
    { text: t("bin"), className: commonClassName },
    { text: t("fred"), className: commonClassName },
    { text: t("an"), className: commonClassName },
    { text: t("aspiring"), className: commonClassName },
    { text: t("frontend"), className: commonClassName },
    { text: t("developer"), className: commonClassName },
    { text: t("herbe"), className: commonClassName },
  ];

  const wordsTwo = [
    { text: t("i"), className: commonClassName },
    { text: t("studied"), className: commonClassName },
    { text: t("translation"), className: commonClassName },
    { text: t("studiert"), className: commonClassName },
    { text: t("and"), className: commonClassName },
    { text: t("then"), className: commonClassName },
    { text: t("found"), className: commonClassName },
    { text: t("my"), className: commonClassName },
    { text: t("passion"), className: commonClassName },
    { text: t("for1"), className: commonClassName },
    { text: t("le"), className: commonClassName },
    { text: t("coding"), className: commonClassName },
  ];

  const wordsThree = [
    { text: t("now"), className: commonClassName },
    { text: t("im2"), className: commonClassName }, // Using im2 to differentiate from the first "I'm"
    { text: t("looking"), className: commonClassName },
    { text: t("for2"), className: commonClassName },
    { text: t("a"), className: commonClassName },
    { text: t("fulfilling"), className: commonClassName },
    { text: t("job"), className: commonClassName },
    { text: t("to"), className: commonClassName },
    { text: t("combine"), className: commonClassName },
    { text: t("zu"), className: commonClassName },
    { text: t("both"), className: commonClassName },
  ];

  return { wordsOne, wordsTwo, wordsThree };
};

export default useTypewriterWords;
