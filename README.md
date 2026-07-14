# Andres Gonzales — Portfolio

Personal portfolio and blog for Andres Gonzales, live at [www.andreslearns.org](https://www.andreslearns.org).

AI Systems Architect & Researcher writing about AI, machine learning, and educational technology.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4, Radix UI primitives, framer-motion
- **Content**: MDX authored in `content/`, compiled with Content Collections and rendered via Fumadocs
- **State/Data**: Zustand, TanStack Query v5
- **Email**: Resend (contact form)
- **Analytics**: Vercel Analytics (enabled on Vercel deployments)

## Content

Posts, projects, and research entries are MDX files under `content/` (`content/posts`, `content/projects`, `content/research`). They are processed at build time by `content-collections.ts`.

## Prerequisites

- Node.js 18.18 or later
- npm

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy the example file and fill in your own values:

   ```bash
   cp .env.local.example .env.local
   ```

   See [`.env.local.example`](.env.local.example) for the full list. `RESEND_API_KEY` and `CONTACT_EMAIL` are required for the contact form; the rest are optional.

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deployment

Deployed on [Vercel](https://vercel.com). Set the environment variables from `.env.local.example` in the Vercel project settings and push to deploy.

## License

MIT
