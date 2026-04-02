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

const GreenHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="py-16 green-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-white mb-3"
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
    const separator = "──────────────────────────────────";
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
    <div style={{ background: "oklch(8% 0.04 145)" }}>
      <GreenHeader
        title="Share Your Feedback"
        subtitle="Help us improve our mental health services"
      />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-2xl border"
              style={{
                background: "oklch(14% 0.045 145)",
                borderColor: "oklch(35% 0.14 145)",
              }}
              data-ocid="feedback.success_state"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "oklch(22% 0.08 145)" }}
              >
                <CheckCircle
                  className="w-10 h-10"
                  style={{ color: "oklch(58% 0.22 145)" }}
                />
              </div>
              <h2
                className="text-3xl font-bold mb-3"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Thank You!
              </h2>
              <p
                className="text-lg mb-2"
                style={{ color: "oklch(82% 0.02 145)" }}
              >
                Your email client has been opened with your feedback.
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Please send the email to complete your submission. Your feedback
                is important to us and will be reviewed by the program team.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "oklch(58% 0.22 145)", color: "white" }}
                data-ocid="feedback.secondary_button"
              >
                Submit Another Feedback
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Info Banner */}
              <div
                className="flex items-start gap-3 rounded-xl p-4 border mb-8"
                style={{
                  background: "oklch(14% 0.045 145)",
                  borderColor: "oklch(30% 0.12 145)",
                }}
              >
                <MessageSquareHeart
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(58% 0.22 145)" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(75% 0.04 145)" }}
                >
                  Your feedback helps us improve our services. All responses are
                  reviewed by the program team.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-ocid="feedback.modal"
              >
                {/* Name */}
                <div>
                  <Label
                    htmlFor="fb-name"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="fb-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your full name"
                    className="mt-1.5"
                    style={{
                      background: "oklch(14% 0.045 145)",
                      borderColor: errors.name
                        ? "oklch(50% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="feedback.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs mt-1 text-red-400"
                      data-ocid="feedback.name_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fb-phone"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      Phone{" "}
                      <span style={{ color: "oklch(55% 0.02 145)" }}>
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="fb-phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+92 300 0000000"
                      className="mt-1.5"
                      style={{
                        background: "oklch(14% 0.045 145)",
                        borderColor: "oklch(22% 0.06 145)",
                        color: "oklch(96% 0.005 145)",
                      }}
                      data-ocid="feedback.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="fb-email"
                      style={{ color: "oklch(82% 0.02 145)" }}
                    >
                      Email{" "}
                      <span style={{ color: "oklch(55% 0.02 145)" }}>
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="fb-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="mt-1.5"
                      style={{
                        background: "oklch(14% 0.045 145)",
                        borderColor: "oklch(22% 0.06 145)",
                        color: "oklch(96% 0.005 145)",
                      }}
                      data-ocid="feedback.input"
                    />
                  </div>
                </div>

                {/* Feedback Type */}
                <div>
                  <Label
                    htmlFor="fb-type"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Feedback Type *
                  </Label>
                  <Select
                    value={form.feedbackType}
                    onValueChange={(val) =>
                      setForm((p) => ({ ...p, feedbackType: val }))
                    }
                  >
                    <SelectTrigger
                      id="fb-type"
                      className="mt-1.5"
                      style={{
                        background: "oklch(14% 0.045 145)",
                        borderColor: errors.feedbackType
                          ? "oklch(50% 0.22 25)"
                          : "oklch(22% 0.06 145)",
                        color: form.feedbackType
                          ? "oklch(96% 0.005 145)"
                          : "oklch(55% 0.025 145)",
                      }}
                      data-ocid="feedback.select"
                    >
                      <SelectValue placeholder="Select feedback type..." />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        background: "oklch(14% 0.045 145)",
                        borderColor: "oklch(22% 0.06 145)",
                        color: "oklch(96% 0.005 145)",
                      }}
                    >
                      {feedbackTypes.map((type) => (
                        <SelectItem
                          key={type}
                          value={type}
                          style={{ color: "oklch(96% 0.005 145)" }}
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.feedbackType && (
                    <p
                      className="text-xs mt-1 text-red-400"
                      data-ocid="feedback.field_error"
                    >
                      {errors.feedbackType}
                    </p>
                  )}
                </div>

                {/* Star Rating */}
                <div>
                  <Label style={{ color: "oklch(82% 0.02 145)" }}>
                    Overall Rating{" "}
                    <span style={{ color: "oklch(55% 0.02 145)" }}>
                      (optional)
                    </span>
                  </Label>
                  <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const filled = star <= (hoveredStar || form.rating);
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setForm((p) => ({ ...p, rating: star }))
                          }
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                          data-ocid="feedback.toggle"
                        >
                          <Star
                            className="w-8 h-8"
                            style={{
                              color: filled
                                ? "oklch(72% 0.22 80)"
                                : "oklch(35% 0.04 145)",
                              fill: filled
                                ? "oklch(72% 0.22 80)"
                                : "transparent",
                              transition: "color 0.15s, fill 0.15s",
                            }}
                          />
                        </button>
                      );
                    })}
                    {form.rating > 0 && (
                      <span
                        className="text-sm ml-2"
                        style={{ color: "oklch(68% 0.025 145)" }}
                      >
                        {form.rating === 1 && "Poor"}
                        {form.rating === 2 && "Fair"}
                        {form.rating === 3 && "Good"}
                        {form.rating === 4 && "Very Good"}
                        {form.rating === 5 && "Excellent"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <Label
                    htmlFor="fb-comments"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Your Feedback / Comments *
                  </Label>
                  <Textarea
                    id="fb-comments"
                    value={form.comments}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, comments: e.target.value }))
                    }
                    placeholder="Please share your experience, suggestions, or any concerns..."
                    rows={6}
                    className="mt-1.5 resize-none"
                    style={{
                      background: "oklch(14% 0.045 145)",
                      borderColor: errors.comments
                        ? "oklch(50% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="feedback.textarea"
                  />
                  {errors.comments && (
                    <p
                      className="text-xs mt-1 text-red-400"
                      data-ocid="feedback.field_error"
                    >
                      {errors.comments}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full py-3 font-semibold rounded-xl transition-all hover:opacity-90"
                  style={{ background: "oklch(58% 0.22 145)", color: "white" }}
                  data-ocid="feedback.submit_button"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>

                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(55% 0.02 145)" }}
                >
                  Your feedback will open in your email client pre-filled and
                  ready to send to Purumeedzindagi@outlook.com
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
