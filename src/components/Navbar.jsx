import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // Manual Scroll Function to bypass mobile browser issues
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Close menu first
      setIsOpen(false);
      
      // Small delay to allow menu animation to finish, then scroll
      setTimeout(() => {
        const offset = 80; // Account for the height of the fixed navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-[100] py-4 px-6 pointer-events-none" 
    >
      <div className="max-w-7xl mx-auto flex md:justify-center justify-end">
        
        <div className={`
          pointer-events-auto transition-all duration-300 overflow-hidden
          bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl
          ${isOpen ? 'w-full rounded-[2rem]' : 'w-auto rounded-full'} 
          ${!isOpen && 'max-w-fit'}
        `}>
          
          <div className={`flex items-center ${isOpen ? 'justify-end px-6 py-3' : 'justify-center p-2 md:px-8 md:py-3'}`}>
            
            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            >
              <motion.div animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-900" />
              <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-slate-900" />
              <motion.div animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-900" />
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="md:hidden border-t border-slate-100"
              >
                <div className="flex flex-col items-center gap-6 pt-6 pb-10">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-xl font-bold text-slate-800 active:text-indigo-600 w-full py-2"
                    >
                      {link.name}
                    </button>
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