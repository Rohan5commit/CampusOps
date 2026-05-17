"use client";
import { useState } from "react";
import { docs } from "@/lib/demoData";

export default function KnowledgePage() {
  const [q, setQ] = useState("How should we improve sponsor outreach and execution quality?");
  const [a, setA] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    const context = docs.map((d) => `${d.name}: ${d.content}`).join("\n");
    const res = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question: q, context }) });
    const data = await res.json();
    setA(data.answer);
    setLoading(false);
  };

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Document Q&A</h1>
    <div className="card p-4"><p className="mb-2 text-sm text-slate-500">Seeded knowledge base</p>{docs.map(d=><p key={d.id} className="text-sm">• {d.name}</p>)}</div>
    <input className="card w-full p-3" value={q} onChange={(e)=>setQ(e.target.value)} />
    <button onClick={ask} className="rounded-lg bg-brand-500 px-4 py-2 text-white">{loading?"Thinking...":"Ask AI"}</button>
    {a && <pre className="card whitespace-pre-wrap p-4 text-sm">{a}</pre>}
  </section>;
}
