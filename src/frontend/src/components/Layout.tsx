import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  Brain,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const programDropdown = [
  { label: "Services", to: "/services" },
  { label: "Regions & Sites", to: "/regions" },
  { label: "Program Impact", to: "/impact" },
  { label: "Psychologists", to: "/psychologists" },
  { label: "MHO Team Directory", to: "/mhos" },
  { label: "Photo Gallery", to: "/gallery" },
  { label: "Feedback", to: "/feedback" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── Top Utility Bar ── */}
      <div
        className="w-full py-2 px-4 hidden sm:block"
        style={{
          background: "oklch(25% 0.15 145)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <span className="text-xs text-white/90 font-medium">
            Pur Umeed Zindagi | Indus Hospital &amp; Health Network
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:Purumeedzindagi@outlook.com"
              className="text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3 h-3" />
              Purumeedzindagi@outlook.com
            </a>
            <span className="text-white/40">|</span>
            <a
              href="https://www.indushospital.org.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors"
            >
              indushospital.org.pk
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Sticky Header ── */}
      <header
        className="sticky top-0 z-50 bg-white"
        style={{
          borderBottom: "1px solid oklch(88% 0.03 145)",
          boxShadow: "0 2px 8px oklch(70% 0.02 145 / 0.1)",
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
                src="/assets/pur_umeed_zindagi_logo-019d4e6f-6c29-72ef-aaee-b3a513835820.png"
                alt="Pur Umeed Zindagi Logo"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="hidden sm:block">
                <div
                  className="font-bold text-base leading-tight"
                  style={{ color: "oklch(25% 0.15 145)" }}
                >
                  Pur Umeed Zindagi
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(45% 0.06 145)" }}
                >
                  Mental Health Program · IHHN
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
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
                      ? "oklch(35% 0.2 145)"
                      : "oklch(30% 0.06 145)",
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
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl border overflow-hidden shadow-xl"
                      style={{
                        background: "white",
                        borderColor: "oklch(88% 0.03 145)",
                        boxShadow: "0 8px 32px oklch(50% 0.08 145 / 0.15)",
                      }}
                    >
                      {programDropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block px-4 py-2.5 text-sm transition-colors hover:bg-green-50"
                          style={{
                            color: isActive(item.to)
                              ? "oklch(35% 0.2 145)"
                              : "oklch(30% 0.06 145)",
                            background: isActive(item.to)
                              ? "oklch(92% 0.04 145)"
                              : "transparent",
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
                    ? "oklch(35% 0.2 145)"
                    : "oklch(30% 0.06 145)",
                  background: isActive("/patient-data")
                    ? "oklch(92% 0.04 145)"
                    : "transparent",
                }}
                data-ocid="nav.link"
              >
                Patient Data
                <span
                  className="w-2 h-2 rounded-full pulse-dot"
                  style={{ background: "oklch(50% 0.22 145)" }}
                />
              </Link>
              <NavLink
                to="/contact"
                label="Contact"
                isActive={isActive("/contact")}
              />
            </nav>

            {/* REDCap CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://redcap.tih.org.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="nav.primary_button"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                REDCap Portal
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "oklch(30% 0.08 145)" }}
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
              className="lg:hidden border-t overflow-hidden bg-white"
              style={{
                borderColor: "oklch(88% 0.03 145)",
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
                  { to: "/mhos", label: "MHO Team Directory" },
                  { to: "/gallery", label: "Photo Gallery" },
                  { to: "/leadership", label: "Leadership" },
                  { to: "/workshops", label: "Workshops" },
                  { to: "/awareness", label: "Awareness" },
                  { to: "/annual-reports", label: "Annual Reports" },
                  { to: "/patient-data", label: "Patient Data" },
                  { to: "/contact", label: "Contact" },
                  { to: "/appointment", label: "Appointment" },
                  { to: "/feedback", label: "Feedback" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive(item.to)
                        ? "oklch(35% 0.2 145)"
                        : "oklch(30% 0.06 145)",
                      background: isActive(item.to)
                        ? "oklch(92% 0.04 145)"
                        : "transparent",
                    }}
                    onClick={() => setMobileOpen(false)}
                    data-ocid="nav.link"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://redcap.tih.org.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-center text-white transition-all hover:opacity-90"
                  style={{ background: "oklch(35% 0.2 145)" }}
                  data-ocid="nav.primary_button"
                >
                  REDCap Staff Portal
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "oklch(18% 0.1 145)",
          borderTop: "4px solid oklch(35% 0.2 145)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/pur_umeed_zindagi_logo-019d4e6f-6c29-72ef-aaee-b3a513835820.png"
                  alt="Pur Umeed Zindagi Logo"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-bold text-base text-white">
                    Pur Umeed Zindagi
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(75% 0.04 145)" }}
                  >
                    A Life Full of Hope
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(72% 0.04 145)" }}
              >
                A mental health program of Indus Hospital &amp; Health Network
                Pakistan, providing free psychological services across 4
                regions.
              </p>
              <img
                src="/assets/indus-hospital-logo-019d4e6f-f12b-74e4-abdc-8bbca25cd561.png"
                alt="Indus Hospital & Health Network"
                className="h-10 object-contain"
                style={{ filter: "brightness(1.8) saturate(0.4)" }}
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

            {/* Col 2: Quick Links */}
            <div>
              <h3
                className="font-semibold mb-5 uppercase tracking-widest text-xs"
                style={{ color: "oklch(65% 0.18 145)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/regions", label: "Regions & Sites" },
                  { to: "/leadership", label: "Leadership" },
                  { to: "/psychologists", label: "Psychologists" },
                  { to: "/gallery", label: "Photo Gallery" },
                  { to: "/patient-data", label: "Patient Data" },
                  { to: "/mhos", label: "MHO Directory" },
                  { to: "/feedback", label: "Feedback" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "oklch(72% 0.04 145)" }}
                      data-ocid="nav.link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h3
                className="font-semibold mb-5 uppercase tracking-widest text-xs"
                style={{ color: "oklch(65% 0.18 145)" }}
              >
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <div>
                    <div className="text-sm font-medium text-white">
                      +92 297330160
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(62% 0.04 145)" }}
                    >
                      Program Helpline
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <div>
                    <a
                      href="mailto:Purumeedzindagi@outlook.com"
                      className="text-sm font-medium text-white hover:underline"
                    >
                      Purumeedzindagi@outlook.com
                    </a>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(62% 0.04 145)" }}
                    >
                      Official Program Email
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <div>
                    <div className="text-sm font-medium text-white">
                      Indus Hospital &amp; Health Network
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(62% 0.04 145)" }}
                    >
                      HQ — Karachi, Pakistan
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "oklch(62% 0.04 145)" }}
                    >
                      Badin Office: Dr. Sam, Civil Hospital Badin
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <div>
                    <a
                      href="https://www.indushospital.org.pk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white hover:underline"
                    >
                      www.indushospital.org.pk
                    </a>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(62% 0.04 145)" }}
                    >
                      IHHN Official Website
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "oklch(30% 0.08 145)" }}
          >
            <p className="text-xs" style={{ color: "oklch(60% 0.04 145)" }}>
              &copy; {new Date().getFullYear()} Pur Umeed Zindagi — Indus
              Hospital &amp; Health Network. All rights reserved. |
              <a
                href="https://www.indushospital.org.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:text-white transition-colors underline"
              >
                indushospital.org.pk
              </a>
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "oklch(60% 0.04 145)" }}
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
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
        color: isActive ? "oklch(35% 0.2 145)" : "oklch(30% 0.06 145)",
        background: isActive ? "oklch(92% 0.04 145)" : "transparent",
        fontWeight: isActive ? 600 : 500,
      }}
      data-ocid="nav.link"
    >
      {label}
    </Link>
  );
}
