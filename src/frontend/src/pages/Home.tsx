import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Shield,
    title: "Mental Health Screening",
    desc: "PHQ-2/GAD-2 initial screening with detailed follow-up assessments for at-risk individuals.",
  },
  {
    icon: Heart,
    title: "Psychological Counseling",
    desc: "Individual and group therapy sessions by trained psychologists and Mental Health Officers.",
  },
  {
    icon: Users,
    title: "Psychiatric Referral",
    desc: "Seamless referral pathway to psychiatrists for cases requiring advanced clinical care.",
  },
  {
    icon: CheckCircle,
    title: "Follow-up & Case Management",
    desc: "Ongoing monitoring, outcome tracking, and sustained support through the recovery journey.",
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
    desc: "If score ≥3, comprehensive PHQ-9 / GAD-7 evaluation conducted.",
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
  { value: "4", label: "Regions Covered" },
  { value: "17", label: "Active Sites" },
  { value: "34", label: "Mental Health Officers" },
  { value: "2018", label: "Free Services Since" },
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
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-puz-banner.dim_1400x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Star className="w-3.5 h-3.5" />A Program of Indus Hospital
                &amp; Health Network
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6"
            >
              Pur Umeed
              <br />
              <span className="text-primary">Zindagi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-3 font-display italic"
            >
              A Life Full of Hope
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-muted-foreground mb-8 leading-relaxed max-w-xl"
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
                className="teal-gradient text-primary-foreground font-semibold gap-2 shadow-soft"
                data-ocid="hero.primary_button"
              >
                <a href="tel:+92297330160">
                  <Phone className="w-4 h-4" />
                  Get Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-primary/30 hover:bg-primary/5"
                data-ocid="hero.secondary_button"
              >
                <Link to="/about">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="teal-gradient py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl text-primary-foreground font-bold">
                  {s.value}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PUZ */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <p className="text-muted-foreground leading-relaxed mb-6">
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
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
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
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-card shadow-xs text-center">
                      <div className="font-display text-3xl text-primary">
                        2018
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Program Launched
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-card shadow-xs text-center">
                      <div className="font-display text-3xl text-primary">
                        4
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Regions
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-card shadow-xs text-center">
                      <div className="font-display text-3xl text-primary">
                        17
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Active Sites
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-card shadow-xs text-center">
                      <div className="font-display text-3xl text-primary">
                        34
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        MHOs Deployed
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-primary/8 border border-primary/15">
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

      {/* Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
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
                  className="h-full border-0 shadow-card hover:shadow-soft transition-shadow"
                  data-ocid={`service.item.${i + 1}`}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg teal-gradient flex items-center justify-center mb-3">
                      <s.icon className="w-5 h-5 text-primary-foreground" />
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
          <div className="text-center mt-8">
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

      {/* Enrollment Steps */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Screening &amp; Enrollment Process
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-1 relative"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full shadow-xs">
                  <div className="font-display text-3xl text-primary/20 mb-3">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-primary items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5 text-primary-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-20 teal-gradient">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed mb-6">
              &ldquo;Every individual carries within them the strength,
              resilience, and potential to lead a meaningful and hopeful life
              &mdash; even in the face of challenges.&rdquo;
            </blockquote>
            <div className="text-primary-foreground/80 font-semibold">
              Dr. Hiba Ashraf
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Director, Primary Care Program &middot; IHHN
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
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
          <div className="text-center mt-8">
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

      {/* Who Can Access */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Open to All
              </span>
              <h2 className="font-display text-4xl text-foreground mt-3 mb-5">
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
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
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
            <div className="bg-secondary/30 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-3">
                Find Us Near You
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                PUZ operates across 4 regions and 17 sites throughout Pakistan.
              </p>
              <Button
                asChild
                className="teal-gradient text-primary-foreground gap-2"
              >
                <Link to="/regions">
                  View Regions &amp; Sites <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
