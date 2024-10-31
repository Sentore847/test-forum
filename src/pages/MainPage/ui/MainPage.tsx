import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation("main");
  return (
    <div>
      <BugButton />
      {String(t("Main Page"))}
    </div>
  );
}
