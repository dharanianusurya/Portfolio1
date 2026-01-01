import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* CREATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[15%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Available for Internships
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital</span> Experiences.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            I'm <span className="font-semibold text-slate-900">Dharani Anu Surya</span>, 
            a CS student blending <span className="italic text-indigo-600 underline decoration-indigo-200 underline-offset-4">Full Stack Architecture</span> with 
            <span className="italic text-purple-600 underline decoration-purple-200 underline-offset-4"> Machine Learning</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-200"
            >
              <span className="relative z-10 font-semibold">Explore My Work</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-8">
             <div>
                <p className="text-2xl font-bold text-slate-900">9.6</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">CGPA</p>
             </div>
             <div className="h-8 w-[1px] bg-slate-200" />
             <div>
                <p className="text-2xl font-bold text-slate-900">Web + ML</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Specialization</p>
             </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Decorative frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] rotate-3 scale-105 opacity-20 blur-2xl" />
          
          <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
              alt="Dharani Anu Surya - Developer"
              className="w-full h-auto rounded-[1.5rem] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Floating Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
              🚀
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Available Now</p>
              <p className="text-xs text-slate-500">Open to opportunities</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}