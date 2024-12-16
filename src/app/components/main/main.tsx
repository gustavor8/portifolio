import "./stylesMain.css";
import Project from "../project/project";
import ProjectProps from "../project/projectType";

// Import Icons
import { FaReact, FaHtml5, FaSass, FaNodeJs } from "react-icons/fa";
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
  const stylesMain: string = "h-[100vh] overflow-y-scroll";
  const projectsJson: ProjectProps[] = [
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

  return (
    <div className={`${stylesMain}`}>
      {/*Section Sobre */}
      <section
        id="about"
        className={`home h-[100vh] shadow-md shadow-[#FF5733] `}
      ></section>
      {/* Section Projects */}
      <section
        id="projects"
        className={`bg-gradient-to-r from-gray-500 to-gray-200 dark:bg-gradient-to-r dark:from-[#494949] dark:to-[#494949] `}
      >
        <h1 className=" textShadow flex mb-0 justify-center shadow-lg  text-[5rem] dark:text-white transition-all duration-1000 ease-in-out">
          <span className="">Projetos</span>
        </h1>

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
            ></Project>
          ))}
        </div>
      </section>
    </div>
  );
}
