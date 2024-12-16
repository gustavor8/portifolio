import ProjectProps from "./projectType";
import { useState } from "react";
import Popup from "../popup/popup";

export default function Project({
  name,
  status,
  description,
  tecnology,
  linkExecute,
  repository,
}: ProjectProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  let statusInfoStyle: string;
  switch (status) {
    case "Finalizado":
      statusInfoStyle = "bg-green-500";
      break;
    case "Em Produção":
      statusInfoStyle = "bg-yellow-500 ";
      break;
    case "Pausado":
      statusInfoStyle = "bg-orange-500";
      break;
    default:
      statusInfoStyle = "b";
      break;
  }
  const stylesLinks =
    "bg-gray-300 g p-1 rounded-md hover:bg-blue-400 transition-all ease-in-out duration-300 dark:bg-gray-600 dark:hover:bg-black dark:text-white cursor-pointer shadow-md shadow-[#00000080] text-center  ";

  return (
    <article className="h-[16rem] w-[12rem] p-[0.5rem] flex flex-row items-center justify-center rounded-[10px] shadow-md shadow-[#FF5733] bg-slate-400  dark:bg-slate-800 flex-wrap dark:text-white transition-colors duration-300 ease-in-out overflow-y-auto">
      <h2 className="font-bold text-center leading-none">
        {name.toUpperCase()}
      </h2>
      <div className="flex  gap-1">
        {tecnology.map((tech, index) => (
          <span key={index}>{tech.icon}</span>
        ))}
      </div>
      <h3 className="w-full text-center">
        Status:{" "}
        <span className={`${statusInfoStyle} p-1 rounded-md`}>{status}</span>
      </h3>
      <div className="flex flex-col gap-2 ">
        {linkExecute ? (
          <a
            href={linkExecute}
            target="_blank"
            rel="noopener noreferrer"
            className={stylesLinks}
          >
            Executar
          </a>
        ) : (
          ""
        )}
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className={stylesLinks}
        >
          Repositório
        </a>
        <button onClick={togglePopup} className={stylesLinks}>
          Descrição
        </button>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={togglePopup}
        title={name}
        content={description}
      />
    </article>
  );
}
