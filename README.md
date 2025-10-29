# Ugly UI Static Site (GitHub Pages)

This repository is a static site that demonstrates an intentionally "ugly" UI and includes:
- `index.html` — the page and explanation.
- `styles.css` — intentionally garish styles.
- `script.js` — contains a deliberate lint error (missing semicolon).
- `.eslintrc.json` — ESLint config enforcing semicolons.
- `package.json` — with eslint devDependency and `npm run lint`.
- `.github/workflows/deploy.yml` — GitHub Actions workflow that runs ESLint then deploys to GitHub Pages using `peaceiris/actions-gh-pages`.

## How it works

1. Push this repository to GitHub (create a new repo, push to `main`).
2. GitHub Actions will run the workflow on every push to `main`. It:
   - Installs Node 18 and dependencies.
   - Runs `npm run lint` which executes ESLint on `script.js`.
   - If lint passes, it deploys the repository root to GitHub Pages using `peaceiris/actions-gh-pages`.

## Lint test (expected)
`script.js` intentionally omits a semicolon. ESLint is configured to treat missing semicolons as errors, so the Actions job `Run ESLint` will fail. To fix:
- Add the missing semicolon at the end of the `const message` line (or change `.eslintrc.json` rules).

## Notes
- The workflow uses the default `GITHUB_TOKEN` for deployment; GitHub Pages can serve from the `gh-pages` branch created by the action.
- If you prefer using the official Pages deployment actions instead of `peaceiris/actions-gh-pages`, replace the deploy step accordingly.

