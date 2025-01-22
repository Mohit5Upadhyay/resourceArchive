

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff6600]/10 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ff6600]/10 rounded-full filter blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Details */}
          {/* <div className="backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-gray-800/50 hover:border-[#ff6600]/50 transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent mb-6">
              Contact Us
            </h3>
            <div className="space-y-6">
              <a href="tel:+911234567890" className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="w-10 h-10 rounded-full bg-[#ff6600]/10 flex items-center justify-center group-hover:bg-[#ff6600]/20 transition-all">
                  <FaPhone className="text-[#ff6600]" />
                </div>
                <span className="text-gray-300 group-hover:text-[#ff6600] transition-colors">+91 123-456-7890</span>
              </a>
              
            </div>
          </div> */}

          {/* Social Media */}
          <div className="backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-gray-800/50 hover:border-[#ff6600]/50 transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent mb-6">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              {[
                { icon: FaGithub, link: "https://github.com" },
                { icon: FaLinkedin, link: "https://linkedin.com" },
                { icon: FaInstagram, link: "https://instagram.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#ff6600]/10 flex items-center justify-center
                           transform hover:scale-110 hover:bg-[#ff6600] transition-all duration-300"
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Motto */}
          <div className="backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-gray-800/50 hover:border-[#ff6600]/50 transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6600] to-[#ff8533] bg-clip-text text-transparent mb-6">
              Our Motto
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "सर्वे शिक्षायाः साधनानि एकत्राणि" - All resources of education are at one place.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} resourcearchive.live
            <span className="mx-2">|</span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;