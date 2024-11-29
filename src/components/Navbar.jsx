import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-grey-700 bg-black/70 px-16 py-5 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Fartun
      </a>
      <ul className="hidden md:flex gap-10">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            key={index}
          >
            <li>{item.label}</li>
          </a>
        ))}
      </ul>

      <ul className="hidden md:flex gap-5">
        <a
          href="#"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
        >
          <li>
            <FaGithub />
          </li>
        </a>
        <a
          href="#"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
        >
          <li>
            <BsLinkedin />
          </li>
        </a>
        <a
          href="#"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
        >
          <li>
            <FaFacebookSquare />
          </li>
        </a>
      </ul>

      {isOpen ? (
        <IoMdClose className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <FiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                key={index}
              >
                <li>{item.label}</li>
              </a>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-5">
            <a
              href="#"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
            >
              <li>
                <FaGithub />
              </li>
            </a>
            <a
              href="#"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
            >
              <li>
                <BsLinkedin />
              </li>
            </a>
            <a
              href="#"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"
            >
              <li>
                <FaFacebookSquare />
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
