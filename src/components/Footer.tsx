
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-[1290px] px-9 py-6 md:pt-20 md:pb-7">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>
            <img src={Logo}alt="Dev Stack"/>
              
            <p className="mt-3 max-w-[430px] text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

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

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;