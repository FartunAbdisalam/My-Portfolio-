// import { MdOutlineEmail } from "react-icons/md";
// import { FaLink } from "react-icons/fa";

// const contactsInfo = [
//   {
//     icon: <FiMail size={28} />,
//     info: "fartunabdisalam10@gmail.com",
//   },
//   {
//     icon: <FaLink size={28} />,
//     info: "Linkedln",
//   },
// ];
const Contact = () => {
  return (
    <div className="flex min-h-[70vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <div className="text-center tracking-tighter">
          <a className="my-4 text-slate-200 md:text-xl">
            fartunabdisalam10@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
