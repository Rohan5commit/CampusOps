import { answerQuestion } from "@/lib/ai";
import { rankContext } from "@/lib/retrieval";

export async function POST(req: Request) {
  try {
    const { docs, question } = await req.json();
    if (!question || typeof question !== "string" || question.length > 500) {
      return Response.json({ error: "Invalid question" }, { status: 400 });
    }
    const ranked = rankContext(question, docs ?? [], 2);
    const context = ranked.map((d) => `${d.name}: ${d.content}`).join("\n");
    const response = await answerQuestion(context, question, ranked.map((d) => d.name));
    return Response.json(response);
  } catch {
    return Response.json({ error: "Failed to answer" }, { status: 500 });
  }
}
