# CustomGPT Tools Portal

## Overview
A simple, elegant landing page that serves as a portal to key CustomGPT demos and tools. This is a lightweight static website built with vanilla HTML, CSS, and JavaScript - no build process required.

**Purpose:** Central hub for accessing various CustomGPT demonstrations and calculators  
**Current State:** Fully functional static site running on Replit  
**Deployment:** Ready to publish via Replit Deployments

## Project Architecture

### Technology Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Server:** Python's built-in HTTP server
- **Deployment:** Static site hosting (no backend required)

### File Structure
```
.
├── index.html          # Main landing page
├── script.js           # Tool cards rendering, search, theme toggle
├── styles.css          # Responsive styling with dark/light themes
├── cgpt.png           # Logo/favicon
├── Logo.svg           # Header logo
└── README.md          # Original project documentation
```

### Key Features
- **Tool Cards:** Dynamic rendering of CustomGPT demo links
- **Search Functionality:** Client-side filtering of tools by name, description, and tags
- **Theme Switching:** Dark/light mode with localStorage persistence
- **Responsive Design:** Mobile-optimized layout

## Recent Changes
*2025-10-29* - Initial Replit setup
- Installed Python 3.11 for static file serving
- Configured workflow to serve on port 5000 with 0.0.0.0 binding
- Added Python .gitignore file
- Created replit.md documentation

## Development

### Local Development
The site is served using Python's built-in HTTP server on port 5000:
```bash
python3 -m http.server 5000 --bind 0.0.0.0
```

### Adding New Tools
Edit `script.js` and add a new entry to the `tools` array:
```javascript
{
  id: "unique-id",
  name: "Display Name",
  description: "Short description",
  url: "https://example.com/",
  emoji: "🔧",
  logo: "./cgpt.png",
  tags: ["tag1", "tag2"]
}
```

Cards render automatically - no HTML changes needed.

## Deployment
This project is configured for Replit's Autoscale deployment (suitable for static sites). No build step required - the same Python HTTP server serves the production site.

## User Preferences
None specified yet.
