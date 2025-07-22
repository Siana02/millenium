import React from "react";
import { motion } from "framer-motion";
import { CasinoLogo } from "../assets/CasinoLogo"; // Assume logo SVG/JSX exists
import { useNavigate } from "react-router-dom";

// Color & font constants
const COLORS = {
  dark: "#0A0A0A",
  red: "#C00E3B",
  ivory: "#F5F5F5",
  gold: "#D4AF37",
};

const HEADLINE_FONT = "playfair display, serif";
const BODY_FONT = "inter, poppins, sans-serif";

// Card data
const featureCards = [
  {
    icon: "📷",
    title: "Take Passport Photo",
    description: "Capture your passport-style photo instantly.",
    action: {
      label: "Start",
      to: "/register",
      disabled: false,
    },
  },
  {
    icon: "🪪",
    title: "Scan ID/Passport",
    description: "Easily upload and verify your identity document.",
    action: {
      label: "Mock Scan",
      to: "#",
      disabled: false,
    },
  },
  {
    icon: "🖨️",
    title: "Print Registration",
    description: "Print your registration slip after completing the form.",
    action: {
      label: "Print",
      to: "#",
      disabled: true,
    },
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[color:#0A0A0A] flex flex-col"
      style={{ fontFamily: BODY_FONT }}
    >
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-[color:#0A0A0A] border-b border-[color:#D4AF37]">
        <div className="flex items-center gap-3">
          <CasinoLogo height={40} />
          <span
            className="text-[color:#D4AF37] text-xl font-bold tracking-wide"
            style={{ fontFamily: HEADLINE_FONT }}
          >
            Millennium Casino
          </span>
        </div>
        <span className="text-[color:#C00E3B] text-sm italic">
          "Experience Luxury. Register with Ease."
        </span>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center py-12 px-4 bg-[color:#0A0A0A] text-center"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-[color:#F5F5F5]"
          style={{ fontFamily: HEADLINE_FONT }}
        >
          Welcome to Millennium Casino, Nyali
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-[color:#D4AF37] mb-6"
        >
          Register securely, scan your ID, and enjoy world-class service.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.06, backgroundColor: COLORS.gold }}
          onClick={() => navigate("/register")}
          className="bg-[color:#C00E3B] text-[color:#F5F5F5] px-6 py-2 rounded-lg font-semibold shadow-lg transition-colors"
        >
          Begin Registration
        </motion.button>
      </motion.section>

      {/* Feature Cards */}
      <section className="flex flex-col md:flex-row gap-8 justify-center items-center py-10">
        {featureCards.map((card, idx) => (
          <motion.div
            key={card.title}
            className={`w-80 bg-[color:#1a1a1a] rounded-xl shadow-xl flex flex-col items-center p-7 border-2 hover:border-[color:#D4AF37] transition ${
              card.action.disabled ? "opacity-60 cursor-not-allowed" : ""
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.5 }}
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h2
              className="text-xl font-bold mb-2 text-[color:#F5F5F5]"
              style={{ fontFamily: HEADLINE_FONT }}
            >
              {card.title}
            </h2>
            <p className="text-[color:#D4AF37] mb-5 text-center">
              {card.description}
            </p>
            <button
              onClick={() =>
                !card.action.disabled && card.action.to !== "#" && navigate(card.action.to)
              }
              disabled={card.action.disabled}
              className={
                "px-5 py-2 rounded-lg font-semibold bg-[color:#C00E3B] text-[color:#F5F5F5] transition-colors " +
                (card.action.disabled
                  ? "bg-gray-600 cursor-not-allowed"
                  : "hover:bg-[color:#D4AF37] hover:text-[color:#0A0A0A]")
              }
            >
              {card.action.label}
            </button>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto px-6 py-6 bg-[color:#0A0A0A] border-t border-[color:#D4AF37] flex flex-col md:flex-row justify-between items-center text-[color:#F5F5F5]">
        <div className="text-xs">
          &copy; {new Date().getFullYear()} Millennium Casino Nyali, Mombasa. All rights reserved.
        </div>
        <div className="text-xs mt-2 md:mt-0 flex gap-4">
          <a href="mailto:info@millenniumcasino.com" className="hover:text-[color:#D4AF37]">
            Contact
          </a>
          <a href="/legal" className="hover:text-[color:#D4AF37]">
            Legal
          </a>
        </div>
      </footer>
    </div>
  );
}
