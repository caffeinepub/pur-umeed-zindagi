import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Activity, ChevronDown, Heart, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

function NavLink({
  to,
  children,
  onClick,
  className = "",
  "data-ocid": ocid,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "data-ocid"?: string;
}) {
  const router = useRouterState();
  const isActive = router.location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      data-ocid={ocid}
      className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative
        ${
          isActive
            ? "text-primary bg-primary/10 font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary"
            : "text-foreground hover:text-primary hover:bg-secondary"
        } ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border shadow-sm">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/generated/puz-logo-transparent.dim_200x200.png"
                alt="PUZ Logo"
                className="w-9 h-9 object-contain"
              />
              <div>
                <div className="font-display text-primary text-lg leading-tight font-semibold">
                  Pur Umeed Zindagi
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  A Program of IHHN
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink to="/" data-ocid="nav.home.link">
                Home
              </NavLink>
              <NavLink to="/about" data-ocid="nav.about.link">
                About
              </NavLink>

              {/* Program Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                  data-ocid="nav.program.dropdown_menu"
                >
                  Program <ChevronDown className="w-3.5 h-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="border-border">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/services"
                      className="cursor-pointer"
                      data-ocid="nav.services.link"
                    >
                      Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/regions" className="cursor-pointer">
                      Regions &amp; Sites
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/impact" className="cursor-pointer">
                      Program Impact
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/psychologists"
                      className="cursor-pointer"
                      data-ocid="nav.psychologists.link"
                    >
                      Psychologists
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/mhos"
                      className="cursor-pointer"
                      data-ocid="nav.mhos.link"
                    >
                      MHO Team Directory
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <NavLink to="/leadership">Leadership</NavLink>
              <NavLink to="/workshops" data-ocid="nav.workshops.link">
                Workshops
              </NavLink>
              <NavLink to="/awareness" data-ocid="nav.awareness.link">
                Awareness
              </NavLink>
              <NavLink to="/annual-reports">Reports</NavLink>

              {/* Patient Data — accent link */}
              <Link
                to="/patient-data"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-all rounded-md text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25"
                data-ocid="nav.patient.data.link"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Activity className="w-3.5 h-3.5" />
                Patient Data
              </Link>

              <NavLink to="/contact" data-ocid="nav.contact.link">
                Contact
              </NavLink>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="teal-gradient text-white font-semibold gap-2 shadow-sm"
              >
                <a href="tel:+92297330160" data-ocid="appointment.button">
                  <Phone className="w-3.5 h-3.5" />
                  Get Appointment
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
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
        {mobileOpen && (
          <div className="lg:hidden border-t-2 border-border bg-card">
            <div className="container max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              <Link
                to="/"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.home.link"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.about.link"
              >
                About PUZ
              </Link>
              <Link
                to="/services"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.services.link"
              >
                Services
              </Link>
              <Link
                to="/regions"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                Regions &amp; Sites
              </Link>
              <Link
                to="/leadership"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                Leadership
              </Link>
              <Link
                to="/psychologists"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.psychologists.link"
              >
                Psychologists
              </Link>
              <Link
                to="/mhos"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.mhos.link"
              >
                MHO Directory
              </Link>
              <Link
                to="/workshops"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.workshops.link"
              >
                Workshops
              </Link>
              <Link
                to="/awareness"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.awareness.link"
              >
                Awareness
              </Link>
              <Link
                to="/annual-reports"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                Annual Reports
              </Link>
              <Link
                to="/impact"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                Program Impact
              </Link>
              <Link
                to="/patient-data"
                className="py-2 px-3 text-sm font-semibold text-primary bg-primary/10 border border-primary/25 rounded-md flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.patient.data.link"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Activity className="w-4 h-4" /> Patient Data
              </Link>
              <Link
                to="/contact"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.contact.link"
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full teal-gradient text-white font-semibold gap-2"
                >
                  <a href="tel:+92297330160" data-ocid="appointment.button">
                    <Phone className="w-3.5 h-3.5" /> Get Appointment
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card text-foreground">
        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/generated/puz-logo-transparent.dim_200x200.png"
                  alt="PUZ"
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
                <div>
                  <div className="font-display text-lg text-foreground">
                    Pur Umeed Zindagi
                  </div>
                  <div className="text-xs text-muted-foreground">
                    A Program of IHHN
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A free mental health program providing compassionate,
                evidence-based care across Pakistan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About PUZ
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/psychologists"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Psychologists
                </Link>
                <Link
                  to="/mhos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MHO Directory
                </Link>
                <Link
                  to="/workshops"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Workshops
                </Link>
                <Link
                  to="/awareness"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="nav.awareness.link"
                >
                  Awareness
                </Link>
                <Link
                  to="/patient-data"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  data-ocid="nav.patient.data.link"
                >
                  <Activity className="w-3 h-3" /> Patient Data
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="tel:+92297330160"
                  className="hover:text-foreground transition-colors"
                >
                  +92 297330160
                </a>
                <p>Indus Hospital &amp; Health Network, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/70">
            <div>
              &copy; 2018&ndash;{currentYear} Pur Umeed Zindagi &middot; Privacy
              &amp; Confidentiality &middot; Ethical Practices &middot; Free
              Services
            </div>
            <div>
              Built with <Heart className="inline w-3 h-3 text-red-400" /> using{" "}
              <a
                href={caffeineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
