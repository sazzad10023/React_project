import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Technologies from "./components/technologics/technologies";
import type { ITechnology } from "./type/technologiesType";

const techologiesFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
function App() {
 const techologiesPromise = techologiesFetch();
  return (
    <>
      <Nav/>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies techologiesPromise ={techologiesPromise}/> 
      </Suspense>
    </>
  )
}

export default App
