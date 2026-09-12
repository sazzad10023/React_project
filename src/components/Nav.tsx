import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[75px] max-w-[1280px] items-center justify-between px-5">
        
        <button className="text-3xl text-gray-600 md:hidden">
          ☰
        </button>

        <img src={Logo} alt="Logo" className="h-8 w-auto"/>
        <ul className="hidden items-center gap-8 text-[15px] text-gray-600 md:flex">
          <li className="cursor-pointer text-pink-600">Home</li>

          <li className="cursor-pointer hover:text-pink-600">
            Technologies
          </li>

          <li className="cursor-pointer hover:text-pink-600">
            Projects
          </li>

          <li className="cursor-pointer hover:text-pink-600">
            About
          </li>

          <li className="cursor-pointer hover:text-pink-600">
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <button className="text-[14px] text-gray-600 md:text-[15px]">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white md:px-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;