// import { title } from "process";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import NavListProps from "./navListType";

const NavList: React.FC<NavListProps> = ({ title, icon, links, linkItem }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState<string>("");

  //styles
  const buttonIconStyles: string = `p-1 transition-all duration-500 ease-in-out flex items-center justify-center w-9 h-9 mr-[10px] hover:rounded-full `;
  const ulNavStyles: string = `overflow-hidden transition-all duration-500 ease-in-out transform cursor-pointer  ${
    isVisible
      ? "max-h-[500px] opacity-100 translate-y-0 bg-gray-700"
      : "max-h-0 opacity-0 translate-y-[-20px]"
  }`;
  const itemStyles: string =
    "flex flex-start hover:bg-black p-1 cursor-pointer rounded-[10px] transition-colors duration-400 ease-in-out overflow-hidden w-full";
  const subItemStyles: string =
    "flex justify-between items-center hover:bg-gray-600 p-1 rounded-[10px]";

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Estado para controlar a visibilidade
  const elementRef = useRef<HTMLDivElement>(null); // Referência para o elemento que será observado

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Função de callback que será chamada quando o tamanho do elemento mudar
    const handleResize = () => {
      const width = element.clientWidth;
      setIsHidden(width == 50 ? "isHidden" : "noHidden");
    };

    // Instanciando o ResizeObserver
    const resizeObserver = new ResizeObserver(handleResize);

    // Observando o elemento
    resizeObserver.observe(element);

    // Limpeza do observer quando o componente for desmontado
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className=" mt-2 min-w-[50px] bg-gray-900 rounded-[10px] ">
      <div
        ref={elementRef}
        tabIndex={0}
        className={itemStyles}
        onClick={toggleVisibility}
      >
        {linkItem ? (
          <a href={linkItem} className={`w-[90%] flex items-center `}>
            <button className={buttonIconStyles}>{icon}</button>
            <h1 className="text-lg font-bold ">{title}</h1>
          </a>
        ) : (
          <>
            <button className={buttonIconStyles}>{icon}</button>
            <h1 className="text-lg font-bold ">{title}</h1>
          </>
        )}

        <span
          className={`transform transition-transform ${
            isVisible ? "rotate-180" : "rotate-0"
          } ${links ? "" : "invisible"}`}
        >
          <FaArrowDown />
        </span>
      </div>

      {/* Lista de navegação */}
      <ul className={`${ulNavStyles} ${isHidden} `}>
        {links?.map((link, index) => (
          <li key={index} className={subItemStyles}>
            <a href={link.href} className="text-white hover:text-blue-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
