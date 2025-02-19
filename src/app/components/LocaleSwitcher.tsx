import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: "en",
        },
        {
          value: "de",
          label: "de",
        },
        {
          value: "fr",
          label: "fr",
        },
      ]}
      label={"label"}
    />
  );
}
