"use client";
import { useState } from "react";
import { meetingSeed } from "@/lib/demoData";
import { MeetingSummary } from "@/lib/types";

export default function MeetingsPage() {
  const [notes, setNotes] = useState(meetingSeed);
  const [result, setResult] = useState<MeetingSummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const run = async () => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/summarize", { method: "POST", body: JSON.stringify({ notes }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResult(data);
    } catch {
      setError("Unable to summarize right now. Try again.");
    }
    setLoading(false);
  };

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Meeting Notes AI Summary</h1>
    <textarea className="card min-h-52 w-full p-4" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <button onClick={run} className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white">{loading?"Summarizing...":"Summarize & Extract Actions"}</button>
    {error && <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {loading && <p className="text-sm text-slate-500">AI is analyzing notes...</p>}
    {result && <div className="card space-y-4 p-4">
      <div><h2 className="font-semibold">Summary</h2><p>{result.summary}</p></div>
      <div><h3 className="font-semibold">Decisions</h3><ul className="list-disc pl-5">{result.decisions.map((d)=><li key={d}>{d}</li>)}</ul></div>
      <div><h3 className="font-semibold">Risks</h3><ul className="list-disc pl-5">{result.risks.map((r)=><li key={r}>{r}</li>)}</ul></div>
      <div><h3 className="font-semibold">Action Items</h3><div className="space-y-2">{result.actionItems.map((a,i)=><div key={i} className="rounded-lg border p-2 text-sm">{a.task} — <span className="font-medium">{a.owner}</span> ({a.dueDate})</div>)}</div></div>
    </div>}
  </section>;
}
