import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      desc: "Building responsive and interactive user interfaces.",
      tags: ["HTML", "CSS", "Bootstrap", "React","Tailwind CSS"],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Frameworks",
      desc: "Designing RESTful APIs and robust server-side logic.",
      tags: ["Node.js", "Express", "Streamlit"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Machine Learning",
      desc: "Deep learning models and computer vision pipelines.",
      tags: ["Python", "Ultralytics", "TensorFlow", "OpenCV","Scikit-learn"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Systems & Databases",
      desc: "Optimizing data storage and structural architecture.",
      tags: ["MySQL", "MongoDB"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Technical <span className="text-indigo-600">Expertise</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A specialized toolkit focused on building high-performance web applications 
            and intelligent data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.gradient} opacity-[0.03] rounded-bl-full transition-opacity group-hover:opacity-10`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {skill.title}
                  </h3>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} shadow-[0_0_12px_rgba(0,0,0,0.1)]`} />
                </div>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {skill.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-100 group-hover:border-indigo-100 group-hover:bg-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Progress bar effect at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.gradient} opacity-40`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}