import {
  Award,
  Calendar,
  ExternalLink,
  MapPin,
  Star,
  Users,
} from "lucide-react";
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

const iconSessions = [
  {
    title: "Psychological First Aid in Crises",
    date: "January 16, 2026",
    url: "https://icon.indushospital.org.pk/2026/01/16/psychological-first-aid-in-crises-2/",
    desc: "Session on Psychological First Aid in crisis situations, presented at the ICON Conference 2026. Covers evidence-based techniques for providing immediate psychological support to individuals affected by emergencies and disasters.",
    tags: ["ICON 2026", "Crisis Intervention", "PFA"],
  },
  {
    title: "Psychological First Aid in Crises",
    date: "December 9, 2025",
    url: "https://icon.indushospital.org.pk/2025/12/09/psychological-first-aid-in-crises/",
    desc: "ICON session focusing on Psychological First Aid frameworks and their practical application in crisis and disaster settings across Pakistan's healthcare network.",
    tags: ["ICON 2025", "Crisis Intervention", "PFA"],
  },
];

const events = [
  {
    title: "World Mental Health Day Workshop",
    date: "October 10, 2024",
    location: "Multiple sites across Pakistan",
    participants: "500+",
    desc: "Annual commemoration with awareness activities, public talks, and community screenings.",
    tags: ["Annual", "Community"],
  },
  {
    title: "Psychotherapy Training Program",
    date: "March 2024",
    location: "Karachi HQ",
    participants: "24 MHOs",
    desc: "Intensive psychotherapy skills training for Mental Health Officers covering CBT, supportive therapy, and crisis management.",
    tags: ["Training", "MHO"],
  },
  {
    title: "MHO Refresher Training",
    date: "June 2024",
    location: "Sindh Region",
    participants: "18 MHOs",
    desc: "Refresher course for MHOs in Sindh covering case conceptualization, documentation, and suicide risk assessment.",
    tags: ["Training", "Sindh"],
  },
  {
    title: "Community Counseling Workshop",
    date: "August 2024",
    location: "Balochistan Sites",
    participants: "200+ community members",
    desc: "Community-facing workshop on recognizing mental health signs and seeking help, conducted in local languages.",
    tags: ["Community", "Balochistan"],
  },
  {
    title: "CBT Skills Training",
    date: "November 2024",
    location: "Punjab Region",
    participants: "16 MHOs",
    desc: "Focused training on Cognitive Behavioral Therapy techniques for MHOs in the Punjab region.",
    tags: ["Training", "CBT", "Punjab"],
  },
];

export default function Workshops() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Workshops & Events"
        subtitle="Training, conferences, and community engagement"
      />

      {/* Featured: ICON Conference */}
      <section className="py-16" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="uppercase tracking-widest text-xs font-semibold mb-6 text-center"
            style={{ color: "oklch(35% 0.2 145)" }}
          >
            Featured Event
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden border"
            style={{
              background: "white",
              borderColor: "oklch(88% 0.03 145)",
              boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.1)",
            }}
            data-ocid="workshops.item.1"
          >
            <div className="p-6" style={{ background: "oklch(25% 0.15 145)" }}>
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <Star className="w-4 h-4" />
                Flagship International Conference
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                8th Biennial ICON Conference 2026
              </h2>
              <p className="text-white/80">
                International Conference on Neurosciences &amp; Mental Health
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      Date
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      2026 (TBA)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      Location
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      Pakistan (TBA)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      Expected
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      500+ Attendees
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(40% 0.04 145)" }}
              >
                The biennial ICON Conference brings together mental health
                professionals, researchers, and policymakers from across
                Pakistan and internationally to share latest research, clinical
                practices, and policy developments in neurosciences and mental
                health.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ICON Sessions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              ICON Conference Sessions
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Psychological First Aid Sessions
            </h2>
            <p
              className="text-sm mt-2"
              style={{ color: "oklch(50% 0.04 145)" }}
            >
              PUZ program contributions at ICON Conference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iconSessions.map((session, i) => (
              <motion.div
                key={session.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl p-6 border"
                style={{
                  background: "oklch(97% 0.01 145)",
                  borderColor: "oklch(82% 0.06 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.08)",
                }}
              >
                <div
                  className="flex items-center gap-2 text-xs mb-3"
                  style={{ color: "oklch(50% 0.04 145)" }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {session.date}
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {session.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(40% 0.04 145)" }}
                >
                  {session.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {session.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: "oklch(88% 0.08 145)",
                        color: "oklch(25% 0.15 145)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={session.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-opacity hover:opacity-80"
                  style={{
                    background: "oklch(25% 0.15 145)",
                    color: "white",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View on ICON Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Events */}
      <section className="py-16" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Recent Events
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Workshops &amp; Training Sessions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6 border card-hover bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid={`workshops.item.${i + 2}`}
              >
                <div
                  className="flex items-center gap-2 text-xs mb-3"
                  style={{ color: "oklch(50% 0.04 145)" }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {ev.date}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {ev.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(40% 0.04 145)" }}
                >
                  {ev.desc}
                </p>
                <div
                  className="flex items-center gap-3 text-xs mb-4"
                  style={{ color: "oklch(50% 0.04 145)" }}
                >
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {ev.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {ev.participants}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ev.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: "oklch(92% 0.04 145)",
                        color: "oklch(30% 0.15 145)",
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

      {/* Recognition */}
      <section className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Award className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Recognition</h2>
            <p className="text-white/70">
              Acknowledging exceptional contributions to the PUZ program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Danish Khan",
                role: "Regional Psychologist, Sindh",
                achievement:
                  "Outstanding contribution to mental health training and community program expansion across Sindh region",
              },
              {
                name: "Ayesha Kasiri",
                role: "Program Lead, PUZ",
                achievement:
                  "Exceptional leadership and program coordination in advancing the Pur Umeed Zindagi mission",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-6"
                style={{ background: "oklch(100% 0 0 / 0.1)" }}
              >
                <Award className="w-6 h-6 text-white mb-3" />
                <h3 className="font-bold text-lg text-white mb-1">{r.name}</h3>
                <div className="text-sm text-white/70 mb-3">{r.role}</div>
                <p className="text-sm text-white/80">{r.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
