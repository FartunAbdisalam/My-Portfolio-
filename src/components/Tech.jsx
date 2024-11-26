import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTypescript,
  BiLogoGithub,
} from "react-icons/bi";
import {
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Tech = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div>
          <SiMongodb
            className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Mongodb"
          />
        </div>
        <div>
          <SiExpress
            className="cursor-pointer text-[80px] text-black bg-green-300 rounded-full transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] p-5"
            title="Express Js"
          />
        </div>
        <div>
          <FaReact
            className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="React"
          />
        </div>
        <div>
          <BiLogoNodejs
            className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Node Js"
          />
        </div>
        <div>
          <BiLogoTypescript
            className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="TypeScript"
          />
        </div>
        <div>
          <BiLogoJavascript
            className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="JavaScript"
          />
        </div>
        <div>
          <RiTailwindCssFill
            className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Tailwind CSS"
          />
        </div>
        <div>
          <FaBootstrap
            className="cursor-pointer text-[80px] text-sky-600  transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Bootstrap"
          />
        </div>
        <div>
          <FaGitAlt
            className="cursor-pointer text-[80px] text-orange-600  transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Git"
          />
        </div>
        <div>
          <BiLogoGithub
            className="cursor-pointer text-[80px] text-slate-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="GitHub"
          />
        </div>
        <div>
          <SiPostman
            className="cursor-pointer text-[80px] text-orange-500  transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="Postman"
          />
        </div>
        <div>
          <SiMysql
            className="cursor-pointer text-[80px] bg-sky-700 text-white rounded-xl p-4  transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="MySQL"
          />
        </div>
        <div>
          <FaHtml5
            className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="HTML5"
          />
        </div>
        <div>
          <FaCss3Alt
            className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px] "
            title="CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;
