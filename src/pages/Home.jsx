import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import zom from '../assets/zom.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: { opacity: 0, x: -50, transition: { ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12"
    >
      {/* Kolom Kiri: Teks Perkenalan & Tombol Aksi */}
      <div className="flex-1 flex flex-col items-start text-left mt-12 md:mt-0 z-10">
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          👋 Selamat Datang
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
        >
          Hai, Saya <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Yohanes Christiano Caling Bahur
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed"
        >
          Saya antusias mengembangkan karir di bidang Web Development. Saya suka
          membangun antarmuka yang indah dan fungsional.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center gap-2"
          >
            Lihat Portfolio <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-white font-medium transition-all backdrop-blur-sm"
          >
            Hubungi Saya
          </Link>
        </motion.div>
      </div>

      {/* Kolom Kanan: Frame Lingkaran Foto Profil */}
      <motion.div
        variants={itemVariants}
        className="flex-1 flex justify-center w-full max-w-md relative z-10"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Efek Cahaya Blur di Belakang Foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

          {/* Frame Lingkaran Utama */}
          <div className="absolute inset-2 bg-slate-950 rounded-full border border-slate-700/50 overflow-hidden flex justify-center items-center shadow-2xl glass">
            {/* Foto Profil - Super Zoom & Tetap Lurus */}
            <img
              src={zom}
              alt="Yohanes Christiano Caling Bahur"
              className="w-full h-full object-cover scale-195 -rotate-[3deg] translate-y-4 pointer-events-none"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
