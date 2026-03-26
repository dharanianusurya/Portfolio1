import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Changed 'hero' to 'Hero'
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    // Updated background to the new "Cyber-Sophisticated" Dark Theme
    <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;