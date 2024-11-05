import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch/LangSwitch";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitch />
      <LangSwitch className={cls.lang} />
    </div>
  );
}
