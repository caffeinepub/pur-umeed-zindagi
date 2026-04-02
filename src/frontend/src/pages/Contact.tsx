import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import { ExternalLink, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const PageHeader = ({
  title,
  subtitle,
}: { title: string; subtitle?: string }) => (
  <div className="py-16" style={{ background: "oklch(25% 0.15 145)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-3"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mutation = useSubmitInquiry();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    try {
      await mutation.mutateAsync(form);
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help you take the first step"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── Column 1: Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Get In Touch
              </div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.modal"
              >
                <div>
                  <Label
                    htmlFor="name"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="mt-1.5"
                    data-ocid="contact.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="contact.name_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+92 300 0000000"
                    className="mt-1.5"
                    data-ocid="contact.input"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="contact.phone_error"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="mt-1.5"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="How can we help you?"
                    rows={5}
                    className="mt-1.5 resize-none"
                    data-ocid="contact.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="contact.field_error"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full py-3 font-semibold rounded-xl transition-all hover:opacity-90 text-white"
                  style={{ background: "oklch(35% 0.2 145)" }}
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>

                {mutation.isSuccess && (
                  <div
                    className="rounded-xl p-4 border text-sm"
                    style={{
                      background: "oklch(94% 0.04 145)",
                      borderColor: "oklch(70% 0.12 145)",
                      color: "oklch(30% 0.15 145)",
                    }}
                    data-ocid="contact.success_state"
                  >
                    ✓ Your message has been sent successfully. We’ll reach out
                    soon.
                  </div>
                )}
              </form>
            </motion.div>

            {/* ── Column 2: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Contact Information
              </div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Reach Us
              </h2>

              {/* Phone */}
              <div
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid="contact.item.1"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold mb-0.5"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Program Helpline
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  >
                    +92 297330160
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Mon–Fri, 9am–5pm
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid="contact.item.2"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold mb-0.5"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Official Program Email
                  </div>
                  <a
                    href="mailto:Purumeedzindagi@outlook.com"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  >
                    Purumeedzindagi@outlook.com
                  </a>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Reply within 1–2 business days
                  </div>
                </div>
              </div>

              {/* HQ */}
              <div
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid="contact.item.3"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold mb-0.5"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Headquarters
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(30% 0.08 145)" }}
                  >
                    Indus Hospital &amp; Health Network
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Pakistan
                  </div>
                </div>
              </div>

              {/* Badin Office */}
              <div
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white"
                style={{
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 12px oklch(50% 0.06 145 / 0.06)",
                }}
                data-ocid="contact.item.4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold mb-0.5"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Badin Office
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(30% 0.08 145)" }}
                  >
                    Dr. Sam Civil Hospital, Badin
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Sindh, Pakistan
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-4 border"
                style={{
                  background: "oklch(94% 0.04 145)",
                  borderColor: "oklch(80% 0.08 145)",
                }}
              >
                <p className="text-sm" style={{ color: "oklch(30% 0.12 145)" }}>
                  <span className="font-semibold">Remember:</span> All services
                  are completely free and confidential.
                </p>
              </div>
            </motion.div>

            {/* ── Column 3: Staff Data Entry ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "oklch(35% 0.2 145)" }}
              >
                Staff Portal
              </div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Data Entry
              </h2>

              <div
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: "white",
                  borderColor: "oklch(88% 0.03 145)",
                  boxShadow: "0 2px 16px oklch(50% 0.06 145 / 0.08)",
                }}
                data-ocid="contact.staff_portal"
              >
                {/* Top accent bar */}
                <div
                  className="h-2 w-full"
                  style={{ background: "oklch(35% 0.2 145)" }}
                />

                <div className="p-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "oklch(94% 0.04 145)" }}
                  >
                    <svg
                      aria-label="Document"
                      role="img"
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: "oklch(35% 0.2 145)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    REDCap Staff Portal
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "oklch(45% 0.04 145)" }}
                  >
                    MHOs and program staff can log patient screening,
                    enrollment, and treatment data directly through the REDCap
                    portal.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "Screening data entry",
                      "Patient enrollment records",
                      "End of Treatment (EOT) forms",
                      "Follow-up & case management",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "oklch(94% 0.04 145)" }}
                        >
                          <svg
                            aria-label="Check"
                            role="img"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ color: "oklch(35% 0.2 145)" }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-sm"
                          style={{ color: "oklch(35% 0.05 145)" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://redcap.tih.org.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 text-white"
                    style={{ background: "oklch(35% 0.2 145)" }}
                    data-ocid="contact.redcap_button"
                  >
                    Open REDCap Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <p
                    className="text-xs text-center mt-3"
                    style={{ color: "oklch(55% 0.04 145)" }}
                  >
                    Staff login required &bull; redcap.tih.org.pk
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
