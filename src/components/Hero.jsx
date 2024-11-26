// import profile from "../assets/profile.jpeg";
import pic2 from "../assets/pic2.png";

const Hero = () => {
  return (
    <div className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 mt-10">
      <div className="flex flex-wrap lg:flex-row-reverse w-full">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img src={pic2} className="border border-stone-900 rounded-3xl " />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl md:text-5xl font-medium tracking-tighter">
              Fartun Abdisalam
            </h2>
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl tracking-tight">
              Software Engineer
            </span>
            <p className="md:text-lg text-pretty text-sm text-gray-400 my-3">
              I am a passionate software engineering graduate with strong
              foundation in full-stack web development. I have hands-on
              experience in building responsive and dynamic web applications
              using modern technologies like the MERN-Stack. Eager to
              continuously expand my technical knowledge.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

/*<h2 className="pb-2 text-3xl tracking-tighter lg:text-5xl from-blue-500 to-pink-500">
Fartun Abdisalam
</h2>
<span className="bg-gradiant-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent text-white">
              Software Engineer
            </span>

            border-2 border-white 
*/
