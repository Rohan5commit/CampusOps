import Link from "next/link";

const items = [
  ["Overview", "/workspace"],
  ["Tasks", "/workspace/tasks"],
  ["Meetings", "/workspace/meetings"],
  ["Knowledge", "/workspace/knowledge"],
  ["Deadlines", "/workspace/deadlines"]
];

export function Nav() {
  return (
    <nav className="card p-4">
      <div className="mb-3 text-sm font-semibold text-slate-500">CampusOps AI</div>
      <ul className="space-y-1">
        {items.map(([label, href]) => (
          <li key={href}>
            <Link className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
