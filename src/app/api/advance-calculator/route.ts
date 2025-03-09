import { OpenAI } from "openai";
import { ADVANCED_CALCULATOR_PROMPT } from "@/lib/prompt";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { expression } = await req.json();

    if (!expression) {
      return Response.json(
        { error: "No expression provided." },
        { status: 400 }
      );
    }

    // Send request to ChatGPT with the predefined prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Using the free tier model
      messages: [
        {
          role: "system",
          content: ADVANCED_CALCULATOR_PROMPT,
        },
        {
          role: "user",
          content: `Solve this mathematical expression step by step: ${expression}
          Please format your response in this JSON structure:
          {
            "steps": [
              {
                "explanation": "Step explanation",
                "result": "Intermediate result"
              }
            ],
            "finalResult": "Final calculated result"
          }`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Parse the response to match our StepByStepSolution interface
    const content = response.choices[0].message.content;
    let solution;
    try {
      if (!content) {
        throw new Error("No solution generated");
      }
      solution = JSON.parse(content);
    } catch {
      // If JSON parsing fails, format the response as best we can
      solution = {
        steps: [
          { explanation: content || "No explanation available", result: "" },
        ],
        finalResult: "See steps above",
      };
    }

    return Response.json(solution);
  } catch (error) {
    console.error("Error in solve route:", error);
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to solve expression",
      },
      { status: 500 }
    );
  }
}
