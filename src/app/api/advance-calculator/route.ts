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

      **Output Format (Strictly return only valid JSON):**
      \`\`\`json
      {
        "steps": [
          { "explanation": "Step explanation", "result": "Intermediate result" }
        ],
        "finalResult": "Final calculated result"
      }
      \`\`\`

      **Important:** 
      - Do not include any extra text before or after the JSON.
      - Do not wrap the response in markdown or code blocks.
      - Ensure the response is **valid JSON**.
    `;

    const result = await model.generateContent(prompt);
    let responseText = await result.response.text(); // Extract response

    // Ensure JSON extraction
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      responseText = jsonMatch[1]; // Extract JSON part only
    }

    let solution;
    try {
      solution = JSON.parse(responseText);
    } catch {
      solution = {
        steps: [{ explanation: "Failed to parse response", result: responseText }],
        finalResult: "See steps above",
      };
    }
    // for debugging
    console.log(solution);
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
