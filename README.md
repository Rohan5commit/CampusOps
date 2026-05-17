# CampusOps AI

CampusOps AI is an AI-powered operations assistant for student teams, clubs, and small organizations.

**Live Demo: [https://campusops-ai.vercel.app](https://campusops-ai.vercel.app)**

## What it does
- Manage tasks, deadlines, owners, and project progress.
- Summarize meeting notes with structured outputs.
- Extract actionable items with due dates and ownership.
- Answer questions from organizational docs with retrieval + source citations.
- Convert meeting action items directly into task board entries.

## Stack
- Next.js App Router + TypeScript + Tailwind CSS
- Server API routes for AI workflows
- NVIDIA NIM-compatible chat completion endpoint
- Zod schema validation for structured AI responses
- Deterministic fallback mode when `NIM_API_KEY` is absent

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Quality checks
```bash
npm run typecheck
npm run test
npm run build
```

## Environment
Copy `.env.example` to `.env.local` and configure:
- `NIM_API_KEY`
- `NIM_API_URL`
- `NIM_MODEL`

## Endpoints
- `POST /api/summarize` → structured meeting summary JSON
- `POST /api/action-items` → extracted action items JSON
- `POST /api/ask` → concise answer + citation list

## Submission Assets
- `architecture.md`
- `submission-description.md`
- `demo-script.md`
- `slide-outline.md`
- `screenshots-plan.md`
- `roadmap.md`
- `impact-analysis.md`
- `final-submission-checklist.md`
