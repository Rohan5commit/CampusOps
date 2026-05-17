import { summarizeMeeting } from "@/lib/ai";

export async function POST(req: Request) {
  const { notes } = await req.json();
  const data = await summarizeMeeting(notes);
  return Response.json(data);
}
