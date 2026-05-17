import { Task } from "./types";

export const workspace = {
  name: "UOE Robotics Society",
  description: "Build sprint planning + sponsor outreach + event logistics in one place.",
  members: 12,
  projects: 3
};

export const tasks: Task[] = [
  { id: "1", title: "Finalize Summer Showcase agenda", owner: "Aisha", status: "In Progress", dueDate: "2026-05-21", priority: "High" },
  { id: "2", title: "Submit venue booking form", owner: "Liam", status: "Todo", dueDate: "2026-05-20", priority: "High" },
  { id: "3", title: "Publish volunteer onboarding doc", owner: "Nora", status: "Done", dueDate: "2026-05-16", priority: "Medium" },
  { id: "4", title: "Confirm sponsor deck revisions", owner: "Ravi", status: "Todo", dueDate: "2026-05-24", priority: "Medium" }
];

export const meetingSeed = `Team sync notes:\n- Need to lock final event run-of-show by Wednesday.\n- Liam will submit room booking today.\n- Aisha to coordinate MC script and AV checklist.\n- Risk: low RSVP response; marketing push required.\n- Decision: prioritize Instagram + newsletter by Tuesday.`;

export const docs = [
  { id: "doc-1", name: "Sponsor-Playbook.md", content: "Sponsors prefer clear audience metrics, sponsor tiers, and event timeline checkpoints." },
  { id: "doc-2", name: "Ops-Handbook.md", content: "Every task should have an owner, due date, and fallback owner for continuity." }
];
