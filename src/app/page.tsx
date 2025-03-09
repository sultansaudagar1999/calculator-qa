"use client";

import Calculator from "@/components/calculator-components/calculator";
import DocumentationButton from "@/components/calculator-components/calculator-document";
import Footer from "@/components/global/footer";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <DocumentationButton showDocs={showDocs} setShowDocs={setShowDocs} />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Calculator
        </h1>

        <div className="w-full max-w-xl mx-auto">
          <Calculator />
          <div className="text-center mt-6">
            <Link
              href="/advance-calculator"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Advanced Calculator
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
