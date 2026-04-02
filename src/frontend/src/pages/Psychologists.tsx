import { Brain, CheckCircle, MapPin } from "lucide-react";
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

const psychologists = [
  {
    name: "Tasleem Barkat",
    region: "Karachi",
    photo: null,
    color: "oklch(58% 0.22 145)",
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
    photo:
      "/assets/images_-_2026-04-02t185141.867-019d4ebd-a823-7098-ae11-cc7041371614.jpeg",
    color: "oklch(58% 0.2 200)",
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
    photo: null,
    color: "oklch(60% 0.18 300)",
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
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
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
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`psychologists.item.${i + 1}`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    {/* Photo or Initials Avatar */}
                    {p.photo ? (
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2"
                        style={{ borderColor: p.color }}
                      />
                    ) : (
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${p.color}20` }}
                      >
                        <Brain
                          className="w-10 h-10"
                          style={{ color: p.color }}
                        />
                      </div>
                    )}
                    <div>
                      <h2
                        className="text-3xl font-bold mb-1"
                        style={{ color: "oklch(96% 0.005 145)" }}
                      >
                        {p.name}
                      </h2>
                      <div
                        className="font-medium mb-1"
                        style={{ color: p.color }}
                      >
                        Regional Psychologist
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "oklch(68% 0.025 145)" }}
                      >
                        <MapPin className="w-4 h-4" />
                        {p.region} Region
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sites */}
                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(58% 0.22 145)" }}
                      >
                        Sites Covered
                      </h4>
                      <div className="space-y-2">
                        {p.sites.map((s) => (
                          <div key={s} className="flex items-center gap-2">
                            <MapPin
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: p.color }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(82% 0.02 145)" }}
                            >
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(58% 0.22 145)" }}
                      >
                        Specializations
                      </h4>
                      <div className="space-y-2">
                        {p.specializations.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: p.color }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(82% 0.02 145)" }}
                            >
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4
                        className="uppercase tracking-widest text-xs font-semibold mb-3"
                        style={{ color: "oklch(58% 0.22 145)" }}
                      >
                        Services Offered
                      </h4>
                      <div className="space-y-2">
                        {p.services.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                              style={{ color: p.color }}
                            />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(82% 0.02 145)" }}
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
