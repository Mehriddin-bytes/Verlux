import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

export default function SlayBiac() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-24">
      <div className="max-w-lg w-full text-center">
        <div className="bg-gray-800 p-8 lg:p-12 border-2 border-red-500/50 shadow-2xl shadow-red-500/20">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <ShieldAlert className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-4xl font-black text-white mb-2">
            SLAY BIAC
          </h1>

          <p className="text-red-400 text-lg font-bold mb-6 uppercase tracking-wider">
            Nice try, DIDDY.
          </p>

          <div className="bg-black/50 p-6 mb-8 border border-red-500/30">
            <p className="text-gray-300 font-mono text-sm">
              <span className="text-red-400">ERROR:</span> SLAY BIAC
            </p>
            <p className="text-gray-400 font-mono text-xs mt-2">
              GET UR BIAC ASS UP FROM HERE SUCKA.
            </p>
          </div>

          <p className="text-gray-400 mb-8">
            We take security SUPAR seriously. If you&apos;re a legitimate user, please go back and submit a Damn normal request without any funny A$$ business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-semibold transition-all duration-200"
            >
              Back to Safety
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 font-semibold transition-all duration-200"
            >
              Try Again (Nicely)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
