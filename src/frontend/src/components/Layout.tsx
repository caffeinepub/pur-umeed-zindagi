import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Brain, Calendar, ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const programDropdown = [
  { label: "Services", to: "/services" },
  { label: "Regions & Sites", to: "/regions" },
  { label: "Program Impact", to: "/impact" },
  { label: "Psychologists", to: "/psychologists" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const updateDate = () => {
      const formatted = new Date().toLocaleDateString("en-PK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCurrentDate(formatted);
    };
    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  const isActive = (path: string) => currentPath === path;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(8% 0.04 145)" }}
    >
      {/* Date Announcement Bar */}
      {currentDate && (
        <div
          className="w-full py-1.5 px-4"
          style={{
            background: "oklch(14% 0.06 145)",
            borderBottom: "1px solid oklch(22% 0.06 145)",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calendar
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "oklch(58% 0.22 145)" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "oklch(75% 0.05 145)" }}
              >
                {currentDate}
              </span>
            </div>
            <span
              className="hidden sm:inline text-xs"
              style={{ color: "oklch(55% 0.04 145)" }}
            >
              Pur Umeed Zindagi — Free Mental Health Services · IHHN
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "oklch(12% 0.05 145)",
          borderColor: "oklch(22% 0.06 145)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              data-ocid="nav.link"
            >
              <img
                src="/assets/generated/puz-logo-transparent.dim_400x400.png"
                alt="Pur Umeed Zindagi Logo"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="hidden sm:block">
                <div
                  className="font-bold text-base leading-tight"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  Pur Umeed Zindagi
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Mental Health Program · IHHN
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink to="/" label="Home" isActive={isActive("/")} />
              <NavLink
                to="/about"
                label="About"
                isActive={isActive("/about")}
              />

              {/* Program Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramOpen(true)}
                onMouseLeave={() => setProgramOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: programOpen
                      ? "oklch(58% 0.22 145)"
                      : "oklch(82% 0.02 145)",
                  }}
                  data-ocid="nav.dropdown_menu"
                >
                  Program <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {programOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl border overflow-hidden shadow-xl"
                      style={{
                        background: "oklch(14% 0.045 145)",
                        borderColor: "oklch(22% 0.06 145)",
                      }}
                    >
                      {programDropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2.5 text-sm transition-colors"
                          style={{
                            color: isActive(item.to)
                              ? "oklch(58% 0.22 145)"
                              : "oklch(82% 0.02 145)",
                          }}
                          data-ocid="nav.link"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/leadership"
                label="Leadership"
                isActive={isActive("/leadership")}
              />
              <NavLink
                to="/workshops"
                label="Workshops"
                isActive={isActive("/workshops")}
              />
              <NavLink
                to="/awareness"
                label="Awareness"
                isActive={isActive("/awareness")}
              />
              <NavLink
                to="/annual-reports"
                label="Reports"
                isActive={isActive("/annual-reports")}
              />
              {/* Patient Data with pulsing dot */}
              <Link
                to="/patient-data"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive("/patient-data")
                    ? "oklch(58% 0.22 145)"
                    : "oklch(82% 0.02 145)",
                }}
                data-ocid="nav.link"
              >
                Patient Data
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              </Link>
              <NavLink
                to="/contact"
                label="Contact"
                isActive={isActive("/contact")}
              />
              <NavLink
                to="/appointment"
                label="Appointment"
                isActive={isActive("/appointment")}
              />
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/appointment"
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "oklch(58% 0.22 145)", color: "white" }}
                data-ocid="nav.primary_button"
              >
                Get Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "oklch(82% 0.02 145)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t overflow-hidden"
              style={{
                borderColor: "oklch(22% 0.06 145)",
                background: "oklch(12% 0.05 145)",
              }}
            >
              <div className="px-4 py-4 space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/regions", label: "Regions & Sites" },
                  { to: "/impact", label: "Program Impact" },
                  { to: "/psychologists", label: "Psychologists" },
                  { to: "/leadership", label: "Leadership" },
                  { to: "/workshops", label: "Workshops" },
                  { to: "/awareness", label: "Awareness" },
                  { to: "/annual-reports", label: "Annual Reports" },
                  { to: "/patient-data", label: "Patient Data" },
                  { to: "/contact", label: "Contact" },
                  { to: "/appointment", label: "Appointment" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive(item.to)
                        ? "oklch(58% 0.22 145)"
                        : "oklch(82% 0.02 145)",
                      background: isActive(item.to)
                        ? "oklch(17% 0.05 145)"
                        : "transparent",
                    }}
                    onClick={() => setMobileOpen(false)}
                    data-ocid="nav.link"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/appointment"
                  className="block mt-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-center transition-all hover:opacity-90"
                  style={{ background: "oklch(58% 0.22 145)", color: "white" }}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.primary_button"
                >
                  Get Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{
          background: "oklch(10% 0.04 145)",
          borderColor: "oklch(22% 0.06 145)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/puz-logo-transparent.dim_400x400.png"
                  alt="Pur Umeed Zindagi Logo"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div
                    className="font-bold text-base"
                    style={{ color: "oklch(96% 0.005 145)" }}
                  >
                    Pur Umeed Zindagi
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(68% 0.025 145)" }}
                  >
                    A Life Full of Hope
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                A mental health program of Indus Hospital &amp; Health Network
                Pakistan, providing free psychological services across 4
                regions.
              </p>
              {/* IHHN Logo */}
              <img
                src="/assets/generated/ihhn-logo-transparent.dim_400x200.png"
                alt="Indus Hospital & Health Network"
                className="h-10 object-contain mt-3"
                style={{ filter: "brightness(0.9)" }}
              />
              <div className="flex items-center gap-2 mt-4">
                <Brain
                  className="w-4 h-4"
                  style={{ color: "oklch(58% 0.22 145)" }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(58% 0.22 145)" }}
                >
                  Free · Confidential · Accessible
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="font-semibold mb-4 uppercase tracking-widest text-xs"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/regions", label: "Regions & Sites" },
                  { to: "/leadership", label: "Leadership" },
                  { to: "/workshops", label: "Workshops & Events" },
                  { to: "/awareness", label: "Awareness Programs" },
                  { to: "/patient-data", label: "Patient Data" },
                  { to: "/appointment", label: "Book Appointment" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm hover:text-primary transition-colors"
                      style={{ color: "oklch(68% 0.025 145)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-semibold mb-4 uppercase tracking-widest text-xs"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      +92 297330160
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(68% 0.025 145)" }}
                    >
                      Program Helpline
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    aria-label="Email"
                    role="img"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <a
                      href="mailto:Purumeedzindagi@outlook.com"
                      className="text-sm font-medium hover:underline"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      Purumeedzindagi@outlook.com
                    </a>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(68% 0.025 145)" }}
                    >
                      Official Program Email
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "oklch(58% 0.22 145)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      Headquarters: Indus Hospital &amp; Health Network
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(68% 0.025 145)" }}
                    >
                      Badin Office: Dr. Sam Civil Hospital, Badin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "oklch(22% 0.06 145)" }}
          >
            <p className="text-xs" style={{ color: "oklch(55% 0.02 145)" }}>
              © {new Date().getFullYear()} Pur Umeed Zindagi — Indus Hospital
              &amp; Health Network. All rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:opacity-80"
              style={{ color: "oklch(55% 0.02 145)" }}
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Help Button */}
      <Link
        to="/appointment"
        className="fixed bottom-6 right-6 w-13 h-13 rounded-full flex items-center justify-center shadow-xl z-40 transition-transform hover:scale-110"
        style={{
          background: "oklch(58% 0.22 145)",
          width: "52px",
          height: "52px",
        }}
        aria-label="Get help"
        data-ocid="nav.primary_button"
      >
        <Phone className="w-5 h-5 text-white" />
      </Link>
    </div>
  );
}

function NavLink({
  to,
  label,
  isActive,
}: { to: string; label: string; isActive: boolean }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
      style={{
        color: isActive ? "oklch(58% 0.22 145)" : "oklch(82% 0.02 145)",
        background: isActive ? "oklch(17% 0.05 145)" : "transparent",
      }}
      data-ocid="nav.link"
    >
      {label}
    </Link>
  );
}
