import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <span onClick={toggleTheme}>
        {theme === Theme.DARK ? <MdLightMode /> : <MdDarkMode />}
      </span>
    </div>
  );
};

export default App;
