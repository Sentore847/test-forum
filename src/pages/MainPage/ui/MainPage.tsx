import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation("main");
  return <div>{String(t("Main Page"))}</div>;
}
