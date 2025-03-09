export interface StepByStepSolution {
    steps: {
      explanation: string;
      result?: string;
    }[];
    finalResult: string;
    error?: string;
  }
  