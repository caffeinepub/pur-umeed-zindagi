import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Megaphone,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const programs = [
  {
    id: 1,
    title: "World Mental Health Day",
    date: "October 2025",
    location: "Badin",
    type: "Awareness",
    description:
      "Community celebration focused on mental health literacy, reducing stigma, and encouraging help-seeking behaviour across the region.",
    impact: "Increased community awareness and participation",
    facilitators: [],
  },
  {
    id: 2,
    title: "Stress Management Seminar",
    date: "November 20, 2025",
    location: "Badin",
    type: "Seminar",
    description:
      "Practical workshop covering deep breathing, mindfulness, journaling, and emotional regulation techniques to manage daily stress.",
    impact: "Participants equipped with actionable tools for stress relief",
    facilitators: [],
  },
  {
    id: 3,
    title: "Psychological First Aid in Crises (Badin)",
    date: "December 9, 2025",
    location: "IHHN Badin Campus",
    type: "Workshop",
    description:
      "Strengthening crisis response and mental health support under the 8th Biennial ICON Conference 2026.",
    impact:
      "Crisis response capacity strengthened among healthcare professionals",
    facilitators: ["Moderator: Danish Khan", "Facilitator: Ms. Ayesha Kasiri"],
  },
  {
    id: 4,
    title: "Psychological First Aid in Crises (Karachi)",
    date: "January 16, 2026",
    location: "Transfusion Hall, Blood Centre, IHHN Karachi",
    type: "Workshop",
    description:
      "Comprehensive PFA training covering crisis identification, evidence-based response techniques, and self-care for providers. Time: 9:00 AM – 1:00 PM",
    impact:
      "Healthcare staff trained in evidence-based psychological first aid",
    facilitators: [
      "Facilitator: Ms. Mishal Ashraf",
      "Moderator: Ms. Ayesha Kasiri",
    ],
  },
  {
    id: 5,
    title: "Community Awareness Sessions",
    date: "Ongoing",
    location: "Shahdi Large, Sehwan & rural areas across Sindh",
    type: "Community",
    description:
      "Mental Health Officers (MHOs) conduct regular awareness sessions in rural communities covering mental health literacy, addiction awareness, and stigma reduction.",
    impact:
      "Positive outcomes across multiple communities with increased acceptance and help-seeking",
    facilitators: [],
  },
  {
    id: 6,
    title: "Anti-Stigma Campaigns",
    date: "Ongoing",
    location: "Multiple regions",
    type: "Campaign",
    description:
      "Outreach activities aimed at reducing mental health stigma in underserved communities, engaging local leaders, healthcare workers, and families.",
    impact: "Reduced stigma and improved attitudes towards mental health care",
    facilitators: [],
  },
];

const typeColors: Record<string, string> = {
  Awareness: "bg-teal-100 text-teal-800",
  Seminar: "bg-blue-100 text-blue-800",
  Workshop: "bg-emerald-100 text-emerald-800",
  Community: "bg-amber-100 text-amber-800",
  Campaign: "bg-purple-100 text-purple-800",
};

const stats = [
  { value: "7+", label: "Programs Conducted" },
  { value: "500+", label: "Participants Reached" },
  { value: "4", label: "Districts Covered" },
  { value: "Ongoing", label: "Community Sessions" },
];

export default function Awareness() {
  return (
    <div>
      {/* Hero */}
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" /> Community Outreach
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
              Awareness Sessions &amp; Programs
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Empowering communities through mental health education and
              outreach
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground text-primary-foreground py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="font-display text-3xl text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Our Programs &amp; Sessions
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive record of our mental health awareness efforts —
              from seminars and workshops to community outreach and anti-stigma
              campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`awareness.item.${prog.id}`}
              >
                <Card className="border-0 shadow-card h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Type badge & date */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          typeColors[prog.type] ??
                          "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {prog.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {prog.date}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-foreground mb-1">
                      {prog.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{prog.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {prog.description}
                    </p>

                    {/* Facilitators */}
                    {prog.facilitators && prog.facilitators.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prog.facilitators.map((f) => (
                          <span
                            key={f}
                            className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full"
                          >
                            <BookOpen className="w-3 h-3" /> {f}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Impact */}
                    {prog.impact && (
                      <div className="mt-4 bg-primary/5 rounded-xl px-4 py-3 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-primary font-medium">
                          {prog.impact}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl text-foreground mb-3">
              Want to organize a session?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              PUZ actively organizes awareness sessions and community programs.
              Reach out to partner with us or request a session for your
              community.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 teal-gradient text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              data-ocid="awareness.primary_button"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
