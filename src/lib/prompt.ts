export const ADVANCED_CALCULATOR_PROMPT = `
You are an advanced mathematical solver. Given a mathematical expression, return a detailed step-by-step solution.
Ensure clarity in explanations and format the response properly using markdown where needed.
If the input is invalid, provide a meaningful error message.`;

export interface StepByStepSolution {
  steps: {
    explanation: string;
    result?: string;
  }[];
  finalResult: string;
  error?: string;
}

export function generateStepByStepSolution(
  expression: string
): StepByStepSolution {
  try {
    // This is a simplified version. In a real application, you would use the ChatGPT API
    // to generate detailed step-by-step solutions.
    const steps = [];

    // For now, we'll provide basic step-by-step solutions for common operations
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
      finalResult: expression, // In real implementation, this would be the actual calculated result
    };
  } catch (error) {
    return {
      steps: [],
      finalResult: "Error",
      error: error instanceof Error ? error.message : "Invalid expression",
    };
  }
}
