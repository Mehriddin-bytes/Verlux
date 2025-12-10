"use client";

import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Loader2,
  AlertCircle,
  Sparkles,
  Clock,
  Shield,
  Award,
  Zap,
} from "lucide-react";

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  timeline: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  projectDetails?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

// Constants
const PROJECT_TYPES = [
  "Residential Construction",
  "Commercial Construction",
  "Renovations & Remodeling",
  "Kitchen & Bathroom Remodeling",
  "Roofing",
  "Flooring",
  "Electrical & Plumbing",
  "Landscaping & Hardscaping",
  "Foundation Work",
  "Deck & Patio Construction",
  "Other",
] as const;

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3months", label: "1-3 months" },
  { value: "3-6months", label: "3-6 months" },
  { value: "6-12months", label: "6-12 months" },
  { value: "planning", label: "Just planning" },
] as const;

const BUDGET_OPTIONS = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
] as const;

// Validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateField = (name: keyof FormData, value: string): string | undefined => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return undefined;
    case "email":
      if (!value.trim()) return "Email is required";
      if (!validateEmail(value)) return "Please enter a valid email address";
      return undefined;
    case "phone":
      if (!value.trim()) return "Phone number is required";
      if (!validatePhone(value)) return "Please enter a valid phone number";
      return undefined;
    case "projectType":
      if (!value) return "Please select a project type";
      return undefined;
    case "projectDetails":
      if (!value.trim()) return "Project details are required";
      if (value.trim().length < 10) return "Please provide at least 10 characters of details";
      return undefined;
    default:
      return undefined;
  }
};

function QuoteContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle field changes with validation
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof FormData;

      setFormData((prev) => ({ ...prev, [fieldName]: value }));

      // Validate on change if field has been touched
      if (touched[fieldName]) {
        const error = validateField(fieldName, value);
        setErrors((prev) => ({ ...error ? { ...prev, [fieldName]: error } : { ...prev, [fieldName]: undefined } }));
      }
    },
    [touched]
  );

  // Handle field blur (mark as touched)
  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name as keyof FormData;
    const value = e.target.value;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...error ? { ...prev, [fieldName]: error } : { ...prev, [fieldName]: undefined } }));
  }, []);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      if (fieldName === "timeline" || fieldName === "budget") return; // Optional fields

      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      projectType: true,
      projectDetails: true,
    });

    return isValid;
  }, [formData]);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage("");

      if (!validateForm()) {
        // Scroll to first error
        const firstErrorField = Object.keys(errors)[0];
        if (firstErrorField) {
          document.getElementById(firstErrorField)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      setStatus("submitting");

      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit quote request");
        }

        setStatus("success");
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            projectDetails: "",
            timeline: "",
            budget: "",
          });
          setErrors({});
          setTouched({});
          setStatus("idle");
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again or contact us directly."
        );
      }
    },
    [formData, errors, validateForm]
  );

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-700 text-white pt-32 pb-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">Free Quote • No Obligation • 24hr Response</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Get Your Custom
              <br />
              <span className="bg-gradient-to-r from-teal-100 via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                Construction Quote
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-teal-50/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Tell us about your project and receive a detailed, personalized quote within 24 hours. Our experts are ready to bring your vision to life.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-teal-200" />
                <span className="text-teal-100">Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Compact Layout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-12" aria-label="Quote request form">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-10 gap-6">
            {/* Contact Info Sidebar - Compact */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:sticky lg:top-20 space-y-4">
                <h2 className="text-xl font-black text-gray-900 mb-2">Contact Us</h2>
                <div className="space-y-3">
                  <a
                    href="tel:+14374520850"
                    className="flex items-center gap-3 p-3 rounded-xl bg-teal-50 border border-teal-100 hover:border-teal-300 hover:bg-teal-100 transition-all"
                  >
                    <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-teal-600 truncate">+1 (437) 452-0850</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@verlux.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-cyan-50 border border-cyan-100 hover:border-cyan-300 hover:bg-cyan-100 transition-all"
                  >
                    <Mail className="w-5 h-5 text-cyan-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-cyan-600 truncate">info@verlux.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                    <address className="text-xs text-gray-600 not-italic leading-relaxed">
                      8 McKee Ave, North York, ON M2N 7E5
                    </address>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-600" role="list">
                    {["Licensed & Insured", "Award-Winning", "24/7 Support", "Competitive Pricing"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Form - Compact */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
                {isSuccess ? (
                  <div className="text-center py-12 animate-in fade-in duration-500">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-teal-500/40">
                      <CheckCircle className="w-12 h-12 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-3">Request Received!</h2>
                    <p className="text-base text-gray-600 mb-4">
                      We&apos;ve received your quote request and will get back to you within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-semibold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Response time: 24 hours</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                    {/* Error Message */}
                    {isError && errorMessage && (
                      <div
                        className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3 animate-in slide-in-from-top duration-300 mb-4"
                        role="alert"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="flex-1">
                          <h3 className="font-bold text-red-900 mb-1">Submission Error</h3>
                          <p className="text-sm text-red-700">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Compact Form Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label htmlFor="name" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={touched.name && errors.name ? "true" : "false"}
                          aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 ${
                            touched.name && errors.name
                              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 bg-gray-50/50 focus:border-teal-500 focus:ring-teal-500/20 hover:border-gray-300 focus:bg-white"
                          }`}
                          placeholder="John Doe"
                          disabled={isSubmitting}
                        />
                        {touched.name && errors.name && (
                          <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={touched.email && errors.email ? "true" : "false"}
                          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 ${
                            touched.email && errors.email
                              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 bg-gray-50/50 focus:border-teal-500 focus:ring-teal-500/20 hover:border-gray-300 focus:bg-white"
                          }`}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                        {touched.email && errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={touched.phone && errors.phone ? "true" : "false"}
                          aria-describedby={touched.phone && errors.phone ? "phone-error" : undefined}
                          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 outline-none transition-all text-sm text-gray-900 placeholder-gray-400 ${
                            touched.phone && errors.phone
                              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 bg-gray-50/50 focus:border-teal-500 focus:ring-teal-500/20 hover:border-gray-300 focus:bg-white"
                          }`}
                          placeholder="(437) 452-0850"
                          disabled={isSubmitting}
                        />
                        {touched.phone && errors.phone && (
                          <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" aria-hidden="true" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Project Type */}
                      <div className="sm:col-span-2">
                        <label htmlFor="projectType" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Project Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          aria-invalid={touched.projectType && errors.projectType ? "true" : "false"}
                          aria-describedby={touched.projectType && errors.projectType ? "projectType-error" : undefined}
                          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 outline-none transition-all text-sm text-gray-900 ${
                            touched.projectType && errors.projectType
                              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 bg-gray-50/50 focus:border-teal-500 focus:ring-teal-500/20 hover:border-gray-300 focus:bg-white"
                          }`}
                          disabled={isSubmitting}
                        >
                          <option value="">Select a project type</option>
                          {PROJECT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {touched.projectType && errors.projectType && (
                          <p id="projectType-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" aria-hidden="true" />
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="sm:col-span-2">
                        <label htmlFor="projectDetails" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Project Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="projectDetails"
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          rows={3}
                          aria-required="true"
                          aria-invalid={touched.projectDetails && errors.projectDetails ? "true" : "false"}
                          aria-describedby={
                            touched.projectDetails && errors.projectDetails ? "projectDetails-error" : undefined
                          }
                          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 outline-none transition-all resize-none text-sm text-gray-900 placeholder-gray-400 ${
                            touched.projectDetails && errors.projectDetails
                              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-200 bg-gray-50/50 focus:border-teal-500 focus:ring-teal-500/20 hover:border-gray-300 focus:bg-white"
                          }`}
                          placeholder="Describe your project: location, size, requirements..."
                          disabled={isSubmitting}
                        />
                        {touched.projectDetails && errors.projectDetails ? (
                          <p id="projectDetails-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" aria-hidden="true" />
                            {errors.projectDetails}
                          </p>
                        ) : (
                          <p className="mt-1 text-xs text-gray-400">Minimum 10 characters</p>
                        )}
                      </div>

                      {/* Timeline */}
                      <div>
                        <label htmlFor="timeline" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm text-gray-900 bg-gray-50/50 hover:border-gray-300 focus:bg-white"
                          disabled={isSubmitting}
                        >
                          <option value="">Select timeline</option>
                          {TIMELINE_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-xs font-bold text-gray-900 mb-1.5">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm text-gray-900 bg-gray-50/50 hover:border-gray-300 focus:bg-white"
                          disabled={isSubmitting}
                        >
                          <option value="">Select budget</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white rounded-xl px-6 py-4 text-base font-black shadow-xl hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" aria-hidden="true" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Quote Request
                            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                          </>
                        )}
                      </Button>
                      <p className="mt-3 text-xs text-gray-500 text-center">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="text-teal-600 hover:text-teal-700 font-semibold underline">
                          privacy policy
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuotePage() {
  return <QuoteContent />;
}
