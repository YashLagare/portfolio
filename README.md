# Portfolio

This is a Next.js personal portfolio project. Originally configured for GitHub Pages with a `basePath` of `/portfolio` and `next export`. The settings have been updated to support deployment on [Vercel](https://vercel.com).

## Changes for Vercel

- **Removed** `output: 'export'` from `next.config.js` to allow SSR/ISR on Vercel.
- **Removed** `basePath` and references to `/portfolio` in code.
- Adjusted asset URLs (e.g. resume download and 3D model path) to use root-relative paths.
- Environment variables are now read from `process.env` directly and can be set in the Vercel dashboard.

## Deploying to Vercel

1. Push the repository to GitHub (or any Git provider).
2. Sign in to Vercel and create a new project, pointing to this repository.
3. Vercel will auto-detect the Next.js framework. No additional build commands are necessary.
4. Configure any required environment variables (`TEMPLATE_ID`, `SERVICE_ID`, `PUBLIC_KEY`, etc.) in the Vercel project settings.
5. Trigger a deployment by pushing a commit or via the Vercel dashboard.

The site will be available at `https://<your-project>.vercel.app` without needing any `basePath` modifications.

> If you previously built the site locally with `npm run build && npm run export`, you can remove the `out/` directory as it’s no longer used.

---

Feel free to modify or extend this README with additional setup instructions or project details.