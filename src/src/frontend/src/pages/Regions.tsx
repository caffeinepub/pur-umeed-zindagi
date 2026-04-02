import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const regions = [
  {
    name: "Karachi",
    province: "Sindh — Metropolitan",
    sites: ["KC (Korangi Campus)", "Baba Island"],
    count: 2,
    desc: "The program's founding region, covering urban Karachi through two major sites including the Korangi Campus and Baba Island.",
  },
  {
    name: "Sindh",
    province: "Sindh — Rural & Semi-Urban",
    sites: [
      "CHB",
      "Makli",
      "Matli",
      "Khorwah",
      "Shadi Large",
      "Sehwan",
      "MMB (Medical Mobile Bus)",
    ],
    count: 7,
    desc: "Reaching rural and semi-urban communities across the Sindh interior from CHB to Sehwan, including the Medical Mobile Bus (MMB) outreach service.",
  },
  {
    name: "Balochistan",
    province: "Balochistan Province",
    sites: ["Saranana", "Nokundi"],
    count: 2,
    desc: "Extending mental health care to one of Pakistan's most underserved provinces, serving communities in Saranana and Nokundi.",
  },
  {
    name: "Punjab",
    province: "Punjab Province",
    sites: [
      "Gurmani",
      "Recep Tayyip Erdogan Hospital",
      "Rajanpur",
      "Samundari",
      "Kot Addu",
    ],
    count: 5,
    desc: "Serving communities across central and southern Punjab with trained MHOs and psychologist support.",
  },
];

const totalSites = regions.reduce((sum, r) => sum + r.count, 0);

export default function Regions() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Regions &amp; Sites
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            PUZ operates across 4 regions in Pakistan, bringing mental health
            care to communities far and near.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`region.item.${i + 1}`}
              >
                <Card className="border-0 shadow-card hover:shadow-soft transition-all h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl teal-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-display">
                          {region.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {region.province}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {region.desc}
                    </p>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        {region.count} {region.count === 1 ? "Site" : "Sites"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {region.sites.map((site) => (
                          <span
                            key={site}
                            className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm font-medium"
                          >
                            {site}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 bg-secondary/30 rounded-2xl p-8 text-center">
            <div className="font-display text-3xl text-foreground mb-3">
              {totalSites} Sites Across Pakistan
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From urban hospitals in Karachi to remote communities in
              Balochistan and Sindh, PUZ brings hope and healing to those who
              need it most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
