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
  CalendarCheck,
  CheckCircle,
  Clock,
  Database,
  ExternalLink,
  HeartHandshake,
  Leaf,
  Lock,
  MapPin,
  Play,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Count-up hook ────────────────────────────────────────────────────────────
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

// ─── Live Date Badge ──────────────────────────────────────────────────────────
function LiveDateBadge() {
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

  return (
    <div className="flex justify-center mb-6">
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
        style={{
          background: "oklch(14% 0.05 145 / 0.7)",
          border: "1px solid oklch(35% 0.14 145 / 0.5)",
          color: "oklch(80% 0.12 145)",
        }}
        data-ocid="home.date_badge"
      >
        <Clock
          className="w-3.5 h-3.5"
          style={{ color: "oklch(65% 0.22 145)" }}
        />
        <span>{dateStr}</span>
      </div>
    </div>
  );
}

// ─── Counter Band ─────────────────────────────────────────────────────────────
function CounterBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(120388, 2500, isInView);

  return (
    <div
      ref={ref}
      className="py-14 text-center"
      style={{ background: "oklch(16% 0.055 145)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-6xl md:text-7xl font-bold tracking-tight mb-2"
            style={{ color: "oklch(65% 0.22 145)" }}
          >
            {count.toLocaleString()}
          </div>
          <div
            className="text-lg font-semibold mb-1"
            style={{ color: "oklch(92% 0.01 145)" }}
          >
            Patients Seen in 2025
          </div>
          <div className="text-sm" style={{ color: "oklch(65% 0.025 145)" }}>
            Across 4 regions · 17+ sites · Karachi, Sindh, Balochistan, Punjab
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────
function StatItem({
  label,
  value,
  suffix,
  isInView,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 1800, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center py-5"
    >
      <div
        className="text-2xl font-bold"
        style={{ color: "oklch(92% 0.01 145)" }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className="text-xs mt-1 font-medium"
        style={{ color: "oklch(68% 0.04 145)" }}
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
    { label: "Regions", value: 4, suffix: "" },
    { label: "Sites", value: 17, suffix: "+" },
    { label: "Psychologists", value: 3, suffix: "" },
    { label: "MHOs", value: 34, suffix: "+" },
    { label: "Patients (2025)", value: 120388, suffix: "" },
  ];

  return (
    <div
      ref={ref}
      className="border-y"
      style={{
        background: "oklch(20% 0.06 145)",
        borderColor: "oklch(28% 0.08 145)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              {...s}
              isInView={isInView}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Appointment Form ─────────────────────────────────────────────────────────
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
      const mailBody = `Appointment Request - Pur Umeed Zindagi
====================================
Full Name: ${form.fullName}
Phone: ${form.phone}
Age: ${form.age}
Gender: ${form.gender}
City / Region: ${form.region}
Preferred Date: ${form.preferredDate}
Preferred Time: ${form.preferredTime}
Concern / Complaint: ${form.complaint}
====================================
Submitted via Pur Umeed Zindagi website.`;
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

  const inputStyle = (hasError: boolean) => ({
    background: "oklch(18% 0.05 145)",
    borderColor: hasError ? "oklch(55% 0.22 25)" : "oklch(30% 0.08 145)",
    color: "oklch(92% 0.01 145)",
  });

  return (
    <section className="py-20" style={{ background: "oklch(13% 0.045 145)" }}>
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
            style={{ background: "oklch(58% 0.22 145 / 0.15)" }}
          >
            <CalendarCheck
              className="w-6 h-6"
              style={{ color: "oklch(65% 0.22 145)" }}
            />
          </div>
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{ color: "oklch(65% 0.22 145)" }}
          >
            Free Service
          </p>
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: "oklch(94% 0.008 145)" }}
          >
            Book an Appointment
          </h2>
          <p className="text-sm" style={{ color: "oklch(65% 0.025 145)" }}>
            Fill out the form below. Our team will contact you within 24 hours —
            completely free.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-10 text-center border"
            style={{
              background: "oklch(16% 0.05 145)",
              borderColor: "oklch(28% 0.08 145)",
            }}
            data-ocid="home.appointment.success_state"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "oklch(65% 0.22 145 / 0.15)" }}
            >
              <CheckCircle
                className="w-8 h-8"
                style={{ color: "oklch(65% 0.22 145)" }}
              />
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "oklch(94% 0.008 145)" }}
            >
              Request Received!
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
              style={{ color: "oklch(68% 0.025 145)" }}
            >
              Your appointment request has been received. Our team will contact
              you within 24 hours.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setForm(EMPTY_FORM);
              }}
              className="px-6 py-2 rounded-xl font-semibold text-sm"
              style={{ background: "oklch(55% 0.22 145)", color: "white" }}
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
            className="rounded-2xl p-6 sm:p-8 space-y-5 border"
            style={{
              background: "oklch(16% 0.05 145)",
              borderColor: "oklch(28% 0.08 145)",
            }}
            data-ocid="home.appointment.modal"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Patient Full Name{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="Enter patient's full name"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="h-11"
                  style={inputStyle(!!errors.fullName)}
                  data-ocid="home.appointment.input"
                />
                {errors.fullName && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Phone Number{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Input
                  type="tel"
                  placeholder="0300-1234567"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-11"
                  style={inputStyle(!!errors.phone)}
                  data-ocid="home.appointment.input"
                />
                {errors.phone && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Age */}
              <div className="space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Age <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Input
                  type="number"
                  placeholder="e.g. 32"
                  min={1}
                  max={120}
                  value={form.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  className="h-11"
                  style={inputStyle(!!errors.age)}
                  data-ocid="home.appointment.input"
                />
                {errors.age && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.age}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div className="space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Gender <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Select
                  value={form.gender}
                  onValueChange={(v) => handleChange("gender", v)}
                >
                  <SelectTrigger
                    className="h-11"
                    style={inputStyle(!!errors.gender)}
                    data-ocid="home.appointment.select"
                  >
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent
                    style={{
                      background: "oklch(18% 0.05 145)",
                      borderColor: "oklch(28% 0.08 145)",
                      color: "oklch(92% 0.01 145)",
                    }}
                  >
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.gender}
                  </p>
                )}
              </div>

              {/* Region */}
              <div className="space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Region / City{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. Karachi, Badin"
                  value={form.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  className="h-11"
                  style={inputStyle(!!errors.region)}
                  data-ocid="home.appointment.input"
                />
                {errors.region && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.region}
                  </p>
                )}
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Preferred Date{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Input
                  type="date"
                  min={today}
                  value={form.preferredDate}
                  onChange={(e) =>
                    handleChange("preferredDate", e.target.value)
                  }
                  className="h-11"
                  style={{
                    ...inputStyle(!!errors.preferredDate),
                    colorScheme: "dark",
                  }}
                  data-ocid="home.appointment.input"
                />
                {errors.preferredDate && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Preferred Time{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Select
                  value={form.preferredTime}
                  onValueChange={(v) => handleChange("preferredTime", v)}
                >
                  <SelectTrigger
                    className="h-11"
                    style={inputStyle(!!errors.preferredTime)}
                    data-ocid="home.appointment.select"
                  >
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent
                    style={{
                      background: "oklch(18% 0.05 145)",
                      borderColor: "oklch(28% 0.08 145)",
                      color: "oklch(92% 0.01 145)",
                    }}
                  >
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
                    style={{ color: "oklch(55% 0.22 25)" }}
                    data-ocid="home.appointment.error_state"
                  >
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              {/* Complaint */}
              <div className="sm:col-span-2 space-y-1.5">
                <Label style={{ color: "oklch(78% 0.02 145)" }}>
                  Reason / Chief Complaint{" "}
                  <span style={{ color: "oklch(65% 0.22 145)" }}>*</span>
                </Label>
                <Textarea
                  rows={4}
                  placeholder="Briefly describe the reason for your appointment..."
                  value={form.complaint}
                  onChange={(e) => handleChange("complaint", e.target.value)}
                  style={{
                    ...inputStyle(!!errors.complaint),
                    resize: "vertical",
                  }}
                  data-ocid="home.appointment.textarea"
                />
                {errors.complaint && (
                  <p
                    className="text-xs"
                    style={{ color: "oklch(55% 0.22 25)" }}
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
                background: "oklch(14% 0.04 145)",
                border: "1px solid oklch(28% 0.08 145)",
                color: "oklch(65% 0.025 145)",
              }}
            >
              <strong style={{ color: "oklch(72% 0.18 145)" }}>
                Important:
              </strong>{" "}
              All services are completely free of charge. Your information is
              kept strictly confidential. Our team will call you within 24 hours
              to confirm your appointment.
            </div>

            <Button
              type="submit"
              className="w-full h-11 text-sm font-semibold rounded-xl"
              style={{ background: "oklch(55% 0.22 145)", color: "white" }}
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

// ─── Staff Portal Banner ──────────────────────────────────────────────────────
function StaffPortalBanner() {
  return (
    <div
      className="py-5"
      style={{
        background: "oklch(14% 0.048 145)",
        borderBottom: "1px solid oklch(24% 0.07 145)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "oklch(25% 0.08 145)" }}
          >
            <Database
              className="w-4.5 h-4.5"
              style={{ color: "oklch(65% 0.22 145)" }}
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <Lock
                className="w-3 h-3"
                style={{ color: "oklch(58% 0.025 145)" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(58% 0.025 145)" }}
              >
                For MHOs & Staff Only
              </span>
            </div>
            <p
              className="text-sm font-medium"
              style={{ color: "oklch(86% 0.015 145)" }}
            >
              Staff Data Entry Portal — REDCap
            </p>
          </div>
        </div>
        <a
          href="https://redcap.tih.org.pk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm transition-opacity hover:opacity-85"
          style={{ background: "oklch(55% 0.22 145)", color: "white" }}
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

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "oklch(10% 0.042 145)" }}>
      {/* Staff Portal Top Banner */}
      <StaffPortalBanner />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero-bg py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveDateBadge />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border"
                style={{
                  background: "oklch(17% 0.05 145)",
                  borderColor: "oklch(35% 0.14 145)",
                  color: "oklch(75% 0.18 145)",
                }}
              >
                <Leaf className="w-3.5 h-3.5" />A Program of IHHN
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-3">
                <span style={{ color: "oklch(95% 0.006 145)" }}>
                  Pur Umeed{"\n"}
                </span>
                <span
                  style={{ color: "oklch(65% 0.22 145)" }}
                  className="emerald-glow"
                >
                  Zindagi
                </span>
              </h1>
              <p
                className="text-lg italic mb-3"
                style={{ color: "oklch(72% 0.05 145)" }}
              >
                A Life Full of Hope
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(65% 0.025 145)" }}
              >
                Free, confidential mental health services for communities across
                Pakistan. Psychological counseling, screening, and support at
                17+ sites in 4 regions.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: "oklch(55% 0.22 145)", color: "white" }}
                  data-ocid="home.primary_button"
                >
                  Get Appointment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-opacity hover:opacity-90"
                  style={{
                    borderColor: "oklch(35% 0.14 145)",
                    color: "oklch(75% 0.18 145)",
                  }}
                  data-ocid="home.secondary_button"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                className="rounded-2xl p-7 border"
                style={{
                  background: "oklch(15% 0.048 145)",
                  borderColor: "oklch(24% 0.07 145)",
                }}
              >
                <h3
                  className="text-base font-semibold mb-5"
                  style={{ color: "oklch(92% 0.01 145)" }}
                >
                  Program Reach
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    {
                      icon: MapPin,
                      label: "17+ Sites",
                      desc: "Across Pakistan",
                    },
                    { icon: Users, label: "4 Regions", desc: "Nationwide" },
                    {
                      icon: Shield,
                      label: "Free",
                      desc: "No cost to patients",
                    },
                    {
                      icon: HeartHandshake,
                      label: "Confidential",
                      desc: "Safe space",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl p-4 border"
                      style={{
                        background: "oklch(18% 0.055 145)",
                        borderColor: "oklch(26% 0.08 145)",
                      }}
                    >
                      <item.icon
                        className="w-5 h-5 mb-2"
                        style={{ color: "oklch(65% 0.22 145)" }}
                      />
                      <div
                        className="font-bold text-sm"
                        style={{ color: "oklch(92% 0.01 145)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(62% 0.025 145)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="rounded-xl p-4 border text-center"
                  style={{
                    background: "oklch(12% 0.045 145)",
                    borderColor: "oklch(32% 0.12 145)",
                  }}
                >
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "oklch(65% 0.22 145)" }}
                  >
                    120,388
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(78% 0.02 145)" }}
                  >
                    Patients Served in 2025
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Counter Band ─────────────────────────────────── */}
      <CounterBand />

      {/* ── Stats Band ───────────────────────────────────── */}
      <StatsBand />

      {/* ── Why PUZ Exists ───────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(10% 0.042 145)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-3"
                style={{ color: "oklch(65% 0.22 145)" }}
              >
                Our Mission
              </p>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ color: "oklch(94% 0.008 145)" }}
              >
                Why Pur Umeed Zindagi?
              </h2>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(65% 0.025 145)" }}
              >
                Mental health is a fundamental human right. Pur Umeed Zindagi
                was established in 2018 under Indus Hospital &amp; Health
                Network to bring accessible, stigma-free psychological care to
                underserved communities across Pakistan.
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "oklch(65% 0.025 145)" }}
              >
                Our trained Mental Health Officers and Clinical Psychologists
                work across 17 sites in Karachi, Sindh, Balochistan, and Punjab
                — providing screenings, counseling, and follow-up care
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
                      borderColor: "oklch(30% 0.1 145)",
                      color: "oklch(72% 0.16 145)",
                      background: "oklch(15% 0.045 145)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: "2018", label: "Founded" },
                { value: "4", label: "Regions" },
                { value: "17+", label: "Sites" },
                { value: "3", label: "Psychologists" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 border text-center"
                  style={{
                    background: "oklch(15% 0.048 145)",
                    borderColor: "oklch(24% 0.07 145)",
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "oklch(65% 0.22 145)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(65% 0.025 145)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Psychologists ─────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(13% 0.045 145)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "oklch(65% 0.22 145)" }}
            >
              Our Team
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(94% 0.008 145)" }}
            >
              Meet Our Psychologists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Tasleem",
                region: "Karachi",
                role: "Regional Psychologist",
                color: "oklch(65% 0.22 145)",
              },
              {
                name: "Danish Khan",
                region: "Sindh",
                role: "Regional Psychologist",
                color: "oklch(60% 0.2 200)",
              },
              {
                name: "Tariq Aziz",
                region: "Balochistan",
                role: "Regional Psychologist",
                color: "oklch(62% 0.18 300)",
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="rounded-2xl p-6 border"
                style={{
                  background: "oklch(16% 0.05 145)",
                  borderColor: "oklch(24% 0.07 145)",
                }}
                data-ocid={`psychologists.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `${p.color} / 0.12` }}
                >
                  <Brain className="w-7 h-7" style={{ color: p.color }} />
                </div>
                <h3
                  className="text-lg font-bold mb-0.5"
                  style={{ color: "oklch(94% 0.008 145)" }}
                >
                  {p.name}
                </h3>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: p.color }}
                >
                  {p.role}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(62% 0.025 145)" }}
                >
                  {p.region} Region
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Psychological Videos ──────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(10% 0.042 145)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
              style={{ background: "oklch(65% 0.22 145 / 0.15)" }}
            >
              <Play
                className="w-5 h-5"
                style={{ color: "oklch(65% 0.22 145)" }}
              />
            </div>
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "oklch(65% 0.22 145)" }}
            >
              Awareness & Education
            </p>
            <h2
              className="text-3xl font-bold mb-3"
              style={{ color: "oklch(94% 0.008 145)" }}
            >
              Mental Health Awareness
            </h2>
            <p
              className="text-sm max-w-xl mx-auto"
              style={{ color: "oklch(65% 0.025 145)" }}
            >
              Educational videos on anxiety and depression — understand the
              causes, symptoms, and paths to recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
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
                className="rounded-2xl overflow-hidden border"
                style={{
                  background: "oklch(14% 0.048 145)",
                  borderColor: "oklch(22% 0.07 145)",
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
                <div className="p-4">
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{ color: "oklch(92% 0.01 145)" }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(62% 0.025 145)" }}
                  >
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MHO Team CTA Banner ───────────────────────────── */}
      <section
        className="py-10"
        style={{
          background: "oklch(16% 0.055 145)",
          borderTop: "1px solid oklch(24% 0.07 145)",
          borderBottom: "1px solid oklch(24% 0.07 145)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "oklch(22% 0.07 145)" }}
            >
              <Users
                className="w-6 h-6"
                style={{ color: "oklch(65% 0.22 145)" }}
              />
            </div>
            <div>
              <h3
                className="text-base font-bold"
                style={{ color: "oklch(92% 0.01 145)" }}
              >
                Meet Our 34+ Mental Health Officers
              </h3>
              <p className="text-sm" style={{ color: "oklch(65% 0.025 145)" }}>
                Dedicated MHOs working across 17 sites in Karachi, Sindh,
                Balochistan, and Punjab.
              </p>
            </div>
          </div>
          <Link
            to="/psychologists"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-opacity hover:opacity-85 flex-shrink-0"
            style={{
              borderColor: "oklch(42% 0.16 145)",
              color: "oklch(72% 0.2 145)",
            }}
            data-ocid="home.mho_team.link"
          >
            <Sparkles className="w-4 h-4" />
            View Full MHO Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Director Quote ────────────────────────────────── */}
      <section className="py-20" style={{ background: "oklch(10% 0.042 145)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "oklch(65% 0.22 145 / 0.12)" }}
            >
              <span
                className="text-2xl"
                style={{ color: "oklch(65% 0.22 145)" }}
              >
                &ldquo;
              </span>
            </div>
            <blockquote
              className="text-xl md:text-2xl font-medium leading-relaxed mb-8"
              style={{ color: "oklch(86% 0.015 145)" }}
            >
              Mental health is not a luxury — it is a right. Every person
              deserves access to compassionate, evidence-based care, regardless
              of where they live or what they can afford.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(22% 0.07 145)" }}
              >
                <Brain
                  className="w-5 h-5"
                  style={{ color: "oklch(65% 0.22 145)" }}
                />
              </div>
              <div className="text-left">
                <div
                  className="font-bold text-sm"
                  style={{ color: "oklch(92% 0.01 145)" }}
                >
                  Dr. Hiba Ashraf
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(62% 0.025 145)" }}
                >
                  Director, Primary Care Program · Indus Hospital &amp; Health
                  Network
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Appointment Form ──────────────────────────────── */}
      <AppointmentSection />

      {/* ── Get Help CTA ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(14% 0.05 145), oklch(18% 0.07 155))",
        }}
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
              style={{ background: "oklch(65% 0.22 145 / 0.15)" }}
            >
              <HeartHandshake
                className="w-7 h-7"
                style={{ color: "oklch(65% 0.22 145)" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: "oklch(94% 0.008 145)" }}
            >
              You Don&apos;t Have to Face It Alone
            </h2>
            <p
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
              style={{ color: "oklch(68% 0.025 145)" }}
            >
              Our trained professionals are here to listen, support, and guide
              you. All services are completely free and confidential.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "oklch(55% 0.22 145)", color: "white" }}
                data-ocid="home.get_help.primary_button"
              >
                Get Help Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border transition-opacity hover:opacity-90"
                style={{
                  borderColor: "oklch(35% 0.14 145)",
                  color: "oklch(72% 0.18 145)",
                }}
                data-ocid="home.get_help.secondary_button"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer
        className="py-8 text-center text-xs"
        style={{
          background: "oklch(8% 0.038 145)",
          borderTop: "1px solid oklch(18% 0.06 145)",
          color: "oklch(52% 0.02 145)",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Pur Umeed Zindagi &mdash; Indus
          Hospital &amp; Health Network. Built with{" "}
          <span style={{ color: "oklch(65% 0.22 145)" }}>&#10084;</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: "oklch(60% 0.06 145)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
