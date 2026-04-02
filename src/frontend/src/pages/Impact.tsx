import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const PageHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-3"
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

export default function Impact() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Program Impact"
        subtitle="Measuring the difference we make"
      />

      {/* KPIs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Key Metrics
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Program KPIs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                value: "120,388",
                label: "Patients Seen (2025)",
                sub: "Across all 17 sites",
                color: "oklch(35% 0.2 145)",
              },
              {
                icon: BarChart3,
                value: "2,130+",
                label: "Individuals Screened",
                sub: "PHQ-2/GAD-2 screenings",
                color: "oklch(35% 0.18 200)",
              },
              {
                icon: TrendingUp,
                value: "78%",
                label: "Improved Well-being",
                sub: "End-of-treatment outcomes",
                color: "oklch(40% 0.18 145)",
              },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl p-8 border text-center card-hover bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
                  borderTop: `4px solid ${kpi.color}`,
                }}
                data-ocid={`impact.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <kpi.icon className="w-7 h-7" style={{ color: kpi.color }} />
                </div>
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: kpi.color }}
                >
                  {kpi.value}
                </div>
                <div
                  className="font-semibold text-base mb-1"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {kpi.label}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "oklch(50% 0.04 145)" }}
                >
                  {kpi.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional stats */}
      <section className="py-16" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Deep Dive
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Counseling &amp; Treatment
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "476+", label: "Enrolled in Treatment" },
              { value: "372+", label: "Completed Treatment" },
              { value: "34+", label: "Active MHOs" },
              { value: "3", label: "Regional Psychologists" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 border text-center bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 10px oklch(50% 0.06 145 / 0.06)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "oklch(35% 0.2 145)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(50% 0.04 145)" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Geographic Reach
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Where We Operate
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { region: "Karachi", sites: 2, patients: "~38K" },
              { region: "Sindh", sites: 6, patients: "~42K" },
              { region: "Balochistan", sites: 2, patients: "~18K" },
              { region: "Punjab", sites: 5, patients: "~22K" },
            ].map((r, i) => (
              <motion.div
                key={r.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border bg-white card-hover"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
              >
                <Globe
                  className="w-6 h-6 mb-3"
                  style={{ color: "oklch(35% 0.2 145)" }}
                />
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {r.region}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "oklch(50% 0.04 145)" }}>Sites</span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(25% 0.08 145)" }}
                    >
                      {r.sites}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "oklch(50% 0.04 145)" }}>
                      Est. Patients
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    >
                      {r.patients}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports CTA */}
      <section className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See the Full Data
          </h2>
          <p className="text-white/75 mb-6">
            Download our annual reports or explore our detailed patient data
            portal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/annual-reports"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white transition-all hover:opacity-90"
              style={{ color: "oklch(25% 0.15 145)" }}
              data-ocid="impact.secondary_button"
            >
              Annual Reports <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/patient-data"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/30 text-white transition-all hover:opacity-90"
              data-ocid="impact.primary_button"
            >
              Patient Data <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
