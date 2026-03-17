import { Card, CardContent } from "@/components/ui/card";
import { Quote, User } from "lucide-react";
import { motion } from "motion/react";

const leaders = [
  {
    name: "Dr. Abdul Bari Khan",
    role: "President",
    org: "Indus Hospital & Health Network",
    featured: false,
  },
  {
    name: "Dr. Zafar Zaidi",
    role: "Chief Executive Officer",
    org: "Indus Hospital & Health Network",
    featured: false,
  },
  {
    name: "Dr. Hiba Ashraf",
    role: "Director, Primary Care Program",
    org: "Indus Hospital & Health Network",
    featured: true,
  },
];

export default function Leadership() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Leadership
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            The dedicated leaders steering PUZ&apos;s mission of accessible,
            compassionate mental health care.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`border-0 shadow-card h-full text-center ${leader.featured ? "ring-2 ring-primary/20" : ""}`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${leader.featured ? "teal-gradient" : "bg-secondary"}`}
                    >
                      <User
                        className={`w-10 h-10 ${leader.featured ? "text-primary-foreground" : "text-muted-foreground"}`}
                      />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {leader.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {leader.org}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/15" />
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Message from the Director
                </span>
                <h2 className="font-display text-3xl text-foreground mt-3">
                  Dr. Hiba Ashraf
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Director, Primary Care Program &middot; IHHN
                </p>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Pur Umeed Zindagi Program is founded on the belief that
                  every individual carries within them the strength, resilience,
                  and potential to lead a meaningful and hopeful life &mdash;
                  even in the face of challenges. Our mission is to empower
                  people emotionally, mentally, and socially so they can move
                  forward with confidence and purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through PCP, we are committed to promoting mental well-being,
                  emotional awareness, and practical life skills that help
                  individuals cope with stress, grief, uncertainty, and life
                  transitions. We believe that healing is not just about the
                  absence of illness &mdash; it is about rediscovering purpose,
                  connection, and the ability to live fully.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our trained Mental Health Officers and Psychologists work
                  tirelessly at the grassroots level, breaking barriers of
                  stigma and geography to bring care to those who need it most.
                  Every screening, every counseling session, every follow-up is
                  a step toward a more hopeful tomorrow.
                </p>
                <p className="text-foreground font-medium leading-relaxed italic">
                  &ldquo;Hope is not just a feeling &mdash; it is a process
                  &mdash; and together, we aim to turn hope into action and
                  positive change.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
