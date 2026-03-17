import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Mic,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    id: 1,
    title: "World Mental Health Day Celebration",
    date: "October 2025",
    location: "Badin",
    type: "Awareness",
    description:
      "Awareness celebration focused on mental health literacy and community engagement.",
    impact: "Increased community engagement and reduced stigma",
    details: [],
  },
  {
    id: 2,
    title: "Stress Management Seminar",
    date: "November 20, 2025",
    location: "Badin",
    type: "Seminar",
    description:
      "Practical strategies for managing stress — covering deep breathing, mindfulness, journaling, and emotional regulation techniques.",
    impact: "Empowered participants with tools to manage stress in daily life",
    details: [],
  },
  {
    id: 3,
    title: "Psychological First Aid in Crises",
    date: "December 9, 2025",
    location: "IHHN Badin Campus",
    type: "Workshop",
    description:
      "Strengthening crisis response and mental health support. Certificates of Appreciation awarded to facilitators.",
    impact:
      "Crisis response capacity strengthened among healthcare professionals",
    details: [
      "Moderator: Danish Khan",
      "Facilitator: Ms. Ayesha Kasiri",
      "Recognition: Certificates of Appreciation awarded",
    ],
  },
  {
    id: 4,
    title: "Psychological First Aid in Crises",
    date: "January 16, 2026",
    location: "Transfusion Hall, Blood Centre, IHHN Karachi",
    type: "Workshop",
    description:
      "A comprehensive PFA training covering crisis identification, evidence-based response techniques, and self-care for providers. Time: 9:00 AM – 1:00 PM",
    impact: "",
    details: ["Facilitator: Ms. Mishal Ashraf", "Moderator: Ms. Ayesha Kasiri"],
    objectives: [
      "Define crisis and trauma; recognize psychological and physical impacts",
      "Identify key PFA principles: Safety, Calmness, Connectedness, Self-efficacy, Hope",
      "Demonstrate practical PFA techniques in simulated crisis situations",
      "Apply effective listening, empathy, and grounding strategies",
      "Recognize when to refer individuals for professional mental health support",
      "Practice self-care to maintain emotional well-being while providing PFA",
    ],
  },
  {
    id: 5,
    title: "Community Awareness Sessions",
    date: "Ongoing",
    location: "Shahdi Large, Sehwan & rural areas",
    type: "Community",
    description:
      "MHOs conduct daily mental health awareness sessions across rural communities — educating about mental health and addiction, reducing stigma, and encouraging help-seeking behaviour.",
    impact:
      "Positive outcomes with increased acceptance and participation across communities",
    details: [],
  },
];

const typeColors: Record<string, string> = {
  Awareness: "bg-teal-100 text-teal-800",
  Seminar: "bg-blue-100 text-blue-800",
  Workshop: "bg-emerald-100 text-emerald-800",
  Community: "bg-amber-100 text-amber-800",
};

export default function Workshops() {
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
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
              Workshops &amp; Events
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Building capacity through training, awareness, and collaborative
              learning — from community sessions to international conferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured ICON Conference */}
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-ocid="workshops.featured.card"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-xl bg-gradient-to-br from-teal-50 via-white to-emerald-50">
              {/* Top accent bar */}
              <div className="h-1.5 teal-gradient w-full" />

              <div className="p-8 md:p-12">
                {/* Badges row */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5" /> Featured
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <BookOpen className="w-3.5 h-3.5" /> International
                    Conference
                  </span>
                </div>

                {/* Conference title */}
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  8th Biennial ICON Conference 2026
                </h2>
                <p className="text-primary text-lg font-semibold italic mb-1">
                  &ldquo;Resilient Care, Sustainable Future&rdquo;
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Organised by Indus Hospital &amp; Health Network (IHHN)
                </p>

                {/* Meta info */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                    <span>December 9, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>IHHN Badin Campus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mic className="w-4 h-4 text-primary shrink-0" />
                    <span>Workshop: Psychological First Aid in Crises</span>
                  </div>
                </div>

                {/* Recognition badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-white border border-primary/20 rounded-2xl px-5 py-3 shadow-sm">
                    <Award className="w-8 h-8 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Moderator</p>
                      <p className="text-sm font-semibold text-foreground">
                        Danish Khan
                      </p>
                      <p className="text-xs text-primary">
                        Certificate of Appreciation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-primary/20 rounded-2xl px-5 py-3 shadow-sm">
                    <Award className="w-8 h-8 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Facilitator
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        Ms. Ayesha Kasiri
                      </p>
                      <p className="text-xs text-primary">
                        Certificate of Appreciation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  A meaningful experience focused on strengthening crisis
                  response and mental health support alongside dedicated
                  healthcare professionals. PUZ team members contributed
                  significantly through facilitation and moderation, earning
                  recognition for their commitment to mental health advancement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              All Events
            </h2>
            <p className="text-muted-foreground">
              Workshops, seminars, and community sessions conducted by the PUZ
              team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`workshops.item.${event.id}`}
              >
                <Card className="border-0 shadow-card h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Type badge & date */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          typeColors[event.type] ??
                          "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-foreground mb-1">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Details */}
                    {event.details && event.details.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.details.map((d) => (
                          <Badge
                            key={d}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {d}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Learning objectives */}
                    {event.objectives && event.objectives.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-primary" />
                          Learning Objectives
                        </p>
                        <ul className="space-y-1.5">
                          {event.objectives.map((obj) => (
                            <li
                              key={obj}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Impact */}
                    {event.impact && (
                      <div className="mt-4 bg-primary/5 rounded-xl px-4 py-3 flex items-start gap-2">
                        <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-primary font-medium">
                          {event.impact}
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
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl text-foreground mb-3">
              Interested in a Workshop?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              PUZ regularly conducts capacity-building workshops and community
              awareness sessions. Reach out to learn more or request a session
              for your organisation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 teal-gradient text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              data-ocid="workshops.primary_button"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
