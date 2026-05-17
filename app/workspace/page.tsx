import { tasks, workspace } from "@/lib/demoData";

export default function WorkspacePage() {
  const done = tasks.filter((t) => t.status === "Done").length;
  const urgent = tasks.filter((t) => t.priority === "High").length;
  return <section className="space-y-6">
    <header className="card p-6"><h1 className="text-2xl font-bold">{workspace.name}</h1><p className="text-slate-600">{workspace.description}</p></header>
    <div className="grid gap-4 md:grid-cols-4">
      {[["Members", workspace.members],["Projects",workspace.projects],["Urgent",urgent],["Completed",done]].map(([k,v]) => <div key={String(k)} className="card p-4"><p className="text-sm text-slate-500">{k}</p><p className="text-2xl font-semibold">{v}</p></div>)}
    </div>
  </section>;
}
