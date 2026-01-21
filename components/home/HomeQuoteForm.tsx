"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Paperclip, X, Loader2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data/homeData";

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB
const MAX_FILES = 10;

// Patterns that might indicate SQL injection or XSS attempts
const SUSPICIOUS_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b.*\b(FROM|INTO|TABLE|DATABASE)\b)/i,
  /(<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>)/i,
  /(javascript:|on\w+\s*=)/i,
  /(\bOR\b\s+\d+\s*=\s*\d+)/i,
  /(--\s*$|;\s*--)/,
  /(\bEXEC\b|\bXP_)/i,
];

function isSuspicious(value: string): boolean {
  return SUSPICIOUS_PATTERNS.some((pattern) => pattern.test(value));
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  files?: string;
}

export default function HomeQuoteForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Check for suspicious input first
    const allValues = Object.values(formData).join(" ");
    if (isSuspicious(allValues)) {
      router.push("/slay-biac");
      return false;
    }

    // Name validation (min 2 characters)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (required)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = "Please select a service";
    }

    // Message validation (min 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    addFiles(selectedFiles);
  };

  const addFiles = (newFiles: File[]) => {
    const validFiles: File[] = [];
    let totalSize = files.reduce((sum, f) => sum + f.size, 0);

    for (const file of newFiles) {
      if (files.length + validFiles.length >= MAX_FILES) {
        setErrors((prev) => ({
          ...prev,
          files: `Maximum ${MAX_FILES} files allowed`,
        }));
        break;
      }

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          files: `File type not allowed: ${file.name}`,
        }));
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        setErrors((prev) => ({
          ...prev,
          files: `File "${file.name}" exceeds 10MB limit`,
        }));
        continue;
      }

      if (totalSize + file.size > MAX_TOTAL_SIZE) {
        setErrors((prev) => ({
          ...prev,
          files: "Total file size exceeds 25MB limit",
        }));
        break;
      }

      totalSize += file.size;
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      setErrors((prev) => ({ ...prev, files: undefined }));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => ({ ...prev, files: undefined }));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("phone", formData.phone.trim());
      formDataToSend.append("projectType", formData.projectType);
      formDataToSend.append("projectDetails", formData.message.trim());

      files.forEach((file) => {
        formDataToSend.append("files", file);
      });

      const response = await fetch("/api/quote", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request");
      }

      // Success - redirect to quote-sent page
      router.push("/quote-sent");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 flex items-start gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-4 border-2 ${
              errors.name ? "border-red-400" : "border-gray-200"
            } focus:border-brand focus:outline-none transition-colors bg-white`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-4 border-2 ${
              errors.phone ? "border-red-400" : "border-gray-200"
            } focus:border-brand focus:outline-none transition-colors bg-white`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-4 border-2 ${
            errors.email ? "border-red-400" : "border-gray-200"
          } focus:border-brand focus:outline-none transition-colors bg-white`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          className={`w-full px-4 py-4 border-2 ${
            errors.projectType ? "border-red-400" : "border-gray-200"
          } focus:border-brand focus:outline-none transition-colors bg-white`}
        >
          <option value="">Select a Service *</option>
          {services.map((service, index) => (
            <option key={index} value={service.fullTitle}>
              {service.fullTitle}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Tell us about your project... (min 10 characters) *"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-4 py-4 border-2 ${
            errors.message ? "border-red-400" : "border-gray-200"
          } focus:border-brand focus:outline-none transition-colors bg-white resize-none`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* File Attachment */}
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ALLOWED_FILE_TYPES.join(",")}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full px-4 py-3 border-2 border-dashed border-gray-300 hover:border-brand text-gray-500 hover:text-brand transition-colors flex items-center justify-center gap-2 bg-white"
        >
          <Paperclip className="w-5 h-5" />
          Attach Files (optional)
        </button>
        <p className="text-xs text-gray-400 mt-1">
          Images, PDF, Word, Excel. Max 10MB per file, 25MB total.
        </p>
        {errors.files && (
          <p className="text-red-500 text-sm mt-1">{errors.files}</p>
        )}
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 px-3 py-2"
            >
              <div className="flex items-center gap-2 truncate">
                <Paperclip className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-700 truncate">
                  {file.name}
                </span>
                <span className="text-xs text-gray-400">
                  ({formatFileSize(file.size)})
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand hover:bg-brand-hover disabled:bg-gray-400 text-white px-8 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Request
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
