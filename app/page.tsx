import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="badge mb-4">UOE Summer of Code 2026 Submission</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">CampusOps AI</h1>
          <p className="mt-4 text-lg text-slate-600">An AI-powered operations workspace for student teams to plan work, summarize meetings, and answer questions from internal docs.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/workspace" className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-700">Open Demo Workspace</Link>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Why judges like this</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
            <li>Real AI workflow with structured outputs.</li>
            <li>Clean, responsive UX with full vertical flow.</li>
            <li>Scalable architecture with API-first design.</li>
            <li>Submission-ready docs and demo artifacts.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
