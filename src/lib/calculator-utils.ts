export function evaluate(expression: string): number {
  // Sanitize the input to prevent empty or invalid expressions
  if (!expression || expression.trim() === "") {
    return 0;
  }

  // Replace scientific constants
  expression = expression.replace(/π/g, Math.PI.toString());
  expression = expression.replace(/e/g, Math.E.toString());

  // Handle scientific functions
  expression = handleScientificFunctions(expression);

  // Use Function constructor to evaluate the expression
  try {
    // This is a simplified approach - in production, you'd want a more robust parser
    return Function(`'use strict'; return (${expression})`)();
  } catch {
    throw new Error("Invalid expression");
  }
}

function handleScientificFunctions(expression: string): string {
  // Replace scientific functions with their JavaScript equivalents
  expression = expression.replace(/sin\(/g, "Math.sin(");
  expression = expression.replace(/cos\(/g, "Math.cos(");
  expression = expression.replace(/tan\(/g, "Math.tan(");
  expression = expression.replace(/log\(/g, "Math.log10(");
  expression = expression.replace(/√\(/g, "Math.sqrt(");
  expression = expression.replace(/\^/g, "**");

  // Handle √ without parentheses (e.g., √4)
  const sqrtRegex = /√(\d+(\.\d+)?)/g;
  expression = expression.replace(sqrtRegex, "Math.sqrt($1)");

  return expression;
}
