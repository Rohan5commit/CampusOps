import { summarizeMeeting } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();
    if (!notes || typeof notes !== "string") {
      return Response.json({ error: "Invalid notes" }, { status: 400 });
    }
    const data = await summarizeMeeting(notes);
    return Response.json({ actionItems: data.actionItems });
  } catch {
    return Response.json({ error: "Failed to extract" }, { status: 500 });
  }
}
