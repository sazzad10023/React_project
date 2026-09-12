
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-[1400px] px-9 py-6 md:py-7">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>
            <img
              src={Logo}alt="Dev Stack"className="h-10 w-auto"/>

           

            <div className="mt-7 flex gap-5 text-sm text-[#475569]">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#202b3d]">
              PRODUCT
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#202b3d]">
              COMPANY
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#202b3d]">
              LEGAL
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        
      </div>
    </footer>
  );
};

export default Footer;