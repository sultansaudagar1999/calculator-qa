export const ADVANCED_CALCULATOR_PROMPT = `You are an advanced mathematical solver. Your task is to:

1. Analyze the given mathematical expression
2. Break down the solution into clear, logical steps
3. Show intermediate calculations and results
4. Explain each step in simple terms
5. Format your response as valid JSON with this structure:
   {
     "steps": [
       {
         "explanation": "Clear explanation of this step",
         "result": "Intermediate calculation or result"
       }
     ],
     "finalResult": "The final calculated result"
   }

Important notes:
- Use proper mathematical terminology
- Show all work step by step
- For trigonometric functions, work in degrees
- Handle complex numbers, matrices, and unit conversions
- If the input is invalid, return an error message
- Keep explanations concise but clear
- Use mathematical symbols (°, √, π) in explanations
- Format results with ≈ for approximate values and = for exact values

Example for expression "sin(45) - sin(90)":
{
  "steps": [
    {
      "explanation": "Calculate sin(45°). The sine of 45 degrees is √2/2 or approximately 0.7071",
      "result": "sin(45°) ≈ 0.7071"
    },
    {
      "explanation": "Calculate sin(90°). The sine of 90 degrees is 1",
      "result": "sin(90°) = 1"
    },
    {
      "explanation": "Subtract sin(90°) from sin(45°): sin(45°) - sin(90°)",
      "result": "0.7071 - 1"
    },
    {
      "explanation": "Perform the subtraction",
      "result": "-0.2929"
    }
  ],
  "finalResult": "-0.2929"
}`;

export interface StepByStepSolution {
  steps: {
    explanation: string;
    result?: string;
  }[];
  finalResult: string;
  error?: string;
}

// This function is now just a fallback in case the API call fails
export function generateStepByStepSolution(
  expression: string
): StepByStepSolution {
  try {
    const steps = [];

    if (
      expression.includes("sin") ||
      expression.includes("cos") ||
      expression.includes("tan")
    ) {
      steps.push({
        explanation: "1. Trigonometric functions work in degrees by default",
        result: "Converting input to degrees",
      });
    }

    if (expression.includes("^")) {
      steps.push({
        explanation: "2. Handle exponentiation",
        result: "Calculate powers using ^",
      });
    }

    if (expression.includes("sqrt") || expression.includes("√")) {
      steps.push({
        explanation: "3. Calculate square roots",
        result: "Find the square root value",
      });
    }

    steps.push({
      explanation: "4. Evaluate the final expression",
      result: "Computing the result",
    });

    return {
      steps,
      finalResult: expression,
    };
  } catch (error) {
    return {
      steps: [],
      finalResult: "Error",
      error: error instanceof Error ? error.message : "Invalid expression",
    };
  }
}
