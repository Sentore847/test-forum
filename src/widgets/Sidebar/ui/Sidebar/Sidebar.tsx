import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode, useState } from "react";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { MdHome } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
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
      <Button
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.link}
        >
          <MdHome className={cls.sidebarIcon} />
          {!collapsed && <span>Main</span>}
        </AppLink>
        <AppLink
          className={cls.link}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <IoIosListBox className={cls.sidebarIcon} />
          {!collapsed && <span>About</span>}
        </AppLink>
      </div>
    </div>
  );
};
