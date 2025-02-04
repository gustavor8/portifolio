"use client";
import "./aboutStyles.css";
import Image from "next/image";
import photoGus from "../../../../public/Assets/img/photoGus2.png";
import { useContext } from "react";
import { ScreenSizeContext } from "../../../hooks/screenSize";

export default function About() {
  const { isMobile } = useContext(ScreenSizeContext) || { isMobile: false };
  const styleAbout: string = `flex justify-center items-center ${
    isMobile ? "ml-[55px] flex-col" : "w-[45%]"
  }`;

  return (
    <div
      className={`flex justify-evenly items-center relative z-20 h-full overflow-hidden ${
        isMobile ? "flex-col-reverse" : ""
      }`}
    >
      <div className={`${styleAbout} `}>
        <h1
          className={`p-[1em] text-wrap text-center rounded-lg bg-[#e0e0e02a] dark:bg-[#E0E0E033] 
      w-[95%] max-h-[97%] text-white textShadow transition-colors duration-500 
      ease-in-out overflow-y-auto overflow-hidden 
      ${isMobile ? "text-[1em] ml-[-55px]" : "text-[1.4rem]"}`}
        >
          <span
            className={`block w-full text-orange-500 textShadow ${
              isMobile ? "text-[1.1em]" : "text-[1.6em]"
            }`}
          >
            Bem-vindo ao meu portfólio!
          </span>
          Sou um profissional apaixonado por tecnologia e inovação! Estou sempre
          em busca de novos desafios e oportunidades para crescer e aprender.
          Carrego comigo o sonho de me tornar um grande e renomado
          desenvolvedor. Neste portfólio, você encontrará uma seleção dos meus
          projetos mais recentes, que refletem minha dedicação e o meu
          comprometimento em entregar soluções criativas e funcionais. Meu
          objetivo é não apenas resolver problemas, mas também transformar
          ideias em realidade de forma eficaz e impactante.
        </h1>
      </div>
      <div
        className={`h-[80vh] w-[40%] overflow-hidden flex justify-center ${
          isMobile ? "h-[45vh] w-full max-w-[280]" : "max-w-[370]"
        }`}
      >
        <Image
          className="imgFloat  "
          src={photoGus}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
