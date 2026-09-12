import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../../type/technologiesType";

interface TechnologiesProps {
  techologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ techologiesPromise }: TechnologiesProps) => {
  const technologies = use(techologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  // Add Technology
  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    // Add Toast
    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove Single Technology
  const handleRemoveTechnology = (
    id: string,
    name: string
  ) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    // Remove Toast
    toast.error(`${name} removed from your stack!`);
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    // Remove All Toast
    toast.info("All technologies removed!");
  };

  return (
     <h2>card </h2>
  );
};

export default Technologies;