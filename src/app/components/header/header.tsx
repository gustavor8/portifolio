"use client"; // Aviso para habilitar componentes React no Next.js 13+
import { useState, useContext } from "react";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";
import { ScreenSizeContext } from "../../../hooks/screenSize";
import NavList from "../navList/navList";
import "../../globals.css";
import { FaBook, FaHome } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isMobile } = useContext(ScreenSizeContext) || { isMobile: false };

  // Styles
  const basicMenuStyles: string =
    "h-[100vh] max-w-[450px] min-w-[50px] top-0 left-0 bg-gray-800 text-white flex flex-col p-4 overflow-hidden transition-all duration-500 items-center  hover:w-[15vw] ";
  const buttonIconStyles: string = `transition-all duration-500 ease-in-out flex items-center justify-center w-8 h-8 bg-gray-700  hover:bg-gray-500 rounded-full`;
  const buttonThemeStyles: string = `${
    isCollapsed ? "isHidden" : "noHidden "
  } hidden-transition`;
  const arrowStyles: string = isCollapsed ? "rotate-180 " : "rotate-0";
  const navStyles: string = " mr-[7px] w-full  border-t-2 border-gray-500";

  // Função para alternar o estado de colapso
  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const sidebarStyles = isMobile
    ? "w-[50px]"
    : isCollapsed
    ? "w-[50px]"
    : "w-[15vw]";

  return (
    <div className={`${sidebarStyles} ${basicMenuStyles} z-50`}>
      <div className="flex  justify-center h-[30px] mb-3">
        {/* prettier-ignore */}
        <button onClick={toggleSidebar}  className={`${buttonIconStyles} ${arrowStyles} ${isMobile? "hidden" : ""}`}>
          <FaArrowLeft />
        </button>
        {/* prettier-ignore */}
        <button onClick={toggleTheme} className={`ml-4 ${buttonThemeStyles} ${buttonIconStyles} z-50`}>
          {theme === "dark" ? (<FaSun className="w-6 h-6" />) : (<FaMoon className="w-6 h-6" /> )}
        </button>
      </div>

      <nav className={navStyles}>
        <NavList
          title="Sobre Mim"
          icon={<FaHome size={25} />}
          linkItem="#about"
        ></NavList>

        <NavList
          title="Projetos"
          icon={<MdConstruction size={25} />}
          linkItem="#projects"
        ></NavList>
        <NavList
          title="Formação"
          icon={<FaGraduationCap size={25} />}
          linkItem="#formation"
        ></NavList>
        <NavList
          title="Cursos"
          icon={<FaBook size={25} />}
          linkItem="#courses"
        ></NavList>
        {/* <NavList
          title="Experiência"
          icon={<FaBriefcase size={25} />}
          linkItem="#experience"
        ></NavList>
        <ul style={{ listStyle: "none", padding: 0 }}></ul> */}
      </nav>
    </div>
  );
};

export default Header;
