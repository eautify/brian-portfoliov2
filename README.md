# Brian Balili — Portfolio

A personal portfolio for my work across full-stack software and connected hardware. It brings together selected projects, my internship experience, technical toolkit, and a few things I enjoy away from the keyboard.

## Features

- Responsive portfolio with dark and light themes
- Selected projects linked to their live deployments
- Experience timeline with current availability
- Terminal-inspired technical toolkit
- Away from Keyboard dialog with personal interests
- Email copy button and accessible motion preferences

## Built with

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Lucide React icons

## Run locally

Install [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project structure

- `app/page.tsx` — portfolio sections and project content
- `app/ui.tsx` — theme toggle, Away from Keyboard dialog, and email copy button
- `app/globals.css` — layout, responsive styles, themes, and animations
- `app/layout.tsx` — root layout, fonts, and site metadata
- `public/` — logo and image assets

## Deployment

The site can be deployed to [Vercel](https://vercel.com/) or another platform that supports Next.js. See the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for details.
