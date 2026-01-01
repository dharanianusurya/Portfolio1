import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Contact />
    </div>
  );
}

export default App;
