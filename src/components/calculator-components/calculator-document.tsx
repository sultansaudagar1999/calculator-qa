"use client";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface DocumentationButtonProps {
  showDocs: boolean;
  setShowDocs: (show: boolean) => void;
}

export default function DocumentationButton({
  showDocs,
  setShowDocs,
}: DocumentationButtonProps) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 rounded-full bg-white shadow-md hover:bg-gray-100"
        onClick={() => setShowDocs(true)}
      >
        <HelpCircle className="h-6 w-6" />
        <span className="sr-only">Documentation</span>
      </Button>

      <Dialog open={showDocs} onOpenChange={setShowDocs}>
        <DialogContent className="max-w-lg p-4">
          <DialogHeader>
            <DialogTitle>Calculator Documentation</DialogTitle>
            <DialogDescription>
              Learn how to use the calculator effectively
            </DialogDescription>
          </DialogHeader>

          {/* Scrollable content container */}
          <div className="max-h-[70vh] overflow-y-auto space-y-6 text-sm p-2">
            <div>
              <h3 className="font-medium">Basic Operations</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Numbers: Use the number pad (0-9) and decimal point (.)</li>
                <li>
                  Basic Arithmetic: +, -, *, / for addition, subtraction,
                  multiplication, division
                </li>
                <li>Equals (=): Calculate the result</li>
                <li>Clear (C): Reset the calculator</li>
                <li>Backspace (⌫): Delete the last character</li>
                <li>Parentheses: Use ( ) for grouping expressions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Scientific Functions</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Trigonometry: sin, cos, tan (all work in degrees)</li>
                <li>Constants: π (pi), e (Euler&apos;s number)</li>
                <li>Powers: Use ^ for exponents (e.g., 2^3 = 8)</li>
                <li>Square Root: √ for square root (e.g., √16 = 4)</li>
                <li>Logarithm: log for base-10 logarithm</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Advanced Calculator Features</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Step-by-Step Solutions: Click &quot;Try Advanced
                  Calculator&quot; for detailed solutions
                </li>
                <li>Complex Numbers: Supports i for imaginary numbers</li>
                <li>
                  Matrix Operations: Use [ ] for matrices (e.g., [1,2;3,4])
                </li>
                <li>Unit Conversions: e.g., &quot;12 inch to cm&quot;</li>
                <li>
                  Detailed Explanations: Get step-by-step breakdowns of
                  calculations
                </li>
                <li>Mathematical Proofs: See intermediate steps and results</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Tips & Navigation</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Switch between Basic and Scientific modes using the tabs
                </li>
                <li>Use the Advanced Calculator for complex expressions</li>
                <li>
                  Keyboard shortcuts: Enter for =, Escape for C, Backspace for ⌫
                </li>
                <li>
                  Scientific shortcuts: &apos;s&apos; for sin, &apos;c&apos; for
                  cos, &apos;t&apos; for tan
                </li>
                <li>Results are formatted to maintain precision</li>
                <li>
                  Use the back arrow (←) to return to the basic calculator
                </li>
              </ul>
            </div>
          </div>

          <DialogClose asChild>
            <Button variant="outline" className="mt-3">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
