import { GoMail } from "react-icons/go";
import { LuLink } from "react-icons/lu";

export const contactsInfo = [
  {
    icon: <GoMail size={28} />,
    link: "mailto:fartunabdisalam10@gmail.com",
    info: "fartunabdisalam10@gmail.com",
  },
  {
    icon: <LuLink size={28} />,
    link: "#",
    info: "Linkedln",
  },
];

const ContactsV = () => {
  return (
    <div id="conatct" className="border-t border-stone-900 pb-20 w-full">
      <h1 className="my-14 text-center text-4xl text-white">Get In Touch</h1>
      <div className="flex justify-center align-center">
        <div className="md:flex justify-between items-center p-4 rounded-2xl bg-gray-100 space-y-2 lg:space-y-0 bg-indigo-400 border-2 border-indigo-900 ">
          {contactsInfo.map((item, index) => (
            <div key={index} className="flex gap-2 px-3">
              <a href={item.link} className="rounded">
                {item.icon}
              </a>
              <span className="text-base md:text-lg tracking-tight">
                {item.info}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsV;
