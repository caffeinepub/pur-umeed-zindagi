import { Calendar, MapPin, Users } from "lucide-react";
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

const programs = [
  {
    title: "World Mental Health Day",
    dates: "October 10 — Annual",
    location: "All 4 Regions",
    participants: "1,500+ annually",
    desc: "Annual commemorations held across all PUZ sites. Activities include public talks, free screenings, awareness stalls, and panel discussions with mental health professionals.",
    tags: ["Annual", "All Regions", "Awareness"],
  },
  {
    title: "Stress Management Seminar",
    dates: "2022–2024",
    location: "Karachi, Sindh",
    participants: "400+",
    desc: "Targeted seminars for community members, healthcare workers, and students on recognizing and managing stress using evidence-based techniques.",
    tags: ["Seminar", "Stress", "Healthcare Workers"],
  },
  {
    title: "Psychological First Aid (PFA) Workshop — Cohort 1",
    dates: "2022",
    location: "Karachi",
    participants: "60 participants",
    desc: "First cohort of PFA training equipping healthcare workers and community volunteers with skills to provide immediate psychological support in crises.",
    tags: ["PFA", "Workshop", "Training"],
  },
  {
    title: "Psychological First Aid (PFA) Workshop — Cohort 2",
    dates: "2023",
    location: "Sindh & Balochistan",
    participants: "80 participants",
    desc: "Second cohort expanding PFA training to Sindh and Balochistan with expanded content on trauma, disaster response, and child psychological first aid.",
    tags: ["PFA", "Workshop", "Expansion"],
  },
  {
    title: "Community Mental Health Sessions",
    dates: "2022–2025 (Ongoing)",
    location: "All 17 Sites",
    participants: "3,000+ community members",
    desc: "Regular community-level awareness sessions at mosques, schools, and health centers. Sessions cover mental health basics, stigma reduction, and how to access PUZ services.",
    tags: ["Community", "Ongoing", "Stigma Reduction"],
  },
  {
    title: "Anti-Stigma Campaigns",
    dates: "2021–2025 (Ongoing)",
    location: "All Regions",
    participants: "10,000+ reached",
    desc: "Multi-channel campaigns including social media, community gatherings, and healthcare settings to reduce stigma around mental health help-seeking.",
    tags: ["Stigma", "Campaign", "Ongoing"],
  },
  {
    title: "School & College Outreach Programs",
    dates: "2023–2025",
    location: "Karachi, Punjab",
    participants: "2,000+ students",
    desc: "Interactive sessions in schools and colleges addressing adolescent mental health, peer support, examination stress, and how to access mental health resources.",
    tags: ["Youth", "Schools", "Adolescents"],
  },
  {
    title: "Workplace Mental Wellness Sessions",
    dates: "2024–2025",
    location: "IHHN Partner Organizations",
    participants: "500+ employees",
    desc: "Focused sessions for employees and healthcare staff on burnout prevention, workplace stress management, and maintaining mental wellbeing in demanding work environments.",
    tags: ["Workplace", "Burnout", "Healthcare Staff"],
  },
];

export default function Awareness() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Awareness Sessions & Programs"
        subtitle="Spreading mental health awareness across Pakistan"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {[
              { value: "8+", label: "Programs" },
              { value: "17K+", label: "Reached" },
              { value: "4", label: "Regions" },
              { value: "2018", label: "Since" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5 border text-center"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
              >
                <div
                  className="text-3xl font-bold mb-1"
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
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-7 border card-hover"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`awareness.item.${i + 1}`}
              >
                <div
                  className="flex items-center gap-3 text-xs mb-3"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.dates}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.location}
                  </span>
                </div>
                <h3
                  className="font-bold text-xl mb-3"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  {p.desc}
                </p>
                <div
                  className="flex items-center gap-2 text-xs mb-4"
                  style={{ color: "oklch(75% 0.18 145)" }}
                >
                  <Users className="w-3.5 h-3.5" />
                  {p.participants}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: "oklch(20% 0.07 145)",
                        color: "oklch(75% 0.18 145)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
