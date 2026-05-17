# CampusOps AI

CampusOps AI is an AI-powered operations assistant for student teams, clubs, and small organizations.

## What it does
- Manage tasks, deadlines, owners, and project progress.
- Summarize meeting notes with structured outputs.
- Extract actionable items with due dates and ownership.
- Answer questions from organizational docs with retrieval + source citations.

## Stack
- Next.js App Router + TypeScript + Tailwind CSS
- Server API routes for AI workflows
- NVIDIA NIM-compatible chat completion endpoint
- Deterministic fallback mode when `NIM_API_KEY` is absent

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

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
