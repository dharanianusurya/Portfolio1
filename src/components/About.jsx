import { motion } from "framer-motion";

export default function About() {
  // SVG Icons as components for cleaner code
  const Icons = {
    Graduation: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
    Code: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    Brain: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.48z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.48z"/></svg>
    ),
    Trophy: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    )
  };

  const stats = [
    { icon: <Icons.Graduation />, label: "Education", value: "B.Tech CSE", color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: <Icons.Trophy />, label: "Academic", value: "9.6 CGPA", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: <Icons.Code />, label: "Full Stack", value: "MERN", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: <Icons.Brain />, label: "AI / ML", value: "Computer Vision", color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              A blend of <span className="text-indigo-600">Logic</span> and <br />
              <span className="text-purple-600">Creativity</span>.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a Final Year Computer Science student at <span className="font-semibold text-slate-900">ANITS</span>. 
                My focus lies in building scalable web architectures and exploring the depths of machine learning.
              </p>
              <p>
                With a background in <span className="text-slate-900 font-medium">Data Structures</span> and 
                <span className="text-slate-900 font-medium"> Mathematics</span>, 
                I treat coding as an art form where efficiency meets user experience.
              </p>
            </div>

            {/* QUICK STATS PILLS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solver', 'Continuous Learner', 'Team Player', 'Innovator'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: BENTO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM: TECH STACK MARQUEE (Optional Creative Element) */}
        

      </div>
    </section>
  );
}