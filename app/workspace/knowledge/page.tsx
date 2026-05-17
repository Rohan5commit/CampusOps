"use client";
import { useState } from "react";
import { docs } from "@/lib/demoData";

export default function KnowledgePage() {
  const [q, setQ] = useState("How should we improve sponsor outreach and execution quality?");
  const [a, setA] = useState("");
  const [citations, setCitations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ask = async () => {
    setLoading(true); setError(""); setA("");
    const res = await fetch("/api/ask", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q, docs }) });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed");
    } else {
      setA(data.answer);
      setCitations(data.citations || []);
    }
    setLoading(false);
  };

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Document Q&A</h1>
    <div className="card p-4"><p className="mb-2 text-sm text-slate-500">Seeded knowledge base</p>{docs.map(d=><p key={d.id} className="text-sm">• {d.name}</p>)}</div>
    <input className="card w-full p-3" value={q} onChange={(e)=>setQ(e.target.value)} />
    <button onClick={ask} className="rounded-lg bg-brand-500 px-4 py-2 text-white">{loading?"Thinking...":"Ask AI"}</button>
    {loading && <p className="text-sm text-slate-500">Retrieving relevant docs and generating answer...</p>}
    {error && <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {a && <pre className="card whitespace-pre-wrap p-4 text-sm">{a}</pre>}
    {citations.length>0 && <p className="text-xs text-slate-500">Sources: {citations.join(", ")}</p>}
  </section>;
}
