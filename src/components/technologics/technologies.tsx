import { use, useState } from "react";
import { toast } from "react-toastify";

import type { ITechnology } from "../../type/technologiesType";

interface TechnologiesProps {
  techologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ techologiesPromise }: TechnologiesProps) => {
  const technologies = use(techologiesPromise);
    console.log(technologies);

  return (
    <>
    </>
   
  );
};
export default Technologies;