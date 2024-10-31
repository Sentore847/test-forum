import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { Loader } from "widgets/Loader/Loader";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
  children?: ReactNode;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
