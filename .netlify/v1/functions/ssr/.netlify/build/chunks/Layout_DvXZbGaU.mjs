import { c as createAstro, a as createComponent, d as addAttribute, b as renderTemplate, m as maybeRenderHead, r as renderComponent, e as renderSlot, g as renderHead } from './astro/server_D9nz8jw8.mjs';
import 'piccolore';
import 'clsx';
import { a as DEFAULT_DESC, b as DEFAULT_TITLE, G as GITHUB_LINK, S as SLACK_LINK, X as X_TWITTER_LINK, L as LINKEDIN_LINK, D as DEV_MAILING_LIST_LINK, R as RSS_LINK } from './consts_CFNq6wNN.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://open-workflow-specification.org/");
const $$HtmlHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HtmlHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description = DEFAULT_DESC,
    image = "/img/banners/placeholder-1.jpg"
  } = Astro2.props;
  const pageTitle = `${DEFAULT_TITLE}${title ? " - " + title : ""}`;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"><link rel="manifest" href="/icons/manifest.json"><meta name="msapplication-TileColor" content="#3D5A80"><meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png"><meta name="theme-color" content="#3D5A80"><!-- Font preloads --><!-- <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />
<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin /> --><!-- Import Font Awesome icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${pageTitle}</title><meta name="title"${addAttribute(pageTitle, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(pageTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml">`;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/components/HtmlHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<label class="swap swap-rotate"> <input type="checkbox" id="theme-toggle"> <!-- sun icon --> <svg class="swap-on h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path> </svg> <!-- moon icon --> <svg class="swap-off h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path> </svg> </label> <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') ?? 'light';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();
  const checkbox = document.getElementById('theme-toggle');
  const handleThemeChange = () => {
    const newTheme = checkbox.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  checkbox.addEventListener('change', handleThemeChange);
  if (theme==='light') {
    checkbox.checked = true;
  }
  document.documentElement.setAttribute('data-theme', theme);
  window.localStorage.setItem('theme', theme);
<\/script>`])), maybeRenderHead());
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/components/ThemeIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-base-100 sticky top-0 z-10" data-astro-cid-3ef6ksr2> <div class="navbar max-w-7xl mx-auto px-4" data-astro-cid-3ef6ksr2> <div class="navbar-start" data-astro-cid-3ef6ksr2> <div class="flex gap-2" data-astro-cid-3ef6ksr2> <div class="logo-header" data-astro-cid-3ef6ksr2></div> <a class="text-xl font-bold" href="/" data-astro-cid-3ef6ksr2>Open Workflow Specification</a> </div> </div> <div class="navbar-end" data-astro-cid-3ef6ksr2> <ul class="menu menu-horizontal px-1" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/blog" data-astro-cid-3ef6ksr2>Blog</a></li> <li data-astro-cid-3ef6ksr2><a href="/community" data-astro-cid-3ef6ksr2>Community</a></li> </ul> </div> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-3ef6ksr2": true })} </div> </div> `;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://open-workflow-specification.org/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    paddingY,
    paddingX,
    isGrid = false,
    width = "7",
    title,
    subTitle,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    className,
    paddingY === "small" ? `py-4` : paddingY === "medium" ? `py-8` : `py-16`,
    paddingX === "small" ? `px-4` : paddingX === "medium" ? `px-8` : `px-16`
  ], "class:list")}> <div${addAttribute([
    "mx-auto",
    width === "full" ? `max-w-full` : width === "small" ? `max-w-3xl` : width === "medium" ? `max-w-5xl` : `max-w-7xl`
  ], "class:list")}> ${title && renderTemplate`<h2${addAttribute(["text-primary", "text-3xl", "font-bold", "text-center", !subTitle ? "mb-12" : "mb-4"], "class:list")}>${title}</h2>`} ${subTitle && renderTemplate`<p class="text-xl text-center mb-12">${subTitle}</p>`} ${isGrid ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${renderSlot($$result, $$slots["default"])} </div>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div> </div>`;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/components/Section.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "\u{1F495} Love Open Workflow Specification? Give us a Star on GitHub! \u2B50", "subTitle": "Help us grow and show your support! Starring our repository helps more people discover and join our community." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-center text-xl">👉<a class="link link-accent" target="_blank" rel="noopener"${addAttribute(GITHUB_LINK, "href")}>Star our GitHub Repository</a></p> ` })} <footer class="bg-neutral text-neutral-content p-10"> <div class="footer md:footer-horizontal max-w-7xl mx-auto"> <aside> <p>
&copy; Open Workflow Specification Authors |
<a class="link" href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noopener">CC BY 4.0</a> |
<a class="link" href="https://www.linuxfoundation.org/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a> </p> <p>
The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation,
        please see our <a class="link" href="https://www.linuxfoundation.org/legal/trademark-usage">Trademark Usage page</a>.
</p> </aside> <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"> <a target="_blank" rel="noopener"${addAttribute(GITHUB_LINK, "href")} aria-label="GitHub"><i class="fab fa-github"></i></a> <a target="_blank" rel="noopener"${addAttribute(SLACK_LINK, "href")} aria-label="Slack"><i class="fab fa-slack"></i></a> <a target="_blank" rel="noopener"${addAttribute(X_TWITTER_LINK, "href")} aria-label="X Social"><i class="fab fa-x-twitter"></i></a> <a target="_blank" rel="noopener"${addAttribute(LINKEDIN_LINK, "href")} aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a> <a target="_blank" rel="noopener"${addAttribute(DEV_MAILING_LIST_LINK, "href")} aria-label="Developer mailing list"><i class="fa fa-envelope"></i></a> <a target="_blank" rel="noopener"${addAttribute(RSS_LINK, "href")} aria-label="RSS Feed"><i class="fa fa-rss"></i></a> </nav> </div> </footer>`;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://open-workflow-specification.org/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-theme="light" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "HtmlHead", $$HtmlHead, { ...Astro2.props, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="min-h-screen bg-base-100" data-astro-cid-sckkx6r4> <div class="full-h" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> </body></html>`;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Section as a };
