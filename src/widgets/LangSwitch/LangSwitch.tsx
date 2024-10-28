import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./LangSwitch.module.scss";

interface LangSwitchProps {
  className?: string;
  children?: ReactNode;
}

export const LangSwitch = ({ className }: LangSwitchProps) => {
  const { t, i18n } = useTranslation("translation");
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };
  return (
    <div>
      <Button
        className={classNames(cls.LangSwitch, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {String(t("Language"))}
      </Button>
    </div>
  );
};
