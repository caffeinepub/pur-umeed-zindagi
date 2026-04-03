import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Calendar,
  CalendarCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  ExternalLink,
  HeartHandshake,
  Lock,
  MapPin,
  Play,
  Shield,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Count-up hook ─────────────────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

// ─── Hero Slider ───────────────────────────────────────────────────────────────
const heroSlides = [
  {
    image: "/assets/generated/mh-hero-1.dim_1920x600.jpg",
    title: "Pur Umeed Zindagi",
    subtitle: "A Life Full of Hope",
    caption:
      "Free, confidential mental health care across 17+ sites in Pakistan",
  },
  {
    image: "/assets/generated/mh-hero-2.dim_1920x600.jpg",
    title: "Community & Support",
    subtitle: "Together We Heal",
    caption:
      "Building a supportive community for mental health across Pakistan",
  },
  {
    image: "/assets/generated/mh-hero-3.dim_1920x600.jpg",
    title: "Professional Care",
    subtitle: "Expert Help, Always Near",
    caption: "Qualified psychologists and trained MHOs ready to help you",
  },
  {
    image: "/assets/generated/mh-hero-4.dim_1920x600.jpg",
    title: "Mental Wellness",
    subtitle: "Mind, Body & Soul",
    caption: "Holistic mental health support for a healthier, happier life",
  },
  {
    image: "/assets/generated/mh-hero-5.dim_1920x600.jpg",
    title: "Hope & Recovery",
    subtitle: "Every Step Counts",
    caption: "Breaking barriers and stigma around mental health in Pakistan",
  },
  {
    image: "/assets/generated/mh-hero-6.dim_1920x600.jpg",
    title: "Rural Outreach",
    subtitle: "Reaching Every Corner",
    caption:
      "Mental health services for underserved communities across Pakistan",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // biome-ignore lint/correctness/useExhaustiveDependencies: auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? "right" : "left");
    setCurrent(idx);
  };

  const prev = () => {
    setDirection("left");
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  };
  const next = () => {
    setDirection("right");
    setCurrent((p) => (p + 1) % heroSlides.length);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden" style={{ height: "560px" }}>
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ x: direction === "right" ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "right" ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image with blur */}
          <div
            className="absolute inset-0 scale-105"
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, oklch(12% 0.1 145 / 0.78) 0%, oklch(18% 0.12 148 / 0.68) 50%, oklch(12% 0.1 145 / 0.78) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay (sharp, above blur) */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border"
              style={{
                background: "oklch(100% 0 0 / 0.12)",
                borderColor: "oklch(100% 0 0 / 0.3)",
                color: "oklch(92% 0.05 145)",
              }}
            >
              A Program of Indus Hospital &amp; Health Network
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3 text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p
              className="text-xl md:text-2xl mb-3 font-light"
              style={{ color: "oklch(88% 0.06 145)" }}
            >
              {slide.subtitle}
            </p>
            <p
              className="text-sm max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "oklch(80% 0.04 145)" }}
            >
              {slide.caption}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="home.primary_button"
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm border transition-opacity hover:opacity-90"
                style={{
                  borderColor: "oklch(100% 0 0 / 0.5)",
                  color: "white",
                  background: "oklch(100% 0 0 / 0.1)",
                }}
                data-ocid="home.secondary_button"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
        style={{
          background: "oklch(100% 0 0 / 0.12)",
          border: "1px solid oklch(100% 0 0 / 0.25)",
        }}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
        style={{
          background: "oklch(100% 0 0 / 0.12)",
          border: "1px solid oklch(100% 0 0 / 0.25)",
        }}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background:
                i === current ? "oklch(70% 0.2 145)" : "oklch(100% 0 0 / 0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Staff Portal Banner ──────────────────────────────────────────────────────────────────────
function StaffPortalBanner() {
  return (
    <div
      className="py-3"
      style={{
        background: "oklch(94% 0.04 145)",
        borderBottom: "1px solid oklch(80% 0.08 145)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(35% 0.2 145)" }}
          >
            <Database className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Lock
                className="w-3 h-3"
                style={{ color: "oklch(40% 0.1 145)" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(40% 0.1 145)" }}
              >
                For MHOs &amp; Staff Only
              </span>
            </div>
            <p
              className="text-sm font-semibold"
              style={{ color: "oklch(25% 0.12 145)" }}
            >
              Staff Data Entry Portal — REDCap
            </p>
          </div>
        </div>
        <a
          href="https://redcap.tih.org.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-85"
          style={{ background: "oklch(35% 0.2 145)" }}
          data-ocid="home.staff_portal.primary_button"
        >
          <Database className="w-4 h-4" />
          Open REDCap Portal
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

// ─── Live Date Bar ──────────────────────────────────────────────────────────────────────────────
function LiveDateBar() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDateStr(
        now.toLocaleDateString("en-PK", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      );
    };
    update();
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();
    const t = setTimeout(update, msUntilMidnight);
    return () => clearTimeout(t);
  }, []);

  if (!dateStr) return null;
  return (
    <div
      className="py-2 px-4 text-center text-xs font-medium"
      style={{
        background: "oklch(96% 0.01 145)",
        borderBottom: "1px solid oklch(88% 0.03 145)",
        color: "oklch(40% 0.06 145)",
      }}
      data-ocid="home.date_badge"
    >
      <span className="inline-flex items-center gap-2">
        <Clock
          className="w-3.5 h-3.5"
          style={{ color: "oklch(40% 0.15 145)" }}
        />
        Today: {dateStr}
      </span>
    </div>
  );
}

// ─── Stats Bar ──────────────────────────────────────────────────────────────────────────────────
function StatItem({
  label,
  value,
  suffix,
  isInView,
  delay,
  isLast,
}: {
  label: string;
  value: number;
  suffix: string;
  isInView: boolean;
  delay: number;
  isLast: boolean;
}) {
  const count = useCountUp(value, 1800, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center py-8 px-4"
      style={{ borderRight: !isLast ? "1px solid oklch(35% 0.1 145)" : "none" }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className="text-xs font-medium uppercase tracking-wide"
        style={{ color: "oklch(75% 0.12 145)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { label: "Patients (2025)", value: 120388, suffix: "+" },
    { label: "Active Sites", value: 17, suffix: "+" },
    { label: "Regions", value: 4, suffix: "" },
    { label: "100% Free Service", value: 100, suffix: "%" },
  ];

  return (
    <div ref={ref} style={{ background: "oklch(25% 0.15 145)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              label={s.label}
              value={s.value}
              suffix={s.suffix}
              isInView={isInView}
              delay={i * 0.1}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Appointment Form ───────────────────────────────────────────────────────────────────────────
interface ApptForm {
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  region: string;
  preferredDate: string;
  preferredTime: string;
  complaint: string;
}

const EMPTY_FORM: ApptForm = {
  fullName: "",
  phone: "",
  age: "",
  gender: "",
  region: "",
  preferredDate: "",
  preferredTime: "",
  complaint: "",
};

function AppointmentSection() {
  const [form, setForm] = useState<ApptForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ApptForm>>({});
  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const e: Partial<ApptForm> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.age.trim()) e.age = "Age is required";
    if (!form.gender) e.gender = "Gender is required";
    if (!form.region.trim()) e.region = "Region/City is required";
    if (!form.preferredDate) e.preferredDate = "Preferred date is required";
    if (!form.preferredTime) e.preferredTime = "Preferred time is required";
    if (!form.complaint.trim()) e.complaint = "Please describe your reason";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      const mailBody = `Appointment Request - Pur Umeed Zindagi\n====================================\nFull Name: ${form.fullName}\nPhone: ${form.phone}\nAge: ${form.age}\nGender: ${form.gender}\nCity / Region: ${form.region}\nPreferred Date: ${form.preferredDate}\nPreferred Time: ${form.preferredTime}\nConcern / Complaint: ${form.complaint}\n====================================\nSubmitted via Pur Umeed Zindagi website.`;
      const subject = encodeURIComponent(
        "Appointment Request - Pur Umeed Zindagi",
      );
      window.location.href = `mailto:Purumeedzindagi@outlook.com?subject=${subject}&body=${encodeURIComponent(mailBody)}`;
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof ApptForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section className="py-20" style={{ background: "oklch(96% 0.01 145)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4"
            style={{ background: "oklch(35% 0.2 145 / 0.1)" }}
          >
            <CalendarCheck
              className="w-6 h-6"
              style={{ color: "oklch(35% 0.2 145)" }}
            />
          </div>
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{ color: "oklch(35% 0.2 145)" }}
          >
            Free Service
          </p>
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: "oklch(20% 0.06 145)" }}
          >
            Book an Appointment
          </h2>
          <p className="text-sm" style={{ color: "oklch(45% 0.04 145)" }}>
            Fill out the form below. Our team will contact you within 24 hours —
            completely free.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-10 text-center border"
            style={{ borderColor: "oklch(88% 0.03 145)" }}
            data-ocid="home.appointment.success_state"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "oklch(35% 0.2 145 / 0.1)" }}
            >
              <CheckCircle
                className="w-8 h-8"
                style={{ color: "oklch(35% 0.2 145)" }}
              />
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Request Received!
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
              style={{ color: "oklch(45% 0.04 145)" }}
            >
              Your appointment request has been received. Our team will contact
              you within 24 hours.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setForm(EMPTY_FORM);
              }}
              className="px-6 py-2 rounded-xl font-semibold text-sm text-white"
              style={{ background: "oklch(35% 0.2 145)" }}
              data-ocid="home.appointment.secondary_button"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 space-y-5 border"
            style={{
              borderColor: "oklch(88% 0.03 145)",
              boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.08)",
            }}
            data-ocid="home.appointment.modal"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Patient Full Name{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="Enter patient's full name"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="h-11"
                  data-ocid="home.appointment.input"
                />
                {errors.fullName && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Phone Number{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Input
                  type="tel"
                  placeholder="0300-1234567"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-11"
                  data-ocid="home.appointment.input"
                />
                {errors.phone && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Age <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="e.g. 32"
                  min={1}
                  max={120}
                  value={form.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  className="h-11"
                  data-ocid="home.appointment.input"
                />
                {errors.age && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.age}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Gender <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Select
                  value={form.gender}
                  onValueChange={(v) => handleChange("gender", v)}
                >
                  <SelectTrigger
                    className="h-11"
                    data-ocid="home.appointment.select"
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.gender}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Region / City{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. Karachi, Badin"
                  value={form.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  className="h-11"
                  data-ocid="home.appointment.input"
                />
                {errors.region && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.region}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Preferred Date{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Input
                  type="date"
                  min={today}
                  value={form.preferredDate}
                  onChange={(e) =>
                    handleChange("preferredDate", e.target.value)
                  }
                  className="h-11"
                  data-ocid="home.appointment.input"
                />
                {errors.preferredDate && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Preferred Time{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Select
                  value={form.preferredTime}
                  onValueChange={(v) => handleChange("preferredTime", v)}
                >
                  <SelectTrigger
                    className="h-11"
                    data-ocid="home.appointment.select"
                  >
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Morning 9am-12pm">
                      Morning — 9:00 AM to 12:00 PM
                    </SelectItem>
                    <SelectItem value="Afternoon 12pm-3pm">
                      Afternoon — 12:00 PM to 3:00 PM
                    </SelectItem>
                    <SelectItem value="Evening 3pm-6pm">
                      Evening — 3:00 PM to 6:00 PM
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredTime && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(30% 0.06 145)" }}>
                  Reason / Chief Complaint{" "}
                  <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                </Label>
                <Textarea
                  rows={4}
                  placeholder="Briefly describe the reason for your appointment..."
                  value={form.complaint}
                  onChange={(e) => handleChange("complaint", e.target.value)}
                  style={{ resize: "vertical" }}
                  data-ocid="home.appointment.textarea"
                />
                {errors.complaint && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.complaint}
                  </p>
                )}
              </div>
            </div>

            <div
              className="rounded-xl p-4 text-sm"
              style={{
                background: "oklch(94% 0.04 145)",
                border: "1px solid oklch(80% 0.08 145)",
                color: "oklch(35% 0.08 145)",
              }}
            >
              <strong style={{ color: "oklch(28% 0.15 145)" }}>
                Important:
              </strong>{" "}
              All services are completely free of charge. Your information is
              kept strictly confidential. Our team will call you within 24 hours
              to confirm your appointment.
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-sm font-semibold rounded-xl text-white"
              style={{ background: "oklch(35% 0.2 145)" }}
              data-ocid="home.appointment.submit_button"
            >
              Submit Appointment Request
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────────────────────────
// ─── Psychologist profile data ─────────────────────────────────────────────────────────────────
const homePsychologists = [
  {
    name: "Tasleem Barkat",
    region: "Karachi",
    role: "Regional Psychologist",
    photo: "/assets/generated/tasleem-barkat-photo.dim_400x400.jpg",
    clinicDays: null as string[] | null,
    accentColor: "oklch(35% 0.2 145)",
    sites: ["Korangi Campus (KC)", "Baba Island"],
    specializations: [
      "Depression & Mood Disorders",
      "Anxiety Management",
      "Trauma-Informed Care",
      "Family Counseling",
    ],
    services: [
      "Individual Counseling",
      "Psychological Assessment",
      "Group Therapy",
      "Supervision of MHOs",
    ],
  },
  {
    name: "Danish Khan",
    region: "Sindh",
    role: "Regional Psychologist",
    photo: "/assets/generated/danish-khan-psychologist.dim_400x400.jpg",
    clinicDays: ["Monday", "Wednesday"] as string[] | null,
    accentColor: "oklch(35% 0.18 200)",
    sites: [
      "CHB (Civil Hospital Badin)",
      "Makli",
      "Matli",
      "Khorwah",
      "Shadi Large",
      "Sehwan",
      "MMB (Medical Mobile Bus)",
    ],
    specializations: [
      "CBT & Behavioral Interventions",
      "Stress & Burnout",
      "Community Mental Health",
      "MHO Training",
    ],
    services: [
      "Psychological Counseling",
      "Training Workshops",
      "Case Supervision",
      "Awareness Programs",
    ],
  },
  {
    name: "Tariq Aziz",
    region: "Balochistan",
    role: "Regional Psychologist",
    photo: "/assets/generated/tariq-aziz-photo.dim_400x400.jpg",
    clinicDays: null as string[] | null,
    accentColor: "oklch(40% 0.16 300)",
    sites: ["Saranan (PCP)", "Nokundi (PCP)"],
    specializations: [
      "Cultural Adaptation of Therapy",
      "Grief & Loss Counseling",
      "Crisis Intervention",
      "Psychoeducation",
    ],
    services: [
      "Individual & Group Therapy",
      "Psychiatric Referral Support",
      "Community Outreach",
      "End-of-Treatment Evaluation",
    ],
  },
];

type PsychProfile = (typeof homePsychologists)[0];

// ─── Photo Slideshow ───────────────────────────────────────────────────────────────────────────
const slidePhotos = [
  "/assets/snapchat-847966840-019d4f5c-4194-72ae-8b29-1624330cdd15.jpg",
  "/assets/snapchat-1948415730-019d4f5c-443f-701e-bf5a-86238153fcc8.jpg",
  "/assets/img-20260326-wa0053-019d4f54-c37f-73d8-8021-1ef555c6a95c.jpg",
  "/assets/img-20260326-wa0054-019d4f54-c3ba-722f-87dc-c6a4ea3aa52c.jpg",
  "/assets/images_-_2026-04-02t185141.867-019d4e77-efab-7739-bc9e-71c502114b5c.jpeg",
  "/assets/images_-_2026-04-02t185141.867-019d4ebd-a823-7098-ae11-cc7041371614.jpeg",
  "/assets/images_-_2026-04-02t185141.867-019d4f05-7a25-709a-bab6-99c578f28db3.jpeg",
  "/assets/img_20251209_171017_589-019d4f56-f6c0-7458-9fc4-41436fa998de.webp",
  "/assets/img_20251209_173323_310-019d4f56-f389-7758-8c66-58f2643c1214.webp",
  "/assets/img_20251209_173332_007-019d4f56-f43d-7078-8ae5-9b952d81b79d.webp",
];

function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const total = slidePhotos.length;

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const visibleCount = isDesktop ? 3 : 1;
  const step = visibleCount;
  const maxIndex = Math.max(0, total - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = prev + step;
        return next > maxIndex ? 0 : next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [step, maxIndex]);

  const prev = () => setCurrent((p) => (p - step < 0 ? maxIndex : p - step));
  const next = () => setCurrent((p) => (p + step > maxIndex ? 0 : p + step));

  const dotCount = Math.ceil(total / visibleCount);
  const activeDot = Math.floor(current / visibleCount);

  return (
    <section className="py-14" style={{ background: "oklch(97% 0.01 145)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "oklch(25% 0.15 145)" }}
            >
              Photo Gallery
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(50% 0.04 145)" }}
            >
              Program Moments
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
            style={{
              color: "oklch(35% 0.2 145)",
              border: "1px solid oklch(35% 0.2 145 / 0.4)",
              background: "oklch(35% 0.2 145 / 0.06)",
            }}
            data-ocid="home.gallery.link"
          >
            View All Photos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Photos strip */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(current / visibleCount) * 100}%)`,
                width: `${(total / visibleCount) * 100}%`,
              }}
            >
              {slidePhotos.map((src, i) => (
                <div
                  key={src}
                  className="flex-shrink-0 px-1.5"
                  style={{ width: `${100 / total}%` }}
                >
                  <div
                    className="overflow-hidden rounded-xl h-52 md:h-56"
                    style={{
                      boxShadow: "0 4px 16px oklch(30% 0.1 145 / 0.12)",
                      border: "1px solid oklch(88% 0.03 145)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`PUZ Program session ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 z-10"
            style={{
              background: "oklch(35% 0.2 145)",
              boxShadow: "0 2px 8px oklch(25% 0.15 145 / 0.35)",
            }}
            data-ocid="home.gallery.pagination_prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 z-10"
            style={{
              background: "oklch(35% 0.2 145)",
              boxShadow: "0 2px 8px oklch(25% 0.15 145 / 0.35)",
            }}
            data-ocid="home.gallery.pagination_next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {[...Array(dotCount).keys()].map((dotIdx) => (
            <button
              key={`slide-dot-${dotIdx}`}
              type="button"
              onClick={() => setCurrent(dotIdx * visibleCount)}
              className="rounded-full transition-all duration-300"
              style={{
                width: dotIdx === activeDot ? "24px" : "8px",
                height: "8px",
                background:
                  dotIdx === activeDot
                    ? "oklch(35% 0.2 145)"
                    : "oklch(70% 0.06 145)",
              }}
              data-ocid="home.gallery.toggle"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const counterRef = useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true, margin: "-100px" });
  const count = useCountUp(120388, 2500, counterInView);
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<PsychProfile | null>(null);

  useEffect(() => {
    if (!selectedPsychologist) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPsychologist(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedPsychologist]);

  return (
    <div
      style={{
        backgroundImage:
          'url("/assets/generated/hero-bg-indus-hospital.dim_1920x1080.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Full-page semi-transparent overlay so content stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.82)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Staff Portal Banner */}
        <StaffPortalBanner />

        {/* Live Date Bar */}
        <LiveDateBar />

        {/* ── Hero Slider ─────────────────────────────────────── */}
        <HeroSlider />

        {/* ── Stats Band ──────────────────────────────────────── */}
        <StatsBand />

        {/* ── Self Screening Banner ───────────────────────────── */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl p-8 border-2"
              style={{
                borderColor: "oklch(70% 0.12 145)",
                background: "oklch(97% 0.03 145)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(35% 0.2 145)" }}
                >
                  <svg
                    role="img"
                    aria-label="Self screening form icon"
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Self Screening
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "oklch(45% 0.05 145)" }}
                  >
                    PHQ-4 &mdash; Check your mental health in 2 minutes.
                    English, Roman Urdu aur Urdu mein
                  </p>
                </div>
              </div>
              <Link
                to="/self-screening"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 flex-shrink-0"
                style={{ background: "oklch(35% 0.2 145)" }}
              >
                Start Screening{" "}
                <svg
                  role="img"
                  aria-label="Arrow right"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── About Strip ─────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: "oklch(35% 0.2 145)" }}
                >
                  Our Mission
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-5"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  Why Pur Umeed Zindagi?
                </h2>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "oklch(40% 0.04 145)" }}
                >
                  Pur Umeed Zindagi was established in 2018 under Indus Hospital
                  &amp; Health Network to bring accessible, stigma-free
                  psychological care to underserved communities across Pakistan.
                </p>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "oklch(40% 0.04 145)" }}
                >
                  Our trained Mental Health Officers and Clinical Psychologists
                  work across 17 sites in Karachi, Sindh, Balochistan, and
                  Punjab — providing screenings, counseling, and follow-up care
                  completely free of charge.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Evidence-Based",
                    "Culturally Sensitive",
                    "Trauma-Informed",
                    "Community-Led",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        borderColor: "oklch(70% 0.12 145)",
                        color: "oklch(35% 0.18 145)",
                        background: "oklch(94% 0.04 145)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "2018", label: "Founded" },
                  { value: "4", label: "Regions" },
                  { value: "17+", label: "Sites" },
                  { value: "3", label: "Psychologists" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-8 border text-center card-hover"
                    style={{
                      background: "white",
                      borderColor: "oklch(88% 0.03 145)",
                      boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Live Patient Counter ───────────────────────────── */}
        <div
          ref={counterRef}
          className="py-16 text-center"
          style={{ background: "oklch(96% 0.01 145)" }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={counterInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Live Counter — 2025
              </p>
              <div
                className="text-6xl md:text-7xl font-bold tracking-tight mb-2"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                {count.toLocaleString()}
              </div>
              <div
                className="text-lg font-semibold mb-1"
                style={{ color: "oklch(25% 0.08 145)" }}
              >
                Patients Seen in 2025
              </div>
              <div className="text-sm" style={{ color: "oklch(50% 0.04 145)" }}>
                Across 4 regions · 17+ sites · Karachi, Sindh, Balochistan,
                Punjab
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Psychologists ───────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-2"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Our Team
              </p>
              <h2
                className="text-3xl font-bold"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Regional Psychologists
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {homePsychologists.map((p, i) => (
                <motion.button
                  key={p.name}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border text-center card-hover cursor-pointer group w-full"
                  style={{
                    borderColor: "oklch(88% 0.03 145)",
                    boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
                  }}
                  onClick={() => setSelectedPsychologist(p)}
                  data-ocid={`psychologists.item.${i + 1}`}
                >
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4"
                    style={{ borderColor: p.accentColor }}
                  />
                  <h3
                    className="text-lg font-bold mb-0.5"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    {p.name}
                  </h3>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: p.accentColor }}
                  >
                    {p.role}
                  </div>
                  <div
                    className="text-xs mb-3"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    {p.region} Region
                  </div>
                  {p.clinicDays && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-3"
                      style={{
                        background: "oklch(92% 0.04 145)",
                        color: "oklch(30% 0.15 145)",
                      }}
                    >
                      Clinic: {p.clinicDays.join(" & ")}
                    </div>
                  )}
                  <div
                    className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: p.accentColor }}
                  >
                    <ArrowRight className="w-3 h-3" />
                    View Profile
                  </div>
                </motion.button>
              ))}
            </div>

            {/* ── Psychologist Profile Modal ─────────────────────────── */}
            {selectedPsychologist && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ background: "rgba(0,0,0,0.55)" }}
                onClick={() => setSelectedPsychologist(null)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSelectedPsychologist(null);
                }}
                data-ocid="psychologists.modal"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    type="button"
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                    onClick={() => setSelectedPsychologist(null)}
                    data-ocid="psychologists.modal.close_button"
                    aria-label="Close profile"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>

                  {/* Header */}
                  <div
                    className="p-8 pb-6 text-center border-b"
                    style={{ borderColor: "oklch(92% 0.03 145)" }}
                  >
                    <img
                      src={selectedPsychologist.photo}
                      alt={selectedPsychologist.name}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto mb-4 border-4"
                      style={{ borderColor: selectedPsychologist.accentColor }}
                    />
                    <h2
                      className="text-3xl font-bold mb-1"
                      style={{ color: "oklch(15% 0.06 145)" }}
                    >
                      {selectedPsychologist.name}
                    </h2>
                    <p
                      className="text-base font-medium mb-1"
                      style={{ color: selectedPsychologist.accentColor }}
                    >
                      {selectedPsychologist.role}
                    </p>
                    <div
                      className="flex items-center justify-center gap-1.5 text-sm"
                      style={{ color: "oklch(45% 0.04 145)" }}
                    >
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: selectedPsychologist.accentColor }}
                      />
                      {selectedPsychologist.region} Region
                    </div>
                    {selectedPsychologist.clinicDays && (
                      <div
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl text-sm font-semibold"
                        style={{
                          background: "oklch(93% 0.04 145)",
                          color: "oklch(28% 0.15 145)",
                        }}
                      >
                        <Calendar className="w-4 h-4" />
                        Clinic Days:{" "}
                        {selectedPsychologist.clinicDays.join(" & ")}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sites */}
                    <div>
                      <h4
                        className="text-sm font-bold uppercase tracking-wide mb-3"
                        style={{ color: selectedPsychologist.accentColor }}
                      >
                        Sites Covered
                      </h4>
                      <ul className="space-y-2">
                        {selectedPsychologist.sites.map((site) => (
                          <li
                            key={site}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "oklch(30% 0.04 145)" }}
                          >
                            <MapPin
                              className="w-4 h-4 mt-0.5 shrink-0"
                              style={{
                                color: selectedPsychologist.accentColor,
                              }}
                            />
                            {site}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4
                        className="text-sm font-bold uppercase tracking-wide mb-3"
                        style={{ color: selectedPsychologist.accentColor }}
                      >
                        Specializations
                      </h4>
                      <ul className="space-y-2">
                        {selectedPsychologist.specializations.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "oklch(30% 0.04 145)" }}
                          >
                            <CheckCircle
                              className="w-4 h-4 mt-0.5 shrink-0"
                              style={{
                                color: selectedPsychologist.accentColor,
                              }}
                            />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Services */}
                    <div>
                      <h4
                        className="text-sm font-bold uppercase tracking-wide mb-3"
                        style={{ color: selectedPsychologist.accentColor }}
                      >
                        Services Offered
                      </h4>
                      <ul className="space-y-2">
                        {selectedPsychologist.services.map((svc) => (
                          <li
                            key={svc}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "oklch(30% 0.04 145)" }}
                          >
                            <CheckCircle
                              className="w-4 h-4 mt-0.5 shrink-0"
                              style={{
                                color: selectedPsychologist.accentColor,
                              }}
                            />
                            {svc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-8 pb-8 text-center">
                    <Link
                      to="/psychologists"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:bg-green-50"
                      style={{
                        borderColor: selectedPsychologist.accentColor,
                        color: selectedPsychologist.accentColor,
                      }}
                      onClick={() => setSelectedPsychologist(null)}
                      data-ocid="psychologists.modal.link"
                    >
                      View Full Psychologists Page{" "}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            )}
            <div className="mt-8 text-center">
              <Link
                to="/psychologists"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border transition-colors hover:bg-green-50"
                style={{
                  borderColor: "oklch(70% 0.12 145)",
                  color: "oklch(35% 0.2 145)",
                }}
                data-ocid="home.psychologists.secondary_button"
              >
                View Full Profiles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Patient Data Preview 2026 ───────────────────────── */}
        <section
          className="py-16"
          style={{ background: "oklch(96% 0.01 145)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <p
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "oklch(35% 0.2 145)" }}
                >
                  MHO Patient Data — 2026
                </p>
                <span
                  className="w-2 h-2 rounded-full pulse-dot"
                  style={{ background: "oklch(40% 0.2 145)" }}
                />
              </div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Screening, Enrollment &amp; End of Treatment
              </h2>
              {/* Daily change notice in English + Urdu */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mt-1"
                style={{
                  background: "oklch(92% 0.06 145)",
                  color: "oklch(30% 0.18 145)",
                  border: "1px solid oklch(82% 0.08 145)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "oklch(45% 0.22 145)" }}
                />
                یہ اعداد روزانہ تبدیل ہوتے ہیں — These numbers change daily
              </div>
            </div>

            {/* 2026 Data Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Screening",
                  labelUr: "اسکریننگ",
                  value: "25,000",
                  icon: "🔍",
                },
                {
                  label: "Enrolled",
                  labelUr: "اندراج",
                  value: "9,000",
                  icon: "📋",
                },
                {
                  label: "End of Treatment",
                  labelUr: "علاج مکمل",
                  value: "1,000",
                  icon: "✅",
                },
              ].map((d) => (
                <div
                  key={d.label}
                  className="bg-white rounded-2xl p-6 border text-center"
                  style={{
                    borderColor: "oklch(88% 0.03 145)",
                    boxShadow: "0 4px 16px oklch(50% 0.06 145 / 0.08)",
                  }}
                >
                  <div className="text-3xl mb-2">{d.icon}</div>
                  <div
                    className="text-3xl font-extrabold mb-1"
                    style={{ color: "oklch(25% 0.18 145)" }}
                  >
                    {d.value}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "oklch(35% 0.12 145)" }}
                  >
                    {d.label}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(50% 0.06 145)" }}
                  >
                    {d.labelUr}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/patient-data"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "oklch(35% 0.2 145)" }}
                data-ocid="home.patient_data.link"
              >
                View Full Patient Data <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Videos ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                style={{ background: "oklch(94% 0.04 145)" }}
              >
                <Play
                  className="w-5 h-5"
                  style={{ color: "oklch(35% 0.2 145)" }}
                />
              </div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-2"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Awareness &amp; Education
              </p>
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Mental Health Awareness
              </h2>
              <p
                className="text-sm max-w-xl mx-auto"
                style={{ color: "oklch(45% 0.04 145)" }}
              >
                Educational videos on anxiety and depression — understand the
                causes, symptoms, and paths to recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "ZidGozDhOjg",
                  title: "Understanding Anxiety",
                  desc: "Learn about anxiety disorder — its causes, symptoms, and evidence-based coping strategies.",
                },
                {
                  id: "XiCrniLQGYc",
                  title: "Understanding Depression",
                  desc: "Recognizing the signs of depression and available treatment options for recovery.",
                },
              ].map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl overflow-hidden border card-hover"
                  style={{
                    borderColor: "oklch(88% 0.03 145)",
                    boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                  }}
                  data-ocid={`videos.item.${i + 1}`}
                >
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-sm font-bold mb-1"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      {video.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      {video.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MHO Team CTA ─────────────────────────────────────── */}
        <section
          className="py-10"
          style={{
            background: "oklch(96% 0.01 145)",
            borderTop: "1px solid oklch(88% 0.03 145)",
            borderBottom: "1px solid oklch(88% 0.03 145)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(35% 0.2 145)" }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3
                  className="text-base font-bold"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  Meet Our 34+ Mental Health Officers
                </h3>
                <p className="text-sm" style={{ color: "oklch(45% 0.04 145)" }}>
                  Dedicated MHOs working across 17 sites in Karachi, Sindh,
                  Balochistan, and Punjab.
                </p>
              </div>
            </div>
            <Link
              to="/mhos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-colors hover:bg-green-50 flex-shrink-0"
              style={{
                borderColor: "oklch(65% 0.15 145)",
                color: "oklch(35% 0.2 145)",
              }}
              data-ocid="home.mho_team.link"
            >
              <Sparkles className="w-4 h-4" />
              View Full MHO Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── Quote ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "oklch(94% 0.04 145)" }}
              >
                <span
                  className="text-2xl font-serif"
                  style={{ color: "oklch(35% 0.2 145)" }}
                >
                  &ldquo;
                </span>
              </div>
              <blockquote
                className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic"
                style={{ color: "oklch(30% 0.06 145)" }}
              >
                Mental health is not a luxury — it is a right. Every person
                deserves access to compassionate, evidence-based care,
                regardless of where they live or what they can afford.
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <Brain
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div className="text-left">
                  <div
                    className="font-bold text-sm"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Dr. Hiba Ashraf
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Director, Primary Care Program · Indus Hospital &amp; Health
                    Network
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Appointment Form ──────────────────────────────────── */}
        <AppointmentSection />

        {/* ── Photo Slideshow ───────────────────────────────────── */}
        <PhotoSlideshow />

        {/* ── Get Help CTA ─────────────────────────────────────── */}
        <section
          className="py-20"
          style={{ background: "oklch(25% 0.15 145)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                style={{ background: "oklch(35% 0.2 145)" }}
              >
                <HeartHandshake className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                You Don&apos;t Have to Face It Alone
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
                style={{ color: "oklch(80% 0.08 145)" }}
              >
                Our trained professionals are here to listen, support, and guide
                you. All services are completely free and confidential.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-white transition-opacity hover:opacity-90"
                  style={{ color: "oklch(25% 0.15 145)" }}
                  data-ocid="home.get_help.primary_button"
                >
                  Get Help Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border border-white/30 text-white transition-opacity hover:opacity-90"
                  data-ocid="home.get_help.secondary_button"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Mini Footer note ─────────────────────────────────── */}
        <div
          className="py-5 text-center text-xs"
          style={{
            background: "oklch(96% 0.01 145)",
            borderTop: "1px solid oklch(88% 0.03 145)",
            color: "oklch(50% 0.04 145)",
          }}
        >
          <Shield
            className="w-3.5 h-3.5 inline mr-1.5"
            style={{ color: "oklch(45% 0.15 145)" }}
          />
          All services are free, confidential, and evidence-based. IHHN Mental
          Health Program.
        </div>
      </div>
    </div>
  );
}
