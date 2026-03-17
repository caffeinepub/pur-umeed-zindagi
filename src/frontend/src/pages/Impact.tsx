import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Heart,
  MapPin,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const kpis = [
  {
    icon: Users,
    label: "Individuals Screened",
    value: "Updated Periodically",
    note: "Thousands of people screened since 2018",
    featured: true,
  },
  {
    icon: Heart,
    label: "Counseling Sessions",
    value: "Updated Periodically",
    note: "Individual and group sessions conducted",
    featured: false,
  },
  {
    icon: TrendingUp,
    label: "Improved Well-being",
    value: "Updated Periodically",
    note: "Improvement tracked via MANSA & PHQ-9",
    featured: false,
  },
];

const reach = [
  { icon: MapPin, value: "4", label: "Regions Covered" },
  { icon: Building2, value: "17", label: "Active Sites" },
  { icon: Users, value: "34", label: "MHOs Deployed" },
  { icon: Star, value: "2018", label: "Free Since" },
];

export default function Impact() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Program Impact
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Measuring the difference we make &mdash; one life at a time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Key Performance Indicators
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Our Reach &amp; Outcomes
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Data is updated periodically as new reports are published.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`border-0 shadow-card h-full ${kpi.featured ? "ring-2 ring-primary/20" : ""}`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${kpi.featured ? "teal-gradient" : "bg-secondary"}`}
                    >
                      <kpi.icon
                        className={`w-7 h-7 ${kpi.featured ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div className="font-display text-2xl text-foreground mb-2">
                      {kpi.label}
                    </div>
                    <div className="text-primary font-semibold text-sm mb-2">
                      {kpi.value}
                    </div>
                    <p className="text-xs text-muted-foreground">{kpi.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="teal-gradient rounded-2xl p-10">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl text-primary-foreground">
                Geographic Reach
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {reach.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3">
                      <r.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="font-display text-4xl text-primary-foreground mb-1">
                      {r.value}
                    </div>
                    <div className="text-primary-foreground/70 text-sm">
                      {r.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-secondary/30 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-foreground mb-3">
              Impact Reports
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              For detailed statistics, outcomes data, and program evaluations,
              please refer to our Annual Reports.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
