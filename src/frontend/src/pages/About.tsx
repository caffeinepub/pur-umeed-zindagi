import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Eye, Heart, Target } from "lucide-react";
import { motion } from "motion/react";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We approach every individual with empathy, dignity, and non-judgment.",
  },
  {
    icon: CheckCircle,
    title: "Confidentiality",
    desc: "All interactions are strictly private and protected.",
  },
  {
    icon: Target,
    title: "Accessibility",
    desc: "Free services delivered where people live and seek healthcare.",
  },
  {
    icon: Eye,
    title: "Evidence-based Practice",
    desc: "Interventions grounded in validated clinical tools and research.",
  },
  {
    icon: CheckCircle,
    title: "Ethical Care",
    desc: "Highest standards of professional ethics in every interaction.",
  },
];

export default function About() {
  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
              About PUZ
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Learn about the history, mission, and values driving
              Pakistan&apos;s most accessible mental health program.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              History
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3 mb-6">
              Our Journey Since 2018
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pur Umeed Zindagi was launched in 2018 as a pioneering mental
                health initiative under the Indus Hospital &amp; Health
                Network&apos;s Primary Care Program. Built on the World Health
                Organization&apos;s Task Shifting Model, PUZ trained lay
                counselors &mdash; called Mental Health Officers (MHOs) &mdash;
                to deliver frontline mental health support in communities that
                lacked access to specialized care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The program rapidly expanded from its origins in Karachi to
                cover four regions across Pakistan: Karachi, Sindh, Balochistan,
                and Punjab. Today, PUZ operates across 17 sites with 34
                dedicated MHOs working to identify, screen, enroll, and support
                individuals facing mental health challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Psychologists serve as regional supervisors, run dedicated
                clinics, and oversee the continuous training and professional
                development of MHOs &mdash; ensuring quality care at every level
                of the program.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { value: "2018", label: "Year Founded" },
              { value: "4", label: "Regions" },
              { value: "17", label: "Sites" },
              { value: "34", label: "MHOs" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="border-0 shadow-card text-center">
                  <CardContent className="py-8">
                    <div className="font-display text-4xl text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-card h-full">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-xl teal-gradient flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    &ldquo;To promote mental well-being through early screening,
                    counseling, and psychosocial support.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-0 shadow-card h-full">
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                    <Eye className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg italic">
                    &ldquo;A society where mental health care is accessible,
                    stigma-free, and integrated into every level of
                    healthcare.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What Guides Us
            </span>
            <h2 className="font-display text-4xl text-foreground mt-3">
              Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="border-0 shadow-card hover:shadow-soft transition-shadow h-full">
                  <CardContent className="p-7">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <v.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
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
