import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
         <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[75px] max-w-[1280px] items-center justify-between px-5">
        <div>
          <img src={Logo} alt="Logo"/>
        </div>
        <ul className="flex items-center gap-8 text-[15px] text-gray-600">
          <li className="cursor-pointer text-pink-600">
            Home
          </li>

          <li>
            Technologies
          </li>

          <li>
            Projects
          </li>

          <li>
            About
          </li>

          <li>
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="text-[15px] text-gray-600">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
    
};

export default Nav;