const tools = [
  {
    id: "standard-demo",
    name: "CustomGPT Demo",
    description: "Learn what is possible out-of-the-box with CustomGPT.",
    url: "https://customgpt-demo.replit.app/",
    emoji: "🤖",
    logo: "./cgpt.png",
    tags: ["chatbot", "demo", "customgpt"]
  },
  {
    id: "roi-calculator",
    name: "CustomGPT ROI Calculator",
    description: "Estimate your ROI and payback with CustomGPT.",
    url: "https://customgpt-roi.replit.app/",
    emoji: "📈",
    logo: "./cgpt.png",
    tags: ["roi", "calculator", "customgpt"]
  },
  {
    id: "instant-viewer-demo",
    name: "CustomGPT Instant Viewer",
    description: "Test CustomGPT's Instant Viewer deployment method.",
    url: "https://instant-viewer-demo.replit.app",
    emoji: "⚡",
    logo: "./cgpt.png",
    tags: ["instant", "viewer", "demo", "customgpt"]
  },
  {
    id: "multi-agent-dropdown",
    name: "Multi-Agent Live Chat",
    description: "Test a multi-agent chat and switch agents via a dropdown.",
    url: "https://dropdown-test.replit.app",
    emoji: "🔀",
    logo: "./cgpt.png",
    tags: ["chatbot", "agents", "demo", "dropdown"]
  },
  {
    id: "web-search-mcp",
    name: "CustomGPT + Web Search MCP",
    description: "Demo of CustomGPT's MCP connection enabling web search.",
    url: "https://customgpt-web-search.replit.app",
    emoji: "🌐",
    logo: "./cgpt.png",
    tags: ["mcp", "web", "search", "demo", "customgpt"]
  }
];

function createToolCard(tool) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = tool.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("data-tags", tool.tags.join(","));
  a.setAttribute("data-name", tool.name.toLowerCase());

  const icon = document.createElement("div");
  icon.className = "card-icon";

  if (tool.logo) {
    const img = document.createElement("img");
    img.src = tool.logo;
    img.alt = tool.name;
    icon.appendChild(img);
  } else if (tool.emoji) {
    icon.textContent = tool.emoji;
  }

  const content = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = tool.name;
  const desc = document.createElement("p");
  desc.textContent = tool.description;
  content.appendChild(title);
  content.appendChild(desc);

  const cta = document.createElement("span");
  cta.className = "card-cta";
  cta.textContent = "Open →";

  a.appendChild(icon);
  a.appendChild(content);
  a.appendChild(cta);

  return a;
}

function renderTools(query = "") {
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = "";
  const q = query.trim().toLowerCase();

  tools
    .filter(tool => {
      if (!q) return true;
      const hay = [tool.name, tool.description, ...(tool.tags || [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    })
    .forEach(tool => grid.appendChild(createToolCard(tool)));

  if (!grid.children.length) {
    const empty = document.createElement("p");
    empty.style.color = "var(--muted)";
    empty.textContent = "No tools match your search.";
    grid.appendChild(empty);
  }
}

function initSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener("input", (e) => {
    renderTools(e.target.value);
  });
}

function getSystemTheme() {
  try {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (_) {
    return 'dark';
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const isDark = theme === 'dark';
    btn.textContent = isDark ? '🌙' : '☀️';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  }
}

function initThemeToggle() {
  const saved = localStorage.getItem('theme');
  const theme = saved || getSystemTheme();
  applyTheme(theme);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });

  // If user hasn't set a preference, follow system changes
  if (!saved && window.matchMedia) {
    try {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
      });
    } catch (_) {
      // older browsers
    }
  }
}

(function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderTools("");
  initSearch();
  initThemeToggle();
})(); 