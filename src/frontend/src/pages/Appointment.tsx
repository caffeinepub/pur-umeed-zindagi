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
    <div
      className="min-h-screen"
      style={{ background: "oklch(8% 0.04 145)" }}
      data-ocid="appointment.page"
    >
      {/* Page Hero */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "oklch(10% 0.045 145)" }}
      >
        {/* Decorative rings */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "oklch(58% 0.22 145)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5"
          style={{ background: "oklch(58% 0.22 145)" }}
        />

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
                style={{ background: "oklch(58% 0.22 145 / 0.15)" }}
              >
                <CalendarCheck
                  className="w-8 h-8"
                  style={{ color: "oklch(58% 0.22 145)" }}
                />
              </div>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: "oklch(96% 0.005 145)" }}
            >
              Book an Appointment
            </h1>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "oklch(68% 0.025 145)" }}
            >
              Pur Umeed Zindagi Mental Health Services —{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(72% 0.18 145)" }}
              >
                Free of Charge
              </span>
            </p>

            {/* Features row */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: Heart, text: "Compassionate Care" },
                { icon: Clock, text: "Flexible Timings" },
                { icon: Phone, text: "24hr Response" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "oklch(14% 0.05 145)",
                    color: "oklch(72% 0.18 145)",
                    border: "1px solid oklch(22% 0.06 145)",
                  }}
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-10 text-center"
              style={{
                background: "oklch(12% 0.05 145)",
                border: "1px solid oklch(22% 0.06 145)",
              }}
              data-ocid="appointment.success_state"
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(58% 0.22 145 / 0.15)" }}
                >
                  <CheckCircle2
                    className="w-10 h-10"
                    style={{ color: "oklch(58% 0.22 145)" }}
                  />
                </div>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(96% 0.005 145)" }}
              >
                Request Received!
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-md mx-auto"
                style={{ color: "oklch(68% 0.025 145)" }}
              >
                Your appointment request has been received. Our team will
                contact you within 24 hours at the provided phone number.
              </p>
              <div
                className="rounded-xl p-4 mb-8 text-left"
                style={{
                  background: "oklch(10% 0.04 145)",
                  border: "1px solid oklch(22% 0.06 145)",
                }}
              >
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: "oklch(58% 0.22 145)" }}
                >
                  Appointment Summary
                </h3>
                <div className="space-y-1.5">
                  {[
                    { label: "Name", value: form.fullName },
                    { label: "Phone", value: form.phone },
                    { label: "Preferred Date", value: form.preferredDate },
                    { label: "Preferred Time", value: form.preferredTime },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-2 text-sm">
                      <span style={{ color: "oklch(55% 0.02 145)" }}>
                        {label}:
                      </span>
                      <span style={{ color: "oklch(82% 0.02 145)" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL_FORM);
                }}
                className="px-8 py-2.5 rounded-xl font-semibold"
                style={{
                  background: "oklch(58% 0.22 145)",
                  color: "white",
                }}
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
              className="rounded-2xl p-6 sm:p-8 space-y-6"
              style={{
                background: "oklch(12% 0.05 145)",
                border: "1px solid oklch(22% 0.06 145)",
              }}
              data-ocid="appointment.modal"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="fullName"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Patient Full Name{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter patient's full name"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="h-11"
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.fullName
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="appointment.input"
                  />
                  {errors.fullName && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Phone Number{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0300-1234567"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-11"
                    autoComplete="tel"
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.phone
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="appointment.input"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Age */}
                <div className="space-y-1.5">
                  <Label htmlFor="age" style={{ color: "oklch(82% 0.02 145)" }}>
                    Age <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
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
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.age
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="appointment.input"
                  />
                  {errors.age && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.age}
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(82% 0.02 145)" }}>
                    Gender{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Select
                    value={form.gender}
                    onValueChange={(v) => handleChange("gender", v)}
                  >
                    <SelectTrigger
                      className="h-11"
                      style={{
                        background: "oklch(10% 0.04 145)",
                        borderColor: errors.gender
                          ? "oklch(55% 0.22 25)"
                          : "oklch(22% 0.06 145)",
                        color: form.gender
                          ? "oklch(96% 0.005 145)"
                          : "oklch(55% 0.02 145)",
                      }}
                      data-ocid="appointment.select"
                    >
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        background: "oklch(14% 0.05 145)",
                        borderColor: "oklch(22% 0.06 145)",
                        color: "oklch(96% 0.005 145)",
                      }}
                    >
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.gender}
                    </p>
                  )}
                </div>

                {/* Region */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="region"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Region / City{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Input
                    id="region"
                    type="text"
                    placeholder="e.g. Karachi, Badin, Quetta"
                    value={form.region}
                    onChange={(e) => handleChange("region", e.target.value)}
                    className="h-11"
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.region
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                    }}
                    data-ocid="appointment.input"
                  />
                  {errors.region && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.region}
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="preferredDate"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Preferred Appointment Date{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
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
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.preferredDate
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                      colorScheme: "dark",
                    }}
                    data-ocid="appointment.input"
                  />
                  {errors.preferredDate && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <Label style={{ color: "oklch(82% 0.02 145)" }}>
                    Preferred Time{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Select
                    value={form.preferredTime}
                    onValueChange={(v) => handleChange("preferredTime", v)}
                  >
                    <SelectTrigger
                      className="h-11"
                      style={{
                        background: "oklch(10% 0.04 145)",
                        borderColor: errors.preferredTime
                          ? "oklch(55% 0.22 25)"
                          : "oklch(22% 0.06 145)",
                        color: form.preferredTime
                          ? "oklch(96% 0.005 145)"
                          : "oklch(55% 0.02 145)",
                      }}
                      data-ocid="appointment.select"
                    >
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        background: "oklch(14% 0.05 145)",
                        borderColor: "oklch(22% 0.06 145)",
                        color: "oklch(96% 0.005 145)",
                      }}
                    >
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
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                {/* Chief Complaint */}
                <div className="sm:col-span-2 space-y-1.5">
                  <Label
                    htmlFor="complaint"
                    style={{ color: "oklch(82% 0.02 145)" }}
                  >
                    Reason / Chief Complaint{" "}
                    <span style={{ color: "oklch(58% 0.22 145)" }}>*</span>
                  </Label>
                  <Textarea
                    id="complaint"
                    rows={4}
                    placeholder="Briefly describe the reason for your appointment or any symptoms you are experiencing..."
                    value={form.complaint}
                    onChange={(e) => handleChange("complaint", e.target.value)}
                    style={{
                      background: "oklch(10% 0.04 145)",
                      borderColor: errors.complaint
                        ? "oklch(55% 0.22 25)"
                        : "oklch(22% 0.06 145)",
                      color: "oklch(96% 0.005 145)",
                      resize: "vertical",
                    }}
                    data-ocid="appointment.textarea"
                  />
                  {errors.complaint && (
                    <p
                      className="text-xs"
                      style={{ color: "oklch(55% 0.22 25)" }}
                      data-ocid="appointment.error_state"
                    >
                      {errors.complaint}
                    </p>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: "oklch(10% 0.04 145)",
                  border: "1px solid oklch(22% 0.06 145)",
                  color: "oklch(68% 0.025 145)",
                }}
              >
                <strong style={{ color: "oklch(72% 0.18 145)" }}>
                  Important:
                </strong>{" "}
                All services are completely free of charge. Your information is
                kept strictly confidential. Our team will call you within 24
                hours to confirm your appointment.
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold rounded-xl transition-all hover:opacity-90"
                style={{ background: "oklch(58% 0.22 145)", color: "white" }}
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
