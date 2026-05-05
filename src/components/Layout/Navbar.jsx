import { useEffect, useState } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick=(sectionId)=>{
    scrollToSection(sectionId);
    setIsMenuOpen(false)
  }
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
      style={{ transform: "translate3D(0,0,0)" }}
    >
      <div className="max-w-330 mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* logo part */}
          <div className="flex items-center gap-4">
            {/* <Cod className="w-6 h-6 text-primary"/> */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          {/* CAT Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-3.5 text-[#212121] text-base  bg-white font-medium rounded-2xl border border-white hover:bg-white/90 transition-all duration-300"
            >
              Hire me
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className=" bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/50"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 text-[#212121] text-base  bg-white font-medium rounded-2xl border border-white hover:bg-white/90 transition-all duration-300 mt-2"
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
