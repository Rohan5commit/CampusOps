# CampusOps AI

AI-powered operations assistant for student teams and clubs.

## Features
- Workspace dashboard (priorities, progress, team view)
- Task board and deadlines timeline
- AI meeting summarization + action-item extraction
- Document Q&A from seeded knowledge docs
- Deterministic fallback outputs when model key is missing

## Tech Stack
- Next.js 15 + TypeScript + Tailwind CSS
- API routes for AI workflows
- NVIDIA NIM endpoint integration

## Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Environment
Copy `.env.example` to `.env.local` and configure `NIM_API_KEY`.

## Routes
- `/` landing
- `/workspace` dashboard
- `/workspace/tasks` task board
- `/workspace/meetings` AI summaries
- `/workspace/knowledge` document Q&A
- `/workspace/deadlines` deadline view

## Submission Assets
See:
- `architecture.md`
- `submission-description.md`
- `demo-script.md`
- `slide-outline.md`
- `screenshots-plan.md`
- `roadmap.md`
- `impact-analysis.md`
- `final-submission-checklist.md`
