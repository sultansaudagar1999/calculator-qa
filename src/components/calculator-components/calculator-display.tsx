interface CalculatorDisplayProps {
    input: string
    result: string
  }
  
  export function CalculatorDisplay({ input, result }: CalculatorDisplayProps) {
    return (
      <div className="bg-muted p-4 rounded-lg mb-4">
        <div className="text-lg text-muted-foreground font-mono min-h-6 break-all">{input || "0"}</div>
        <div className="text-2xl font-bold font-mono min-h-8 break-all">{result || "0"}</div>
      </div>
    )
  }
  
  