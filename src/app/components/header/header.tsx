"use client"; // Aviso para habilitar componentes React no Next.js 13+
import { useState } from "react"; // Importando useState
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa"; // Ícones de seta
import { useDarkMode } from "@/hooks/useDarkMode";
import NavList from "../navList/navList";
import "../../globals.css";
import { FaInfoCircle } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para controlar se o menu está colapsado

  // Styles
  const basicMenuStyles: string =
    "h-[100vh] max-w-[450px] top-0 left-0 bg-gray-800 text-white flex flex-col p-4 overflow-hidden transition-all duration-500 items-center  hover:w-[15vw] ";
  const sidebarStyles: string = isCollapsed ? "w-[50px] " : "w-[15vw]"; // Reduzindo a largura para 5vw (aproximadamente 20px)
  const buttonIconStyles: string = `transition-all duration-500 ease-in-out flex items-center justify-center w-8 h-8 bg-gray-700  hover:bg-gray-500 rounded-full`;
  const buttonThemeStyles: string = `${
    isCollapsed ? "isHidden" : "noHidden "
  } hidden-transition`;
  const arrowStyles: string = isCollapsed ? "rotate-180 " : "rotate-0";
  const navStyles: string = "w-full  border-t-2 border-gray-500  ";

  // Função para alternar o estado de colapso
  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`${sidebarStyles} ${basicMenuStyles}`}>
      <div className="flex  justify-center h-[30px] mb-3">
        {/* prettier-ignore */}
        <button onClick={toggleSidebar}  className={`${buttonIconStyles} ${arrowStyles}`}>
          <FaArrowLeft />
        </button>
        {/* prettier-ignore */}
        <button onClick={toggleTheme} className={`ml-4 ${buttonThemeStyles} ${buttonIconStyles} `}>
          {theme === "dark" ? (<FaSun className="w-6 h-6" />) : (<FaMoon className="w-6 h-6" /> )}
        </button>
      </div>

      <nav className={navStyles}>
        <NavList
          title="About"
          icon={<FaInfoCircle size={25} />}
          linkItem="#about"
        ></NavList>

        <NavList
          title="Projects"
          icon={<MdConstruction size={25} />}
          // links={[
          //   { href: "teste", label: "teste" },
          //   { href: "teste2", label: "teste2" },
          // ]}
          linkItem="#projects"
        ></NavList>

        <NavList
          title="Projects"
          icon={<MdConstruction size={25} />}
          linkItem="#projects"
        ></NavList>
        <ul style={{ listStyle: "none", padding: 0 }}></ul>
      </nav>
    </div>
  );
};

export default Header;
