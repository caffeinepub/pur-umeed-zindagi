import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import { AlertCircle, CheckCircle, Loader2, MapPin, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const submit = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit.mutate(form, {
      onSuccess: () => {
        setForm({ name: "", phone: "", email: "", message: "" });
      },
    });
  };

  return (
    <div>
      <section className="teal-gradient py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Reach out to us for appointments, inquiries, or to learn more about
            PUZ services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="flex flex-col gap-5 mb-8">
                  <div className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-xs">
                    <div className="w-10 h-10 rounded-lg teal-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        Phone
                      </div>
                      <a
                        href="tel:+92297330160"
                        className="text-primary text-sm hover:underline"
                      >
                        +92 297330160
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-card border border-border shadow-xs">
                    <div className="w-10 h-10 rounded-lg teal-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        Address
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Indus Hospital &amp; Health Network, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full teal-gradient text-primary-foreground font-semibold gap-2"
                  size="lg"
                >
                  <a href="tel:+92297330160" data-ocid="appointment.button">
                    <Phone className="w-4 h-4" />
                    Get Appointment
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <AnimatePresence mode="wait">
                      {submit.isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="py-12 text-center"
                          data-ocid="contact.success_state"
                        >
                          <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                          <h3 className="font-display text-2xl text-foreground mb-2">
                            Message Sent!
                          </h3>
                          <p className="text-muted-foreground">
                            Thank you for reaching out. Our team will get back
                            to you shortly.
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-6 border-primary/30 hover:bg-primary/5"
                            onClick={() => submit.reset()}
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-5"
                        >
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                placeholder="Your full name"
                                value={form.name}
                                onChange={(e) =>
                                  setForm((p) => ({
                                    ...p,
                                    name: e.target.value,
                                  }))
                                }
                                required
                                data-ocid="contact.name.input"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="+92 XXX XXXXXXX"
                                value={form.phone}
                                onChange={(e) =>
                                  setForm((p) => ({
                                    ...p,
                                    phone: e.target.value,
                                  }))
                                }
                                required
                                data-ocid="contact.phone.input"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={form.email}
                              onChange={(e) =>
                                setForm((p) => ({
                                  ...p,
                                  email: e.target.value,
                                }))
                              }
                              data-ocid="contact.email.input"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="message">Message *</Label>
                            <Textarea
                              id="message"
                              placeholder="How can we help you?"
                              rows={5}
                              value={form.message}
                              onChange={(e) =>
                                setForm((p) => ({
                                  ...p,
                                  message: e.target.value,
                                }))
                              }
                              required
                              data-ocid="contact.message.textarea"
                            />
                          </div>

                          {submit.isError && (
                            <div
                              className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 text-destructive text-sm"
                              data-ocid="contact.error_state"
                            >
                              <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              Something went wrong. Please try again or call us
                              directly.
                            </div>
                          )}

                          <Button
                            type="submit"
                            disabled={submit.isPending}
                            className="teal-gradient text-primary-foreground font-semibold self-start px-8"
                            data-ocid="contact.submit_button"
                          >
                            {submit.isPending ? (
                              <>
                                <Loader2
                                  className="w-4 h-4 animate-spin mr-2"
                                  data-ocid="contact.loading_state"
                                />
                                Sending...
                              </>
                            ) : (
                              "Send Message"
                            )}
                          </Button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
