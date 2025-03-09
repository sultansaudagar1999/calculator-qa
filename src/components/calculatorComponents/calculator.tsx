"use client"

import type React from "react"

import { useState } from "react"
import { CalculatorDisplay } from "./calculator-display"
import { CalculatorButtonGrid } from "./calculator-button-grid"
import { CalculatorTabs } from "./calculator-tabs"
import { evaluate } from "./calculator-utils"

export default function Calculator() {
  const [input, setInput] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [activeTab, setActiveTab] = useState<"basic" | "scientific">("basic")

  const handleButtonClick = (value: string) => {
    switch (value) {
      case "=":
        try {
          const calculatedResult = evaluate(input)
          setResult(calculatedResult.toString())
        } catch (error) {
          console.log(error)
          setResult("Error")
        }
        break
      case "C":
        setInput("")
        setResult("")
        break
      case "⌫":
        setInput(input.slice(0, -1))
        break
      default:
        setInput((prev) => prev + value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault()
    const key = e.key

    if (key === "Enter") {
      handleButtonClick("=")
    } else if (key === "Escape") {
      handleButtonClick("C")
    } else if (key === "Backspace") {
      handleButtonClick("⌫")
    } else if (/[\d+\-*/.()^]/.test(key)) {
      handleButtonClick(key)
    }
  }

  return (
    <div
      className="w-full max-w-md mx-auto bg-card rounded-xl shadow-lg overflow-hidden border"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <CalculatorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-4">
        <CalculatorDisplay input={input} result={result} />
        <CalculatorButtonGrid mode={activeTab} onButtonClick={handleButtonClick} />
      </div>
    </div>
  )
}

