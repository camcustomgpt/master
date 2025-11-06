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
  },
  {
    id: "ai-vision-mazda-hub",
    name: "CustomGPT AI Vision Capability Demo",
    description: "AI Vision demo based on a Mazda hatchback hub.",
    url: "https://mazda-hatchback-hub.replit.app",
    emoji: "🚗",
    logo: "./cgpt.png",
    tags: ["vision", "ai", "demo", "customgpt", "mazda", "hatchback"]
  },
  {
    id: "ai-search-functionality",
    name: "CustomGPT.ai Search Functionality",
    description: "Demo showcasing CustomGPT.ai's AI search deployment.",
    url: "https://customgpt.replit.app",
    emoji: "🔍",
    logo: "./cgpt.png",
    tags: ["search", "ai", "demo", "customgpt"]
  },
  {
    id: "solostove-ecommerce",
    name: "Solo Stove E-commerce Demo",
    description: "CustomGPT e-commerce demo.",
    url: "https://solostove-demo.replit.app",
    emoji: "🛒",
    logo: "./cgpt.png",
    tags: ["ecommerce", "demo", "customgpt", "shopping"]
  },
  {
    id: "needham-athletic-club",
    name: "Needham Athletic Club",
    description: "Needham Athletic Club website, showcasing lead capture, webpage awareness, and an internal admin dashboard agent.",
    url: "https://needham-athletic-club.replit.app/",
    emoji: "🏋️",
    logo: "./cgpt.png",
    tags: ["website", "lead capture", "admin", "dashboard", "demo"]
  }
];

function createSkeletonCard() {
  const div = document.createElement("div");
  div.className = "skeleton-card";

  const icon = document.createElement("div");
  icon.className = "skeleton-icon";

  const content = document.createElement("div");
  content.className = "skeleton-content";

  const title = document.createElement("div");
  title.className = "skeleton-title";

  const desc = document.createElement("div");
  desc.className = "skeleton-desc";

  content.appendChild(title);
  content.appendChild(desc);

  const cta = document.createElement("div");
  cta.className = "skeleton-cta";

  div.appendChild(icon);
  div.appendChild(content);
  div.appendChild(cta);

  return div;
}

function createEmptyState() {
  const div = document.createElement("div");
  div.className = "empty-state";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "empty-state-icon");
  svg.setAttribute("viewBox", "0 0 120 120");
  svg.setAttribute("fill", "none");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "50");
  circle.setAttribute("cy", "50");
  circle.setAttribute("r", "30");
  circle.setAttribute("stroke", "currentColor");
  circle.setAttribute("stroke-width", "4");
  circle.setAttribute("opacity", "0.3");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "72");
  line.setAttribute("y1", "72");
  line.setAttribute("x2", "95");
  line.setAttribute("y2", "95");
  line.setAttribute("stroke", "currentColor");
  line.setAttribute("stroke-width", "4");
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("opacity", "0.3");

  svg.appendChild(circle);
  svg.appendChild(line);

  const text = document.createElement("p");
  text.className = "empty-state-text";
  text.textContent = "No tools match your search";

  const subtext = document.createElement("p");
  subtext.className = "empty-state-subtext";
  subtext.textContent = "Try a different search term or clear the search";

  div.appendChild(svg);
  div.appendChild(text);
  div.appendChild(subtext);

  return div;
}

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

function renderTools(query = "", animate = true) {
  const grid = document.getElementById("toolsGrid");
  const q = query.trim().toLowerCase();

  const filteredTools = tools.filter(tool => {
    if (!q) return true;
    const hay = [tool.name, tool.description, ...(tool.tags || [])]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });

  if (animate) {
    const existingCards = Array.from(grid.querySelectorAll(".card"));
    existingCards.forEach(card => {
      card.classList.add("card-hiding");
    });

    setTimeout(() => {
      grid.innerHTML = "";
      
      if (filteredTools.length === 0) {
        grid.appendChild(createEmptyState());
      } else {
        filteredTools.forEach(tool => grid.appendChild(createToolCard(tool)));
      }
    }, 300);
  } else {
    grid.innerHTML = "";
    
    if (filteredTools.length === 0) {
      grid.appendChild(createEmptyState());
    } else {
      filteredTools.forEach(tool => grid.appendChild(createToolCard(tool)));
    }
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

function showLoadingSkeleton() {
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    grid.appendChild(createSkeletonCard());
  }
}

(function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  
  showLoadingSkeleton();
  
  setTimeout(() => {
    renderTools("", false);
  }, 800);
  
  initSearch();
  initThemeToggle();
})(); 