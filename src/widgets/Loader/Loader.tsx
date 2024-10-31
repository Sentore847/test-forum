import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
  children?: ReactNode;
}

export const Loader = ({ className }: LoaderProps) => {
  return <span className={classNames(cls.Loader, {}, [className])}></span>;
};
