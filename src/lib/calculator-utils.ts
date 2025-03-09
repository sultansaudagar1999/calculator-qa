import * as math from "mathjs";

// Create a math.js instance with custom configuration
const mathInstance = math.create(math.all);

// Helper to convert input to use degrees
function convertToDegrees(expression: string): string {
  return expression.replace(/(sin|cos|tan)\((.*?)\)/g, "$1($2 deg)");
}

export function evaluate(expression: string): string {
  // Sanitize the input to prevent empty or invalid expressions
  if (!expression || expression.trim() === "") {
    return "0";
  }

  try {
    // Convert expression to use degrees explicitly
    const degExpression = convertToDegrees(expression);

    // Use math.js evaluate function
    const result = mathInstance.evaluate(degExpression);

    // Format the result based on its type
    if (typeof result === "number") {
      if (Math.abs(result) < 1e-10) return "0"; // Handle very small numbers
      // Format numbers to avoid floating point precision issues
      return mathInstance.format(result, { precision: 14 });
    } else if (mathInstance.typeOf(result) === "Complex") {
      // Handle complex numbers
      return `${result.re.toFixed(10)} ${result.im >= 0 ? "+" : "-"} ${Math.abs(
        result.im
      ).toFixed(10)}i`;
    } else if (mathInstance.typeOf(result) === "Matrix") {
      // Handle matrices
      return mathInstance.format(result, { precision: 10 });
    } else {
      // For other types
      return result.toString();
    }
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific math.js errors
      if (error.message.includes("Undefined symbol")) {
        throw new Error("Unknown function or variable");
      } else if (error.message.includes("Unexpected end of expression")) {
        throw new Error("Incomplete expression");
      } else if (error.message.includes("Division by zero")) {
        throw new Error("Cannot divide by zero");
      }
    }
    throw new Error("Invalid expression");
  }
}
