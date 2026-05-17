import { MeetingSummary } from "./types";

const NIM_API_URL = process.env.NIM_API_URL || "https://integrate.api.nvidia.com/v1/chat/completions";
const NIM_MODEL = process.env.NIM_MODEL || "meta/llama-3.1-70b-instruct";

export const hasRealModel = () => Boolean(process.env.NIM_API_KEY);

export async function summarizeMeeting(input: string): Promise<MeetingSummary> {
  if (!hasRealModel()) {
    return {
      summary: "Team aligned on event readiness, room booking, and outreach urgency. Immediate execution focus is timeline lock and visibility push.",
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
    headers: {
      Authorization: `Bearer ${process.env.NIM_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: NIM_MODEL,
      messages: [
        { role: "system", content: "Return strict JSON with keys: summary, actionItems[{task,owner,dueDate}], decisions[], risks[]. Keep concise." },
        { role: "user", content: `Summarize meeting notes and extract action items:\n${input}` }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    })
  });

  if (!res.ok) throw new Error("AI summary request failed");
  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}

export async function answerQuestion(context: string, question: string): Promise<string> {
  if (!hasRealModel()) {
    return "Based on your docs: lead with audience metrics, assign explicit task owners, and define due dates with backup owners for execution reliability.";
  }

  const res = await fetch(NIM_API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.NIM_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: NIM_MODEL,
      messages: [
        { role: "system", content: "Answer in 3-4 concise bullet points with actionable recommendations." },
        { role: "user", content: `Context:\n${context}\n\nQuestion:\n${question}` }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) throw new Error("AI Q&A request failed");
  const data = await res.json();
  return data.choices[0].message.content as string;
}
