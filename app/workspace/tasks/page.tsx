"use client";
import { useState } from "react";
import { useTaskStore } from "@/lib/taskStore";

export default function TasksPage() {
  const { tasks, setStatus, addTask } = useTaskStore();
  const cols = ["Todo", "In Progress", "Done"] as const;
  const [title, setTitle] = useState("");

  return <section className="space-y-4"><h1 className="text-2xl font-bold">Task Board</h1>
    <div className="card flex gap-2 p-3"><input className="flex-1 rounded border p-2" placeholder="Add a new task" value={title} onChange={(e)=>setTitle(e.target.value)} /><button className="rounded bg-brand-500 px-3 py-2 text-white" onClick={()=>{if(title.trim()) {addTask({title,owner:"Unassigned",status:"Todo",dueDate:new Date().toISOString().slice(0,10),priority:"Medium"}); setTitle("");}}}>Add Task</button></div>
    <div className="grid gap-4 md:grid-cols-3">{cols.map((c)=><div key={c} className="card p-4"><h2 className="mb-3 font-semibold">{c}</h2><div className="space-y-3">{tasks.filter(t=>t.status===c).map((t)=><div key={t.id} className="rounded-lg border p-3"><p className="font-medium">{t.title}</p><p className="text-xs text-slate-500">{t.owner} • {t.dueDate}</p><div className="mt-2 flex gap-2">{cols.map(s=><button key={s} onClick={()=>setStatus(t.id,s)} className="rounded border px-2 py-1 text-xs">{s}</button>)}</div></div>)}</div></div>)}</div></section>;
}
