import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 py-4 px-6"
    >
      {/* Floating Glass Container */}
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-xl shadow-slate-200/40 rounded-full px-8 py-3 flex justify-evenly items-center">
        
        {/* LOGO */}
        

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CALL TO ACTION BUTTON */}
        

        {/* MOBILE MENU ICON (Simple) */}
        <div className="md:hidden flex items-center">
           <div className="w-6 h-1 bg-slate-900 rounded-full mb-1"></div>
           <div className="w-6 h-1 bg-slate-900 rounded-full"></div>
        </div>
      </div>
    </motion.nav>
  );
}