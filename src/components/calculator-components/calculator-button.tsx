"use client"

import { Button } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

interface CalculatorButtonProps extends VariantProps<typeof Button> {
  value: string
  onClick: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

export function CalculatorButton({ value, onClick, variant = "default", className = "" }: CalculatorButtonProps) {
  return (
    <Button variant={variant} onClick={onClick} className={`h-14 text-lg font-medium ${className}`}>
      {value}
    </Button>
  )
}

