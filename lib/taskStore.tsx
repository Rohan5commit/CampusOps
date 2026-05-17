"use client";
import { createContext, useContext } from "react";
import { Task } from "./types";

export type TaskContextValue = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id">) => void;
  addActionItems: (items: { task: string; owner: string; dueDate: string }[]) => void;
  setStatus: (id: string, status: Task["status"]) => void;
};

export const TaskContext = createContext<TaskContextValue | null>(null);

export const useTaskStore = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTaskStore must be used in workspace layout");
  return ctx;
};
