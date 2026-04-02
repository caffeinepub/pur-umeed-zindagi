import { Brain, Crown, Star, Users } from "lucide-react";
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

const leaders = [
  {
    name: "Dr. Bari Khan",
    title: "President",
    org: "Indus Hospital & Health Network",
    icon: Crown,
    order: 1,
  },
  {
    name: "Dr. Zafar Zaidi",
    title: "Chief Executive Officer",
    org: "Indus Hospital & Health Network",
    icon: Star,
    order: 2,
  },
  {
    name: "Dr. Hiba Ashraf",
    title: "Director, Primary Care Program (PCP)",
    org: "Indus Hospital & Health Network",
    icon: Brain,
    order: 3,
  },
  {
    name: "Ayesha Kasiri",
    title: "Assistant Manager, PUZ",
    org: "Pur Umeed Zindagi Program",
    icon: Users,
    order: 4,
  },
];

export default function Leadership() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Program Leadership"
        subtitle="The dedicated leaders behind Pur Umeed Zindagi"
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Indus Hospital &amp; Health Network
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Our Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-8 border card-hover"
                style={{
                  background: "white",
                  borderColor: "oklch(88% 0.03 145)",
                  borderLeft: "4px solid oklch(35% 0.2 145)",
                  boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
                }}
                data-ocid={`leadership.item.${i + 1}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(94% 0.04 145)" }}
                  >
                    <l.icon
                      className="w-7 h-7"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    >
                      Position #{l.order}
                    </div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: "oklch(20% 0.06 145)" }}
                    >
                      {l.name}
                    </h3>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    >
                      {l.title}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(50% 0.04 145)" }}
                    >
                      {l.org}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Team */}
      <section className="py-16" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Program Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                section: "Core PUZ Team",
                members: [
                  { name: "Ayesha Kasiri", role: "Assistant Manager, PUZ" },
                  { name: "Danish Khan", role: "CHD Core" },
                  { name: "Tasleem Barkat", role: "CHD Core" },
                  { name: "Tariq Aziz", role: "Psychologist, Balochistan" },
                ],
              },
              {
                section: "Regional Leads",
                members: [
                  { name: "Danish Khan", role: "Sindh Region" },
                  { name: "Tasleem Barkat", role: "Karachi Region" },
                  { name: "Tariq Aziz", role: "Balochistan Region" },
                ],
              },
              {
                section: "Program Support",
                members: [
                  { name: "Manahil Saif", role: "Program Data Analyst" },
                  { name: "Brnicay Boaz", role: "Program Associate" },
                ],
              },
            ].map((group, gi) => (
              <div
                key={group.section}
                className="bg-white rounded-2xl p-6 border"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid={`leadership.item.${gi + 5}`}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: "oklch(35% 0.2 145)" }}
                >
                  {group.section}
                </h3>
                <div className="space-y-3">
                  {group.members.map((m) => (
                    <div key={m.name} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "oklch(35% 0.2 145)" }}
                      />
                      <div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "oklch(25% 0.08 145)" }}
                        >
                          {m.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "oklch(50% 0.04 145)" }}
                        >
                          {m.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
