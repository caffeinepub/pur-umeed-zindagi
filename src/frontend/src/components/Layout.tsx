import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, Outlet } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

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
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-xs">
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
                <div className="font-display text-primary text-lg leading-tight">
                  Pur Umeed Zindagi
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  A Program of IHHN
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                data-ocid="nav.home.link"
              >
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                  data-ocid="nav.about.link"
                >
                  About PUZ <ChevronDown className="w-3.5 h-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="cursor-pointer">
                      History
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="cursor-pointer">
                      Mission &amp; Vision
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/about" className="cursor-pointer">
                      Core Values
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/leadership" className="cursor-pointer">
                      Our Team
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/services"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                data-ocid="nav.services.link"
              >
                Services
              </Link>
              <Link
                to="/regions"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                Regions &amp; Sites
              </Link>
              <Link
                to="/leadership"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                Leadership
              </Link>
              <Link
                to="/psychologists"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                data-ocid="nav.psychologists.link"
              >
                Psychologists
              </Link>
              <Link
                to="/workshops"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                data-ocid="nav.workshops.link"
              >
                Workshops
              </Link>
              <Link
                to="/annual-reports"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                Annual Reports
              </Link>
              <Link
                to="/impact"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                Program Impact
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                data-ocid="nav.contact.link"
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="teal-gradient text-primary-foreground font-semibold gap-2"
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
          <div className="lg:hidden border-t border-border bg-card">
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
                to="/workshops"
                className="py-2 px-3 text-sm font-medium hover:text-primary rounded-md hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.workshops.link"
              >
                Workshops
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
                  className="w-full teal-gradient text-primary-foreground font-semibold gap-2"
                >
                  <a href="tel:+92297330160" data-ocid="appointment.button">
                    <Phone className="w-3.5 h-3.5" />
                    Get Appointment
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
      <footer className="bg-foreground text-primary-foreground">
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
                  <div className="font-display text-lg text-primary-foreground">
                    Pur Umeed Zindagi
                  </div>
                  <div className="text-xs text-primary-foreground/60">
                    A Program of IHHN
                  </div>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                A free mental health program providing compassionate,
                evidence-based care across Pakistan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About PUZ
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/psychologists"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Psychologists
                </Link>
                <Link
                  to="/workshops"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Workshops
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
                <a
                  href="tel:+92297330160"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +92 297330160
                </a>
                <p>Indus Hospital &amp; Health Network, Pakistan</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
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
                className="hover:text-primary-foreground/80 transition-colors"
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
