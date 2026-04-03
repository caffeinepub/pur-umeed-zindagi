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

export default function PatientData() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Patient Data"
        subtitle="Screening, Enrollment & End of Treatment — by MHOs"
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* 2025 MHO Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl p-8 border"
            style={{
              background: "white",
              borderColor: "oklch(88% 0.03 145)",
              borderTop: "4px solid oklch(35% 0.2 145)",
              boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="uppercase tracking-widest text-xs font-semibold"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Year 2025
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: "oklch(92% 0.04 145)",
                  color: "oklch(30% 0.15 145)",
                  border: "1px solid oklch(80% 0.08 145)",
                }}
              >
                Numbers change daily
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              MHO Patient Data — 2025
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "oklch(50% 0.04 145)" }}
            >
              Data collected by Mental Health Officers (MHOs) — as of March
              2025. Numbers are updated daily.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "\u{1F4CB}",
                  value: "58,563",
                  label: "Screening",
                  desc: "Total patients screened by MHOs",
                  color: "oklch(35% 0.2 145)",
                },
                {
                  emoji: "\u{1F465}",
                  value: "3,318",
                  label: "Enrollments",
                  desc: "Patients enrolled in treatment",
                  color: "oklch(60% 0.18 60)",
                },
                {
                  emoji: "\u2705",
                  value: "1,456",
                  label: "End of Treatment (EOT)",
                  desc: "Patients who completed full treatment",
                  color: "oklch(40% 0.18 145)",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="rounded-xl p-6 border text-center"
                  style={{
                    background: "oklch(97% 0.008 145)",
                    borderColor: "oklch(88% 0.03 145)",
                  }}
                  data-ocid={`patient_data.stat.${i + 1}`}
                >
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-base font-semibold mb-1"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2025 Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-8 border"
            style={{
              background: "oklch(25% 0.15 145)",
              borderColor: "oklch(30% 0.15 145)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="uppercase tracking-widest text-xs font-semibold"
                style={{ color: "oklch(75% 0.12 145)" }}
              >
                Pur Umeed Zindagi — Key Achievements
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white">
              Total Screenings Across All Sites
            </h2>
            <div
              className="text-6xl font-bold mb-2"
              style={{ color: "oklch(75% 0.2 145)" }}
            >
              58,563
            </div>
            <p className="text-sm" style={{ color: "oklch(72% 0.06 145)" }}>
              Across 4 regions · Karachi, Sindh, Balochistan, Punjab
            </p>
          </motion.div>

          {/* 2026 Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl p-8 border"
            style={{
              background: "white",
              borderColor: "oklch(88% 0.03 145)",
              borderTop: "4px solid oklch(35% 0.2 145)",
              boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="uppercase tracking-widest text-xs font-semibold"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Year 2026
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: "oklch(92% 0.04 145)",
                  color: "oklch(30% 0.15 145)",
                  border: "1px solid oklch(80% 0.08 145)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block pulse-dot"
                  style={{ background: "oklch(40% 0.2 145)" }}
                />
                Live — Updated Daily
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              MHO Patient Data — 2026
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "oklch(50% 0.04 145)" }}
            >
              Data collected by Mental Health Officers (MHOs). Numbers are
              updated daily and reflect cumulative totals for 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "\u{1F4CB}",
                  value: "58,563",
                  label: "Screening",
                  desc: "Total patients screened by MHOs",
                  color: "oklch(35% 0.2 145)",
                },
                {
                  emoji: "\u{1F465}",
                  value: "3,318",
                  label: "Enrollments",
                  desc: "Patients enrolled in treatment",
                  color: "oklch(60% 0.18 60)",
                },
                {
                  emoji: "\u2705",
                  value: "1,456",
                  label: "End of Treatment (EOT)",
                  desc: "Patients completed full treatment",
                  color: "oklch(40% 0.18 145)",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-xl p-6 border text-center"
                  style={{
                    background: "oklch(97% 0.008 145)",
                    borderColor: "oklch(88% 0.03 145)",
                  }}
                  data-ocid={`patient_data.stat.${i + 4}`}
                >
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-base font-semibold mb-1"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-8 rounded-xl p-4 border text-sm text-center"
              style={{
                background: "oklch(94% 0.04 145)",
                borderColor: "oklch(80% 0.08 145)",
                color: "oklch(35% 0.12 145)",
              }}
            >
              &#128197; These numbers change daily as MHOs submit new data from
              all sites across Pakistan.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
