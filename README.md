# CustomGPT Tools Portal

A simple, elegant landing page that routes users to key CustomGPT demos and tools. Built as a lightweight static site (HTML/CSS/JS) so it can be deployed anywhere (GitHub Pages, Netlify, Vercel, S3, etc.).

## Included tools
- CustomGPT Demo: https://customgpt-demo.replit.app/
- CustomGPT ROI Calculator: https://customgpt-roi.replit.app/
- CustomGPT via Intercom: https://intercom-customgpt-deployment.replit.app/

## Local development
No build step required.

Option 1: Use Python's simple HTTP server

```bash
cd /Users/campro/code/CustomGPT/mastersite/master
python3 -m http.server 5173
```

Then open http://localhost:5173 in your browser.

Option 2: Use any static server

```bash
cd /Users/campro/code/CustomGPT/mastersite/master
npx --yes serve -l 5173
```

## Adding a new tool
Edit `script.js` and add a new entry to the `tools` array:

```js
{
  id: "your-id",
  name: "Display Name",
  description: "Short description of the tool.",
  url: "https://example.com/",
  emoji: "🧰",
  tags: ["tag1", "tag2"]
}
```

Cards are rendered automatically—no HTML changes needed.

## Deployment
- GitHub Pages: push to `main` and serve from the repository root, or from the `master/` directory depending on your Pages settings.
- Netlify/Vercel: configure to deploy the repository root with no build command and `.` as the publish directory.

## License
MIT
