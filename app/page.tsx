import Ambient from "@/components/Ambient";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <Ambient />
      <Sidebar />
      <main className="px-6 py-16 sm:px-12 lg:ml-[26rem] lg:px-16 lg:py-20 xl:px-24">
        <div className="space-y-24">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
