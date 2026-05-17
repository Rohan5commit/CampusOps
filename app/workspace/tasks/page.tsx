import { tasks } from "@/lib/demoData";

export default function TasksPage() {
  const cols = ["Todo", "In Progress", "Done"] as const;
  return <section><h1 className="mb-4 text-2xl font-bold">Task Board</h1><div className="grid gap-4 md:grid-cols-3">{cols.map((c)=><div key={c} className="card p-4"><h2 className="mb-3 font-semibold">{c}</h2><div className="space-y-3">{tasks.filter(t=>t.status===c).map((t)=><div key={t.id} className="rounded-lg border p-3"><p className="font-medium">{t.title}</p><p className="text-xs text-slate-500">{t.owner} • {t.dueDate}</p></div>)}</div></div>)}</div></section>;
}
