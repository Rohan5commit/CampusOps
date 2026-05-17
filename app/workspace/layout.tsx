import { ReactNode } from "react";
import { Nav } from "@/components/nav";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[240px_1fr]">
      <Nav />
      {children}
    </main>
  );
}
