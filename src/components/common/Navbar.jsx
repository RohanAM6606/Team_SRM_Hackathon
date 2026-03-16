import React, { useState, useEffect } from "react";
import logoImage from "../../assets/images/hack-logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("domains");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About", hash: "#about" },
    { id: "domains", label: "Domains", hash: "#domains" },
    { id: "events", label: "Events", hash: "#events" },
    { id: "teams", label: "Teams", hash: "#teams" },
    { id: "contact", label: "Contact Us", hash: "#contact" },
  ];

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    setMenuOpen(false);

    const element = document.querySelector(`[data-section="${item.id}"]`);

    if (element) {
      const offsetTop = element.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-0" : "py-2"
      }`}
    >
      <div
        className={`mx-4 md:mx-8 lg:mx-12 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 shadow-2xl shadow-blue-500/20"
            : "backdrop-blur-md bg-black/20 shadow-xl"
        }`}
      >
        {/* Blue Gradient Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-400/20 opacity-50 blur-sm" />

        <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4">

          {/* Logo */}
          <div
            className="flex items-center gap-2 md:gap-3 group cursor-pointer"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-md group-hover:bg-blue-400/60 transition-all duration-300" />

              <img
                src={logoImage}
                alt="Logo"
                className="relative w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
            </div>

            <h1 className="text-white font-extrabold tracking-wider text-sm md:text-base lg:text-lg">
              TEAM SRM{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-black">
                HACKATHON
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  relative px-4 lg:px-6 py-2 rounded-xl font-bold text-sm lg:text-base
                  transition-all duration-300 group overflow-hidden
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {/* Active Background */}
                <span
                  className={`
                    absolute inset-0 rounded-xl transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 opacity-100 shadow-lg shadow-blue-500/40"
                        : "bg-white/5 opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                {/* Hover Shine */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-2 pt-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  block w-full text-left px-4 py-3 rounded-xl font-bold
                  transition-all duration-300 transform
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: menuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;