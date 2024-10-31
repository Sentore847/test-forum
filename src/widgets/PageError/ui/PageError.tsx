import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
  children?: ReactNode;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{String(t("Unexpected Error"))}</p>
      <Button onClick={reloadPage}>{String(t("Reload Page"))}</Button>
    </div>
  );
};
