"use Client";

import "./stylesMain.css";
import Project from "../projectCard/project";
import ProjectProps from "../projectCard/projectType";
import FormationCardTypes from "../formationCard/formationType";
import Formation from "../formationCard/formation";
import About from "../about/about";
// Import Icons
import { FaReact, FaHtml5, FaSass, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BsFiletypeJsx } from "react-icons/bs";
import {
  SiStyledcomponents,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

export default function Main() {
  const stylesMain: string = " h-[100vh] overflow-y-scroll";
  const stylesTitle: string =
    "textShadow flex mb-0 justify-center shadow-lg shadow-[#00000030]  text-[3.5rem] dark:text-white transition-all duration-1000 ease-in-out";
  const stylesSection: string = `bg-gradient-to-r from-gray-500 to-gray-200 dark:bg-gradient-to-r dark:from-[#494949] dark:to-[#494949]  p-3 shadow-lg shadow-[#FF573350] dark:shadow-[#FF573350] mb-1`;

  const projectsJson: ProjectProps[] = [
    {
      name: "Sortear Amigo",
      status: "Finalizado",
      description:
        "Desafio Proposto pela Oracle One: Este projeto foi desenvolvido como parte de um desafio do programa Oracle One. A proposta consistia em criar uma aplicação web interativa de 'Amigo Secreto' usando as tecnologias HTML, CSS e JavaScript, mas com foco na lógica de programção. A aplicação permite que os usuários adicionem nomes a uma lista e, em seguida, sorteiem aleatoriamente um nome para realizar o sorteio do amigo secreto. A interface é simples e funcional, com validação para garantir que o sorteio seja feito apenas após a adição de amigos à lista.",
      tecnology: [
        { name: "JavaScript", icon: <RiJavascriptFill size={25} /> },
        { name: "HTML", icon: <FaHtml5 size={25} /> },
        { name: "CSS", icon: <FaCss3Alt size={25} /> },
      ],
      repository:
        "https://github.com/gustavor8/challenge-amigo-secreto_Oracle_ONE",
      linkExecute:
        "https://gustavor8.github.io/challenge-amigo-secreto_Oracle_ONE/",
    },

    {
      name: "BOOKS VNW",
      status: "Finalizado",
      description:
        "Foi um desafio proposto pelo Vai Na Web no curso de desenvolvimento fullstack. Trata do desafio final do módulo React. A proposta era fazer um sistema básico de doação de livros completamente responsivo usando as tecnologias JavaScript, JSX, HTML, CSS e SASS. Destarte, assim foi feito. Além disso, foi utilizado Vite como gerenciador de projeto.",
      tecnology: [
        { name: "React", icon: <FaReact size={25} /> },
        { name: "JavaScript", icon: <RiJavascriptFill size={25} /> },
        { name: "HTML", icon: <FaHtml5 size={25} /> },
        { name: "JSX", icon: <BsFiletypeJsx size={25} /> },
        { name: "Sass", icon: <FaSass size={25} /> },
      ],
      repository: "https://github.com/gustavor8/booksVNW",
      linkExecute: "https://books-vnw.vercel.app/",
    },
    {
      name: "StudyControl",
      status: "Em Produção",
      description:
        "Assim como o Checkin-On, O projeto trata de um plano piloto para aprender algumas tecnologias. As escolhidas da vez foram TypeScript, Tailwind e Next.js. Além disso, busca atender as necessidades encontradas na organização do aprendizado. Ele está em sua fase inicial, e está sendo desenvolvido em parcerias com o dev e amigo, Gabriel Aguiar. Usamos TSX, tailwind e Next.js",
      tecnology: [
        { name: "TypeScript", icon: <SiTypescript size={25} /> },
        { name: "tailwind", icon: <SiTailwindcss size={25} /> },
        { name: "Next", icon: <SiNextdotjs size={25} /> },
      ],
      repository: "https://github.com/gustavor8/StudyControl",
    },

    {
      name: "October Pink",
      status: "Finalizado",
      description:
        "O projeto trata de um desafio proposto pela plataforma Vai Na Web, no curso de desenvolvimento fullstack. Trata de um layout simples, utilizando apenas HTML, SASS e JavaScript. Além disso, O designer deveria ser responsivo para os diferentes tipos de aparelhis, e assim foi feito.",
      tecnology: [
        { name: "JavaScript", icon: <RiJavascriptFill size={25} /> },
        { name: "HTML", icon: <FaHtml5 size={25} /> },
        { name: "Sass", icon: <FaSass size={25} /> },
      ],
      repository: "https://github.com/gustavor8/challengeOctoberPinkVNW",
      linkExecute: "https://challenge-october-pink-fmver8lxq.vercel.app/",
    },

    {
      name: "CHECKIN-ON",
      status: "Pausado",
      description:
        "Inicei o projeto com o intuito de aprender React, Node e MongoDB. Vale a ressalva que o back-end não está hospedado. Foi projeto piloto para aprendizagem, nele pode se observar muitas interações e possibilidades de melhoria, voltado principalmente para web mobile. Contudo, enfatizo que foi um projeto voltado para apredizagem. Destarte,faz-se necessário refatorar o código. No momento encontra-se pausado, com possibilidade de refatoração e finalização. Utilizei React, MongoDB, StyledComponents, JSX, Nonde, entre outras bases para seu desenvolvimento.",
      tecnology: [
        { name: "React", icon: <FaReact size={25} /> },
        { name: "Node", icon: <FaNodeJs size={25} /> },
        { name: "HTML", icon: <FaHtml5 size={25} /> },
        { name: "Mongo", icon: <SiMongodb size={25} /> },
        { name: "StyledComponents", icon: <SiStyledcomponents size={25} /> },
      ],
      repository: "https://github.com/gustavor8/checkin-on",
      linkExecute: "https://checkin-on.vercel.app/",
    },
    {
      name: "Clínica Ágil",
      status: "Finalizado",
      description:
        "Foi um breve desafio proposto pela Aceleradora Ágil em parceria com a PUC-RS. Em resumo trata de um CRUD sem foco no front-end, apenas para demsontrar as operações básicas com armazenamento no Local Storage. Foi deselvonvida com React, JavaScript e HTML. ",
      tecnology: [
        { name: "React", icon: <FaReact size={25} /> },
        { name: "JavaScript", icon: <RiJavascriptFill size={25} /> },
        { name: "HTML", icon: <FaHtml5 size={25} /> },
      ],
      repository: "https://github.com/gustavor8/clinicaagil",
      linkExecute:
        "https://clinicaagil-eeyzzvm72-gustavo-rodrigues-projects-6b379dbf.vercel.app/",
    },
  ];

  const formationsJson: FormationCardTypes[] = [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      level: "Graduação",
      institution: "Uniasselvi",
      conclusionYear: 2024,
      status: "Concluído",
    },
    {
      course: "Desenvolvimento de Aplicações Web",
      level: "Pós-graduação",
      institution: "Facuminas",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "Big Data e Computação em Nuvem",
      level: "Pós-graduação",
      institution: "Facuminas",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "Ensino de Matemática e Ciências Naturais",
      level: "Pós-graduação",
      institution: "Facuminas",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "Inovações no Ensino de Matemática",
      level: "Pós-graduação",
      institution: "Unicesumar",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "Licenciatura em Matemática",
      level: "Graduação",
      institution: "Unicesumar",
      conclusionYear: 2021,
      status: "Concluído",
    },
    {
      course: "Redes de Computadores",
      level: "Técnico",
      institution: "EEEP Rita Aguiar Barbosa",
      conclusionYear: 2018,
      status: "Concluído",
    },
  ];
  const coursesJson: FormationCardTypes[] = [
    {
      course: "Programador Web",
      institution:
        "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "HTML e CSS na Prática",
      institution: "Fundação Bradesco",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "CC50: Introdução à Ciência da Computação",
      institution: "Fundação Estudar",
      conclusionYear: 2023,
      status: "Concluído",
    },
    {
      course: "Cabeamento Estruturado",
      institution: "EAD CCNA",
      conclusionYear: 2018,
      status: "Concluído",
    },
    {
      course: "Python Básico",
      institution: "Solyd Treinamentos",
      conclusionYear: 2018,
      status: "Concluído",
    },
    {
      course: "Introdução à Programação de Jogos em Python",
      institution: "LabTIME/UFG",
      conclusionYear: 2017,
      status: "Concluído",
    },
  ];

  return (
    <div className={`${stylesMain}`}>
      {/*Section Sobre */}
      <section
        id="about"
        className={`home h-[100vh] shadow-md shadow-[#FF5733]`}
      >
        <About />
      </section>

      {/* Section Projects */}
      <section id="projects" className={stylesSection}>
        <h1 className={`${stylesTitle}`}>Projetos</h1>

        <div className="flex items-center justify-center p-[1rem] flex-wrap gap-4">
          {projectsJson.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              status={project.status}
              linkExecute={project.linkExecute}
              tecnology={project.tecnology}
              description={project.description}
              repository={project.repository}
            />
          ))}
        </div>
      </section>

      {/* Section Formation */}
      <section id="formation" className={` ${stylesSection}`}>
        <h1 className={stylesTitle}>Formação</h1>
        <div className="flex items-center justify-center p-[1rem] flex-wrap gap-4">
          {formationsJson.map((formation, index) => (
            <Formation
              key={index}
              course={formation.course}
              level={formation.level}
              institution={formation.institution}
              conclusionYear={formation.conclusionYear}
              status={formation.status}
            />
          ))}
        </div>
      </section>
      {/* Section Courses */}
      <section id="courses" className={` ${stylesSection}`}>
        <h1 className={stylesTitle}>Cursos</h1>
        <div className="flex items-center justify-center p-[1rem] flex-wrap gap-4">
          {coursesJson.map((formation, index) => (
            <Formation
              key={index}
              course={formation.course}
              level={formation.level}
              institution={formation.institution}
              conclusionYear={formation.conclusionYear}
              status={formation.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
