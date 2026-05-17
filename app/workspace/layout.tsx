"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/nav";
import { tasks as seedTasks } from "@/lib/demoData";
import { Task } from "@/lib/types";
import { TaskContext, TaskContextValue } from "@/lib/taskStore";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);

  useEffect(() => {
    const saved = localStorage.getItem("campusops_tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("campusops_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const value = useMemo<TaskContextValue>(() => ({
    tasks,
    addTask: (task) => setTasks((prev) => [...prev, { ...task, id: crypto.randomUUID() }]),
    addActionItems: (items) => setTasks((prev) => [...prev, ...items.map((i) => ({ id: crypto.randomUUID(), title: i.task, owner: i.owner, dueDate: i.dueDate, status: "Todo" as const, priority: "High" as const })) as Task[]]),
    setStatus: (id, status) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
  }), [tasks]);

  return (
    <TaskContext.Provider value={value}>
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[240px_1fr]">
        <Nav />
        {children}
      </main>
    </TaskContext.Provider>
  );
}
