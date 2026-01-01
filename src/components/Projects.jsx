import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Food Bridge",
      desc: "A social impact platform bridging the gap between surplus food and those in need. Built with a focus on real-time logistics and high-scale data handling.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://food-bridge-eta.vercel.app/",
      github: "https://github.com/dharanianusurya/FoodBridge"
    },
    {
      title: "Mini AirBnB",
      desc: "A rental ecosystem featuring advanced filtering, interactive map integrations, and a seamless booking workflow for modern travelers.",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      tags: ["Next.js", "Node.js", "Cloudinary", "Tailwind"],
      link: "#",
      github: "https://github.com/dharanianusurya/wanderlust"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              Selected <span className="text-indigo-600">Works</span>
            </motion.h2>
            <p className="text-slate-500 mt-4 max-w-md">
              A collection of full-stack applications and machine learning experiments.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block h-px flex-1 bg-slate-100 mx-12 mb-4" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-[350px] w-full overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    <a href={project.link} className="p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 22 3 22 10"/><line x1="10" y1="14" x2="22" y2="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-slate-400 border border-slate-200 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="mt-3 text-slate-600 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {project.desc}
                </p>
                <a href={project.link}>

                <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform cursor-pointer">
                  View Case Study
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}