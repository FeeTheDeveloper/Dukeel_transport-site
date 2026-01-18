# Dukeel Transport Site

A production-ready Next.js 14+ application with App Router, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting
- **Node.js 20.x** - Runtime environment

## 📁 Project Structure

```
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout component
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # Reusable React components
├── lib/             # Utility functions and shared code
├── public/          # Static assets
│   └── assets/      # Images, logos, etc.
└── ...config files
```

## 🛠️ Local Development

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Dukeel_transport-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## ✏️ Where to Edit Content

### Homepage Content
Edit `app/page.tsx` to customize:
- Hero section text and layout
- Call-to-action buttons
- Main content sections

### Site Metadata
Edit `app/layout.tsx` to update:
- Site title
- Meta description
- Global layout structure

### Styling
- `app/globals.css` - Global CSS styles and Tailwind imports
- Use Tailwind utility classes directly in components

### Logo
Replace `public/assets/logo.png` with your own logo image (200x200px recommended).

### Components
Create reusable components in the `components/` directory:
```tsx
// components/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="...">{children}</button>;
}
```

### Utilities
Place helper functions in the `lib/` directory:
```typescript
// lib/utils.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Import your repository on [Vercel](https://vercel.com/new):
   - Click "Import Project"
   - Select your Git provider and repository
   - Configure project (defaults should work)
   - Click "Deploy"

3. Your site will be live with a `.vercel.app` URL

### Environment Variables

If you need environment variables:

1. Create a `.env.local` file (already gitignored):
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. Add the same variables in Vercel dashboard under "Settings" → "Environment Variables"

### Build Verification

Before deploying, always verify the build succeeds locally:
```bash
npm run build
npm run start
```

## 📝 Additional Configuration

### Adding Pages

Create new routes by adding files in the `app/` directory:
```
app/
├── about/
│   └── page.tsx       # /about route
└── contact/
    └── page.tsx       # /contact route
```

### TypeScript

TypeScript is configured and ready. Type checking runs automatically during build.

### ESLint

ESLint is configured with Next.js recommended rules. Run manually:
```bash
npm run lint
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test the build: `npm run build`
4. Commit your changes: `git commit -m "feat: your feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a Pull Request

## 📄 License

Private repository - All rights reserved.
