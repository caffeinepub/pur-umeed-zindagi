import { Brain, Heart, Leaf, Shield, Star, Target } from "lucide-react";
import { motion } from "motion/react";

const GreenHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16 green-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

export default function About() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="About Us"
        subtitle="The story behind Pur Umeed Zindagi"
      />

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Our Story
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                A Program Born from Community Need
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Pur Umeed Zindagi (PUZ) — meaning &ldquo;A Life Full of
                Hope&rdquo; — was launched in 2018 as a flagship mental health
                initiative of Indus Hospital &amp; Health Network (IHHN). It was
                designed to bridge the critical gap in accessible,
                community-based psychological care in Pakistan.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Recognizing that mental health conditions affect millions yet
                remain deeply stigmatized and undertreated, PUZ embedded trained
                Mental Health Officers (MHOs) directly into community hospitals
                and clinics.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                From its origins in Karachi, the program has expanded across
                Sindh, Balochistan, and Punjab, now serving over 120,000
                patients annually through 17+ active sites.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2018", label: "Year Founded" },
                { value: "4", label: "Regions" },
                { value: "17+", label: "Active Sites" },
                { value: "120K+", label: "Patients (2025)" },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ background: "oklch(11% 0.045 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Direction
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 border"
              style={{
                background: "oklch(14% 0.045 145)",
                borderColor: "oklch(35% 0.14 145)",
              }}
            >
              <Target
                className="w-8 h-8 mb-4"
                style={{ color: "oklch(58% 0.22 145)" }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                To provide accessible, evidence-based, and stigma-free mental
                health services to underserved communities across Pakistan
                through integrated care at community hospitals and health
                facilities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-8 border"
              style={{
                background: "oklch(14% 0.045 145)",
                borderColor: "oklch(35% 0.14 145)",
              }}
            >
              <Star
                className="w-8 h-8 mb-4"
                style={{ color: "oklch(58% 0.22 145)" }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Our Vision
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                A Pakistan where every individual has access to quality mental
                health care, free from stigma and financial barriers, integrated
                into the primary healthcare system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ background: "oklch(8% 0.04 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Principles
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Heart,
                title: "Compassion",
                desc: "Every patient is treated with dignity, empathy, and respect regardless of their background.",
              },
              {
                icon: Shield,
                title: "Confidentiality",
                desc: "All information shared remains strictly private between patient and healthcare provider.",
              },
              {
                icon: Leaf,
                title: "Accessibility",
                desc: "Services are completely free and available to all community members without barriers.",
              },
              {
                icon: Brain,
                title: "Evidence-Based",
                desc: "All treatments follow internationally recognized, research-backed clinical guidelines.",
              },
              {
                icon: Star,
                title: "Excellence",
                desc: "We continuously improve our services through training, supervision, and quality audits.",
              },
              {
                icon: Target,
                title: "Community-Centered",
                desc: "Programs are designed around the specific needs and cultural context of each community.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
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
                  <v.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
