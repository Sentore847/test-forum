import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import React, { Suspense } from "react";
import "./styles/index.scss";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <span onClick={toggleTheme}>
        {theme === Theme.DARK ? <MdLightMode /> : <MdDarkMode />}
      </span>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
