import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import { motion } from "motion/react";

const mhoData = [
  {
    site: "Korangi Campus",
    region: "Karachi",
    color: "from-teal-400 to-teal-600",
    mhos: ["Shahbano", "Adeel", "Fahim Noor", "Ghazala Kanwal"],
  },
  {
    site: "Baba Island",
    region: "Karachi",
    color: "from-teal-400 to-teal-600",
    mhos: ["Rukhsar Faizan"],
  },
  {
    site: "Matli",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Bilquees Bano Shah", "Meer Hassan"],
  },
  {
    site: "Sehwan",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Hameeda Burdi"],
  },
  {
    site: "CHB (Civil Hospital Badin)",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: [
      "Nayab Suhail",
      "Arshad Khuwaja",
      "Sughra Kumbhar",
      "Syed Shahzaib",
      "Faizan",
    ],
  },
  {
    site: "MMB (Medical Mobile Bus)",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Raheela Kashif"],
  },
  {
    site: "Khorwah",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Zubaida Jamali", "Tafseer Memon"],
  },
  {
    site: "Shadi Large",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Muqadas Ansari", "Ahmer Ali"],
  },
  {
    site: "Makli",
    region: "Sindh",
    color: "from-blue-400 to-blue-600",
    mhos: ["Samren Shahani", "Lal Bux"],
  },
  {
    site: "Bhong",
    region: "Punjab",
    color: "from-purple-400 to-purple-600",
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
    color: "from-purple-400 to-purple-600",
    mhos: ["Sumiea Altaf"],
  },
  {
    site: "RTEH (Recep Tayyip Erdogan Hospital)",
    region: "Punjab",
    color: "from-purple-400 to-purple-600",
    mhos: ["Rehana Afzal", "Zeshan Haider", "Tehmina Iqbal"],
  },
  {
    site: "Rajanpur",
    region: "Punjab",
    color: "from-purple-400 to-purple-600",
    mhos: ["Salma Khalil", "Ahsan Bashir"],
  },
  {
    site: "Samundri",
    region: "Punjab",
    color: "from-purple-400 to-purple-600",
    mhos: ["Ali Husnain", "Khadija Abid"],
  },
  {
    site: "Kot Adu",
    region: "Punjab",
    color: "from-purple-400 to-purple-600",
    mhos: ["Manahil Fatima", "Adnan Javed"],
  },
  {
    site: "Saranan",
    region: "Balochistan",
    color: "from-orange-400 to-orange-600",
    mhos: ["Bibi Safia"],
  },
  {
    site: "Nokundi",
    region: "Balochistan",
    color: "from-orange-400 to-orange-600",
    mhos: ["Asiya Nawab"],
  },
];

const regionColors: Record<string, string> = {
  Karachi: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  Sindh: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Punjab: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Balochistan: "bg-orange-500/15 text-orange-300 border-orange-500/30",
};

const regions = ["Karachi", "Sindh", "Punjab", "Balochistan"];

export default function MHOs() {
  const totalMHOs = mhoData.reduce((acc, site) => acc + site.mhos.length, 0);

  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(18% 0.02 240) 0%, oklch(24% 0.06 200) 60%, oklch(20% 0.04 210) 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(55% 0.18 180), transparent 70%)",
            }}
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
              <Users className="w-4 h-4" /> Our Mental Health Officers
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
              MHO Team Directory
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Our dedicated Mental Health Officers serve patients across 17
              sites in 4 regions of Pakistan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-center">
                <div className="font-display text-3xl text-white">
                  {totalMHOs}
                </div>
                <div className="text-white/60 text-xs mt-0.5">Total MHOs</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-center">
                <div className="font-display text-3xl text-white">
                  {mhoData.length}
                </div>
                <div className="text-white/60 text-xs mt-0.5">Active Sites</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-center">
                <div className="font-display text-3xl text-white">4</div>
                <div className="text-white/60 text-xs mt-0.5">Regions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MHOs by Region */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          {regions.map((region) => {
            const sites = mhoData.filter((s) => s.region === region);
            return (
              <div key={region} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-2xl text-foreground">
                    {region} Region
                  </h2>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${regionColors[region]}`}
                  >
                    {sites.reduce((a, s) => a + s.mhos.length, 0)} MHOs
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sites.map((site, i) => (
                    <motion.div
                      key={site.site}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <Card className="border border-border/60 shadow-xs h-full overflow-hidden">
                        <div
                          className={`h-1.5 bg-gradient-to-r ${site.color}`}
                        />
                        <CardContent className="p-5">
                          <div className="font-semibold text-foreground text-sm mb-3">
                            {site.site}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {site.mhos.map((mho) => (
                              <span
                                key={mho}
                                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                              >
                                {mho}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
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
