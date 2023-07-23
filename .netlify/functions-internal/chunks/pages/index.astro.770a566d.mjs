/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro.c2afd273.mjs';
import 'html-escaper';
import { $ as $$Hero, b as $$Layout, a as $$Foter } from './acercade.astro.02cf7206.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$1 = createAstro("https://beniiito.github.io");
const $$Maps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Maps;
  return renderTemplate`${maybeRenderHead()}<div class="md:grid grid-cols-2 md:gap-4 md:p-4">
  
        <div>
          <iframe class="md:h-full md:w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30607.702437359796!2d-94.85039482575097!3d16.47742097230005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85954cb60a523c55%3A0xb7604b5978857b54!2sCentro%2C%2070150%20Uni%C3%B3n%20Hidalgo%2C%20Oax.!5e0!3m2!1ses-419!2smx!4v1689882580906!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="hidden md:block">
          <img src="/home.svg">
        </div>

  
</div>`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/components/landing/Maps.astro");

const $$Astro = createAstro("https://beniiito.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${maybeRenderHead()}<div class="relative overflow-hidden bg-cover bg-no-repeat bg-oliva-100" style="
    background-position: 50%;
    height: 250px;
  ">
    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
      <div class="flex h-full items-center justify-center">
        <div class="text-center text-white md:px-12">
          <h1 class="md:text-5xl font-bold p-2">Bienvenidos</h1>
          <p class="m-5 md:text-2xl text-justify">
            Unión Hidalgo o Ranchu Gubiña, es una población ubicada en la región
            del Istmo de Tehuantepec, cabecera del municipio del mismo nombre,
            en el Estado de Oaxaca, al sureste de México.
          </p>
          
        </div>
      </div>
    </div>
  </div>
  <div class="md:grid grid-cols-2 md:gap-4 md:p-4">
    <div class="">
      <img class="" src="/people.svg" srcset="">
    </div>
    <div class=" text-center md:text-5xl  my-14 md:my-32 font-bold">
      <h3 data-target="14542 " class="count">0</h3>
      <h6>Habitantes</h6>
    </div>
  </div>
  
  <p class="text-2xl md:text-5xl text-center py-10">¿Como llegar?</p>
  ${renderComponent($$result2, "Maps", $$Maps, {})}
  

` })}
${renderComponent($$result, "Foter", $$Foter, {})}`;
}, "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/index.astro");

const $$file = "C:/Users/blopez/Documents/Repositorio/union-site/src/pages/index.astro";
const $$url = "/union-site";

export { $$Index as default, $$file as file, $$url as url };
