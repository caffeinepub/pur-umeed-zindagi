import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  FileText,
  HeartHandshake,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Count-up hook using requestAnimationFrame
function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
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

function CounterBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(120388, 2500, isInView);

  return (
    <div
      ref={ref}
      className="py-16 text-center"
      style={{ background: "oklch(11% 0.045 145)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-7xl md:text-8xl font-bold tracking-tight mb-3 emerald-glow"
            style={{ color: "oklch(58% 0.22 145)" }}
          >
            {count.toLocaleString()}
          </div>
          <div
            className="text-xl font-medium mb-2"
            style={{ color: "oklch(96% 0.005 145)" }}
          >
            Patients Seen in 2025
          </div>
          <div className="text-sm" style={{ color: "oklch(68% 0.025 145)" }}>
            Across 4 regions · 17+ sites · Karachi, Sindh, Balochistan, Punjab
          </div>
        </motion.div>
      </div>
    </div>
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
    <div ref={ref} className="py-8 green-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center py-4"
    >
      <div className="text-3xl font-bold" style={{ color: "white" }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className="text-xs mt-1 font-medium"
        style={{ color: "oklch(90% 0.05 145)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      {/* Hero Section */}
      <section className="hero-bg py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
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

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                <span style={{ color: "oklch(96% 0.005 145)" }}>
                  Pur Umeed{"\n"}
                </span>
                <span
                  style={{ color: "oklch(58% 0.22 145)" }}
                  className="emerald-glow"
                >
                  Zindagi
                </span>
              </h1>
              <p
                className="text-lg italic mb-4"
                style={{ color: "oklch(75% 0.05 145)" }}
              >
                A Life Full of Hope
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Free, confidential mental health services for communities across
                Pakistan. Psychological counseling, screening, and support —
                available at 17+ sites in 4 regions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "oklch(58% 0.22 145)", color: "white" }}
                  data-ocid="home.primary_button"
                >
                  Get Appointment <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:opacity-90"
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

            {/* Right: Stats Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="rounded-2xl p-8 border"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-6"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  Program Reach
                </h3>
                <div className="grid grid-cols-2 gap-4">
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
                        background: "oklch(17% 0.05 145)",
                        borderColor: "oklch(22% 0.06 145)",
                      }}
                    >
                      <item.icon
                        className="w-6 h-6 mb-2"
                        style={{ color: "oklch(58% 0.22 145)" }}
                      />
                      <div
                        className="font-bold text-base"
                        style={{ color: "oklch(96% 0.005 145)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(68% 0.025 145)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 rounded-xl p-4 border text-center"
                  style={{
                    background: "oklch(11% 0.045 145)",
                    borderColor: "oklch(30% 0.12 145)",
                  }}
                >
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  >
                    120,388
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Patients Served in 2025
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counter Band */}
      <CounterBand />

      {/* Stats Bar */}
      <StatsBand />

      {/* Why PUZ */}
      <section className="py-20" style={{ background: "oklch(8% 0.04 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Our Mission
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Why Pur Umeed Zindagi?
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Mental health is a fundamental human right. Pur Umeed Zindagi
                was established in 2018 under Indus Hospital &amp; Health
                Network to bring accessible, stigma-free psychological care to
                underserved communities across Pakistan.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Our trained Mental Health Officers (MHOs) and Clinical
                Psychologists work across 17 sites in Karachi, Sindh,
                Balochistan, and Punjab — providing screenings, counseling, and
                follow-up care completely free of charge.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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
                      color: "oklch(75% 0.18 145)",
                      background: "oklch(14% 0.04 145)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2018", label: "Founded" },
                { value: "4", label: "Regions" },
                { value: "17", label: "Sites" },
                { value: "3", label: "Psychologists" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 border text-center"
                  style={{
                    background: "oklch(14% 0.045 145)",
                    borderColor: "oklch(22% 0.06 145)",
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "oklch(68% 0.025 145)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
              <div
                className="col-span-2 rounded-2xl p-4 border text-center"
                style={{
                  background: "oklch(17% 0.05 145)",
                  borderColor: "oklch(30% 0.12 145)",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Shield
                    className="w-5 h-5"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Always Free &amp; Confidential
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Psychologists */}
      <section className="py-20" style={{ background: "oklch(11% 0.045 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Our Team
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Meet Our Psychologists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Tasleem",
                region: "Karachi",
                role: "Regional Psychologist",
                color: "oklch(58% 0.22 145)",
              },
              {
                name: "Danish Khan",
                region: "Sindh",
                role: "Regional Psychologist",
                color: "oklch(58% 0.2 200)",
              },
              {
                name: "Tariq Aziz",
                region: "Balochistan",
                role: "Regional Psychologist",
                color: "oklch(58% 0.18 300)",
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border card-hover"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`psychologists.item.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `${p.color}20` }}
                >
                  <Brain className="w-8 h-8" style={{ color: p.color }} />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
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
                  className="text-sm"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  {p.region} Region
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Data Callout */}
      <section className="py-16 green-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Patient Outcomes 2025
            </h2>
            <p className="text-white/80 text-sm">
              Data collected by Mental Health Officers (MHOs) across all sites
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Screened", value: "2,130+" },
              { label: "Enrolled", value: "476+" },
              { label: "Completed Treatment", value: "372+" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <div className="text-4xl font-bold text-white mb-1">
                  {s.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "oklch(90% 0.06 145)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/patient-data"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{
                background: "oklch(8% 0.04 145)",
                color: "oklch(58% 0.22 145)",
                border: "2px solid oklch(58% 0.22 145)",
              }}
              data-ocid="home.secondary_button"
            >
              View Detailed Patient Data <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "oklch(8% 0.04 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              What We Offer
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Shield,
                title: "Mental Health Screening",
                desc: "PHQ-2, GAD-2 and comprehensive assessments by trained MHOs",
              },
              {
                icon: Brain,
                title: "Psychological Counseling",
                desc: "Individual and group therapy sessions by qualified psychologists",
              },
              {
                icon: ArrowRight,
                title: "Psychiatric Referral",
                desc: "Referral pathways to psychiatrists and specialist care",
              },
              {
                icon: HeartHandshake,
                title: "Follow-up & Case Management",
                desc: "Ongoing tracking and support through the entire care journey",
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border card-hover"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(22% 0.08 145)" }}
                >
                  <s.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Timeline */}
      <section className="py-20" style={{ background: "oklch(11% 0.045 145)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Process
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Enrollment Process
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Initial Screening",
                desc: "Brief PHQ-2/GAD-2 screening by MHO at your local site",
              },
              {
                step: "02",
                title: "Assessment",
                desc: "Comprehensive psychological assessment if screening positive",
              },
              {
                step: "03",
                title: "Treatment Planning",
                desc: "Personalized care plan developed with the psychologist",
              },
              {
                step: "04",
                title: "Counseling Sessions",
                desc: "Regular sessions with trained counselors (free of charge)",
              },
              {
                step: "05",
                title: "Follow-up",
                desc: "Ongoing monitoring, support, and end-of-treatment evaluation",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-6 rounded-2xl p-5 border"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{
                    background: "oklch(22% 0.08 145)",
                    color: "oklch(58% 0.22 145)",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ color: "oklch(96% 0.005 145)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(68% 0.025 145)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Quote */}
      <section className="py-20 green-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-10 h-10 text-white/50 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-medium italic text-white leading-relaxed mb-8">
            &ldquo;Mental health care is not a luxury — it is a fundamental
            right. Pur Umeed Zindagi exists to ensure every individual,
            regardless of their circumstances, can access quality psychological
            support.&rdquo;
          </blockquote>
          <div className="text-white/90 font-semibold">Dr. Hiba Ashraf</div>
          <div className="text-white/70 text-sm">
            Director, Primary Care Program — Indus Hospital &amp; Health Network
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20" style={{ background: "oklch(8% 0.04 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Transparency
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Annual Reports
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[2022, 2023, 2024, 2025].map((year, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border card-hover text-center"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`reports.item.${i + 1}`}
              >
                <FileText
                  className="w-10 h-10 mx-auto mb-3"
                  style={{ color: "oklch(58% 0.22 145)" }}
                />
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {year}
                </div>
                <div
                  className="text-xs mb-4"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Annual Report
                </div>
                <Link
                  to="/annual-reports"
                  className="text-xs font-medium"
                  style={{ color: "oklch(58% 0.22 145)" }}
                >
                  View Report →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Access */}
      <section className="py-20" style={{ background: "oklch(11% 0.045 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Eligibility
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Who Can Access Our Services?
              </h2>
              <div className="space-y-3">
                {[
                  "Anyone experiencing sadness, anxiety, or emotional distress",
                  "Patients or families at IHHN partner hospitals",
                  "Community members in our service areas",
                  "Individuals with no prior mental health diagnosis",
                  "All ages — children, adults, and elders",
                  "No referral letter required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(58% 0.22 145)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "oklch(14% 0.045 145)",
                borderColor: "oklch(22% 0.06 145)",
              }}
            >
              <MapPin
                className="w-8 h-8 mb-4"
                style={{ color: "oklch(58% 0.22 145)" }}
              />
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Find Us Near You
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                We operate across 4 regions with 17+ active sites. Visit the
                Regions page to find a site near you.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Karachi", "Sindh", "Balochistan", "Punjab"].map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: "oklch(17% 0.05 145)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "oklch(58% 0.22 145)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/regions"
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border transition-all hover:opacity-80"
                style={{
                  borderColor: "oklch(35% 0.14 145)",
                  color: "oklch(75% 0.18 145)",
                }}
                data-ocid="home.secondary_button"
              >
                View All Sites <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "oklch(8% 0.04 145)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              You Don&apos;t Have to Face This Alone
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: "oklch(68% 0.025 145)" }}
            >
              Reach out to our team today. Free, confidential, compassionate
              care.
            </p>
            <a
              href="tel:+92297330160"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90"
              style={{ background: "oklch(58% 0.22 145)", color: "white" }}
              data-ocid="home.primary_button"
            >
              <Phone className="w-5 h-5" />
              +92 297330160
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
