import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const reports = [
  {
    year: "2022",
    desc: "Documenting PUZ's expansion across sites and the program's growing impact on community mental health.",
    highlights: [
      "Program expansion data",
      "Screening outcomes",
      "Counseling statistics",
    ],
    badge: "",
  },
  {
    year: "2023",
    desc: "Reflecting on milestones achieved, challenges overcome, and the thousands of lives touched through free mental health services.",
    highlights: [
      "Patient enrollment trends",
      "Regional reach",
      "MHO training outcomes",
    ],
    badge: "",
  },
  {
    year: "2024",
    desc: "Highlighting program innovations, community impact, and our continuous commitment to evidence-based mental health care.",
    highlights: [
      "Innovation initiatives",
      "Community outreach",
      "Outcome tracking",
    ],
    badge: "",
  },
  {
    year: "2025",
    desc: "The latest comprehensive review of PUZ's programs, impact, and vision for the future of accessible mental health in Pakistan.",
    highlights: ["Future roadmap", "2025 impact data", "Vision & goals"],
    badge: "Latest",
  },
];

export default function AnnualReports() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Annual Reports
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Transparent reporting on PUZ&apos;s programs, impact, and financial
            stewardship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((r, i) => (
              <motion.div
                key={r.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`annual.report.item.${i + 1}`}
              >
                <Card className="border-0 shadow-card hover:shadow-soft transition-all h-full hover:-translate-y-0.5">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl teal-gradient flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-display text-4xl text-primary">
                            {r.year}
                          </div>
                          {r.badge && (
                            <span className="px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">
                              {r.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {r.desc}
                        </p>
                        <ul className="flex flex-col gap-1.5 mb-5">
                          {r.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 border-primary/30 hover:bg-primary/5 text-primary"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
