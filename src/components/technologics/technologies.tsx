import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../../type/technologiesType";

interface TechnologiesProps {
  techologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ techologiesPromise }: TechnologiesProps) => {
  const technologies = use(techologiesPromise);
    console.log(technologies);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveTechnology = (id: string, name: string) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.error(`${name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed!");
  };

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#202b3d]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
          </h1>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.find(
                (item) => item.id === technology.id
              );

              return (
               <div
                    key={technology.id}
                    className={`rounded-lg border bg-white p-5 shadow-sm ${
                        isAdded ? "border-pink-500" : "border-gray-200"}`}>
                  <div className="flex items-center justify-between">
                    <img src={technology.icon} alt={technology.name} className="h-10 w-10 " />
                      {technology.badge && (
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          technology.badge === "Popular"
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : technology.badge === "Versatile"
                            ? "border-purple-200 bg-purple-50 text-purple-600"
                            : technology.badge === "Fast"
                            ? "border-orange-200 bg-orange-50 text-orange-600"
                            : technology.badge === "Modern"
                            ? "border-purple-200 bg-purple-50 text-purple-600"
                            : technology.badge === "Standard"
                            ? "border-green-200 bg-green-50 text-green-600"
                            : technology.badge === "Top SQL"
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : technology.badge === "Flexible"
                            ? "border-green-200 bg-green-50 text-green-600"
                            : technology.badge === "Cache"
                            ? "border-red-200 bg-red-50 text-red-600"
                            : technology.badge === "Ubiquitous"
                            ? "border-yellow-200 bg-yellow-50 text-yellow-600"
                            : technology.badge === "Essential"
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : technology.badge === "Containers"
                            ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                            : "border-gray-200 bg-gray-50 text-gray-600"
                        }`}
                      >
                        {technology.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-[#202b3d]">
                    {technology.name}
                  </h2>

                
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                    {technology.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-md bg-[#f1f5f9] px-3 py-1.5 font-medium text-[#475569]">
                      {technology.category}
                    </span>

                    <span className="text-[#64748b]">
                      {technology.difficulty}
                    </span>

                    <span className="flex items-center gap-1 font-medium text-[#475569]">
                      <span className="text-yellow-500">★</span>
                      {technology.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded ? true : false}
                    className={` mt-5 w-full rounded-md py-3 text-sm font-medium  transition ${
                      isAdded
                        ? "cursor-not-allowed bg-pink-100  text-pink-600"
                        : "bg-[#172033] hover:bg-[#28364d] text-white"
                    }`}
                  >
                    {isAdded ? " ✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          
        <div className="h-fit rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-[#202b3d]">
              Your Stack
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {selectedTechnologies.length === 0
                ? "No technologies selected yet."
                : `${selectedTechnologies.length} Technologies Selected`}
            </p>
            {selectedTechnologies.length === 0 && (
              <div className="mt-6 rounded-xl border border-dashed border-gray-300 py-10 text-center">
                <p className="text-gray-400">
                  Your stack is empty.
                </p>
              </div>
            )}

            {selectedTechnologies.length > 0 && (
              <>
                <div className="mt-5 space-y-3">
                  {selectedTechnologies.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-md border border-gray-200 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-8 w-8 object-contain"
                        />

                        <div>
                          <h3 className="text-sm font-semibold text-[#202b3d]">
                            {technology.name}
                          </h3>

                          <p className="text-xs text-gray-500">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                  
                      <button
                        onClick={() =>handleRemoveTechnology(
                            technology.id,
                            technology.name
                          )
                        }
                        className="text-lg text-gray-400 transition hover:text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50">
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Technologies;