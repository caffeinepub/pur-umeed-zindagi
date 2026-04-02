import { Calendar, CheckCircle, MapPin } from "lucide-react";
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

const psychologists = [
  {
    name: "Tasleem Barkat",
    region: "Karachi",
    photo: "/assets/generated/tasleem-barkat-photo.dim_400x400.jpg",
    accentColor: "oklch(35% 0.2 145)",
    clinicDays: null,
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
    photo: "/assets/generated/danish-khan-psychologist.dim_400x400.jpg",
    accentColor: "oklch(35% 0.18 200)",
    clinicDays: ["Monday", "Wednesday"],
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
    photo: "/assets/generated/tariq-aziz-photo.dim_400x400.jpg",
    accentColor: "oklch(40% 0.16 300)",
    clinicDays: null,
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

export default function Psychologists() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Our Psychologists"
        subtitle="Dedicated clinical leads serving their regions"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {psychologists.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: "white",
                  borderColor: "oklch(88% 0.03 145)",
                  borderLeft: `4px solid ${p.accentColor}`,
                  boxShadow: "0 2px 20px oklch(50% 0.06 145 / 0.08)",
                }}
                data-ocid={`psychologists.item.${i + 1}`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="w-28 h-28 rounded-2xl object-cover flex-shrink-0 border-2 shadow-md"
                      style={{ borderColor: p.accentColor }}
                    />
                    <div>
                      <h2
                        className="text-3xl font-bold mb-1"
                        style={{ color: "oklch(20% 0.06 145)" }}
                      >
                        {p.name}
                      </h2>
                      <div
                        className="font-semibold mb-1"
                        style={{ color: p.accentColor }}
                      >
                        Regional Psychologist
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm mb-2"
                        style={{ color: "oklch(50% 0.04 145)" }}
                      >
                        <MapPin className="w-4 h-4" />
                        {p.region} Region
                      </div>
                      {p.clinicDays && (
                        <div
                          className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
                          style={{
                            background: "oklch(94% 0.04 145)",
                            border: "1px solid oklch(80% 0.1 145)",
                            color: "oklch(30% 0.15 145)",
                          }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">Clinic Days:</span>
                          <span>{p.clinicDays.join(" & ")}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(35% 0.2 145)" }}
                      >
                        Sites Covered
                      </h4>
                      <div className="space-y-2">
                        {p.sites.map((s) => (
                          <div key={s} className="flex items-center gap-2">
                            <MapPin
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: p.accentColor }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(35% 0.05 145)" }}
                            >
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(35% 0.2 145)" }}
                      >
                        Specializations
                      </h4>
                      <div className="space-y-2">
                        {p.specializations.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: p.accentColor }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(35% 0.05 145)" }}
                            >
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(35% 0.2 145)" }}
                      >
                        Services Offered
                      </h4>
                      <div className="space-y-2">
                        {p.services.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: p.accentColor }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(35% 0.05 145)" }}
                            >
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
