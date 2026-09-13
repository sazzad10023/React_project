import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[400px] max-w-[1280px] flex-col items-center justify-between gap-10 px-5 py-5 md:flex-row">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[#202b3d] sm:text-5xl md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B72] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className=" mt-8 flex gap-3 md:mt-12">
            <button className="  w-52 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-medium text-white shadow-md">
              Explore Technologies
            </button>

            <button className=" w-52 rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-600 shadow-md">
              Learn More
            </button>
         </div>
        </div>

        <div className="flex w-full justify-center md:w-1/2">
          <img src={HeroImage} alt="Development Stack" className="w-full max-w-[600px]"/>
        </div>

      </div>
    </section>
  );
};

export default Hero;