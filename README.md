# Dr D Academy

Elite trading education — simplified, results-driven forex market institute.

## Getting started

**Requirements:** Node.js & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact form (production)

Contact and home-page forms submit to the URL in `VITE_CONTACT_FORM_ENDPOINT`. Without it, submissions show an error toast.

**To receive and access submissions:**

1. Use [Formspree](https://formspree.io) (free): sign up → New form → copy the form endpoint (e.g. `https://formspree.io/f/xxxxx`).
2. In your hosting (Vercel, Netlify, etc.) set the env var:  
   `VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`
3. **Access submissions:** Formspree dashboard (Inbox) and/or the email you linked to the form. No backend needed.

See `.env.example` for the variable and other endpoint options.

## Scripts

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run test` — Run tests
