import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, useState } from "react";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
