import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[400px] max-w-[1280px] items-center justify-between px-5">

        <div className="w-1/2">

          <h1 className="text-6xl font-bold leading-tight text-[#202b3d] ">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B72] to-[#7C3AED] bg-clip-text text-6xl font-bold text-transparent ">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-12 flex gap-3">

            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 font-medium text-white shadow-md">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-600">
              Learn More
            </button>

          </div>

        </div>


        <div className="flex w-1/2 justify-center">

          <img src={HeroImage} alt="Development Stack"className="w-[600px]"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;