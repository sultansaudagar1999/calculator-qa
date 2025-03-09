"use client"

import Calculator from "@/components/calculator-components/calculator"
import DocumentationButton from "@/components/calculator-components/calculator-document"
import Footer from "@/components/global/footer"
import { useState } from "react"

export default function Home() {
  const [showDocs, setShowDocs] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <DocumentationButton showDocs={showDocs} setShowDocs={setShowDocs} />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Calculator</h1>

        <Calculator />
      </main>

      <Footer />
    </div>
  )
}

