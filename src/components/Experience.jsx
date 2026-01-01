import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Rashtriya Ispat Nigam Limited",
      location: "Visakhapatnam Steel Plant",
      period: "2025(May-June)",
      description: [
        "Architected an automated PPE detection system using YOLOv8 to ensure 100% safety compliance.",
        "Engineered real-time computer vision pipelines for multi-stream live video processing.",
        "Collaborated with safety officers to integrate automated alerts and reduce manual monitoring."
      ],
      tags: ["Python", "YOLO", "Computer Vision", "Industrial AI"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Professional <span className="text-indigo-600">Journey</span>
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* THE CARD - Styling changes are here */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] 
                /* Visible Border */
                border-2 border-slate-200 
                /* Deep Soft Shadow */
                shadow-2xl shadow-indigo-100/80 
                /* Hover state for even more visibility */
                hover:border-indigo-400 hover:shadow-indigo-200/50
                transition-all duration-500 text-center"
              >
                
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
                  {exp.period}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {exp.role}
                </h3>
                
                <p className="text-lg text-slate-500 font-medium mb-8">
                  {exp.company} <span className="mx-2 text-slate-300">|</span> <span className="text-slate-400">{exp.location}</span>
                </p>

                <div className="grid gap-4 text-slate-600 mb-10 max-w-2xl mx-auto">
                  {exp.description.map((item, i) => (
                    <p key={i} className="text-base leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-5 py-2 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}