import { Users } from "lucide-react";
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

const programTeam = [
  {
    section: "Program Oversight",
    color: "oklch(35% 0.2 145)",
    members: [
      { name: "Dr. Hiba Ashraf", role: "Director, Primary Care Program (PCP)" },
    ],
  },
  {
    section: "Core PUZ Team",
    color: "oklch(35% 0.18 200)",
    members: [
      { name: "Ayesha Kasiri", role: "Assistant Manager, PUZ" },
      { name: "Danish Khan", role: "CHD Core" },
      { name: "Tasleem Barkat", role: "CHD Core" },
      { name: "Tariq Aziz", role: "Psychologist, Balochistan" },
    ],
  },
  {
    section: "Regional & Technical Leads",
    color: "oklch(40% 0.15 300)",
    members: [
      { name: "Danish Khan", role: "Sindh Region" },
      { name: "Tasleem Barkat", role: "Karachi Region" },
      { name: "Tariq Aziz", role: "Balochistan Region" },
    ],
  },
  {
    section: "Program Support",
    color: "oklch(45% 0.15 60)",
    members: [
      { name: "Manahil Saif", role: "Program Data Analyst" },
      { name: "Brnicay Boaz", role: "Program Associate" },
    ],
  },
];

const mhoSites = [
  {
    site: "Korangi Campus",
    region: "Karachi",
    color: "oklch(35% 0.18 200)",
    mhos: ["Shahbano", "Adeel", "Fahim Noor", "Ghazala Kanwal"],
  },
  {
    site: "Baba Island",
    region: "Karachi",
    color: "oklch(35% 0.18 200)",
    mhos: ["Rukhsar Faizan"],
  },
  {
    site: "CHB (Civil Hospital Badin)",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: [
      "Nayab Suhail",
      "Arshad Khuwaja",
      "Sughra Kumbhar",
      "Syed Shahzaib",
      "Faizan",
    ],
  },
  {
    site: "Matli",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Bilquees Bano Shah", "Meer Hassan"],
  },
  {
    site: "Sehwan",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Hameeda Burdi"],
  },
  {
    site: "MMB (Medical Mobile Bus)",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Raheela Kashif"],
  },
  {
    site: "Khorwah",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Zubaida Jamali", "Tafseer Memon"],
  },
  {
    site: "Shadi Large",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Muqadas Ansari", "Ahmer Ali"],
  },
  {
    site: "Makli",
    region: "Sindh",
    color: "oklch(35% 0.2 145)",
    mhos: ["Samren Shahani", "Lal Bux"],
  },
  {
    site: "Saranan",
    region: "Balochistan",
    color: "oklch(45% 0.15 60)",
    mhos: ["Bibi Safia"],
  },
  {
    site: "Nokundi",
    region: "Balochistan",
    color: "oklch(45% 0.15 60)",
    mhos: ["Asiya Nawab"],
  },
  {
    site: "Bhong",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: [
      "Ayesha Akram",
      "Yasmin Hanif",
      "Mehboob Ahmed",
      "Tahira",
      "Shahida",
    ],
  },
  {
    site: "Gurmani",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: ["Sumiea Altaf"],
  },
  {
    site: "RTEH (Recep Tayyip Erdogan Hospital)",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: ["Rehana Afzal", "Zeshan Haider", "Tehmina Iqbal"],
  },
  {
    site: "Rajanpur",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: ["Salma Khalil", "Ahsan Bashir"],
  },
  {
    site: "Samundri",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: ["Ali Husnain", "Khadija Abid"],
  },
  {
    site: "Kot Addu",
    region: "Punjab",
    color: "oklch(40% 0.15 300)",
    mhos: ["Manahil Fatima", "Adnan Javed"],
  },
];

const regionsMeta = [
  { name: "Karachi", color: "oklch(35% 0.18 200)" },
  { name: "Sindh", color: "oklch(35% 0.2 145)" },
  { name: "Balochistan", color: "oklch(45% 0.15 60)" },
  { name: "Punjab", color: "oklch(40% 0.15 300)" },
];

export default function MHOs() {
  return (
    <div className="bg-white">
      <PageHeader
        title="MHO Team Directory"
        subtitle="Mental Health Officers across all PUZ sites"
      />

      {/* Program Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Pur Umeed Zindagi — Indus Hospital &amp; Health Network
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Welcome to PUZ Program Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programTeam.map((group, gi) => (
              <motion.div
                key={group.section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="rounded-2xl p-6 border bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  borderLeft: `4px solid ${group.color}`,
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: group.color }}
                  />
                  <h3
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.section}
                  </h3>
                </div>
                <div className="space-y-2">
                  {group.members.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 py-2 border-b last:border-0"
                      style={{ borderColor: "oklch(92% 0.02 145)" }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                        style={{ background: group.color }}
                      >
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ color: "oklch(20% 0.06 145)" }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MHOs by Region */}
      <section className="py-16" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4"
              style={{ background: "oklch(94% 0.04 145)" }}
            >
              <Users
                className="w-6 h-6"
                style={{ color: "oklch(35% 0.2 145)" }}
              />
            </div>
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "oklch(35% 0.2 145)" }}
            >
              Field Team
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: "oklch(20% 0.06 145)" }}
            >
              Our MHOs — By Site &amp; Region
            </h2>
          </div>

          {regionsMeta.map(({ name: region, color: regionColor }) => {
            const sitesInRegion = mhoSites.filter((s) => s.region === region);
            if (sitesInRegion.length === 0) return null;
            return (
              <div key={region} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: regionColor }}
                  />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    {region}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "oklch(92% 0.04 145)",
                      color: regionColor,
                    }}
                  >
                    {sitesInRegion.reduce((acc, s) => acc + s.mhos.length, 0)}{" "}
                    MHOs
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sitesInRegion.map((site, si) => (
                    <motion.div
                      key={site.site}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.06 }}
                      className="rounded-xl p-5 border bg-white"
                      style={{
                        borderColor: "oklch(88% 0.03 145)",
                        boxShadow: "0 1px 8px oklch(50% 0.04 145 / 0.06)",
                      }}
                      data-ocid={`mhos.item.${si + 1}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: site.color }}
                        />
                        <h4
                          className="font-bold text-sm"
                          style={{ color: "oklch(20% 0.06 145)" }}
                        >
                          {site.site}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {site.mhos.map((mho) => (
                          <span
                            key={mho}
                            className="px-2 py-1 rounded-lg text-xs font-medium"
                            style={{
                              background: "oklch(94% 0.03 145)",
                              color: "oklch(30% 0.08 145)",
                              border: "1px solid oklch(85% 0.04 145)",
                            }}
                          >
                            {mho}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
