import { classNames } from "shared/lib/classNames/classNames";
import { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = "text",
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <input
        ref={ref}
        className={cls.Input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
});

Input.displayName = "Input";
