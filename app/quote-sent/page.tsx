import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

export default function QuoteSent() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white p-8 lg:p-12 shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-black text-gray-900 mb-4">
            Request Received!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for your quote request. We&apos;ve received your information and will get back to you within 24 hours.
          </p>

          <div className="bg-gray-50 p-6 mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Need immediate assistance?</p>
            <div className="space-y-3">
              <a
                href="tel:+14374520850"
                className="flex items-center justify-center gap-2 text-brand hover:text-brand-hover transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                +1 (437) 452-0850
              </a>
              <a
                href="mailto:info@verlux.com"
                className="flex items-center justify-center gap-2 text-brand hover:text-brand-hover transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                info@verlux.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-white px-6 py-3 font-semibold transition-all duration-200"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-brand text-gray-700 hover:text-brand px-6 py-3 font-semibold transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
