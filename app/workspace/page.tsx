"use client";
import { workspace } from "@/lib/demoData";
import { useTaskStore } from "@/lib/taskStore";

export default function WorkspacePage() {
  const { tasks } = useTaskStore();
  const done = tasks.filter((t) => t.status === "Done").length;
  const urgent = tasks.filter((t) => t.priority === "High").length;
  const overdue = tasks.filter((t) => t.dueDate < new Date().toISOString().slice(0,10) && t.status !== "Done").length;
  return <section className="space-y-6">
    <header className="card p-6"><h1 className="text-2xl font-bold">{workspace.name}</h1><p className="text-slate-600">{workspace.description}</p></header>
    <div className="grid gap-4 md:grid-cols-5">{[["Members", workspace.members],["Projects",workspace.projects],["Urgent",urgent],["Completed",done],["Overdue",overdue]].map(([k,v]) => <div key={String(k)} className="card p-4"><p className="text-sm text-slate-500">{k}</p><p className="text-2xl font-semibold">{v}</p></div>)}</div>
  </section>;
}
