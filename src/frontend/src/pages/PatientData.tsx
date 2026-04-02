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

export default function PatientData() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Patient Data"
        subtitle="Screening, Enrollment & End of Treatment — by MHOs"
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2025 Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-8 border mb-10"
            style={{
              background: "oklch(14% 0.045 145)",
              borderColor: "oklch(22% 0.06 145)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="uppercase tracking-widest text-xs font-semibold"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Year 2025
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Total Patients Seen in 2025
            </h2>
            <div
              className="text-6xl font-bold mb-2"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              120,388
            </div>
            <p className="text-sm" style={{ color: "oklch(68% 0.025 145)" }}>
              Across 4 regions · Karachi, Sindh, Balochistan, Punjab
            </p>
          </motion.div>

          {/* 2026 Data — MHO Screening / Enrollments / EOT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl p-8 border"
            style={{
              background: "oklch(14% 0.045 145)",
              borderColor: "oklch(30% 0.12 145)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span
                className="uppercase tracking-widest text-xs font-semibold"
                style={{ color: "oklch(58% 0.22 145)" }}
              >
                Year 2026
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: "oklch(20% 0.06 145)",
                  color: "oklch(75% 0.18 145)",
                  border: "1px solid oklch(30% 0.1 145)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
                Live — Updated Daily
              </span>
            </div>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              MHO Patient Data — Jan to March 2026
            </h2>
            <p
              className="text-sm mb-8"
              style={{ color: "oklch(68% 0.025 145)" }}
            >
              Data collected by Mental Health Officers (MHOs). Numbers are
              updated daily and reflect cumulative totals up to March 2026.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Screening */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-xl p-6 border text-center"
                style={{
                  background: "oklch(11% 0.04 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid="patient_data.stat.1"
              >
                <div className="text-4xl mb-2">&#128203;</div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "oklch(58% 0.22 145)" }}
                >
                  250,000
                </div>
                <div
                  className="text-base font-semibold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  Screening
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Total patients screened by MHOs
                </div>
              </motion.div>

              {/* Enrollments */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl p-6 border text-center"
                style={{
                  background: "oklch(11% 0.04 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid="patient_data.stat.2"
              >
                <div className="text-4xl mb-2">&#128101;</div>
                <div className="text-4xl font-bold mb-2 text-amber-400">
                  13,000
                </div>
                <div
                  className="text-base font-semibold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  Enrollments
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Patients enrolled in treatment
                </div>
              </motion.div>

              {/* EOT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl p-6 border text-center"
                style={{
                  background: "oklch(11% 0.04 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid="patient_data.stat.3"
              >
                <div className="text-4xl mb-2">&#9989;</div>
                <div className="text-4xl font-bold mb-2 text-emerald-400">
                  1,000
                </div>
                <div
                  className="text-base font-semibold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  End of Treatment (EOT)
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Patients completed full treatment
                </div>
              </motion.div>
            </div>

            <div
              className="mt-8 rounded-xl p-4 border text-sm text-center"
              style={{
                background: "oklch(17% 0.05 145)",
                borderColor: "oklch(22% 0.06 145)",
                color: "oklch(68% 0.025 145)",
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
