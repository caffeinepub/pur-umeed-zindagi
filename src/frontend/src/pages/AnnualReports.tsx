import { Download, FileText } from "lucide-react";
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

const reports = [
  {
    year: 2022,
    highlights: [
      "Program launch review",
      "First year data",
      "Site expansion plan",
    ],
    pages: "48 pages",
  },
  {
    year: 2023,
    highlights: ["3 regions active", "MHO capacity built", "Training outcomes"],
    pages: "62 pages",
  },
  {
    year: 2024,
    highlights: ["4th region added", "120K milestone", "Awareness impact"],
    pages: "74 pages",
  },
  {
    year: 2025,
    highlights: ["Current year", "Live data", "Ongoing updates"],
    pages: "In Progress",
  },
];

export default function AnnualReports() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Annual Reports"
        subtitle="Transparent documentation of our program impact"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reports.map((r, i) => (
              <motion.div
                key={r.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-8 border card-hover text-center"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`reports.item.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "oklch(22% 0.08 145)" }}
                >
                  <FileText
                    className="w-8 h-8"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {r.year}
                </div>
                <div
                  className="text-xs mb-5"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  Annual Report · {r.pages}
                </div>
                <ul className="text-left space-y-2 mb-6">
                  {r.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs flex items-center gap-2"
                      style={{ color: "oklch(75% 0.15 145)" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "oklch(58% 0.22 145)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-80"
                  style={{
                    borderColor: "oklch(35% 0.14 145)",
                    color: "oklch(75% 0.18 145)",
                  }}
                  data-ocid={`reports.download_button.${i + 1}`}
                >
                  <Download className="w-4 h-4" />
                  {r.year === 2025 ? "Coming Soon" : "Download PDF"}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl p-8 border text-center"
            style={{
              background: "oklch(14% 0.045 145)",
              borderColor: "oklch(22% 0.06 145)",
            }}
          >
            <p
              className="text-base mb-2"
              style={{ color: "oklch(82% 0.02 145)" }}
            >
              Annual reports are published for transparency and accountability.
              For physical copies or inquiries:
            </p>
            <p className="text-sm" style={{ color: "oklch(58% 0.22 145)" }}>
              Contact us at +92 297330160
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
