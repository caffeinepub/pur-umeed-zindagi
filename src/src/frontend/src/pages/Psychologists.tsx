import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const psychologists = [
  {
    name: "Tasleem",
    role: "Regional Psychologist",
    region: "Karachi",
    province: "Sindh",
    featured: false,
  },
  {
    name: "Danish Khan",
    role: "Regional Psychologist",
    region: "Sindh",
    province: "Sindh",
    featured: false,
  },
  {
    name: "Tariq Aziz",
    role: "Regional Psychologist",
    region: "Balochistan",
    province: "Balochistan",
    featured: false,
  },
  {
    name: "Ayesha Kasiri",
    role: "Assistant Manager of Program",
    region: "",
    province: "",
    featured: true,
  },
];

const services = [
  {
    icon: Users,
    title: "Individual Sessions",
    description:
      "One-on-one confidential sessions tailored to your personal mental health needs and goals.",
  },
  {
    icon: Brain,
    title: "Psychological Therapy",
    description:
      "Evidence-based psychological therapy to address anxiety, depression, trauma, and other mental health challenges.",
  },
  {
    icon: Sparkles,
    title: "Psychotherapy",
    description:
      "In-depth psychotherapy sessions to explore root causes of distress and build lasting coping strategies.",
  },
  {
    icon: MessageCircle,
    title: "Counseling Sessions",
    description:
      "Supportive counseling for life transitions, grief, relationship challenges, and emotional wellbeing.",
  },
];

export default function Psychologists() {
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
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 text-primary-foreground/80 text-sm mb-6">
              <HeartHandshake className="w-4 h-4" />
              Mental Health Professionals
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
              Our Psychologists
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Meet our dedicated team of regional psychologists and program
              managers providing compassionate mental health care across
              Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl text-foreground mt-2">
              Regional Psychologists & Program Leadership
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Our professionals bring regional expertise and specialized
              training to deliver culturally sensitive mental health services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {psychologists.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`psychologists.team.item.${i + 1}`}
              >
                <Card
                  className={`border-0 shadow-card h-full text-center ${
                    person.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${
                        person.featured ? "teal-gradient" : "bg-secondary"
                      }`}
                    >
                      <User
                        className={`w-10 h-10 ${
                          person.featured
                            ? "text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {person.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {person.role}
                    </p>
                    {person.region && (
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {person.region}
                          {person.province && person.province !== person.region
                            ? `, ${person.province}`
                            : ""}
                        </span>
                      </div>
                    )}
                    {person.featured && (
                      <Badge className="mt-3 teal-gradient text-primary-foreground border-0 text-xs">
                        Program Management
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-display text-3xl text-foreground mt-2">
              Psychological Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Our psychologists offer a range of evidence-based services to
              support your mental health journey — all provided free of charge.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`psychologists.services.item.${i + 1}`}
              >
                <Card className="border-0 shadow-card h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-xl teal-gradient flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5 shadow-card">
              <HeartHandshake className="w-6 h-6 text-primary" />
              <p className="text-foreground font-medium">
                All psychological services are{" "}
                <span className="text-primary font-semibold">
                  free of charge
                </span>{" "}
                — because mental health is a right, not a privilege.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
