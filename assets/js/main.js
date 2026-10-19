/* ==========================================================================
   Nazmul Hussain — Resume
   Small, dependency-free enhancements. Everything works without JS too.
   ========================================================================== */

// ---- Personal links -------------------------------------------------------
// Paste your LinkedIn profile URL here (e.g. "https://www.linkedin.com/in/your-handle/").
// Leave it empty and the LinkedIn buttons stay hidden.
const LINKEDIN_URL = "https://www.linkedin.com/in/nazmul-hussain-16a55b243/";

(function () {
    "use strict";

    const root = document.documentElement;

    // ---- Theme toggle (remembers choice) ----------------------------------
    const THEME_KEY = "nh-theme";
    try {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
    } catch (_) { /* storage may be unavailable */ }

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
            const current = root.getAttribute("data-theme") || (prefersLight ? "light" : "dark");
            const next = current === "light" ? "dark" : "light";
            root.setAttribute("data-theme", next);
            try { localStorage.setItem(THEME_KEY, next); } catch (_) { /* ignore */ }
        });
    }

    // ---- Mobile nav ---------------------------------------------------------
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("nav-links");
    if (toggle && links) {
        toggle.addEventListener("click", function () {
            const open = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(open));
        });
        links.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () {
                links.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ---- Print / Download PDF -------------------------------------------
    ["print-btn", "print-btn-2"].forEach(function (id) {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener("click", function () { window.print(); });
    });

    // ---- LinkedIn links (shown only when a URL is configured) --------------
    if (LINKEDIN_URL) {
        const heroLink = document.getElementById("linkedin-link");
        const row = document.getElementById("linkedin-row");
        const contactLink = document.getElementById("linkedin-contact");
        if (heroLink) { heroLink.href = LINKEDIN_URL; heroLink.hidden = false; }
        if (row && contactLink) { contactLink.href = LINKEDIN_URL; row.hidden = false; }
    }

    // ---- Footer year ----------------------------------------------------------
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
})();
