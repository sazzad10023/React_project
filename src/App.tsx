import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Technologies from "./components/technologics/technologies";
import type { ITechnology } from "./type/technologiesType";
import Footer from "./components/Footer";

const techologiesFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
function App() {
 const techologiesPromise = techologiesFetch();
  return (
    <>
     <Nav />

      <main className="pt-[75px]">
        <Hero />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Technologies techologiesPromise={techologiesPromise} />
        </Suspense>
        <Footer/>
      </main>
    </>
  )
}

export default App
