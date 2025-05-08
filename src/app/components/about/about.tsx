"use client";
import "./aboutStyles.css";
import Image from "next/image";
import photoGus from "../../../../public/Assets/img/photoGus2.png";
import { useContext } from "react";
import { ScreenSizeContext } from "../../../hooks/screenSize";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function About() {
  const { isMobile } = useContext(ScreenSizeContext) || { isMobile: false };
  const styleAbout: string = `flex justify-center items-center h-[98%] ${
    isMobile ? "ml-[55px] flex-col " : "w-[45%] "
  }`;
  const styleContact: string =
    "list-none m-0 p-0 relative after:content-[''] after:absolute after:bottom-[-4px]  after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full";
  const styleContactIcon: string =
    " text-white hover:text-blue-400 hover:scale-110  transition-transform duration-300 ease-in-out";

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
          Atuo como desenvolvedor Full Stack com formação em Análise e
          Desenvolvimento de Sistemas e especializações em Desenvolvimento Web,
          Big Data & Cloud Computing. Tenho experiência com HTML, CSS,
          JavaScript, React, Node.js, Python e Angular, além de conhecimentos em
          redes e suporte técnico. Atualmente, trabalho com suporte operacional
          de hardware e software, lidando com atendimento a usuários, manutenção
          de redes e infraestrutura de TI. Minha trajetória também inclui
          experiência em telecomunicações e monitoramento de redes.
        </h1>
      </div>

      <div
        className={`flex flex-col justify-center items-center overflow-hidden  ${
          isMobile ? "h-[45vh] w-[60%] " : "max-w-[370px]"
        }`}
      >
        <Image
          className="imgFloat h-[80%] w-auto"
          src={photoGus}
          alt="Picture of the author"
        />
        <ul className="flex justify-center items-center p-2 gap-[1.5rem] mt-[-50px] z-0 bg-[#e0e0e02a] dark:bg-[#E0E0E033] rounded-lg w-[95%] max-h-[97%]">
          <li className={styleContact}>
            <a href="https://github.com/gustavor8/" target="_blank">
              <FaGithub size={40} className={styleContactIcon}>
                {" "}
              </FaGithub>
            </a>
          </li>
          <li className={styleContact}>
            <a href="https://www.linkedin.com/in/gustavo-r8/" target="_blank">
              <FaLinkedin size={40} className={styleContactIcon}>
                {" "}
              </FaLinkedin>
            </a>
          </li>
          <li className={styleContact}>
            <a href="https://w.app/58gdqm" target="_blank">
              <FaWhatsapp size={40} className={styleContactIcon}>
                {" "}
              </FaWhatsapp>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
