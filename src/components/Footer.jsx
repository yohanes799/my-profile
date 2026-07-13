const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 py-8 mt-auto z-10 glass relative">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Portofolio Magang. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
