import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, MessageSquareHeart, Send, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

const feedbackTypes = [
  "General Feedback",
  "Service Quality",
  "Staff Behavior",
  "Suggestions for Improvement",
  "Complaint",
  "Appreciation",
];

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    feedbackType: "",
    rating: 0,
    comments: "",
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.feedbackType) errs.feedbackType = "Please select a feedback type";
    if (!form.comments.trim()) errs.comments = "Please enter your feedback";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const subject = `Feedback - Pur Umeed Zindagi - ${form.feedbackType}`;
    const ratingText = form.rating > 0 ? `${form.rating}/5 stars` : "Not rated";
    const separator = "───────────────────────────────";
    const body = [
      "Feedback Form - Pur Umeed Zindagi",
      separator,
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      `Feedback Type: ${form.feedbackType}`,
      `Rating: ${ratingText}`,
      "",
      "Feedback / Comments:",
      form.comments,
      "",
      separator,
      "Submitted via Pur Umeed Zindagi Website",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailtoLink = `mailto:Purumeedzindagi@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      feedbackType: "",
      rating: 0,
      comments: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="Share Your Feedback"
        subtitle="Help us improve our mental health services"
      />

      <section className="py-20" style={{ background: "oklch(96% 0.01 145)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-2xl border bg-white"
              style={{
                borderColor: "oklch(88% 0.03 145)",
                boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.1)",
              }}
              data-ocid="feedback.success_state"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "oklch(94% 0.04 145)" }}
              >
                <CheckCircle
                  className="w-8 h-8"
                  style={{ color: "oklch(35% 0.2 145)" }}
                />
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Thank You!
              </h2>
              <p
                className="text-sm mb-6 max-w-sm mx-auto"
                style={{ color: "oklch(50% 0.04 145)" }}
              >
                Your feedback has been received. Our team reviews all
                submissions and we will act on your input.
              </p>
              <Button
                onClick={handleReset}
                className="text-white"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="feedback.secondary_button"
              >
                Submit Another
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8 border bg-white"
              style={{
                borderColor: "oklch(88% 0.03 145)",
                boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.08)",
              }}
              data-ocid="feedback.modal"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <MessageSquareHeart
                    className="w-5 h-5"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
                <div>
                  <h2
                    className="font-bold text-lg"
                    style={{ color: "oklch(20% 0.06 145)" }}
                  >
                    Feedback Form
                  </h2>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(50% 0.04 145)" }}
                  >
                    Sends to Purumeedzindagi@outlook.com
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Your Name{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    data-ocid="feedback.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="feedback.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label style={{ color: "oklch(30% 0.06 145)" }}>
                      Phone
                    </Label>
                    <Input
                      type="tel"
                      placeholder="0300-1234567"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      data-ocid="feedback.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label style={{ color: "oklch(30% 0.06 145)" }}>
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      data-ocid="feedback.input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Feedback Type{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Select
                    value={form.feedbackType}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, feedbackType: v }))
                    }
                  >
                    <SelectTrigger data-ocid="feedback.select">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.feedbackType && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="feedback.error_state"
                    >
                      {errors.feedbackType}
                    </p>
                  )}
                </div>

                {/* Star Rating */}
                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Rating (Optional)
                  </Label>
                  <div
                    className="flex gap-1"
                    onMouseLeave={() => setHoveredStar(0)}
                    data-ocid="feedback.toggle"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, rating: star }))}
                        onMouseEnter={() => setHoveredStar(star)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className="w-6 h-6"
                          style={{
                            color:
                              star <= (hoveredStar || form.rating)
                                ? "oklch(65% 0.18 75)"
                                : "oklch(85% 0.03 145)",
                            fill:
                              star <= (hoveredStar || form.rating)
                                ? "oklch(65% 0.18 75)"
                                : "none",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Comments{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Textarea
                    rows={5}
                    placeholder="Please share your feedback, suggestions, or concerns..."
                    value={form.comments}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, comments: e.target.value }))
                    }
                    data-ocid="feedback.textarea"
                  />
                  {errors.comments && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="feedback.error_state"
                    >
                      {errors.comments}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-5 h-11 text-sm font-semibold text-white gap-2"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="feedback.submit_button"
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
