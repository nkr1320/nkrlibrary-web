# Welcome to your NKR project

## Project info

**URL**: https://NKR.dev/projects/12c9ac65-828c-4782-8ec0-965eae4d61a8

## How can I edit this code?

There are several ways of editing your application.

**Use NKR**

Simply visit the [NKR Project](https://NKR.dev/projects/12c9ac65-828c-4782-8ec0-965eae4d61a8) and start prompting.

Changes made via NKR will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in NKR.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [NKR](https://NKR.dev/projects/12c9ac65-828c-4782-8ec0-965eae4d61a8) and click on Share -> Publish.

## Can I connect a custom domain to my NKR project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.NKR.dev/tips-tricks/custom-domain#step-by-step-guide)

## Available Scripts

In the project directory, you can run:

- `npm run dev` — Start the development server with hot reload
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint to check for code quality issues
- `npm run format` — Run Prettier to auto-format all code in `src/`

## Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. To format all code, run:

```sh
npm run format
```

## Continuous Integration (CI)

A GitHub Actions workflow is set up in `.github/workflows/ci.yml` to automatically lint, format-check, and build the project on every push or pull request to `main`.

## Deployment

You can deploy this project to [Vercel](https://vercel.com/) or any static hosting provider. For Vercel:

1. Push your code to GitHub.
2. Import your repo in Vercel and follow the prompts.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Configure your custom domain in Vercel settings if desired.

---

For any questions, see the [NKR documentation](https://docs.NKR.dev/) or open an issue in this repo.
