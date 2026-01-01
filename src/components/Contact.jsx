import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    { 
      label: "Email", 
      value: "dharanianusurya@gmail.com", 
      icon: "📧", 
      link: "mailto:dharanianusurya@gmail.com",
      color: "hover:text-blue-600"
    },
    { 
      label: "Phone", 
      value: "+91 9603711128", 
      icon: "📞", 
      link: "tel:+919603711128",
      color: "hover:text-green-600"
    },
    { 
      label: "Location", 
      value: "Visakhapatnam, India", 
      icon: "📍", 
      link: "https://www.google.com/maps/place/Visakhapatnam",
      color: "hover:text-rose-600"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/50 to-transparent -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Contact Card */}
          <div className="bg-white rounded-[3rem] border-2 border-slate-200 shadow-2xl shadow-indigo-100/80 p-8 md:p-16 text-center relative overflow-hidden">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Let’s build something <span className="text-indigo-600">extraordinary.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">
                I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </motion.div>

            {/* Interactive Contact Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-indigo-100 group"
                >
                  <div className="text-3xl mb-4 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className={`text-sm font-semibold text-slate-700 transition-colors ${item.color}`}>
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Main CTA Button */}
           
          </div>

          {/* Footer Branding */}
          
        </motion.div>
      </div>
    </section>
  );
}