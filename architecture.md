# CampusOps AI Architecture

## Stack
- Next.js App Router + TypeScript + Tailwind
- Server routes for AI workflows
- Demo-seeded in-memory data for reliable hackathon demo

## Flow
1. UI pages collect tasks, notes, and questions.
2. API routes call `lib/ai.ts`.
3. If `NIM_API_KEY` is present, requests go to NVIDIA NIM model endpoint.
4. If key is absent, deterministic fallback outputs keep features demoable.

## Components
- `app/workspace/*`: product pages
- `app/api/*`: summarization, action extraction, and Q&A endpoints
- `lib/demoData.ts`: seeded workspace/tasks/docs
- `lib/ai.ts`: AI + fallback logic

## Scalability
- Replace demo data with Postgres + Prisma.
- Add auth and multi-tenant workspace tables.
- Add embeddings + vector retrieval for large document sets.
