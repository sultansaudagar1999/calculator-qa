"use client"

import { basicButtons, scientificButtons } from "@/lib/constants"
import { CalculatorButton } from "./calculator-button"

interface CalculatorButtonGridProps {
  mode: "basic" | "scientific"
  onButtonClick: (value: string) => void
}

export function CalculatorButtonGrid({ mode, onButtonClick }: CalculatorButtonGridProps) {
 
  const buttons = mode === "basic" ? basicButtons : scientificButtons

  return (
    <div className={`grid ${mode === "basic" ? "grid-cols-4" : "grid-cols-4 md:grid-cols-4"} gap-2`}>
      {buttons.map((btn) => (
        <CalculatorButton
          key={btn}
          value={btn}
          onClick={() => onButtonClick(btn)}
          variant={
            btn === "="
              ? "default"
              : ["C", "⌫"].includes(btn)
                ? "destructive"
                : ["+", "-", "*", "/", "^"].includes(btn)
                  ? "secondary"
                  : ["sin", "cos", "tan", "log", "√", "π", "e", "(", ")"].includes(btn)
                    ? "outline"
                    : "ghost"
          }
          className={btn === "=" ? "bg-primary text-primary-foreground" : ""}
        />
      ))}
    </div>
  )
}

