import { z } from "zod";
import { AskResponse, MeetingSummary } from "./types";

const NIM_API_URL = process.env.NIM_API_URL || "https://integrate.api.nvidia.com/v1/chat/completions";
const NIM_MODEL = process.env.NIM_MODEL || "meta/llama-3.1-70b-instruct";

export const hasRealModel = () => Boolean(process.env.NIM_API_KEY);

const MeetingSummarySchema = z.object({
  summary: z.string(),
  actionItems: z.array(z.object({ task: z.string(), owner: z.string(), dueDate: z.string() })),
  decisions: z.array(z.string()),
  risks: z.array(z.string())
});
export async function extractActionItems(input: string): Promise<{ task: string, owner: string, dueDate: string }[]> {
  if (!hasRealModel()) {
    return [
      { task: "Submit venue booking form", owner: "Liam", dueDate: "2026-05-17" },
      { task: "Finalize event run-of-show", owner: "Aisha", dueDate: "2026-05-21" },
      { task: "Launch social + newsletter campaign", owner: "Nora", dueDate: "2026-05-19" }
    ];
  }

  const res = await fetch(NIM_API_URL, {
    method: "POST",
    headers: { 'Authorization': 'Bearer ' + process.env.NIM_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: NIM_MODEL,
      messages: [
        { role: "system", content: "Extract action items only. Return strict JSON array: [{task,owner,dueDate}]." },
        { role: "user", content: 'Meeting notes:\n' + input }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    })
  });

  if (!res.ok) throw new Error("Action item extraction failed");
  const data = await res.json();
  const parsed = JSON.parse(data.choices[0].message.content);
  return z.array(z.object({ task: z.string(), owner: z.string(), dueDate: z.string() })).parse(parsed.actionItems || parsed);
}
export async function summarizeMeeting(input: string): Promise<MeetingSummary> {
  if (!hasRealModel()) {
    return {
      summary: "Team aligned on event readiness, room booking, and outreach urgency. Immediate focus is timeline lock and visibility push.",
      actionItems: [
        { task: "Submit venue booking form", owner: "Liam", dueDate: "2026-05-17" },
        { task: "Finalize event run-of-show", owner: "Aisha", dueDate: "2026-05-21" },
        { task: "Launch social + newsletter campaign", owner: "Nora", dueDate: "2026-05-19" }
      ],
      decisions: ["Prioritize Instagram + newsletter campaign before Tuesday", "Track RSVP growth daily until showcase"],
      risks: ["Low RSVP volume if promotion is delayed"]
    };
  }

  const res = await fetch(NIM_API_URL, {
    method: "POST",
    headers: { 'Authorization': 'Bearer ' + process.env.NIM_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: NIM_MODEL,
      messages: [
        { role: "system", content: "Return strict JSON keys: summary, actionItems[{task,owner,dueDate}], decisions[], risks[]." },
        { role: "user", content: 'Summarize meeting notes:\n' + input }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    })
  });

  if (!res.ok) throw new Error("AI summary request failed");
  const data = await res.json();
  return MeetingSummarySchema.parse(JSON.parse(data.choices[0].message.content));
}

export async function answerQuestion(context: string, question: string, citations: string[]): Promise<AskResponse> {
  if (!hasRealModel()) {
    return {
      answer: "1) Lead with audience metrics.\n2) Assign one owner per task.\n3) Add due dates + backup owners.\n4) Review sponsor timeline weekly.",
      citations
    };
  }

  const res = await fetch(NIM_API_URL, {
    method: "POST",
    headers: { 'Authorization': 'Bearer ' + process.env.NIM_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: NIM_MODEL,
      messages: [
        { role: "system", content: "Answer in 4 concise actionable bullets, grounded only in provided context." },
        { role: "user", content: 'Context:\n' + context + '\n\nQuestion:\n' + question }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) throw new Error("AI Q&A request failed");
  const data = await res.json();
  return { answer: data.choices[0].message.content as string, citations };
}
