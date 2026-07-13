import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaCode />, desc: 'React, Tailwind CSS, JavaScript', color: 'text-blue-400' },
    { name: 'UI/UX', icon: <FaPaintBrush />, desc: 'Figma, Responsive Design', color: 'text-purple-400' },
    { name: 'Backend', icon: <FaServer />, desc: 'Node.js, Express (Basic)', color: 'text-green-400' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-12 z-10 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tentang <span className="text-blue-500">Saya</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-slate-200">Siapa Saya?</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Saya adalah seorang pelajar/mahasiswa yang saat ini sedang menjalani program magang. Saya memiliki passion yang besar di bidang teknologi, khususnya dalam pengembangan website.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Fokus utama saya adalah menciptakan pengalaman digital yang menarik dan fungsional. Melalui magang ini, saya berharap dapat mengasah keterampilan saya, belajar dari para profesional, dan berkontribusi pada proyek-proyek yang nyata.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <h4 className="text-4xl font-bold text-blue-400 mb-2">1+</h4>
            <p className="text-slate-400 text-sm">Tahun Pengalaman (Belajar)</p>
          </div>
          <div className="glass p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
            <h4 className="text-4xl font-bold text-purple-400 mb-2">5+</h4>
            <p className="text-slate-400 text-sm">Proyek Personal</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-8 text-center text-slate-200">Keahlian Saya</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl border border-slate-700/50 text-center flex flex-col items-center"
          >
            <div className={`text-4xl mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <h4 className="text-xl font-medium text-white mb-2">{skill.name}</h4>
            <p className="text-slate-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
