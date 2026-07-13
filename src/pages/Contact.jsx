import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format teks body email yang rapi
    const textBody = `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(textBody);

    // DIRECT LANGSUNG KE GMAIL WEB (Membuka tab baru)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bahuryohanes08@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 z-10 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hubungi <span className="text-blue-500">Saya</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Tertarik untuk bekerja sama atau sekadar ingin berdiskusi? Jangan ragu
          untuk menghubungi saya melalui pesan di bawah ini.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <div className="glass p-6 rounded-2xl border border-slate-700/50 flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
              <FiMail size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Email</h4>
              <p className="text-slate-400">bahuryohanes08@gmail.com</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-slate-700/50 flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
              <FiMapPin size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Lokasi</h4>
              <p className="text-slate-400">Tangerang Selatan, Indonesia</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-slate-700/50 flex items-start gap-4">
            <div className="p-3 bg-pink-500/10 text-pink-400 rounded-lg">
              <FiPhone size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Telepon</h4>
              <p className="text-slate-400">+62 852 1702 6367</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-[1.5]"
        >
          <form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl border border-slate-700/50 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama"
                  className="bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan email"
                  className="bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subjek pesan"
                className="bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tulis pesan Anda di sini..."
                className="bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
