import { summarizeMeeting } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();
    if (!notes || typeof notes !== "string" || notes.length > 10000) {
      return Response.json({ error: "Invalid notes input" }, { status: 400 });
    }
    const data = await summarizeMeeting(notes);
    return Response.json(data);
  } catch {
    return Response.json({ error: "Failed to summarize" }, { status: 500 });
  }
}
