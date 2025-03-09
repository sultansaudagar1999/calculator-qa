"use client"

import type React from "react"

import { useState } from "react"
import { CalculatorDisplay } from "./calculator-display"
import { CalculatorButtonGrid } from "./calculator-button-grid"
import { CalculatorTabs } from "./calculator-tabs"
import { evaluate } from "@/lib/calculator-utils"

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
    const key = e.key

    // Handle numeric keys, operators, and parentheses
    if (/^[0-9+\-*/().^]$/.test(key)) {
      e.preventDefault()
      handleButtonClick(key)
    }
    // Handle special keys
    else if (key === "Enter") {
      e.preventDefault()
      handleButtonClick("=")
    } else if (key === "Escape") {
      e.preventDefault()
      handleButtonClick("C")
    } else if (key === "Backspace") {
      e.preventDefault()
      handleButtonClick("⌫")
    }
    // Handle scientific functions with keyboard shortcuts
    else if (key === "s") {
      e.preventDefault()
      handleButtonClick("sin")
    } else if (key === "c") {
      e.preventDefault()
      handleButtonClick("cos")
    } else if (key === "t") {
      e.preventDefault()
      handleButtonClick("tan")
    } else if (key === "l") {
      e.preventDefault()
      handleButtonClick("log")
    } else if (key === "r") {
      e.preventDefault()
      handleButtonClick("√")
    } else if (key === "p") {
      e.preventDefault()
      handleButtonClick("π")
    } else if (key === "e") {
      e.preventDefault()
      handleButtonClick("e")
    }
  }

  return (
    <div
      className="w-full max-w-xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden border"
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

