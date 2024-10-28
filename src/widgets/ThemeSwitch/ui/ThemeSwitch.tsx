import { ReactNode } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import cls from "./ThemeSwitch.module.scss";

interface ThemeSwitchProps {
  className?: string;
  children?: ReactNode;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cls.btn} onClick={toggleTheme}>
      {theme === Theme.DARK ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};
