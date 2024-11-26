const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="flex justify-center align-center text-center mt-12 py-4">
      <span className="text-md text-white text-base">
        Copyright &copy; {getYear()} Fartun Abdisalam
      </span>
    </div>
  );
};

export default Footer;
