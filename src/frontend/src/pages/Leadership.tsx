import { Brain, Crown, User } from "lucide-react";
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

const leaders = [
  {
    name: "Dr. Bari Khan",
    role: "President",
    org: "Indus Hospital & Health Network",
    icon: Crown,
    tier: 1,
  },
  {
    name: "Dr. Zafar Zaidi",
    role: "Chief Executive Officer (CEO)",
    org: "Indus Hospital & Health Network",
    icon: Crown,
    tier: 1,
  },
  {
    name: "Dr. Hiba Ashraf",
    role: "Director, Primary Care Program (PCP)",
    org: "Indus Hospital & Health Network",
    icon: User,
    tier: 2,
  },
  {
    name: "Ayesha Kasiri",
    role: "Assistant Manager, Pur Umeed Zindagi (PUZ)",
    org: "Pur Umeed Zindagi Program",
    icon: User,
    tier: 3,
  },
];

const psychologists = [
  { name: "Tasleem Barkat", role: "Regional Psychologist", region: "Karachi" },
  { name: "Danish Khan", role: "Regional Psychologist", region: "Sindh" },
  { name: "Tariq Aziz", role: "Regional Psychologist", region: "Balochistan" },
];

export default function Leadership() {
  return (
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Leadership"
        subtitle="The team guiding Pur Umeed Zindagi"
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Organizational Leadership
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Program Hierarchy
            </h2>
          </div>

          <div className="space-y-4">
            {leaders.map((leader, i) => (
              <motion.div
                key={`${leader.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border flex items-center gap-5"
                style={{
                  background:
                    leader.tier === 1
                      ? "oklch(17% 0.07 145)"
                      : "oklch(14% 0.045 145)",
                  borderColor:
                    leader.tier === 1
                      ? "oklch(35% 0.14 145)"
                      : "oklch(22% 0.06 145)",
                  marginLeft: `${(leader.tier - 1) * 24}px`,
                }}
                data-ocid={`leadership.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      leader.tier === 1
                        ? "oklch(30% 0.12 145)"
                        : "oklch(22% 0.08 145)",
                  }}
                >
                  <leader.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
                <div className="flex-1">
                  <div
                    className="font-bold text-lg"
                    style={{ color: "oklch(96% 0.005 145)" }}
                  >
                    {leader.name}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  >
                    {leader.role}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "oklch(68% 0.025 145)" }}
                  >
                    {leader.org}
                  </div>
                </div>
                {leader.tier === 1 && (
                  <div className="ml-auto">
                    <Crown
                      className="w-5 h-5"
                      style={{ color: "oklch(58% 0.22 145)" }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Psychologists */}
      <section className="py-20" style={{ background: "oklch(11% 0.045 145)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ color: "oklch(58% 0.22 145)" }}
            >
              Clinical Team
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Regional Psychologists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {psychologists.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border text-center card-hover"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(22% 0.06 145)",
                }}
                data-ocid={`leadership.item.${i + 6}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "oklch(22% 0.08 145)" }}
                >
                  <Brain
                    className="w-8 h-8"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: "oklch(96% 0.005 145)" }}
                >
                  {p.name}
                </h3>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: "oklch(58% 0.22 145)" }}
                >
                  {p.role}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "oklch(68% 0.025 145)" }}
                >
                  {p.region}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
