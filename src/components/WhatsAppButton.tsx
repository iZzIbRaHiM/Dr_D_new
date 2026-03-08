import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "447311126737";
const PRETEXT = "Hey, Checked out your website and I want help with deposit or withdrawl";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRETEXT)}`;

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1a1a2e] border border-[#25D366]/30 text-white text-sm font-sans px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
            style={{ boxShadow: "0 0 18px rgba(37,211,102,0.25)" }}
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: hovered
            ? "0 0 30px rgba(37,211,102,0.6), 0 4px 20px rgba(0,0,0,0.4)"
            : "0 0 18px rgba(37,211,102,0.35), 0 4px 14px rgba(0,0,0,0.35)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: "rgba(37,211,102,0.3)",
            animationDuration: "2s",
          }}
        />

        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.003 3C9.373 3 4 8.373 4 15.003c0 2.184.588 4.33 1.706 6.22L4 29l7.98-1.678A12.93 12.93 0 0 0 16.003 28C22.63 28 28 22.627 28 15.997 28 9.37 22.63 4 16.003 4v-1zm0 2C21.524 5 26 9.477 26 15.997 26 22.52 21.524 27 16.003 27c-1.944 0-3.824-.534-5.457-1.545l-.38-.233-4.73.994 1.033-4.617-.25-.394A10.975 10.975 0 0 1 5 15.003C5 9.48 9.48 5 16.003 5zm-3.71 5.5c-.22 0-.572.082-.872.407-.3.325-1.143 1.117-1.143 2.724s1.17 3.161 1.333 3.38c.163.22 2.27 3.67 5.617 5.003 2.784 1.1 3.35.882 3.952.827.603-.055 1.943-.794 2.216-1.56.274-.767.274-1.424.192-1.56-.082-.136-.3-.219-.63-.384-.33-.165-1.943-.958-2.245-1.067-.3-.11-.52-.165-.738.165-.22.33-.852 1.067-.963 1.286-.11.22-.22.247-.55.082-.33-.165-1.39-.512-2.647-1.634-.978-.87-1.638-1.945-1.83-2.275-.19-.33-.02-.508.145-.672.15-.148.33-.384.495-.576.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.082-.165-.738-1.78-1.014-2.438-.262-.632-.536-.546-.738-.556l-.63-.01z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
