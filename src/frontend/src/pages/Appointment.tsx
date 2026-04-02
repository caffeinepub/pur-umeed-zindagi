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
import { CalendarCheck, CheckCircle2, Clock, Heart, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormData {
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  region: string;
  preferredDate: string;
  preferredTime: string;
  complaint: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  phone: "",
  age: "",
  gender: "",
  region: "",
  preferredDate: "",
  preferredTime: "",
  complaint: "",
};

export default function Appointment() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.region.trim()) newErrors.region = "Region/City is required";
    if (!form.preferredDate)
      newErrors.preferredDate = "Preferred date is required";
    if (!form.preferredTime)
      newErrors.preferredTime = "Preferred time is required";
    if (!form.complaint.trim())
      newErrors.complaint = "Please describe your reason for appointment";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const mailBody = `Appointment Request - Pur Umeed Zindagi\n====================================\nFull Name: ${form.fullName}\nPhone: ${form.phone}\nAge: ${form.age}\nGender: ${form.gender}\nCity / Region: ${form.region}\nPreferred Date: ${form.preferredDate}\nPreferred Time: ${form.preferredTime}\nConcern / Complaint: ${form.complaint}\n====================================\nSubmitted via Pur Umeed Zindagi website.`;
      const subject = encodeURIComponent(
        "Appointment Request - Pur Umeed Zindagi",
      );
      window.location.href = `mailto:Purumeedzindagi@outlook.com?subject=${subject}&body=${encodeURIComponent(mailBody)}`;
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-white" data-ocid="appointment.page">
      {/* Page Hero */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "oklch(25% 0.15 145)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "oklch(35% 0.2 145)" }}
              >
                <CalendarCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
              Book an Appointment
            </h1>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "oklch(80% 0.06 145)" }}
            >
              Pur Umeed Zindagi Mental Health Services —{" "}
              <span className="font-semibold text-white">Free of Charge</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: Heart, text: "Compassionate Care" },
                { icon: Clock, text: "Flexible Timings" },
                { icon: Phone, text: "24hr Response" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-white/80"
                  style={{ background: "oklch(35% 0.2 145)" }}
                >
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(96% 0.01 145)" }}
      >
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-10 text-center bg-white border"
              style={{
                borderColor: "oklch(88% 0.03 145)",
                boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.08)",
              }}
              data-ocid="appointment.success_state"
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(94% 0.04 145)" }}
                >
                  <CheckCircle2
                    className="w-10 h-10"
                    style={{ color: "oklch(35% 0.2 145)" }}
                  />
                </div>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(20% 0.06 145)" }}
              >
                Request Received!
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md mx-auto"
                style={{ color: "oklch(45% 0.04 145)" }}
              >
                Your appointment request has been received. Our team will
                contact you within 24 hours at the provided phone number.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL_FORM);
                }}
                className="px-8 py-2.5 rounded-xl font-semibold text-white"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="appointment.secondary_button"
              >
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white border"
              style={{
                borderColor: "oklch(88% 0.03 145)",
                boxShadow: "0 4px 20px oklch(50% 0.06 145 / 0.08)",
              }}
              data-ocid="appointment.modal"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="fullName"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Patient Full Name{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter patient's full name"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="h-11"
                    data-ocid="appointment.input"
                  />
                  {errors.fullName && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Phone Number{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0300-1234567"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-11"
                    data-ocid="appointment.input"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="age" style={{ color: "oklch(30% 0.06 145)" }}>
                    Age <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="e.g. 32"
                    min={1}
                    max={120}
                    value={form.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    className="h-11"
                    data-ocid="appointment.input"
                  />
                  {errors.age && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.age}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Gender{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Select
                    value={form.gender}
                    onValueChange={(v) => handleChange("gender", v)}
                  >
                    <SelectTrigger
                      className="h-11"
                      data-ocid="appointment.select"
                    >
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.gender}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="region"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Region / City{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    id="region"
                    type="text"
                    placeholder="e.g. Karachi, Badin"
                    value={form.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                    className="h-11"
                    data-ocid="appointment.input"
                  />
                  {errors.region && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.region}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="preferredDate"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Preferred Date{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    min={today}
                    value={form.preferredDate}
                    onChange={(e) =>
                      handleChange("preferredDate", e.target.value)
                    }
                    className="h-11"
                    data-ocid="appointment.input"
                  />
                  {errors.preferredDate && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(30% 0.06 145)" }}>
                    Preferred Time{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Select
                    value={form.preferredTime}
                    onValueChange={(v) => handleChange("preferredTime", v)}
                  >
                    <SelectTrigger
                      className="h-11"
                      data-ocid="appointment.select"
                    >
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning 9am-12pm">
                        Morning — 9:00 AM to 12:00 PM
                      </SelectItem>
                      <SelectItem value="Afternoon 12pm-3pm">
                        Afternoon — 12:00 PM to 3:00 PM
                      </SelectItem>
                      <SelectItem value="Evening 3pm-6pm">
                        Evening — 3:00 PM to 6:00 PM
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredTime && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="complaint"
                    style={{ color: "oklch(30% 0.06 145)" }}
                  >
                    Reason / Chief Complaint{" "}
                    <span style={{ color: "oklch(35% 0.2 145)" }}>*</span>
                  </Label>
                  <Textarea
                    id="complaint"
                    rows={4}
                    placeholder="Briefly describe the reason for your appointment..."
                    value={form.complaint}
                    onChange={(e) => handleChange("complaint", e.target.value)}
                    style={{ resize: "vertical" }}
                    data-ocid="appointment.textarea"
                  />
                  {errors.complaint && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(50% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.complaint}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: "oklch(94% 0.04 145)",
                  border: "1px solid oklch(80% 0.08 145)",
                  color: "oklch(35% 0.1 145)",
                }}
              >
                <strong style={{ color: "oklch(28% 0.15 145)" }}>
                  Important:
                </strong>{" "}
                All services are completely free. Your information is kept
                strictly confidential. Our team will call within 24 hours.
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold rounded-xl transition-all hover:opacity-90 text-white"
                style={{ background: "oklch(35% 0.2 145)" }}
                data-ocid="appointment.submit_button"
              >
                Submit Appointment Request
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
