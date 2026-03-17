import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  ClipboardList,
  Gift,
  Megaphone,
  Users,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Brain,
    title: "Counseling & Therapy",
    subtitle: "By Psychologist",
    items: [
      "Individual Counseling",
      "Group Therapy Sessions",
      "Personalized Therapy Plans",
      "Clinics by Psychologists",
    ],
    featured: true,
  },
  {
    icon: ClipboardList,
    title: "Screenings",
    subtitle: "By Mental Health Officer",
    items: [
      "PHQ-2, PHQ-9 Screening",
      "GAD-2, GAD-7 Screening",
      "MANSA Assessment",
      "Addiction Screenings",
      "Risk Assessment & Referrals",
    ],
    featured: false,
  },
  {
    icon: Users,
    title: "Enrollments & Follow-ups",
    subtitle: "By Mental Health Officer",
    items: [
      "Patient Enrollment",
      "Regular Follow-ups",
      "Outcome Tracking",
      "Case Management",
    ],
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Awareness & Workshops",
    subtitle: "Community Outreach",
    items: [
      "Community Campaigns",
      "School & College Workshops",
      "Workplace Programs",
      "Special Awareness Events",
    ],
    featured: false,
  },
  {
    icon: Gift,
    title: "Free & Accessible Services",
    subtitle: "For Everyone",
    items: [
      "Completely Free of Cost",
      "17 Sites in 4 Regions",
      "Trained MHOs & Psychologists",
      "Confidential Care",
    ],
    featured: false,
  },
  {
    icon: Wifi,
    title: "Remote Support",
    subtitle: "Coming Soon",
    items: [
      "Therapy Messaging",
      "Remote Counseling",
      "Digital Follow-ups",
      "Telehealth Integration",
    ],
    featured: false,
    badge: "Future",
  },
];

export default function Services() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Comprehensive mental health support spanning screening, counseling,
            community outreach, and follow-up care.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`service.item.${i + 1}`}
              >
                <Card className="border-0 shadow-card hover:shadow-soft transition-all h-full hover:-translate-y-0.5">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${s.featured ? "teal-gradient" : "bg-secondary"}`}
                    >
                      <s.icon
                        className={`w-6 h-6 ${s.featured ? "text-primary-foreground" : "text-primary"}`}
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {s.subtitle}
                        </p>
                      </div>
                      {s.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {s.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-2">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
