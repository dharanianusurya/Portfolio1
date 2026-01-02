import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      // 'pointer-events-none' allows you to click the Hero section "through" the empty nav space
      className="fixed top-0 left-0 w-full z-50 py-4 px-6 pointer-events-none" 
    >
      <div className="max-w-7xl mx-auto flex md:justify-center justify-end">
        
        {/* Main Pill Container - 'pointer-events-auto' makes this area clickable again */}
        <div className={`
          pointer-events-auto transition-all duration-300 overflow-hidden
          bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/30
          ${isOpen ? 'w-full rounded-[2rem]' : 'w-auto rounded-full'} 
          ${!isOpen && 'max-w-fit'}
        `}>
          
          <div className={`flex items-center ${isOpen ? 'justify-end px-6 py-3' : 'justify-center p-2 md:px-8 md:py-3'}`}>
            
            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            >
              <motion.div 
                animate={isOpen ? { rotate: 45, y: 7, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-0.5 bg-slate-900 rounded-full"
              />
              <motion.div 
                animate={isOpen ? { opacity: 0, width: "0px" } : { opacity: 1, width: "16px" }}
                className="h-0.5 bg-slate-900 rounded-full"
              />
              <motion.div 
                animate={isOpen ? { rotate: -45, y: -7, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className="h-0.5 bg-slate-900 rounded-full"
              />
            </button>
          </div>

          {/* MOBILE SLIDE DOWN MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                // Crucial: Ensure the drop-down content also allows pointer events
                className="md:hidden pointer-events-auto"
              >
                <div className="flex flex-col items-center gap-6 pt-2 pb-8 border-t border-slate-100 mt-2">
                  {navLinks.map((link, i) => (
                    <a
                      key={link.name}
                      href={link.href}
                      // Added: Close menu when link is clicked
                      onClick={() => setIsOpen(false)} 
                      className="relative z-[60] text-lg font-bold text-slate-700 hover:text-indigo-600 px-4 py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}