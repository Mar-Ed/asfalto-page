import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="w-full">
      <div className="show bg-[var(--chart-1)] text-[var(--primary-foreground)] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Venta de Asfalto, RC250, MC30 y Más</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>dpgrialcompany@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+51 959 864 804</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--background)] shadow-sm border-b border-[var(--border)] h-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                  <span className="text-[var(--primary-foreground)] font-bold text-lg">
                    G
                  </span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[var(--primary)] leading-tight">
                    GRIAL COMPANY
                  </h1>
                  <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
                    Asfaltos e Impermeabilizaciones
                  </p>
                </div>
              </div>
            </div>

            <div className="show md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="nav-link text-[var(--foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-300 relative"
              >
                INICIO
              </a>
              <a
                href="#empresa"
                className="nav-link text-[var(--foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-300 relative"
              >
                EMPRESA
              </a>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("asfalto")}
                  className="nav-link flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-300 relative"
                >
                  ASFALTO+
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === "asfalto" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "asfalto" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                    <a
                      href="#rc250"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                    >
                      Asfalto RC250
                    </a>
                    <a
                      href="#mc30"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                    >
                      Asfalto MC30
                    </a>
                    <a
                      href="#pen"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                    >
                      Asfalto PEN
                    </a>
                    <a
                      href="#emulsion"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors border-b-0 rounded-b-lg"
                    >
                      Emulsión Asfáltica
                    </a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("mantos")}
                  className="nav-link flex items-center gap-1 text-[var(--foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-300 relative"
                >
                  MANTOS+
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === "mantos" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mantos" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                    <a
                      href="#geotextil"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                    >
                      Manto Geotextil
                    </a>
                    <a
                      href="#asfaltico"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                    >
                      Manto Asfáltico
                    </a>
                    <a
                      href="#impermeabilizante"
                      className="block px-4 py-3 text-[var(--card-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors rounded-b-lg"
                    >
                      Impermeabilizante
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#blog"
                className="nav-link text-[var(--foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-300 relative"
              >
                BLOG
              </a>
            </div>

            <div className="show md:flex items-center">
              <button className="bg-[var(--chart-1)] hover:bg-[var(--chart-4)] text-[var(--primary-foreground)] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                COTIZA AQUÍ
              </button>
            </div>

            <div className="show-hamburger md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[var(--foreground)] hover:text-[var(--chart-1)] transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden bg-[var(--card)] border-t border-[var(--border)] mobile-menu ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href="#inicio"
              className="block text-[var(--card-foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors"
            >
              INICIO
            </a>
            <a
              href="#empresa"
              className="block text-[var(--card-foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors duration-500 ease-in-out"
            >
              EMPRESA
            </a>

            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-asfalto")}
                className="flex items-center justify-between w-full text-[var(--card-foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors"
              >
                ASFALTO+
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobile-asfalto" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-asfalto" && (
                <div className="ml-4 mt-2 space-y-2">
                  <a
                    href="#rc250"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Asfalto RC250
                  </a>
                  <a
                    href="#mc30"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Asfalto MC30
                  </a>
                  <a
                    href="#pen"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Asfalto PEN
                  </a>
                  <a
                    href="#emulsion"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Emulsión Asfáltica
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-mantos")}
                className="flex items-center justify-between w-full text-[var(--card-foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors"
              >
                MANTOS+
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === "mobile-mantos" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "mobile-mantos" && (
                <div className="ml-4 mt-2 space-y-2">
                  <a
                    href="#geotextil"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Manto Geotextil
                  </a>
                  <a
                    href="#asfaltico"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Manto Asfáltico
                  </a>
                  <a
                    href="#impermeabilizante"
                    className="block text-[var(--muted-foreground)] hover:text-[var(--chart-1)] py-1 transition-colors"
                  >
                    Impermeabilizante
                  </a>
                </div>
              )}
            </div>

            <a
              href="#blog"
              className="block text-[var(--card-foreground)] hover:text-[var(--chart-1)] font-medium py-2 transition-colors"
            >
              BLOG
            </a>

            <button className="w-full bg-[var(--chart-1)] hover:bg-[var(--chart-4)] text-[var(--primary-foreground)] px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4">
              COTIZA AQUÍ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
