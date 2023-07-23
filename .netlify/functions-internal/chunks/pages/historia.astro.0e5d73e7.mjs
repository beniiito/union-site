/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro.c2afd273.mjs';
import 'html-escaper';
import { $ as $$Hero, b as $$Layout } from './acercade.astro.02cf7206.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro("https://beniiito.github.io");
const $$Historia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Historia;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Historia de union Hidalgo" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Hero", $$Hero, {})}
` })}`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/historia.astro");

const $$file = "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/historia.astro";
const $$url = "/union-site/historia";

export { $$Historia as default, $$file as file, $$url as url };
