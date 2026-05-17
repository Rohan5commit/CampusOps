import { extractActionItems } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();
    if (!notes || typeof notes !== "string") {
      return Response.json({ error: "Invalid notes" }, { status: 400 });
    }
    const data = await extractActionItems(notes);
    return Response.json({ actionItems: data });
  } catch {
    return Response.json({ error: "Failed to extract" }, { status: 500 });
  }
}
