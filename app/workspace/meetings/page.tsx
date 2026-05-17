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
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/summarize", { method: "POST", body: JSON.stringify({ notes }) });
      if (!res.ok) throw new Error("Failed to summarize");
      setResult(await res.json());
    } catch (e) { setError("Unable to summarize right now."); }
    setLoading(false);
  };

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Meeting Notes AI Summary</h1>
    <textarea className="card min-h-52 w-full p-4" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <button onClick={run} className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white">{loading?"Summarizing...":"Summarize & Extract Actions"}</button>
    {error && <p className="text-sm text-red-600">{error}</p>}
    {result && <div className="card p-4"><p className="font-medium">{result.summary}</p></div>}
  </section>;
}
