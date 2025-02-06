function HamburgerButton(props) {
  let {
    containerClass = "w-14 h-14",
    barclass = "",
    bar1class = "bg-black h-0.5",
    bar2class = "bg-black h-0.5",
    bar3class = "bg-black h-0.5",
    isOpen = false,
    setToggelMenu,
  } = props;

  const toggleMenu = () => {
    setToggelMenu(!isOpen);
  };

  return (
    <div className={`relative lg:hidden ${containerClass}`}>
      <button
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent focus:outline-none"
        onClick={toggleMenu}
      >
        <span className="sr-only">Toggle Menu</span>
        <div className="relative flex items-center justify-center w-full h-full">
          <div
            className={`absolute left-0 right-0 m-auto w-7 transition-transform duration-300 ${bar1class} ${barclass} ${isOpen ? "rotate-45" : "rotate-0 top-4"}`}
          ></div>
          <div
            className={`absolute left-0 right-0 m-auto w-7 transition-opacity duration-300 ${bar2class} ${barclass} ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`absolute left-0 right-0 m-auto w-7 rounded-full transition-transform duration-300 ${bar3class} ${barclass} ${isOpen ? "-rotate-45" : "rotate-0 bottom-4"}`}
          ></div>
        </div>
      </button>
    </div>
  );
}

export default HamburgerButton;
