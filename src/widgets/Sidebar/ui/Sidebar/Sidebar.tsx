import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, useState } from "react";
import { Button } from "shared/ui/Button/Button";
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
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
    </div>
  );
};
