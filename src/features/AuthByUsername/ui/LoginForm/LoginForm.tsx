import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation("translation");
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <span className={cls.loginFormTitle}>Login Form</span>
      <Input
        autofocus
        placeholder={String(t("username"))}
        type="text"
        className={cls.input}
      />
      <Input
        placeholder={String(t("password"))}
        type="password"
        className={cls.input}
      />
      <Button className={cls.loginBtn}>{String(t("Login"))}</Button>
    </div>
  );
};
