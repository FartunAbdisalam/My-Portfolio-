// import pic2 from "../assets/pic2.png";
import heroPic from "../assets/hp1.jpg";
import resume from "../assets/Fartun-resume.pdf";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    X: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 mt-10"
    >
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={heroPic}
              alt="fartun"
              className="border border-stone-900 rounded-3xl lg:h-96 "
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ml-5 lg:ml-0">
  
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 "
          >
            <motion.h2
              variants={childVariants}
              className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-5xl font-medium tracking-tighter"
            >
              Fartun Abdisalam
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl tracking-tight"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="md:text-lg text-pretty text-center lg:text-left text-sm text-gray-400 my-3"
            >
              I am a software engineering graduate who has a Passion for coding
              and innovation. I have strong foundation in full-stack web
              development with hands-on experience in building responsive and
              dynamic web applications using modern technologies like the
              MERN-Stack. Eager to continuously expand my technical knowledge.
            </motion.p>
            <motion.a
              variants={childVariants}
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download= "Fartun Abdisalam Resume"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        
        </div>

      </div>
    </div>
  );
};

export default Hero;
