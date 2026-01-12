# Setup Instructions

## Add Your Assets

Place the following files in the `public/` directory:
- `avatar.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg` - Personal project images
- `project3.jpg`, `project4.jpg` - Professional project images

## Customize Your Content

Edit `src/pages/index.astro` and update the `profileData` object with:
- Your name, bio, and social links
- Your actual project details
- Replace placeholder URLs and handles

## Development

```bash
npm run dev
```

Visit http://localhost:4321

## Build

```bash
npm run build
```

Output will be in `dist/` directory.

## Deploy

The site is static and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service
