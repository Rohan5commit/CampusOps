export type Priority = "High" | "Medium" | "Low";

export type Task = {
  id: string;
  title: string;
  owner: string;
  status: "Todo" | "In Progress" | "Done";
  dueDate: string;
  priority: Priority;
};

export type MeetingSummary = {
  summary: string;
  actionItems: { task: string; owner: string; dueDate: string }[];
  decisions: string[];
  risks: string[];
};

export type AskResponse = {
  answer: string;
  citations: string[];
};
