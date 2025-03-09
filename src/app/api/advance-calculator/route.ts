import { GoogleGenerativeAI } from "@google/generative-ai";
import { ADVANCED_CALCULATOR_PROMPT } from "@/lib/prompt";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { expression } = await req.json();

    if (!expression) {
      return Response.json(
        { error: "No expression provided." },
        { status: 400 }
      );
    }

    // Use Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      ${ADVANCED_CALCULATOR_PROMPT}
      Solve this mathematical expression step by step: ${expression}
      Please return the result in the following JSON format:
      {
        "steps": [
          { "explanation": "Step explanation", "result": "Intermediate result" }
        ],
        "finalResult": "Final calculated result"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response.text(); // Extract response text

    let solution;

    try {
      solution = JSON.parse(response);
    } catch {
      solution = {
        steps: [{ explanation: response || "No explanation available", result: "" }],
        finalResult: "See steps above",
      };
    }

    return Response.json(solution);
  } catch (error) {
    console.error("Error in solve route:", error);
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Failed to solve expression",
      },
      { status: 500 }
    );
  }
}
