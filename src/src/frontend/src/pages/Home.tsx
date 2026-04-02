import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** easeOut count-up using requestAnimationFrame */
function useCountUp(
  target: number,
  durationMs: number,
  startImmediately = false,
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const triggered = startImmediately ? true : inView;

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    let raf: number;

    function easeOut(t: number) {
      return 1 - (1 - t) ** 3;
    }

    function tick(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, durationMs]);

  return { count, ref };
}

function AnimatedNumber({
  target,
  duration = 1800,
  startImmediately = false,
}: { target: number; duration?: number; startImmediately?: boolean }) {
  const { count, ref } = useCountUp(target, duration, startImmediately);
  return <div ref={ref}>{count.toLocaleString()}</div>;
}

/** Large hero counter — starts on mount, easeOut, pulsing glow */
function HeroCounter() {
  const { count, ref } = useCountUp(120388, 2500, true);
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-14 px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(16% 0.04 200) 0%, oklch(22% 0.08 198) 100%)",
      }}
    >
      {/* Pulsing glow ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-72 h-72 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(55% 0.18 180), transparent 70%)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </div>
      <div className="relative z-10 text-center">
        <div className="text-white/50 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          2025 Program Milestone
        </div>
        <div
          className="font-display font-bold leading-none mb-3"
          style={{
            fontSize: "clamp(4rem, 12vw, 9rem)",
            color: "oklch(72% 0.22 180)",
            textShadow: "0 0 60px oklch(55% 0.18 180 / 0.6)",
          }}
        >
          {count.toLocaleString()}
        </div>
        <div className="text-white text-xl md:text-2xl font-semibold mb-2">
          Patients Seen in 2025
        </div>
        <div className="text-white/50 text-sm">
          Across all 4 regions and 17 sites
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: Shield,
    title: "Mental Health Screening",
    desc: "PHQ-2/GAD-2 initial screening with detailed follow-up assessments for at-risk individuals.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Psychological Counseling",
    desc: "Individual and group therapy sessions by trained psychologists and Mental Health Officers.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Users,
    title: "Psychiatric Referral",
    desc: "Seamless referral pathway to psychiatrists for cases requiring advanced clinical care.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: CheckCircle,
    title: "Follow-up & Case Management",
    desc: "Ongoing monitoring, outcome tracking, and sustained support through the recovery journey.",
    color: "from-emerald-500 to-emerald-600",
  },
];

const steps = [
  {
    n: "01",
    title: "Initial Screening",
    desc: "PHQ-2 / GAD-2 brief tools administered by trained MHOs.",
  },
  {
    n: "02",
    title: "Detailed Assessment",
    desc: "If score \u22653, comprehensive PHQ-9 / GAD-7 evaluation conducted.",
  },
  {
    n: "03",
    title: "Enrollment into PUZ",
    desc: "Patient is enrolled into the program and given a care plan.",
  },
  {
    n: "04",
    title: "Counseling or Referral",
    desc: "Counseling by psychologist or referral to psychiatry as needed.",
  },
  {
    n: "05",
    title: "Follow-up Sessions",
    desc: "Regular follow-ups to track progress and adjust interventions.",
  },
];

const stats = [
  { value: 4, suffix: "", label: "Regions Covered" },
  { value: 17, suffix: "+", label: "Active Sites" },
  { value: 3, suffix: "", label: "Regional Psychologists" },
  { value: 34, suffix: "+", label: "Mental Health Officers" },
  { value: 120388, suffix: "", label: "Patients Seen (2025)" },
];

const psychologists = [
  {
    name: "Tasleem",
    region: "Karachi",
    color: "from-teal-400 to-teal-600",
    sessions: "PHQ/GAD Assessments \u00b7 CBT Therapy \u00b7 Group Sessions",
  },
  {
    name: "Danish Khan",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    sessions: "Psychotherapy \u00b7 Counseling \u00b7 Community Outreach",
  },
  {
    name: "Tariq Aziz",
    region: "Balochistan",
    color: "from-violet-400 to-violet-600",
    sessions:
      "Individual Therapy \u00b7 Psychotherapy \u00b7 Crisis Intervention",
  },
];

const reports = [
  { year: "2022", color: "from-primary/10 to-primary/5" },
  { year: "2023", color: "from-accent/10 to-accent/5" },
  { year: "2024", color: "from-primary/10 to-primary/5" },
  { year: "2025", color: "from-accent/10 to-accent/5" },
];

export default function Home() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          background:
            "url('/assets/generated/hero-bg-indus-hospital.dim_1920x1080.jpg') center/cover no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Animated bg blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, oklch(42% 0.13 198), transparent 70%)",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, oklch(72% 0.14 68), transparent 70%)",
              animation: "pulse 8s ease-in-out infinite 2s",
            }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(42% 0.13 198), transparent 70%)",
              animation: "pulse 7s ease-in-out infinite 1s",
            }}
          />
        </div>

        {/* Floating stat chips */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/4 right-[15%] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white"
          >
            <div className="text-2xl font-bold">17+</div>
            <div className="text-xs opacity-70">Active Sites</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-2/3 right-[10%] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white"
          >
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs opacity-70">Regions</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute top-1/2 right-[28%] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white"
          >
            <div className="text-2xl font-bold">Free</div>
            <div className="text-xs opacity-70">Always</div>
          </motion.div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10 py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 border border-white/20">
                <Star className="w-3.5 h-3.5 text-yellow-400" />A Program of
                Indus Hospital &amp; Health Network
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 tracking-tight"
            >
              Pur Umeed
              <br />
              <span style={{ color: "oklch(72% 0.18 180)" }}>Zindagi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 mb-2 font-display italic"
            >
              A Life Full of Hope
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-white/60 mb-10 leading-relaxed max-w-xl"
            >
              Pakistan&apos;s free, confidential mental health program.
              Evidence-based screening, counseling, and psychiatric care &mdash;
              accessible to everyone, everywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="gap-2 font-semibold text-white shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(38% 0.13 198), oklch(47% 0.12 210))",
                }}
                data-ocid="hero.primary_button"
              >
                <a href="tel:+92297330160">
                  <Phone className="w-4 h-4" /> Get Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                data-ocid="hero.secondary_button"
              >
                <Link to="/about">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── Prominent Hero Counter Band ─── */}
      <HeroCounter />

      {/* ─── Animated Stats Bar ─── */}
      <section className="teal-gradient py-10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl xl:text-5xl text-white font-bold flex items-end justify-center gap-0.5">
                  <AnimatedNumber
                    target={s.value}
                    duration={s.value > 1000 ? 2200 : 1800}
                  />
                  <span>{s.suffix}</span>
                </div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why PUZ ─── */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Why PUZ Exists
              </span>
              <h2 className="font-display text-4xl text-foreground mt-3 mb-5">
                Bridging the Mental Health Gap in Pakistan
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depression is the most prevalent mental health disorder in
                Pakistan, affecting millions of people across all walks of life.
                Yet due to deep-seated stigma, fear, and lack of accessible
                care, the vast majority remain undiagnosed and untreated.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                PUZ was founded to bridge this gap &mdash; delivering free,
                ethical, evidence-based mental health services at the community
                level, where people need it most.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Free and completely confidential",
                  "Evidence-based, ethically delivered",
                  "Integrated into primary healthcare",
                  "Community-level outreach and awareness",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-0 shadow-card bg-secondary/40">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { val: "2018", sub: "Program Launched" },
                      { val: "4", sub: "Regions" },
                      { val: "17", sub: "Active Sites" },
                      { val: "3", sub: "Psychologists" },
                    ].map((item) => (
                      <div
                        key={item.sub}
                        className="p-5 rounded-xl bg-card shadow-xs text-center"
                      >
                        <div className="font-display text-3xl text-primary">
                          {item.val}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-primary/8 border border-primary/15">
                    <p className="text-sm text-foreground font-medium">
                      Free &amp; Confidential
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      No cost to patients. All sessions are private and
                      protected.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Psychologists ─── */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              3 Regional Psychologists
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our qualified psychologists provide evidence-based therapy,
              psychotherapy, and counseling sessions across regions of Pakistan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {psychologists.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`psychologist.item.${i + 1}`}
              >
                <Card className="border-0 shadow-card h-full overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${p.color}`} />
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        <MapPin className="w-3 h-3" /> {p.region}
                      </span>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">
                        Psychologist
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.sessions}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/5"
            >
              <Link to="/psychologists">
                View Full Team <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Patient Data Callout ─── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(30% 0.12 198) 0%, oklch(42% 0.14 198) 50%, oklch(35% 0.10 210) 100%)",
        }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/70 text-sm font-semibold uppercase tracking-wider">
                  Live Program Records
                </span>
              </div>
              <h2 className="font-display text-4xl text-white mb-4">
                MHO Patient Records &amp; Program Data
              </h2>
              <p className="text-white/70 text-base max-w-xl leading-relaxed">
                Track Screening, Enrollments, and End of Treatment outcomes
                across all sites and regions. Complete data transparency for all
                17 PUZ sites, recorded by our Mental Health Officers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Screened", val: "2,130+" },
                  { label: "Enrolled", val: "476+" },
                  { label: "Completed", val: "372+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                  >
                    <div className="font-display text-2xl text-white font-bold">
                      {item.val}
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white font-bold gap-2 hover:bg-white/90"
                style={{ color: "oklch(30% 0.12 198)" }}
                data-ocid="patient.data.primary_button"
              >
                <Link to="/patient-data">
                  <Activity className="w-4 h-4" /> View Patient Dashboard
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Our Core Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Comprehensive mental health support from screening to sustained
              recovery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card
                  className="h-full border-0 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
                  data-ocid={`service.item.${i + 1}`}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}
                    >
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/5"
            >
              <Link to="/services">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Enrollment Steps Timeline ─── */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Screening &amp; Enrollment Process
            </h2>
          </div>
          <div className="relative">
            <div
              className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"
              style={{ left: "5%", right: "5%" }}
            />
            <div className="flex flex-col md:flex-row gap-6 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-full shadow-xs relative">
                    <div className="w-12 h-12 rounded-full teal-gradient flex items-center justify-center mb-5 shadow-md">
                      <span className="text-white text-sm font-bold">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Director Message ─── */}
      <section className="py-24 teal-gradient">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
              &ldquo;Every individual carries within them the strength,
              resilience, and potential to lead a meaningful and hopeful life
              &mdash; even in the face of challenges.&rdquo;
            </blockquote>
            <div className="text-white/90 font-semibold text-lg">
              Dr. Hiba Ashraf
            </div>
            <div className="text-white/60 text-sm mt-1">
              Director, Primary Care Program &middot; IHHN
            </div>
          </div>
        </div>
      </section>

      {/* ─── Annual Reports ─── */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Transparency
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Annual Reports
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reports.map((r, i) => (
              <motion.div
                key={r.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`annual.report.item.${i + 1}`}
              >
                <Card
                  className={`border-0 shadow-card hover:shadow-soft transition-all cursor-pointer hover:-translate-y-1 bg-gradient-to-br ${r.color}`}
                >
                  <CardContent className="p-8 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="font-display text-4xl text-primary mb-2">
                      {r.year}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Annual Report
                    </div>
                    <div className="mt-4 text-xs text-primary font-medium flex items-center justify-center gap-1">
                      Download PDF <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/5"
            >
              <Link to="/annual-reports">
                View All Reports <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Who Can Access ─── */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Open to All
              </span>
              <h2 className="font-display text-4xl text-foreground mt-3 mb-6">
                Who Can Access PUZ Services?
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Individuals facing stress, anxiety, or depression",
                    desc: "Anyone experiencing emotional distress or mental health challenges.",
                  },
                  {
                    title: "Patients & attendants of Indus Hospital",
                    desc: "All patients at IHHN facilities and their accompanying family members.",
                  },
                  {
                    title: "Adults and families",
                    desc: "Services are available to adults of all ages and families seeking support.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-10 text-center">
              <MapPin className="w-14 h-14 text-primary mx-auto mb-5" />
              <h3 className="font-display text-2xl text-foreground mb-3">
                Find Us Near You
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                PUZ operates across 4 regions and 17 sites throughout Pakistan.
              </p>
              <Button asChild className="teal-gradient text-white gap-2">
                <Link to="/regions">
                  View Regions &amp; Sites <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Get Help CTA ─── */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              You Don&apos;t Have to Face This Alone
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Reach out to our team today. All services are free, confidential,
              and available to everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="teal-gradient text-white font-semibold gap-2"
                data-ocid="cta.appointment.button"
              >
                <a href="tel:+92297330160">
                  <Phone className="w-4 h-4" /> Get Help Today
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-primary/30 hover:bg-primary/5"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
