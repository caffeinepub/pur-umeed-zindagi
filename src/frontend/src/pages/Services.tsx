import {
  Brain,
  HeartHandshake,
  Megaphone,
  Phone,
  Shield,
  Users,
  Video,
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

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Counseling & Therapy",
      desc: "Individual and group sessions with qualified clinical psychologists. Cognitive Behavioral Therapy (CBT), supportive counseling, and evidence-based interventions tailored to each patient.",
      tags: ["CBT", "Individual", "Group"],
    },
    {
      icon: Shield,
      title: "Screenings",
      desc: "Validated psychological screening tools (PHQ-2, GAD-2, PHQ-9) administered by trained Mental Health Officers at the point of care.",
      tags: ["PHQ-2", "GAD-2", "PHQ-9"],
    },
    {
      icon: Users,
      title: "Enrollments & Follow-ups",
      desc: "Structured enrollment into the mental health program with regular follow-up sessions to track progress and adjust treatment plans as needed.",
      tags: ["Enrollment", "Follow-up", "Case Management"],
    },
    {
      icon: Megaphone,
      title: "Awareness & Workshops",
      desc: "Community awareness sessions, anti-stigma campaigns, World Mental Health Day events, and Psychological First Aid (PFA) training workshops.",
      tags: ["PFA", "Anti-Stigma", "Community"],
    },
    {
      icon: HeartHandshake,
      title: "Free & Accessible",
      desc: "All services are provided completely free of charge. No registration fees, no session fees. Our mission is to remove financial barriers to mental healthcare.",
      tags: ["Free", "No Barriers", "Inclusive"],
    },
    {
      icon: Video,
      title: "Remote Support",
      desc: "Telephonic and remote mental health support services for communities in remote areas. Expansion of tele-mental health services is planned.",
      tags: ["Coming Soon", "Tele-health", "Remote"],
      comingSoon: true,
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive mental health care, free for all"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-8 border card-hover relative overflow-hidden bg-white"
                style={{
                  borderColor: s.comingSoon
                    ? "oklch(88% 0.03 145)"
                    : "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                  opacity: s.comingSoon ? 0.75 : 1,
                }}
                data-ocid={`services.item.${i + 1}`}
              >
                {s.comingSoon && (
                  <div
                    className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background: "oklch(92% 0.02 145)",
                      color: "oklch(50% 0.04 145)",
                    }}
                  >
                    Coming Soon
                  </div>
                )}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <s.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "oklch(20% 0.06 145)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "oklch(45% 0.04 145)" }}
                >
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs font-medium"
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

      {/* Contact CTA */}
      <section className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Help?
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "oklch(80% 0.08 145)" }}
          >
            All our services are free. Contact us today or visit your nearest
            site.
          </p>
          <a
            href="tel:+92297330160"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-white transition-all hover:opacity-90"
            style={{ color: "oklch(25% 0.15 145)" }}
            data-ocid="services.primary_button"
          >
            <Phone className="w-5 h-5" />
            +92 297330160
          </a>
        </div>
      </section>
    </div>
  );
}
