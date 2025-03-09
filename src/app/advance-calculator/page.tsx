"use client";

import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { evaluate } from "@/lib/calculator-utils";
import { generateStepByStepSolution } from "@/lib/prompt";

export default function AdvanceCalculator() {
  const [input, setInput] = useState("");
  const [solution, setSolution] = useState<{
    steps: { explanation: string; result?: string }[];
    finalResult: string;
    error?: string;
  } | null>(null);

  const handleSolve = useCallback(async () => {
    if (!input.trim()) {
      toast.error("Please enter an expression");
      return;
    }

    try {
      // Get step-by-step solution
      const stepSolution = generateStepByStepSolution(input);

      // Calculate final result using our existing evaluate function
      const finalResult = evaluate(input);

      setSolution({
        ...stepSolution,
        finalResult,
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Invalid expression"
      );
      setSolution(null);
    }
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Advanced Calculator
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="mb-4">
            <label
              htmlFor="expression"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Mathematical Expression
            </label>
            <textarea
              id="expression"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-24 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your mathematical expression here (e.g., sin(45) + √(16) or [1,2;3,4])"
            />
          </div>

          <Button
            onClick={handleSolve}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Solve Step by Step
          </Button>
        </div>

        {solution && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Solution</h2>

            {solution.error ? (
              <div className="text-red-500">{solution.error}</div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {solution.steps.map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-700">
                        {step.explanation}
                      </p>
                      {step.result && (
                        <p className="mt-2 text-gray-600 font-mono">
                          {step.result}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-2">Final Result:</h3>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-lg">
                    {solution.finalResult}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
