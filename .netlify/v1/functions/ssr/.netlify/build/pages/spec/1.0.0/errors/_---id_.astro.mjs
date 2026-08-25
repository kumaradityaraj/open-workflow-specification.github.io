import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_D9nz8jw8.mjs';
import 'piccolore';
import { a as getEntry } from '../../../../chunks/_astro_content_aZwVP4VM.mjs';
import { $ as $$Layout, a as $$Section } from '../../../../chunks/Layout_DvXZbGaU.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://open-workflow-specification.org/");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const entry = await getEntry("specErrorV1", id);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const accept = Astro2.request.headers.get("accept");
  if (accept === "application/json") return new Response(JSON.stringify(entry.data));
  if (accept === "text/plain") return new Response(entry.data.description, { headers: { "Content-Type": "text/plain" } });
  const { type, description, status } = entry.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="text-primary text-3xl font-bold mb-12">Standard Error</h2> <div class="mx-auto w-full w-1/2"> <h3 class="text-xl font-bold">${type}</h3> <p class="text-accent font-medium">Code: ${status}</p> <p>${description}</p> </div> ` })} ` })}`;
}, "/Users/kraj/projects/open-workflow-specification.github.io/src/pages/spec/1.0.0/errors/[...id].astro", void 0);

const $$file = "/Users/kraj/projects/open-workflow-specification.github.io/src/pages/spec/1.0.0/errors/[...id].astro";
const $$url = "/spec/1.0.0/errors/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
