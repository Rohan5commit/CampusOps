import { answerQuestion } from "@/lib/ai";

export async function POST(req: Request) {
  const { context, question } = await req.json();
  const answer = await answerQuestion(context, question);
  return Response.json({ answer });
}
