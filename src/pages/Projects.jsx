import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import porto1 from "../assets/porto1.png";
import porto2 from "../assets/porto2.png";
import porto3 from "../assets/porto3.png";

const Projects = () => {
  const projects = [
    {
      title: "Booking Lapangan Futsal",
      desc: "Website Sistem Booking Lapangan Futsal dan design yang responsif.",
      tech: ["Laravel", "Tailwind", "React"],
      image: porto1,
      project: "https://booking-futsal.xo.je/?i=2",
    },
    {
      title: "Landing Page IOT Kejernihan Air",
      desc: "Halaman depan untuk website sistem iot mendeteksi Kejernihan air.",
      tech: ["React", "Tailwind", "Express js", "MQTT"],
      image: porto2,
    },
    {
      title: "Landing Page Jual Rumah",
      desc: "Website Landing Page yang yang menyajikan Informasi Jual Beli Rumah .",
      tech: ["NextJs", "Typescript", "Tailwind"],
      image: porto3,
      project: "https://house-seller-black.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-12 z-10 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Karya <span className="text-blue-500">Saya</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Beberapa proyek pilihan yang telah saya kerjakan selama belajar dan
          eksplorasi di bidang pengembangan web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="group glass rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.project}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
