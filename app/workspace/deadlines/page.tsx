"use client";
import { useTaskStore } from "@/lib/taskStore";

export default function DeadlinesPage() {
  const { tasks } = useTaskStore();
  const sorted = [...tasks].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  return <section><h1 className="mb-4 text-2xl font-bold">Deadlines</h1><div className="card p-4">{sorted.length===0?<p className="text-slate-500">No deadlines yet.</p>:sorted.map(t=><div key={t.id} className="flex items-center justify-between border-b py-3 last:border-0"><div><p className="font-medium">{t.title}</p><p className="text-xs text-slate-500">Owner: {t.owner}</p></div><span className="badge">{t.dueDate}</span></div>)}</div></section>;
}
