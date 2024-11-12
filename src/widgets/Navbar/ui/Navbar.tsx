import { ThemeSwitch } from "widgets/ThemeSwitch";
import { LangSwitch } from "widgets/LangSwitch/LangSwitch";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {String(t("Login"))}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {String(t("IS MODAL WINDOW"))}
      </Modal>

      <ThemeSwitch />
      <LangSwitch className={cls.lang} />
    </div>
  );
}
